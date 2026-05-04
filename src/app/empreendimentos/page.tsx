import { PageHero } from "@/components/sections/PageHero";
import { PortfolioWithFilters } from "@/components/sections/PortfolioWithFilters";
import projetos from "@/content/empreendimentos.json";
import type { Metadata } from "next";
import type { Empreendimento } from "@/types/empreendimento";

export const metadata: Metadata = {
  title: "Empreendimentos",
};

export default function EmpreendimentosPage() {
  const lista = projetos as Empreendimento[];

  return (
    <div>
      <PageHero title="Empreendimentos" subtitle="Portfólio ativo." />
      <section className="border-b border-brand-border bg-brand-cru py-12 dark:border-brand-border dark:bg-[#151515]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-brand-muted leading-relaxed">
            Listagem de projetos em andamento ou concluídos. Empreendimentos exibidos conforme fase de execução e
            autorização do contratante.
          </p>
          <div className="mt-10">
            <PortfolioWithFilters items={lista} omitSection showSectionTitle={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
