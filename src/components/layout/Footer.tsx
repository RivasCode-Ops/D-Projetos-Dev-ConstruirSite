import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const siteHost = (() => {
    try {
      return new URL(siteConfig.url).host;
    } catch {
      return "";
    }
  })();
  const showLocalLogo = !siteConfig.logoSrc.startsWith("http");

  return (
    <footer className="border-t border-brand-border bg-white dark:border-brand-border dark:bg-[#141414]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            {showLocalLogo ? (
              <div className="relative h-10 w-44">
                <Image
                  src={siteConfig.logoSrc}
                  alt=""
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                />
              </div>
            ) : (
              <p className="font-display text-sm font-bold text-brand-text dark:text-brand-cru">
                <span className="font-normal">{siteConfig.wordmark.line1}</span>{" "}
                <span className="text-brand-primary">{siteConfig.wordmark.line2}</span>
              </p>
            )}
            <p className="mt-2 max-w-sm text-sm text-brand-muted">{siteConfig.tagline}</p>
            {siteHost ? (
              <p className="mt-3 text-xs text-brand-muted">
                Site:{" "}
                <Link href="/" className="font-medium text-brand-secondary hover:underline">
                  {siteHost}
                </Link>
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-brand-secondary">
              {siteConfig.social.linkedin ? (
                <a href={siteConfig.social.linkedin} className="hover:underline" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              ) : null}
              {siteConfig.social.instagram ? (
                <a href={siteConfig.social.instagram} className="hover:underline" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : null}
              {siteConfig.social.youtube ? (
                <a href={siteConfig.social.youtube} className="hover:underline" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              ) : null}
            </div>
          </div>
          <div className="text-sm text-brand-muted">
            <p>{siteConfig.links.address}</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`} className="hover:text-brand-primary">
                {siteConfig.links.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${siteConfig.links.email}`} className="hover:text-brand-primary">
                {siteConfig.links.email}
              </a>
            </p>
            <p className="mt-3">
              <a
                href={siteConfig.whatsappUrl}
                className="font-medium text-brand-secondary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-brand-border pt-8 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <Link href="/contato" className="hover:text-brand-text dark:hover:text-brand-cru">
            Privacidade / LGPD — fale conosco
          </Link>
        </div>
      </div>
    </footer>
  );
}
