import { PageHero } from "@/components/sections/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function SobrePage() {
  return (
    <div>
      <PageHero
        title="Sobre"
        subtitle="Diferença estrutural, não narrativa."
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6 text-brand-muted leading-relaxed">
          <p>
            Não somos uma construtora tradicional. Não temos discurso de &quot;confiança&quot; ou &quot;anos de
            mercado&quot;.
          </p>
          <p>
            Temos um sistema. Cada obra é tratada como um projeto de controle — com auditoria, rastreamento e
            prestação de contas obrigatória.
          </p>
          <p className="font-medium text-brand-text dark:text-brand-cru">
            PPP, contrato público ou obra privada: o método de execução é o mesmo.
          </p>
        </div>
      </section>
    </div>
  );
}
