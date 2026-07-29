import type { Metadata } from "next";

import { BLOG_POSTS } from "@/lib/proofrr-content";
import { Reveal } from "@/components/reveal";
import { BlogGrid } from "@/components/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="pb-16 sm:pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-8 sm:pt-14 md:pt-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-[#101011] dark:text-white sm:text-5xl md:text-6xl">
            Proofrr Digest
          </h1>
          <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-base sm:text-lg text-[#606266] dark:text-zinc-400">
            Our thoughts & insights showcased.
          </p>
        </Reveal>

        <BlogGrid posts={BLOG_POSTS} />
      </section>
    </div>
  );
}
