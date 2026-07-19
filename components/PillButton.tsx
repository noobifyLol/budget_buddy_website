import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type PillButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "solid" | "outline";
};

export default function PillButton({
  variant = "solid",
  className = "",
  ...props
}: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 font-display text-sm font-bold uppercase tracking-wider transition-colors";
  const styles =
    variant === "solid"
      ? "bg-accent text-ink hover:bg-accent-soft"
      : "border border-accent text-accent-soft hover:bg-accent hover:text-ink";

  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}
