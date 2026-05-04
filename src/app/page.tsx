import { ButtonLink } from "@/components/ui/ButtonLink";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { ExecutionTimeline } from "@/components/sections/ExecutionTimeline";
import { HeroEngineering } from "@/components/sections/HeroEngineering";
import { LiveMetricsPanel } from "@/components/sections/LiveMetricsPanel";
import { NumberedServices } from "@/components/sections/NumberedServices";
import { PortfolioWithFilters } from "@/components/sections/PortfolioWithFilters";
import projetos from "@/content/empreendimentos.json";
import { siteConfig } from "@/lib/site-config";
import type { Empreendimento } from "@/types/empreendimento";

export default function HomePage() {
  const lista = projetos as Empreendimento[];

  return (
    <div>
      <HeroEngineering />

      <LiveMetricsPanel />

      <section
        id="posicionamento"
        className="scroll-mt-20 border-b border-brand-border bg-white py-16 dark:border-brand-border dark:bg-brand-dark"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-secondary">
            Posicionamento
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
            Obras não atrasam por acaso. Atrasam por falta de sistema.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-brand-muted leading-relaxed">
            <p>
              construir EMPREENDIMENTOS não é uma construtora tradicional. É uma estrutura de execução
              controlada, onde cada etapa tem dono, prazo e evidência.
            </p>
            <p>
              Trabalhamos com governos e empresas que exigem resultado previsível. Sem ruído. Sem discurso.
            </p>
          </div>
        </div>
      </section>

      <NumberedServices />

      <PortfolioWithFilters items={lista} maxItems={6} />

      <ExecutionTimeline />

      <ComplianceStrip />

      <section
        id="cta"
        className="scroll-mt-20 border-t border-brand-border bg-brand-cru py-24 dark:border-brand-border dark:bg-[#151515]"
      >
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
            Projeto público ou privado em análise? Solicite uma apresentação institucional direta.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contato">Apresentação institucional</ButtonLink>
            <ButtonLink href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" variant="secondary">
              WhatsApp Diretoria
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
