import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-cyanGlow text-ink shadow-glow hover:bg-limeGlow"
      : "border border-white/15 bg-white/5 text-white hover:border-cyanGlow/60 hover:bg-white/10";

  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 ${classes}`}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
