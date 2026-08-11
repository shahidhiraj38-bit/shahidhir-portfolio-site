import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks",
  description: "Thank you for contacting Dhir Bahadur Shahi."
};

export default function ThanksPage() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink bg-mesh px-5 py-24">
      <div className="max-w-2xl rounded-lg premium-border p-10 text-center shadow-glow">
        <div className="mx-auto mb-8 inline-flex rounded-md border border-cyanGlow/25 bg-white/5 px-5 py-4">
          <span className="text-3xl font-black leading-none tracking-[0.16em] text-white">SHAHIDHIR</span>
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Message Received</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Thank You</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/68">
          Your consultation request has been received. I will review your message and contact you soon.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-cyanGlow px-6 py-4 font-bold text-ink shadow-glow transition hover:bg-limeGlow"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
