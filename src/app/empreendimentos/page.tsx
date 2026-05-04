import { PageHero } from "@/components/sections/PageHero";
import projetos from "@/content/empreendimentos.json";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Empreendimentos",
};

type Empreendimento = {
  slug: string;
  title: string;
  city: string;
  status: string;
  summary: string;
  coverImage: string;
};

export default function EmpreendimentosPage() {
  const lista = projetos as Empreendimento[];
  const vazio = lista.length === 0;

  return (
    <div>
      <PageHero title="Empreendimentos" subtitle="Grade técnica de projetos — status e localização." />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {vazio ? (
          <div className="border border-dashed border-brand-border bg-white px-6 py-16 text-center dark:border-brand-border dark:bg-brand-dark">
            <p className="font-medium text-brand-text dark:text-brand-cru">
              Nenhum empreendimento cadastrado no momento. Acompanhe nosso trabalho.
            </p>
            <p className="mt-2 text-sm text-brand-muted">
              Cadastre itens em <code className="rounded bg-brand-cru px-1.5 py-0.5 text-brand-text">src/content/empreendimentos.json</code>.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((p) => (
              <li
                key={p.slug}
                className="relative flex flex-col border border-brand-border bg-white dark:border-brand-border dark:bg-brand-dark after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                <div className="relative aspect-[16/10] border-b border-brand-border bg-brand-cru dark:bg-[#111]">
                  <Image
                    src={p.coverImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={p.coverImage.endsWith(".svg")}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-display text-base font-semibold text-brand-text dark:text-brand-cru">
                      {p.title}
                    </h2>
                    <span
                      className={
                        p.status.toLowerCase().includes("conclu")
                          ? "shrink-0 rounded-full bg-brand-secondary/15 px-2 py-0.5 text-xs font-medium text-brand-secondary"
                          : "shrink-0 rounded-full bg-brand-primary/15 px-2 py-0.5 text-xs font-medium text-brand-primary"
                      }
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-wide text-brand-muted">{p.city}</p>
                  <p className="mt-3 text-sm text-brand-muted">{p.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
