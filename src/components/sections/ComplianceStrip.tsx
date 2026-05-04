const items = [
  "Execução auditável",
  "PPP e contratos públicos",
  "Dashboard compartilhado",
  "Prestação de contas documentada",
  "Rastreabilidade de decisão",
];

export function ComplianceStrip() {
  return (
    <section
      id="compliance"
      className="scroll-mt-20 border-b border-brand-border bg-brand-secondary/10 py-10 dark:border-brand-border dark:bg-brand-secondary/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-display text-xs font-semibold uppercase tracking-widest text-brand-secondary">
          Camada de conformidade
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {items.map((t) => (
            <span
              key={t}
              className="rounded-full border border-brand-secondary/40 bg-white px-4 py-2 text-xs font-medium text-brand-text dark:border-brand-secondary/50 dark:bg-brand-dark dark:text-brand-cru"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
