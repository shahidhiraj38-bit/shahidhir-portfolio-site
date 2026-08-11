import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services, stats, trustItems } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-5 py-24 md:py-32">
        <div className="absolute inset-0 bg-mesh opacity-80" />
        <div className="absolute inset-0 grid-mask" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Dhir Bahadur Shahi - AI Marketing Expert</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">Grow Your Business Smarter with AI Marketing</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              I help entrepreneurs, brands, and businesses use AI-powered marketing, strategy, and mindset transformation to grow faster.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book Consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore Services</ButtonLink>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <strong className="block text-2xl text-cyanGlow">{stat.value}</strong>
                  <span className="text-xs text-white/55">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-animate rounded-lg border border-cyanGlow/20 bg-white/[0.06] p-4 shadow-glow backdrop-blur md:p-6">
            <div className="relative min-h-[540px] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_50%_18%,rgba(33,245,255,.32),transparent_28%),linear-gradient(145deg,#0d1328,#111827_48%,#111c20)]">
              <img
                src="/dhir-hero-photo.jpg"
                alt="Dhir Bahadur Shahi"
                className="absolute inset-x-8 top-8 z-10 mx-auto h-[410px] w-[78%] rounded-lg border border-white/10 object-cover object-top shadow-card"
              />
              <div className="absolute inset-x-10 bottom-28 z-20 h-20 rounded-t-lg border border-cyanGlow/25 bg-gradient-to-b from-cyanGlow/20 to-graphite shadow-glow">
                <div className="mx-auto mt-3 h-2 w-28 rounded-full bg-cyanGlow/70" />
                <div className="mx-auto mt-3 h-8 w-52 rounded-md border border-white/15 bg-ink/75" />
              </div>
              <div className="absolute inset-x-4 bottom-12 z-30 h-20 rounded-lg border border-white/10 bg-[linear-gradient(100deg,#332415,#101827_52%,#16291f)] shadow-card">
                <div className="absolute left-8 top-5 h-3 w-28 rounded-full bg-limeGlow/40" />
                <div className="absolute right-8 top-4 h-10 w-24 rounded-md border border-cyanGlow/25 bg-cyanGlow/10" />
              </div>
              <div className="absolute left-6 top-6 z-30 rounded-md border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyanGlow">AI . Strategy . Mindset</p>
              </div>
              <div className="absolute inset-x-7 bottom-4 z-40 rounded-md border border-white/10 bg-ink/85 p-4 backdrop-blur">
                <h2 className="text-3xl font-black">Dhir Bahadur Shahi</h2>
                <p className="mt-1 text-sm text-white/65">Premium AI marketing consultant for modern business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite px-5 py-20">
        <SectionHeader eyebrow="Services" title="Growth systems for modern brands" text="Choose focused consulting across AI marketing, business growth, social media, funnels, mindset, and digital transformation." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>

      <section className="bg-ink px-5 py-20">
        <SectionHeader eyebrow="Why choose me" title="Premium strategy with human clarity" text="The work blends AI systems, business sense, personal branding, and mindset transformation into one clear growth direction." />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="rounded-lg premium-border p-7"><Icon className="text-limeGlow" /><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p></div>;
          })}
        </div>
      </section>

      <section className="bg-graphite px-5 py-20">
        <SectionHeader eyebrow="Trust" title="Built for founders who want clarity" text="A consultant-style experience for people who need practical action, not confusing marketing noise." />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {["Clear strategy, confident execution, and a modern AI growth mindset.", "Perfect for brands that want premium positioning and measurable marketing.", "A powerful blend of motivation, business clarity, and digital transformation."].map((quote) => (
            <blockquote key={quote} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-white/70">"{quote}"</blockquote>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
