import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/sd1-removebg-preview.png"
            alt="Shahi Dhir logo"
            className="h-11 w-24 rounded-md border border-cyanGlow/30 bg-[radial-gradient(circle_at_50%_25%,rgba(33,245,255,.24),rgba(255,255,255,.08)_45%,rgba(5,7,13,.82))] p-1 object-contain object-center shadow-glow"
          />
          <span>
            <span className="block text-lg font-bold tracking-wide">shahidhir</span>
            <span className="block text-xs text-white/55">AI Marketing Expert</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-cyanGlow">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/contact">Book Consultation</ButtonLink>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/contact" className="rounded-md bg-cyanGlow px-3 py-2 text-xs font-bold text-ink">Book</Link>
          <details className="relative">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md border border-white/10 bg-white/5">
              <Menu size={20} />
            </summary>
            <div className="absolute right-0 mt-3 w-48 rounded-md border border-white/10 bg-graphite p-3 shadow-card">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-cyanGlow">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
