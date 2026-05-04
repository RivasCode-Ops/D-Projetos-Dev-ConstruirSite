# construir EMPREENDIMENTOS — site institucional

Site em [Next.js 15](https://nextjs.org/), TypeScript e Tailwind CSS. Repositório: [RivasCode-Ops/D-Projetos-Dev-ConstruirSite](https://github.com/RivasCode-Ops/D-Projetos-Dev-ConstruirSite).

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel (URL de preview para o cliente)

1. Entre em [vercel.com](https://vercel.com) e faça login com GitHub.
2. **Add New… → Project** e importe o repositório **D-Projetos-Dev-ConstruirSite**.
3. Confirme o preset **Next.js** (comando de build `next build`, sem pasta raiz extra).
4. Em **Settings → Environment Variables**, copie o que precisar de [`.env.example`](./.env.example). Ative **Automatically expose System Environment Variables** para cada ambiente (Preview / Production), assim o `VERCEL_URL` fica disponível nos builds.
5. **Antes da aprovação do cliente:** deixe `NEXT_PUBLIC_SITE_URL` vazio e `NEXT_PUBLIC_SITE_PUBLISHED` diferente de `true` — o site permanece com `noindex` e `robots` bloqueando indexação genérica.
6. **Depois da aprovação e com domínio final:** defina `NEXT_PUBLIC_SITE_URL` com a URL pública e `NEXT_PUBLIC_SITE_PUBLISHED=true`.

Documentação oficial: [Vercel — Deploying Next.js](https://vercel.com/docs/frameworks/nextjs).

## CLI (opcional)

Com [Vercel CLI](https://vercel.com/docs/cli) instalado:

```bash
npx vercel
```

A pasta `.vercel` é ignorada pelo Git (credenciais locais).
