import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
};

const cardExpand =
  "relative border border-brand-border bg-white p-8 dark:border-brand-border dark:bg-brand-dark after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full";

export default function ServicosPage() {
  return (
    <div>
      <PageHero
        title="Serviços"
        subtitle="Detalhamento dos três módulos que compõem a execução construir EMPREENDIMENTOS."
        primaryCta={{ href: "/contato", label: "Solicitar proposta" }}
        secondaryCta={{ href: "/#modulos", label: "Ver na home" }}
      />
      <section className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <article className={cardExpand}>
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">
            Planejamento e Prazos
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Construímos o cronograma a partir da materialidade real: precedências técnicas, janelas de
            fornecimento e marcos de liberação. Cada fase tem dono, data e critério de pronto — com buffer
            explícito para risco (sem folga escondida).
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-brand-muted">
            <li>Plano mestre e de contingência alinhados ao empreendimento</li>
            <li>Curva S e acompanhamento semanal de desvio</li>
            <li>Gatilhos de decisão para não paralisar frente de obra</li>
          </ul>
        </article>

        <article className={cardExpand}>
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">
            Compliance e Transparência
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Transparência não é relatório bonito: é trilha. Versionamento de projetos, atas com decisão,
            registro de mudanças de escopo e comunicação padronizada com stakeholders — para reduzir
            ambiguidade e retrabalho jurídico-operacional.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-brand-muted">
            <li>Trilha documental e conformidade com exigências do empreendimento</li>
            <li>Rastreabilidade de liberações e aditivos</li>
            <li>Rituais de alinhamento com cliente e parceiros</li>
          </ul>
        </article>

        <article className={cardExpand}>
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">
            Gestão Técnica Digital
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Dados moram em um fluxo único: medições, inspeções, não conformidades e indicadores de avanço
            físico/financeiro. Menos planilha solta — mais decisão com contexto e histórico auditável.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-brand-muted">
            <li>Indicadores de produtividade e qualidade integrados ao cronograma</li>
            <li>Padronização de relatórios e painéis de status</li>
            <li>Integração com processos de suprimentos e campo</li>
          </ul>
        </article>

        <div className="flex justify-center pt-4">
          <ButtonLink href="/contato">Falar com o time</ButtonLink>
        </div>
      </section>
    </div>
  );
}
