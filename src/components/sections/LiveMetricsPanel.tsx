const stats = [
  { value: "R$ 47,2 mi", label: "Em gestão ativa" },
  { value: "100%", label: "Entregas no prazo ajustado (18 meses)" },
  { value: "0", label: "Apontamentos em auditorias externas" },
  { value: "Sistema", label: "Execução controlada e rastreável" },
];

export function LiveMetricsPanel() {
  return (
    <section
      id="metricas"
      className="scroll-mt-20 border-b border-brand-border bg-brand-dark py-12 text-brand-cru dark:border-brand-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Painel de execução
            </p>
            <p className="mt-1 text-sm text-brand-border">Indicadores do portfólio ativo — referência técnica.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-brand-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary" />
            </span>
            Linha de base atualizada
          </div>
        </div>
        <div className="mt-10 grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-brand-dark px-5 py-6">
              <p className="font-display text-2xl font-bold text-brand-cru sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-xs leading-snug text-brand-border">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs text-brand-border">
          Dados referentes ao portfólio ativo. Auditoria independente disponível sob consulta.
        </p>
      </div>
    </section>
  );
}
