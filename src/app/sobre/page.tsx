import { PageHero } from "@/components/sections/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

const cardExpand =
  "relative border border-brand-border bg-white p-6 dark:border-brand-border dark:bg-brand-dark after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full";

export default function SobrePage() {
  return (
    <div>
      <PageHero
        title="Sobre a construir EMPREENDIMENTOS"
        subtitle="Estrutura de execução — não apenas obra avulsa."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">Quem somos</h2>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Somos uma equipe técnica focada em empreendimentos com alta exigência de coordenação. Atuamos com
          rituais de planejamento, trilha documental e indicadores — para que decisões de obra não dependam de
          memória informal ou retrabalho silencioso.
        </p>
        <blockquote className="mt-10 border-l-4 border-brand-primary pl-6 font-display text-lg font-semibold text-brand-text dark:text-brand-cru">
          Não somos uma construtora tradicional. Somos uma estrutura de execução controlada.
        </blockquote>
      </section>

      <section className="border-y border-brand-border bg-brand-cru py-16 dark:border-brand-border dark:bg-[#151515]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">Diferencial</h2>
          <p className="mt-4 max-w-3xl text-brand-muted leading-relaxed">
            Obra avulsa reage ao dia a dia. Sistema antecipa gargalos: compra, projeto executivo, interfência e
            liberações caminham em cadência. O resultado é menos surpresa no canteiro e mais previsibilidade
            para incorporador, investidor e equipe de projeto.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Sistema vs obra avulsa",
                text: "Padrões repetíveis, checklists e auditoria de marcos — não só ‘ir adiantando’.",
              },
              {
                title: "Transparência operacional",
                text: "Status objetivos, riscos explícitos e registro de decisões para reduzir conflito.",
              },
              {
                title: "Disciplina de prazo",
                text: "Cronograma vinculado a responsáveis e materialidade — não apenas Gantt decorativo.",
              },
            ].map((b) => (
              <article key={b.title} className={cardExpand}>
                <h3 className="font-display text-base font-semibold text-brand-text dark:text-brand-cru">{b.title}</h3>
                <p className="mt-3 text-sm text-brand-muted">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">Números e resultados</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Metragem referência", value: "+120 mil m²" },
            { label: "Etapas do processo", value: "5 fases" },
            { label: "Foco", value: "Prazo + compliance" },
          ].map((n) => (
            <div key={n.label} className={cardExpand}>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{n.label}</p>
              <p className="mt-2 font-display text-2xl font-bold text-brand-primary">{n.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Ajuste os valores acima para os números auditáveis da empresa antes de publicação institucional.
        </p>
      </section>
    </div>
  );
}
