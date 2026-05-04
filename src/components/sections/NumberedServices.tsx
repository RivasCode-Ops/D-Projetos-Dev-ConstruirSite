import Link from "next/link";

const modules = [
  {
    n: "01",
    title: "Planejamento e Prazos",
    body: "Controle físico-financeiro com alerta de desvio antes de acontecer.",
    benefit: "Benefício direto: entregas documentadas dentro do cronograma.",
    highlight: true,
  },
  {
    n: "02",
    title: "Compliance e Transparência",
    body: "Execução auditável a qualquer momento. Ideal para PPP e órgãos de controle.",
    benefit: "Benefício direto: segurança jurídica e prestação de contas automática.",
    highlight: false,
  },
  {
    n: "03",
    title: "Gestão Técnica Digital",
    body: "Plantas, medições, relatórios e equipe centralizados.",
    benefit: "Benefício direto: decisão técnica rápida sem depender de e-mail.",
    highlight: false,
  },
];

export function NumberedServices() {
  return (
    <section id="modulos" className="scroll-mt-20 bg-brand-cru py-20 dark:bg-[#151515]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-primary">Módulos</p>
        <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
          Sistema de execução. Três camadas de controle.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-brand-muted">
          Três módulos fechados — sem serviço avulso fora do método.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8">
          <article className="relative flex flex-col border-2 border-brand-primary bg-white p-8 dark:border-brand-primary dark:bg-brand-dark lg:col-span-2 lg:row-span-2 lg:min-h-[22rem]">
            <span className="font-display text-6xl font-bold leading-none text-brand-primary/25 dark:text-brand-primary/35 lg:text-8xl">
              {modules[0].n}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-brand-text dark:text-brand-cru">
              {modules[0].title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-muted">{modules[0].body}</p>
            <p className="mt-3 text-sm font-medium italic text-brand-text dark:text-brand-cru">{modules[0].benefit}</p>
            <Link
              href="/servicos"
              className="mt-auto pt-8 text-sm font-semibold text-brand-primary hover:underline lg:pt-10"
            >
              Especificação técnica →
            </Link>
          </article>

          {modules.slice(1).map((m, idx) => (
            <article
              key={m.n}
              className={`relative border border-brand-border bg-white p-6 dark:border-brand-border dark:bg-brand-dark ${
                idx === 0 ? "lg:col-start-3 lg:row-start-1" : "lg:col-start-3 lg:row-start-2"
              }`}
            >
              <span className="font-display text-4xl font-bold text-brand-primary/25 dark:text-brand-primary/35">
                {m.n}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-brand-text dark:text-brand-cru">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{m.body}</p>
              <p className="mt-2 text-xs font-medium italic text-brand-text dark:text-brand-cru">{m.benefit}</p>
              <Link href="/servicos" className="mt-4 inline-block text-sm font-semibold text-brand-primary hover:underline">
                Detalhe →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
