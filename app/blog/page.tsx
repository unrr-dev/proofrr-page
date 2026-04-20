import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BLOG_POSTS } from "@/lib/proofrr-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-14 md:pt-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7xl">
            Proofrr Digest
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#606266]">
            Our thoughts & insights showcased.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.03}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="proofrr-card-shadow h-full rounded-[1.8rem] border-0 bg-white py-0 transition-transform hover:-translate-y-1">
                  <div className="h-2 w-full bg-[linear-gradient(90deg,#3563f0_0%,#70a5ff_100%)]" />
                  <CardHeader className="px-6 pt-6">
                    <p className="text-sm font-medium text-[#3563f0]">{post.date}</p>
                    <CardTitle className="font-heading text-[1.9rem] font-semibold leading-tight text-[#101011]">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-base leading-7 text-[#606266]">{post.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#101011]">
                      Read article
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
