import Image from "next/image";
import Link from "next/link";

const gridPattern = {
  backgroundColor: "#0F172A",
  backgroundImage: `
    linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
} as const;

export function HeroEngineering() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 border-b border-white/10"
      style={gridPattern}
    >
      <div className="mx-auto flex min-h-[80vh] max-w-[1200px] items-center px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-0 xl:gap-x-[60px]">
          {/* Coluna esquerda — conteúdo */}
          <div className="order-1 flex flex-col justify-center lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F97316]">
              Picos - Piauí • Desde 2008
            </p>

            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3rem] xl:text-[3.25rem]">
              <span className="text-white">CONSTRUINDO O </span>
              <span className="text-[#F97316]">FUTURO</span>
            </h1>

            <p className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xl">
              DA INFRAESTRUTURA
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              Especialistas em rodovias, ferrovias e obras de urbanização. Entregamos projetos com engenharia
              disciplinada, segurança de campo e controle de prazo — do planejamento à entrega documentada.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/empreendimentos"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#F97316] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
              >
                Ver Projetos
              </Link>
              <Link
                href="/contato"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-white/50 bg-transparent px-7 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* Coluna direita — painel visual */}
          <div className="order-2 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] p-5 sm:p-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-800/80">
                <Image
                  src="/images/placeholder-empreendimento.svg"
                  alt="Obra em destaque"
                  fill
                  className="object-cover object-center opacity-90"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                  unoptimized
                />
              </div>

              <div className="mt-5 flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-display text-lg font-bold text-white sm:text-xl">BR-316 • Picos/PI</h2>
                  <p className="mt-1 text-sm text-slate-400">Pavimentação · 45 km</p>
                </div>
                <span className="rounded-full bg-[#F97316]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#F97316]">
                  Em andamento
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-lg bg-white/5 px-2 py-3 text-center sm:px-3">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">12</p>
                  <p className="mt-1 text-[10px] font-medium uppercase leading-tight text-slate-400 sm:text-xs">
                    Contratos ativos
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 px-2 py-3 text-center sm:px-3">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">340+</p>
                  <p className="mt-1 text-[10px] font-medium uppercase leading-tight text-slate-400 sm:text-xs">
                    Equipe em campo
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 px-2 py-3 text-center sm:px-3">
                  <p className="font-display text-xl font-bold text-[#F97316] sm:text-2xl">94%</p>
                  <p className="mt-1 text-[10px] font-medium uppercase leading-tight text-slate-400 sm:text-xs">
                    Prazo médio
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Avanço físico-financeiro</span>
                  <span className="font-semibold text-[#F97316]">94%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-700/80">
                  <div className="h-full w-[94%] rounded-full bg-[#F97316]" />
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200">
                  ISO 9001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
