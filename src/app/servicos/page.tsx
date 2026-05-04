import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site-config";
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
        subtitle="Três módulos. Um método."
        primaryCta={{ href: "/contato", label: "Solicitar diagnóstico de obra" }}
        secondaryCta={{
          href: siteConfig.whatsappUrl,
          label: "WhatsApp Diretoria",
          target: "_blank",
          rel: "noreferrer",
        }}
      />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-brand-muted leading-relaxed">
          Os mesmos três módulos da home, com descrição estendida técnica (a ser detalhada conforme contrato).
          Nenhum serviço avulso. Apenas sistema fechado de execução.
        </p>

        <article className={cardExpand}>
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">
            Planejamento e Prazos
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Controle físico-financeiro com alerta de desvio antes de acontecer. Curva de obra vinculada a
            medições, suprimentos e marcos de liberação — com responsável nomeado por etapa e registro de
            decisão.
          </p>
          <p className="mt-3 text-sm font-medium italic text-brand-text dark:text-brand-cru">
            Benefício direto: entregas documentadas dentro do cronograma.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-brand-muted">
            <li>Baseline físico-financeiro e tolerância de desvio acordada</li>
            <li>Alertas antecipados (não só retrato após estourar prazo)</li>
            <li>Atas de decisão amarradas a mudança de sequência ou escopo</li>
          </ul>
        </article>

        <article className={cardExpand}>
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">
            Compliance e Transparência
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Execução auditável a qualquer momento. Trilha documental compatível com exigência de órgãos de
            controle e PPP — versão, hash de pacote e quem aprovou o quê, quando.
          </p>
          <p className="mt-3 text-sm font-medium italic text-brand-text dark:text-brand-cru">
            Benefício direto: segurança jurídica e prestação de contas automática.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-brand-muted">
            <li>Checklist de conformidade por fase (público ou privado)</li>
            <li>Pacotes de evidência para auditoria externa</li>
            <li>Comunicação padronizada com contratante e fiscalização</li>
          </ul>
        </article>

        <article className={cardExpand}>
          <h2 className="font-display text-xl font-bold text-brand-text dark:text-brand-cru">
            Gestão Técnica Digital
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Plantas, medições, relatórios e equipe centralizados. Um fluxo único: inspeção, não conformidade,
            retrabalho e liberação com histórico — sem depender de encaminhar anexo em e-mail.
          </p>
          <p className="mt-3 text-sm font-medium italic text-brand-text dark:text-brand-cru">
            Benefício direto: decisão técnica rápida sem depender de e-mail.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-brand-muted">
            <li>Repositório técnico único com controle de versão operacional</li>
            <li>Dashboard compartilhado com indicadores acordados em contrato</li>
            <li>Integração com rituais de campo (canteiro ↔ escritório)</li>
          </ul>
        </article>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <ButtonLink href="/contato">Apresentação institucional</ButtonLink>
          <ButtonLink href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" variant="secondary">
            WhatsApp Diretoria
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
