import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand-primary)] text-[var(--text-on-brand)] hover:bg-[var(--brand-primary-dark)] border border-transparent",
  secondary:
    "bg-transparent text-[var(--brand-primary)] border border-[var(--border-strong)] hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)]",
  ghost: "bg-transparent text-[var(--brand-primary)] border border-transparent hover:bg-[var(--brand-primary-light)]",
};

export const BUTTON_BASE_CLASS =
  "inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 text-[0.9375rem] font-semibold rounded-[var(--radius-md)] transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none";

export function buttonClass(variant: ButtonVariant = "primary", className?: string): string {
  return cn(BUTTON_BASE_CLASS, VARIANT_CLASS[variant], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({ variant = "primary", children, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClass(variant, className)} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function ButtonLink({ variant = "primary", children, className, ...rest }: ButtonLinkProps) {
  return (
    <Link className={buttonClass(variant, className)} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function ButtonAnchor({ variant = "primary", children, className, ...rest }: ButtonAnchorProps) {
  return (
    <a className={buttonClass(variant, className)} {...rest}>
      {children}
    </a>
  );
}
