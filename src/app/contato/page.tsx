import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return (
    <div>
      <PageHero
        title="Contato"
        subtitle="Diretoria técnica."
        primaryCta={{
          href: siteConfig.whatsappUrl,
          label: "WhatsApp Diretoria",
          target: "_blank",
          rel: "noreferrer",
        }}
        secondaryCta={{ href: `mailto:${siteConfig.links.email}`, label: "E-mail" }}
      />
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 border border-brand-border bg-white p-8 dark:border-brand-border dark:bg-brand-dark">
          <div className="space-y-2 text-brand-muted">
            <p>
              <span className="font-semibold text-brand-text dark:text-brand-cru">WhatsApp:</span>{" "}
              <a href={siteConfig.whatsappUrl} className="text-brand-secondary hover:underline" target="_blank" rel="noreferrer">
                {siteConfig.links.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-text dark:text-brand-cru">E-mail:</span>{" "}
              <a className="text-brand-secondary hover:underline" href={`mailto:${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
            </p>
          </div>
          <p className="text-sm leading-relaxed text-brand-muted">
            Apresentações institucionais agendadas diretamente com a equipe de execução. Sem formulários. Sem
            robôs.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp Diretoria
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.links.email}`} variant="secondary">
              E-mail da diretoria
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
