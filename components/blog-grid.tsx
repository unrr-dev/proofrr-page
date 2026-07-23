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
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {visiblePosts.map((post, index) => (
          <Reveal key={`${post.slug}-${index}`} delay={(index % 3) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="block h-full transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[543/645] w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-contain dark:invert dark:hue-rotate-180"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <Reveal delay={0.1} className="mt-12">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-7 py-3 text-[15px] font-semibold text-[#3563f0] dark:text-[#3b82f6] transition-colors hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:border-slate-300 dark:hover:border-zinc-700 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            Load More
            <ChevronDown className="h-4 w-4" />
          </button>
        </Reveal>
      )}
    </div>
  );
}
