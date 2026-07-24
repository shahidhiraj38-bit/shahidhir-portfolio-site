import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI marketing, business growth consulting, personal branding, funnels, mindset coaching, and digital transformation services."
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink bg-mesh px-5 py-24">
        <SectionHeader eyebrow="Services" title="Premium consulting services" text="Select the growth support your brand needs now, from AI marketing strategy to mindset and digital transformation." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}
