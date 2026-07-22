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
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Card className="proofrr-card-shadow h-full rounded-[1.8rem] border border-slate-100 bg-white py-0 transition-transform duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[543/645] w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="px-6 pt-5 pb-3">
                    <p className="text-sm font-medium text-[#606266] mb-1">{post.date}</p>
                    <CardTitle className="font-heading text-[1.25rem] font-bold leading-snug text-[#101011] tracking-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                </div>
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3563f0] hover:text-[#254cc9]">
                    Read article
                    <ArrowUpRight className="h-4 w-4 text-[#3563f0]" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <Reveal delay={0.1} className="mt-12">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-[15px] font-semibold text-[#3563f0] transition-colors hover:bg-slate-50 hover:border-slate-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
          >
            Load More
            <ChevronDown className="h-4 w-4" />
          </button>
        </Reveal>
      )}
    </div>
  );
}
