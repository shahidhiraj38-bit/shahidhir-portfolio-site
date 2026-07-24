import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { services } from "@/data/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title ?? "Service", description: service?.summary };
}

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="bg-ink bg-mesh px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <aside className="rounded-lg premium-border p-8 shadow-glow">
            <div className="grid h-16 w-16 place-items-center rounded-md bg-cyanGlow/12 text-cyanGlow ring-1 ring-cyanGlow/25">
              <Icon size={32} />
            </div>
            <h1 className="mt-7 text-4xl font-black md:text-5xl">{service.title}</h1>
            <p className="mt-5 text-white/65 leading-8">{service.summary}</p>
            <div className="mt-8"><ButtonLink href="/contact">Book Consultation</ButtonLink></div>
          </aside>
          <div className="space-y-8">
            <section className="rounded-lg premium-border p-8">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-4 leading-8 text-white/65">{service.detail}</p>
            </section>
            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg premium-border p-8">
                <h2 className="text-2xl font-bold">Benefits</h2>
                <div className="mt-5 space-y-3">{service.benefits.map((item) => <p key={item} className="flex gap-3 text-white/68"><CheckCircle2 className="text-limeGlow" size={20} /> {item}</p>)}</div>
              </div>
              <div className="rounded-lg premium-border p-8">
                <h2 className="text-2xl font-bold">Process</h2>
                <div className="mt-5 space-y-3">{service.process.map((item, index) => <p key={item} className="text-white/68"><span className="mr-3 text-cyanGlow">0{index + 1}</span>{item}</p>)}</div>
              </div>
            </section>
            <section className="rounded-lg premium-border p-8">
              <h2 className="text-2xl font-bold">Who this service is for</h2>
              <p className="mt-4 leading-8 text-white/65">{service.audience}</p>
            </section>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
