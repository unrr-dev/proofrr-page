"use client";

import Image from "next/image";
import Link from "next/link";

import { PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  className?: string;
};

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section id="pricing" className={cn("w-full flex justify-center px-0 mx-0", className)}>
      <Link
        href={PLATFORM_URL}
        target="_blank"
        rel="noreferrer"
        className="w-full block transition-transform duration-300 hover:scale-[1.002]"
      >
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784713026/Frame_1000002119_3_ekuklx.png"
          alt="Take your creative workflow to the next level! Start Free"
          width={1920}
          height={600}
          className="w-full h-auto dark:invert dark:hue-rotate-180"
        />
      </Link>
    </section>
  );
}
