import { ButtonLink } from "./ButtonLink";

export function CTA() {
  return (
    <section className="bg-graphite px-5 py-20">
      <div className="mx-auto max-w-6xl rounded-lg border border-cyanGlow/20 bg-mesh p-8 shadow-glow md:p-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Ready to grow smarter?</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Let us build your AI-powered growth strategy.</h2>
          <p className="mt-5 text-white/65">Book a consultation and discover how AI marketing, business strategy, and mindset transformation can move your brand forward.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Book Consultation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">Explore Services</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
