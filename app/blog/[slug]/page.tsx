import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/lib/proofrr-content";
import type { ContentBlock } from "@/lib/blog-content";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[#101011] dark:text-white mt-10 first:mt-0"
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="font-heading text-xl font-semibold text-[#101011] dark:text-white mt-6"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="text-lg leading-8 text-[#2b2b2c] dark:text-zinc-300">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={index}
          className="space-y-3 pl-6 text-lg leading-8 text-[#2b2b2c] dark:text-zinc-300"
        >
          {block.items.map((item, i) => (
            <li key={i} className="list-disc marker:text-[#3563f0] dark:marker:text-[#3b82f6]">
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-0 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-14 md:pt-20">
        <Reveal className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-[#3563f0] dark:text-[#3b82f6]">
            Back to blog
          </Link>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-[#3563f0] dark:text-[#3b82f6]">
            {post.date}
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] dark:text-white sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#606266] dark:text-zinc-400">{post.excerpt}</p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[2rem]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={post.articleHeroImage}
              alt={post.title}
              fill
              className="object-cover dark:invert dark:hue-rotate-180"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal className="rounded-[2rem] bg-white dark:bg-zinc-900/50 px-6 py-7 border border-transparent dark:border-zinc-800/80 shadow-[0_20px_50px_rgba(16,16,17,0.07)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-8 sm:py-8">
            <div className="space-y-5">
              {post.content.map((block, index) => renderBlock(block, index))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="rounded-[2rem] bg-[#f0f2f6] dark:bg-zinc-900/30 border border-transparent dark:border-zinc-800/50 px-6 py-7">
              <h2 className="font-heading text-3xl font-semibold text-[#101011] dark:text-white">
                Key takeaways
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-7 text-[#606266] dark:text-zinc-400">
                {post.takeaways.map((item) => (
                  <li key={item} className="rounded-2xl bg-white dark:bg-zinc-800/40 border border-transparent dark:border-zinc-800/50 px-4 py-4 shadow-[0_12px_24px_rgba(16,16,17,0.05)] dark:shadow-[0_12px_24px_rgba(0,0,0,0.2)] text-slate-800 dark:text-zinc-200">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaSection className="pt-6 md:pt-8" />
    </div>
  );
}
