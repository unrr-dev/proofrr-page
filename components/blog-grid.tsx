"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Post = {
  slug: string;
  coverImage: string;
  title: string;
  date: string;
};

type BlogGridProps = {
  posts: Post[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = posts.length > visibleCount;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {visiblePosts.map((post, index) => (
          <Reveal key={`${post.slug}-${index}`} delay={(index % 3) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full rounded-[24px] bg-white p-4 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[1.5/1] w-full overflow-hidden rounded-[16px]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <div className="flex flex-col flex-1 pt-4 pb-1 px-1">
                <span className="text-[12px] sm:text-[13px] font-normal text-slate-400 dark:text-zinc-400">
                  {post.date}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug text-[#101011] dark:text-white group-hover:text-[#3563f0] transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto pt-3 flex items-center gap-1 text-[13px] font-semibold text-[#3563f0] dark:text-[#3b82f6]">
                  <span>Read article</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <Reveal delay={0.1} className="mt-10 mb-4">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-1.5 rounded-full border border-[#3563f0]/30 dark:border-blue-500/40 bg-white dark:bg-zinc-900 px-6 py-2 text-[13px] font-semibold text-[#3563f0] dark:text-[#3b82f6] transition-all hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer shadow-sm"
          >
            Load More +
          </button>
        </Reveal>
      )}
    </div>
  );
}
