import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on AI marketing, digital business growth, mindset, personal branding, and the future of marketing."
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink bg-mesh px-5 py-24">
        <SectionHeader eyebrow="Insights" title="Ideas for smarter growth" text="Modern thinking on AI marketing, business growth, mindset, personal branding, and the future of digital strategy." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => <BlogCard key={post.title} post={post} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}
