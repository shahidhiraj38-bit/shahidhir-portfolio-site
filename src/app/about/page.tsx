import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Dhir Bahadur Shahi",
  description: "Learn about Dhir Bahadur Shahi, AI marketing expert, consultant, motivational speaker, and mind expert."
};

export default function AboutPage() {
  const values = ["Clarity", "Confidence", "Innovation", "Discipline", "Human-centered growth"];
  return (
    <>
      <section className="bg-ink bg-mesh px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">About me</p>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">Dhir Bahadur Shahi</h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              I am an AI marketing expert, business consultant, motivational speaker, and mind expert helping ambitious people grow with smarter strategy, stronger branding, and a future-ready mindset.
            </p>
          </div>
          <div className="rounded-lg premium-border p-5 shadow-glow">
            <div className="aspect-[4/5] rounded-lg bg-[linear-gradient(145deg,rgba(33,245,255,.18),rgba(183,255,74,.08)),radial-gradient(circle_at_center,rgba(255,255,255,.16),transparent_38%)] p-8">
              <div className="flex h-full items-end text-2xl font-bold text-white/80">Professional Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-graphite px-5 py-20">
        <SectionHeader eyebrow="Mission and vision" title="Helping businesses grow with AI and mindset" text="My mission is to make modern marketing simpler, smarter, and more powerful for entrepreneurs and brands." />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-lg premium-border p-7"><h3 className="text-xl font-bold">Mission</h3><p className="mt-4 text-sm leading-7 text-white/62">Help businesses use AI marketing, strategy, and personal transformation to grow with confidence.</p></div>
          <div className="rounded-lg premium-border p-7"><h3 className="text-xl font-bold">Vision</h3><p className="mt-4 text-sm leading-7 text-white/62">Build future-ready brands that combine smart technology with powerful human leadership.</p></div>
          <div className="rounded-lg premium-border p-7"><h3 className="text-xl font-bold">Values</h3><div className="mt-4 flex flex-wrap gap-2">{values.map((value) => <span key={value} className="rounded-md bg-cyanGlow/10 px-3 py-2 text-sm text-cyanGlow">{value}</span>)}</div></div>
        </div>
      </section>
      <section className="bg-ink px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-limeGlow">Personal brand</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">A confident voice for AI, marketing, mindset, and growth.</h2>
          <p className="mt-6 text-white/65 leading-8">The shahidhir brand stands for professional clarity, futuristic thinking, disciplined action, and inspiring leadership. It is built for people who want to grow smarter without losing authenticity.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
