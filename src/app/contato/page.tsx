import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contato",
};

type PageProps = {
  searchParams: Promise<{ ok?: string; erro?: string }>;
};

async function submitContact(formData: FormData): Promise<void> {
  "use server";

  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  if (!nome || !email || !mensagem) {
    redirect("/contato?erro=campos");
  }

  // Integração de e-mail / CRM: implemente aqui (sem serviços de terceiros tipo captcha comercial, se desejado).
  redirect("/contato?ok=1");
}

export default async function ContatoPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const ok = sp.ok === "1";
  const erro = sp.erro === "campos";

  return (
    <div>
      <PageHero
        title="Contato"
        subtitle="Mensagem pelo site ou atendimento direto no WhatsApp — sem robôs de terceiros."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-semibold text-brand-text dark:text-brand-cru">
              Formulário
            </h2>
            {ok ? (
              <p className="mt-4 rounded-lg border border-brand-secondary/30 bg-brand-secondary/10 px-4 py-3 text-sm text-brand-text dark:text-brand-cru">
                Recebemos sua mensagem. Em produção, conecte o envio ao seu provedor de e-mail ou CRM.
              </p>
            ) : null}
            {erro ? (
              <p className="mt-4 rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-4 py-3 text-sm text-brand-text dark:text-brand-cru">
                Preencha nome, e-mail e mensagem antes de enviar.
              </p>
            ) : null}
            <form action={submitContact} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-brand-text dark:text-brand-cru">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2 text-brand-text shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:bg-brand-dark dark:text-brand-cru"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text dark:text-brand-cru">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2 text-brand-text shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:bg-brand-dark dark:text-brand-cru"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-brand-text dark:text-brand-cru">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2 text-brand-text shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:bg-brand-dark dark:text-brand-cru"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6d542f]"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="border border-brand-border bg-brand-cru p-8 dark:border-brand-border dark:bg-[#141414]">
            <h2 className="font-display text-lg font-semibold text-brand-text dark:text-brand-cru">
              WhatsApp direto
            </h2>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Para demandas urgentes ou envio de documentos, use o canal oficial no WhatsApp.
            </p>
            <div className="mt-8">
              <ButtonLink href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-10 text-sm text-brand-muted">
              <p>
                <span className="font-medium text-brand-text dark:text-brand-cru">Telefone:</span>{" "}
                {siteConfig.links.phone}
              </p>
              <p className="mt-2">
                <span className="font-medium text-brand-text dark:text-brand-cru">E-mail:</span>{" "}
                <a className="text-brand-secondary hover:underline" href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
