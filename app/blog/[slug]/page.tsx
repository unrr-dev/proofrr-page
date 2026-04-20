import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/lib/proofrr-content";
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-24">
      <section className="container-shell pt-14 md:pt-20">
        <Reveal className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-[#3563f0]">
            Back to blog
          </Link>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-[#3563f0]">
            {post.date}
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#606266]">{post.excerpt}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal className="rounded-[2rem] bg-white px-6 py-7 shadow-[0_20px_50px_rgba(16,16,17,0.07)] sm:px-8 sm:py-8">
            <div className="space-y-6 text-lg leading-8 text-[#2b2b2c]">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="rounded-[2rem] bg-[#f0f2f6] px-6 py-7">
              <h2 className="font-heading text-3xl font-semibold text-[#101011]">
                Key takeaways
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-7 text-[#606266]">
                {post.takeaways.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-4 shadow-[0_12px_24px_rgba(16,16,17,0.05)]">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaSection className="pt-20 md:pt-24" />
    </div>
  );
}
