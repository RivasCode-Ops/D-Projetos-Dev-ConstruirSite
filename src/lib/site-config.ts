/** Cores da marca (espelho das tokens Tailwind / briefing) */
export const brandColors = {
  cru: "#F5F5F0",
  dark: "#1C1C1C",
  text: "#1A1A1A",
  muted: "#4A4A4A",
  border: "#C4C4C4",
  primary: "#8B6B3D",
  secondary: "#3A5E5E",
} as const;

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@construirempreendimentos.com.br";

/** DDI + DDD + número, só dígitos, para wa.me */
const whatsappDigits = process.env.NEXT_PUBLIC_WHATSAPP_DIGITS ?? "5511999999999";

/**
 * URL usada em metadataBase, rodapé e (quando publicado) sitemap/robots.
 * Sem NEXT_PUBLIC_SITE_URL: localhost em dev ou URL da Vercel em preview.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  return "http://localhost:3000";
}

/**
 * Só ative depois da aprovação do cliente e da definição da URL final.
 * Evita indexação e sitemap público enquanto o projeto roda só local / staging privado (sem depender só do GitHub).
 */
export const siteIndexingEnabled =
  process.env.NEXT_PUBLIC_SITE_PUBLISHED === "true" &&
  Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim());

/** Logo no `public` ou URL absoluta (defina NEXT_PUBLIC_LOGO_SRC se mudar o caminho). */
const logoSrc = (process.env.NEXT_PUBLIC_LOGO_SRC ?? "/images/logo.png").trim();

export const siteConfig = {
  name: "construir EMPREENDIMENTOS",
  /** Marca em duas linhas visuais: caixa baixa + caixa alta */
  wordmark: { line1: "construir", line2: "EMPREENDIMENTOS" },
  shortName: "construir EMPREENDIMENTOS",
  tagline: "Execução técnica que entrega no prazo. Sem ruído. Sem discurso.",
  /** Linha institucional no rodapé (acima da tagline curta) */
  footerLead: "construir EMPREENDIMENTOS — Sistema de Execução Controlada",
  description:
    "Gestão de obras com rastreabilidade, compliance e prestação de contas. Parceria pública ou privada, o método é o mesmo.",
  url: resolveSiteUrl(),
  logoSrc,
  contactEmail,
  whatsappUrl: `https://wa.me/${whatsappDigits}`,
  links: {
    /** Texto exibido (copy contato / rodapé) */
    phone: "(11) 99999-9999",
    /** Valor para `href="tel:..."` */
    phoneTel: "+5511999999999",
    email: contactEmail,
    address: "São Paulo — SP, Brasil",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/construir-empreendimentos",
    instagram: "https://www.instagram.com/construirempreendimentos",
    youtube: "https://www.youtube.com/@construirempreendimentos",
  },
  colors: brandColors,
} as const;
