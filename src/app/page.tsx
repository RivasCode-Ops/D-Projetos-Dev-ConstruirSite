import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

const cardExpand =
  "relative border border-brand-border bg-white p-6 transition-shadow dark:border-brand-border dark:bg-brand-dark after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full";

export default function HomePage() {
  return (
    <div>
      <PageHero
        id="hero"
        title="construir EMPREENDIMENTOS — execução técnica que entrega no prazo."
        subtitle="Governança de obra com trilha técnica, compliance documental e indicadores — sem improviso."
        primaryCta={{ href: "/#modulos", label: "Ver módulos" }}
        secondaryCta={{ href: "/contato", label: "Agendar conversa" }}
      />

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
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="text-brand-muted leading-relaxed">
              O problema não é só prazo: é cadência de decisões, rastreabilidade de mudanças e uma linha de
              execução única entre canteiro, projetos e suprimentos. Quando isso falha, o cronograma vira
              palpite — e o custo vira variável.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Nosso conceito é um <strong className="text-brand-text dark:text-brand-cru">sistema de execução</strong>
              : rituais de planejamento, trilhos de aprovação, transparência com stakeholders e medição contínua.
              Menos retrabalho, menos ruído, mais previsibilidade.
            </p>
          </div>
        </div>
      </section>

      <section id="modulos" className="scroll-mt-20 bg-brand-cru py-24 dark:bg-[#151515]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Módulos / Serviços
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
            Três pilares que sustentam a entrega
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Planejamento e Prazos",
                text: "Curva S realista, marcos técnicos e contingência modelada — com responsáveis e gatilhos explícitos.",
              },
              {
                title: "Compliance e Transparência",
                text: "Trilha documental, rastreio de liberações e comunicação padronizada com cliente e parceiros.",
              },
              {
                title: "Gestão Técnica Digital",
                text: "Indicadores, atas e medições em um fluxo único — menos planilha solta, mais decisão com dado.",
              },
            ].map((m) => (
              <article key={m.title} className={cardExpand}>
                <h3 className="font-display text-lg font-semibold text-brand-text dark:text-brand-cru">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{m.text}</p>
                <Link
                  href="/servicos"
                  className="mt-4 inline-block text-sm font-medium text-brand-primary hover:underline"
                >
                  Detalhar módulo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="autoridade"
        className="scroll-mt-20 border-y border-brand-border bg-white py-16 dark:border-brand-border dark:bg-brand-dark"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-secondary">
            Prova / Autoridade
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
            Números que sustentam o discurso
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { k: "+120 mil m²", d: "Entregues e em execução (referência corporativa — ajuste ao real)." },
              { k: "5 etapas", d: "Fluxo padrão do diagnóstico à entrega com auditoria de marcos." },
              { k: "100% rastreável", d: "Documentação e decisões com trilha — redução de ruído operacional." },
            ].map((x) => (
              <article key={x.k} className={cardExpand}>
                <p className="font-display text-3xl font-bold text-brand-primary">{x.k}</p>
                <p className="mt-3 text-sm text-brand-muted">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="scroll-mt-20 bg-brand-cru py-24 dark:bg-[#151515]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Processo
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
            Cinco etapas do sistema
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {[
              "Diagnóstico técnico e leitura de risco",
              "Plano mestre e curva de execução",
              "Governança de mudanças e suprimentos",
              "Obra com rituais de qualidade e segurança",
              "Comissionamento e entrega documentada",
            ].map((step, i) => (
              <li key={step} className={cardExpand}>
                <span className="text-xs font-bold text-brand-secondary">0{i + 1}</span>
                <p className="mt-2 text-sm font-medium text-brand-text dark:text-brand-cru">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="cta"
        className="scroll-mt-20 border-t border-brand-border bg-white py-24 dark:border-brand-border dark:bg-brand-dark"
      >
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
            Quer ver o sistema aplicado ao seu empreendimento?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-muted">
            Fale direto com o time no WhatsApp ou envie uma mensagem pelo formulário de contato.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp direto
            </ButtonLink>
            <ButtonLink href="/contato" variant="secondary">
              Formulário de contato
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
