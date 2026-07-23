import type { Metadata } from "next";

import { BLOG_POSTS } from "@/lib/proofrr-content";
import { Reveal } from "@/components/reveal";
import { BlogGrid } from "@/components/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-14 md:pt-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] dark:text-white sm:text-6xl md:text-7xl">
            Proofrr Digest
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#606266] dark:text-zinc-400">
            Our thoughts & insights showcased.
          </p>
        </Reveal>

        <BlogGrid posts={BLOG_POSTS} />
      </section>
    </div>
  );
}
