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
  { href: "/#posicionamento", label: "Posicionamento" },
  { href: "/#modulos", label: "Módulos" },
  { href: "/#processo", label: "Processo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/empreendimentos", label: "Empreendimentos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
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
              "text-sm font-medium text-brand-muted transition-colors hover:text-brand-text dark:hover:text-brand-cru",
              active && "text-brand-primary dark:text-brand-primary",
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
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-cru/95 backdrop-blur dark:border-brand-border dark:bg-brand-dark/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={siteConfig.name}
        >
          <span className="relative block h-9 w-[10rem] sm:h-10 sm:w-[11.5rem]">
            {remoteLogo ? (
              // eslint-disable-next-line @next/next/no-img-element -- URL externa opcional via env
              <img
                src={logoSrc}
                alt=""
                className="h-full w-full object-contain object-left"
                width={220}
                height={64}
              />
            ) : (
              <Image
                src={logoSrc}
                alt=""
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 160px, 200px"
                priority
              />
            )}
          </span>
        </Link>
        <NavLinks className="hidden items-center gap-5 lg:gap-6 md:flex" />
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-text md:hidden dark:text-brand-cru"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-brand-border bg-brand-cru px-4 py-3 md:hidden dark:bg-brand-dark"
        >
          <NavLinks className="flex flex-col gap-3" onNavigate={() => setOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}
