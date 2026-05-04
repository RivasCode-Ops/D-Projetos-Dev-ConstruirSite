"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Empreendimento } from "@/types/empreendimento";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Filter = "todos" | "obra" | "concluido";

function classify(status: string): "obra" | "concluido" {
  const s = status.toLowerCase();
  if (s.includes("conclu") || s.includes("entregue")) return "concluido";
  return "obra";
}

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "obra", label: "Em obra" },
  { id: "concluido", label: "Concluídos" },
];

type PortfolioWithFiltersProps = {
  items: Empreendimento[];
  /** Na home: limita cards; omitir = todos */
  maxItems?: number;
  showSectionTitle?: boolean;
  /** Se true, não renderiza a tag `<section>` (útil na página /empreendimentos). */
  omitSection?: boolean;
};

export function PortfolioWithFilters({
  items,
  maxItems,
  showSectionTitle = true,
  omitSection = false,
}: PortfolioWithFiltersProps) {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = useMemo(() => {
    let list = [...items];
    if (filter === "obra") list = list.filter((p) => classify(p.status) === "obra");
    if (filter === "concluido") list = list.filter((p) => classify(p.status) === "concluido");
    if (maxItems) list = list.slice(0, maxItems);
    return list;
  }, [items, filter, maxItems]);

  const empty = items.length === 0;
  const noResults = !empty && filtered.length === 0;

  const inner = (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {showSectionTitle ? (
          <>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-primary">
              Portfólio
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
              Projetos em evidência
            </h2>
            <p className="mt-4 max-w-3xl text-sm text-brand-muted">
              Listagem conforme fase de execução e autorização do contratante. Filtre por status.
            </p>
          </>
        ) : null}

        {!empty ? (
          <div
            className={`flex flex-wrap gap-2 border-b border-brand-border pb-6 dark:border-brand-border ${
              showSectionTitle ? "mt-10" : "mt-2"
            }`}
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f.id
                    ? "bg-brand-primary text-white"
                    : "border border-brand-border bg-white text-brand-muted hover:border-brand-primary hover:text-brand-text dark:border-brand-border dark:bg-brand-dark dark:text-brand-border dark:hover:text-brand-cru"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        ) : null}

        {empty ? (
          <div className="mt-12 border border-dashed border-brand-border bg-white px-6 py-14 text-center dark:border-brand-border dark:bg-brand-dark">
            <p className="font-medium text-brand-text dark:text-brand-cru">
              Nenhum empreendimento em exibição no momento. Acompanhe nosso trabalho ou solicite diagnóstico.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contato">Solicitar diagnóstico de obra</ButtonLink>
              <ButtonLink href="/empreendimentos" variant="secondary">
                Página portfólio
              </ButtonLink>
            </div>
          </div>
        ) : noResults ? (
          <p className="mt-12 text-center text-sm text-brand-muted">
            Nenhum projeto neste filtro.{" "}
            <button type="button" className="font-medium text-brand-primary underline" onClick={() => setFilter("todos")}>
              Mostrar todos
            </button>
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <li
                key={p.slug}
                className="group flex flex-col overflow-hidden border border-brand-border bg-white dark:border-brand-border dark:bg-brand-dark"
              >
                <div className="relative aspect-[16/10] bg-brand-cru dark:bg-[#111]">
                  <Image
                    src={p.coverImage}
                    alt=""
                    fill
                    className="object-cover transition-opacity group-hover:opacity-95"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={p.coverImage.endsWith(".svg")}
                  />
                  <span className="absolute left-3 top-3 rounded bg-brand-dark/80 px-2 py-1 text-xs font-medium text-brand-cru">
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-brand-text dark:text-brand-cru">{p.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-muted">{p.city}</p>
                  <p className="mt-3 flex-1 text-sm text-brand-muted">{p.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!empty && maxItems && items.length > maxItems ? (
          <p className="mt-10 text-center">
            <Link href="/empreendimentos" className="text-sm font-semibold text-brand-primary hover:underline">
              Ver portfólio completo →
            </Link>
          </p>
        ) : null}
    </div>
  );

  if (omitSection) {
    return inner;
  }

  return (
    <section id="portfolio" className="scroll-mt-20 bg-brand-cru py-20 dark:bg-[#151515]">
      {inner}
    </section>
  );
}
