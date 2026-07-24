import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group rounded-lg premium-border p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40">
      <div className="grid h-12 w-12 place-items-center rounded-md bg-cyanGlow/12 text-cyanGlow ring-1 ring-cyanGlow/25">
        <Icon size={23} />
      </div>
      <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-white/62">{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyanGlow transition group-hover:gap-3">
        View service <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
