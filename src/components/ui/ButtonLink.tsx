import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
        variant === "primary" &&
          "bg-brand-primary text-white hover:bg-[#6d542f] dark:hover:bg-[#a67c48]",
        variant === "secondary" &&
          "border border-brand-border bg-white text-brand-text hover:bg-brand-cru dark:border-brand-border dark:bg-brand-dark dark:text-brand-cru dark:hover:bg-[#2a2a2a]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
