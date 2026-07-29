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
          className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-white mt-8 mb-3 leading-snug"
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="font-heading text-lg sm:text-xl font-bold text-[#111827] dark:text-white mt-6 mb-2 leading-snug"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="text-sm sm:text-base leading-relaxed text-[#374151] dark:text-zinc-300 my-3.5">
          {block.text}
        </p>
      );
    case "list":
      return (
        <div key={index} className="my-5 space-y-4">
          {block.items.map((item, i) => {
            let prefix = "";
            let body = item;

            if (item.includes(":")) {
              const idx = item.indexOf(":");
              prefix = item.substring(0, idx + 1);
              body = item.substring(idx + 1);
            } else if (item.includes(" — ")) {
              const idx = item.indexOf(" — ");
              prefix = item.substring(0, idx + 3);
              body = item.substring(idx + 3);
            }

            return (
              <div
                key={i}
                className="rounded-[18px] bg-[#edf2fd] dark:bg-blue-950/30 p-4 sm:p-5 border border-blue-100/70 dark:border-blue-900/40 flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-[#374151] dark:text-zinc-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#111827] dark:bg-white shrink-0 mt-2" />
                <div>
                  {prefix ? (
                    <>
                      <strong className="font-bold text-[#111827] dark:text-white">{prefix}</strong>
                      {body}
                    </>
                  ) : (
                    item
                  )}
                </div>
              </div>
            );
          })}
        </div>
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
      <section className="container-shell pt-6 sm:pt-10 md:pt-14 max-w-4xl mx-auto">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#3563f0] dark:text-[#3b82f6] hover:underline"
          >
            ‹ Back to Blog
          </Link>
          <p className="mt-3 text-[13px] font-extrabold uppercase tracking-wider text-[#3563f0] dark:text-[#3b82f6]">
            {post.date}
          </p>
          <h1 className="mt-2 font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] dark:text-white leading-[1.2]">
            {post.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-normal text-[#6b7280] dark:text-zinc-400">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal className="mt-6 sm:mt-8 overflow-hidden rounded-[24px] border border-slate-100 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white dark:bg-zinc-900">
          <div className="relative aspect-[1.6/1] w-full">
            <Image
              src={post.articleHeroImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 space-y-6">
          <Reveal>
            <div className="rounded-[28px] bg-white dark:bg-zinc-900/90 p-5 sm:p-8 border border-slate-100 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              {post.content.map((block, index) => renderBlock(block, index))}
            </div>
          </Reveal>

          {post.takeaways && post.takeaways.length > 0 && (
            <Reveal delay={0.08}>
              <aside className="rounded-[28px] bg-[#eef4ff] dark:bg-blue-950/30 border border-blue-100/80 dark:border-blue-900/40 p-5 sm:p-7 mt-8">
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111827] dark:text-white mb-4">
                  Key takeaways
                </h2>
                <div className="space-y-3">
                  {post.takeaways.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[18px] bg-white dark:bg-zinc-900 border border-blue-100/60 dark:border-zinc-800 p-4 shadow-sm text-xs sm:text-sm text-[#374151] dark:text-zinc-300 leading-normal"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#111827] dark:bg-white shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          )}
        </div>
      </section>

      <CtaSection className="pt-10 md:pt-16" />
    </div>
  );
}
