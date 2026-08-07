import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { FlodeskForm } from "@/components/FlodeskForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation with Dhir Bahadur Shahi for AI marketing, business consulting, and personal branding."
};

export default function ContactPage() {
  return (
    <section className="bg-ink bg-mesh px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Contact</p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Book your AI growth consultation.</h1>
          <p className="mt-6 text-lg leading-8 text-white/68">Tell me about your business, your goals, and the service you are interested in. I will review your message and help you find the right growth path.</p>
          <div className="mt-10 space-y-4 rounded-lg premium-border p-6">
            <p className="flex gap-3 text-white/70"><Phone className="text-cyanGlow" /> 9851137809</p>
            <p className="flex gap-3 text-white/70"><Mail className="text-cyanGlow" /> shahidhiraj38@gmail.com</p>
            <p className="flex gap-3 text-white/70"><MapPin className="text-cyanGlow" /> Birendranagar-11, Dhuliyabit, Surkhet</p>
          </div>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => <a key={index} href="#" aria-label="Social media link" className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:border-cyanGlow hover:text-cyanGlow"><Icon size={20} /></a>)}
          </div>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="grid aspect-video place-items-center rounded-md border border-dashed border-cyanGlow/30 bg-ink/80 text-center text-white/55">
              Map location placeholder<br />Birendranagar-11, Dhuliyabit, Surkhet
            </div>
          </div>
        </div>
        <FlodeskForm />
      </div>
    </section>
  );
}
