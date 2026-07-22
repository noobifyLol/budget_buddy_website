import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type PillButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "solid" | "outline" | "outline-light";
};

export default function PillButton({
  variant = "solid",
  className = "",
  children,
  ...props
}: PillButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]";

  const styles = {
    solid: "bg-accent text-white shadow-sm shadow-accent/20 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30",
    outline:
      "border border-accent/60 text-accent hover:border-accent hover:bg-accent hover:text-white",
    "outline-light":
      "border border-dark-border text-dark-accent hover:border-dark-accent hover:bg-dark-accent hover:text-dark-bg",
  } as const;

  return (
    <Link className={`${base} ${styles[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      {variant === "solid" && (
        <span className="shimmer-text pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full" />
      )}
    </Link>
  );
}
