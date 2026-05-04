import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center border-t border-brand-border bg-brand-cru px-4 py-24 text-center dark:border-brand-border dark:bg-brand-dark">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">construir EMPREENDIMENTOS</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-brand-text dark:text-brand-cru">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-sm text-brand-muted">
        O endereço pode estar incorreto ou o conteúdo foi movido. Verifique o link ou retorne ao início.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Voltar ao início</ButtonLink>
        <ButtonLink href="/contato" variant="secondary">
          Contato
        </ButtonLink>
      </div>
      <Link href="/empreendimentos" className="mt-8 text-sm text-brand-secondary hover:underline">
        Ver empreendimentos
      </Link>
    </div>
  );
}
