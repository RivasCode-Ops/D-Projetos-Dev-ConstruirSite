import { ButtonLink } from "@/components/ui/ButtonLink";

type Cta = { href: string; label: string; target?: "_blank"; rel?: string };

type PageHeroProps = {
  id?: string;
  title: string;
  subtitle: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

export function PageHero({ id, title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section
      id={id}
      className="border-b border-brand-border bg-gradient-to-b from-white to-brand-cru"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-brand-text sm:text-4xl dark:text-brand-cru">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-brand-muted dark:text-brand-border">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta ? (
              <ButtonLink href={primaryCta.href} target={primaryCta.target} rel={primaryCta.rel}>
                {primaryCta.label}
              </ButtonLink>
            ) : null}
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary" target={secondaryCta.target} rel={secondaryCta.rel}>
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
