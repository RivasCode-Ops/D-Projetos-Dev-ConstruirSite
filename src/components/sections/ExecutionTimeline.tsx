const steps = [
  {
    title: "Diagnóstico técnico e jurídico",
    text: "Análise do edital ou escopo privado antes de qualquer movimentação.",
  },
  {
    title: "Modelagem da execução",
    text: "Alocação de responsáveis, prazos e indicadores por etapa.",
  },
  {
    title: "Operação com rastreamento",
    text: "Acompanhamento semanal com dashboard compartilhado.",
  },
  {
    title: "Entrega física + prestação de contas",
    text: "Cruzamento de dados de obra e documentos.",
  },
  {
    title: "Auditoria contínua pós-entrega",
    text: "Garantia de conformidade mesmo após a entrega.",
  },
];

export function ExecutionTimeline() {
  return (
    <section id="metodo" className="scroll-mt-20 border-y border-brand-border bg-white py-20 dark:border-brand-border dark:bg-brand-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-secondary">Processo</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-brand-text dark:text-brand-cru sm:text-3xl">
          Método. Não promessa.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-brand-muted">
          Linha do tempo operacional — cada fase com evidência registrada.
        </p>

        <ol className="relative mx-auto mt-14 max-w-3xl border-l-2 border-brand-primary/40 pl-10 dark:border-brand-primary/50">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-12 last:pb-0">
              <span className="absolute left-0 top-0 flex h-7 w-7 -translate-x-[calc(50%+1px)] items-center justify-center rounded-full border-2 border-brand-primary bg-white text-xs font-bold text-brand-primary dark:bg-brand-dark">
                {i + 1}
              </span>
              <h3 className="font-display text-base font-semibold text-brand-text dark:text-brand-cru">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">— {step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
