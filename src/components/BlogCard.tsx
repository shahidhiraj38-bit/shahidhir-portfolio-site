import { ArrowUpRight, CalendarDays } from "lucide-react";

export function BlogCard({ post }: { post: { title: string; category: string; date: string; excerpt: string } }) {
  return (
    <article className="rounded-lg premium-border p-6 transition duration-300 hover:-translate-y-1 hover:border-limeGlow/35">
      <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
        <span className="rounded-md bg-limeGlow/12 px-3 py-1 font-semibold text-limeGlow">{post.category}</span>
        <span className="flex items-center gap-2"><CalendarDays size={14} /> {post.date}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{post.excerpt}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyanGlow">
        Read More <ArrowUpRight size={16} />
      </button>
    </article>
  );
}
