export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-white/62">{text}</p>
    </div>
  );
}
