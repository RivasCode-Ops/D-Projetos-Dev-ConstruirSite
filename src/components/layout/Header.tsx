"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/#metricas", label: "Painel" },
  { href: "/#posicionamento", label: "Posicionamento" },
  { href: "/#modulos", label: "Módulos" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#metodo", label: "Método" },
  { href: "/sobre", label: "Sobre" },
  { href: "/empreendimentos", label: "Empreendimentos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

const linkClass =
  "text-sm font-medium text-[#1F2937] transition-colors hover:text-[#F97316] dark:text-neutral-300 dark:hover:text-[#F97316]";

function NavLinks({
  className,
  onNavigate,
  vertical = false,
}: {
  className?: string;
  onNavigate?: () => void;
  vertical?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Principal">
      {nav.map((item) => {
        const isHashOnHome = item.href.startsWith("/#");
        const active = !isHashOnHome && pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              linkClass,
              vertical && "py-1",
              active && "text-[#F97316] dark:text-[#F97316]",
            )}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const logoSrc = siteConfig.logoSrc;
  const remoteLogo = /^https?:\/\//i.test(logoSrc);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#0F172A]">
      <div className="mx-auto flex h-[80px] min-h-[70px] max-h-[90px] max-w-6xl items-center justify-between gap-10 px-10 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="flex h-10 shrink-0 items-center sm:h-[60px] sm:max-h-[60px]"
          aria-label={siteConfig.name}
        >
          {remoteLogo ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL externa opcional via env
            <img
              src={logoSrc}
              alt=""
              className="h-10 w-auto max-h-10 object-contain object-left sm:h-[56px] sm:max-h-[60px]"
              width={280}
              height={60}
              decoding="async"
            />
          ) : (
            <Image
              src={logoSrc}
              alt=""
              width={240}
              height={60}
              sizes="(max-width: 640px) 180px, 240px"
              className="h-10 w-auto max-h-10 object-contain object-left sm:h-[56px] sm:max-h-[60px]"
              priority
            />
          )}
        </Link>

        <NavLinks className="hidden min-w-0 items-center gap-x-7 lg:gap-x-8 md:flex md:flex-nowrap" />

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[#1F2937] transition-colors hover:text-[#F97316] md:hidden dark:text-neutral-200 dark:hover:text-[#F97316]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menu</span>
          {open ? (
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </span>
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white px-10 py-4 md:hidden dark:border-neutral-800 dark:bg-[#0F172A]"
        >
          <NavLinks
            className="flex max-h-[min(70vh,520px)] flex-col gap-4 overflow-y-auto"
            vertical
            onNavigate={() => setOpen(false)}
          />
        </div>
      ) : null}
    </header>
  );
}
