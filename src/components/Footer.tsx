import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <img
              src="/2-removebg-preview.png"
              alt="Shahi Dhir logo"
              className="h-14 w-28 rounded-md border border-cyanGlow/20 bg-white/5 object-contain p-1"
            />
            <h2 className="text-2xl font-bold">shahidhir</h2>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Premium AI marketing, business growth strategy, mindset coaching, and personal branding for entrepreneurs and ambitious brands.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Navigate</h3>
          <div className="mt-4 space-y-3">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="block text-sm text-white/60 hover:text-cyanGlow">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <p className="flex gap-2"><Phone size={16} /> 9851137809</p>
            <p className="flex gap-2"><Mail size={16} /> shahidhiraj38@gmail.com</p>
            <p className="flex gap-2"><MapPin size={16} /> Birendranagar-11, Dhuliyabit, Surkhet</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 px-5 py-6 text-sm text-white/45 md:flex-row">
        <span>Copyright 2026 shahidhir. All rights reserved.</span>
        <span>{services.length} premium growth services available.</span>
      </div>
    </footer>
  );
}
