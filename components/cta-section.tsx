"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Pencil } from "lucide-react";

import { PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  className?: string;
};

/**
 * Mobile CTA rebuilt from the Figma frame (405 x 504).
 * Every size is expressed in `cqw` against that frame width so the whole
 * composition scales as one piece, exactly like the exported PNG did.
 */
function MobileCta() {
  return (
    <div className="@container md:hidden w-full px-4">
      <Link
        href={PLATFORM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Take your creative workflow to the next level - Start Free"
        className="group relative block aspect-[405/504] w-full overflow-hidden rounded-[6cqw] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_55%,#f4f8ff_100%)] dark:bg-[linear-gradient(180deg,#0b0b0e_0%,#0d1016_55%,#101728_100%)]"
      >
        {/* Flow lines, nodes and decorations */}
        <svg
          viewBox="0 0 405 504"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full text-[#3563f0]"
        >
          {/* Organic blob hugging the right edge */}
          <path
            d="M410 330C390 350 383 372 392 394C400 412 396 428 386 444C376 460 379 484 399 497L410 504L410 330Z"
            className="fill-[#e8f0fd] dark:fill-[#141d33]"
          />
          {/* Faint curve crossing the top-left corner */}
          <path
            d="M-8 62C14 50 30 28 40 -6"
            className="stroke-[#d8e4f8] dark:stroke-[#1d2740]"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Line rising from the left edge up to the pin */}
          <path
            d="M-6 58C8 50 20 42 32 30"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Pin tail dropping into the comment card */}
          <path
            d="M39 38C41 50 44 60 46 72"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Balloon pin: circle with a pointed tail */}
          <circle cx="39" cy="25" r="7.5" fill="currentColor" />
          <path d="M33.4 29.5L39 39.5L44.6 29.5Z" fill="currentColor" />
          {/* Line from the Approved pill down to the dot node */}
          <path
            d="M307 56C309 74 315 98 324 114"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Dot node out to the right edge through the amber node */}
          <path
            d="M324 114C342 121 352 108 366 99C378 91 394 92 410 97"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Dot node trailing down toward the headline */}
          <path
            d="M324 114C321 138 313 158 302 176"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="324" cy="114" r="4.5" fill="currentColor" />
          {/* Amber ring node */}
          <circle
            cx="366"
            cy="99"
            r="7"
            className="fill-white dark:fill-zinc-900"
            stroke="#f5b719"
            strokeWidth="2.4"
          />
          <circle cx="366" cy="99" r="2.3" fill="#f5b719" />
          {/* Wavy line from the pencil tile, trailing off */}
          <path
            d="M64 396C72 404 79 410 87 415C120 430 152 440 172 452C180 457 185 461 188 464"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="87" cy="415" r="4.5" fill="currentColor" />
          {/* Selection frame with inner marker */}
          <rect
            x="213"
            y="416"
            width="45"
            height="72"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="5 4"
          />
          <path
            d="M235.5 417L235.5 447"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="4 3.5"
          />
          <circle cx="235.5" cy="453" r="4.5" fill="currentColor" />
        </svg>

        {/* Cursor arrow below the pin */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute left-[10.8cqw] top-[12.2cqw] h-[4.4cqw] w-[4.4cqw] fill-[#3563f0]"
        >
          <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
        </svg>

        {/* Comment card, top-left */}
        <div className="absolute left-[9.4cqw] top-[19cqw] flex items-center gap-[1.8cqw] rounded-[2.6cqw] border border-[#d9e5fb] bg-white px-[2.4cqw] py-[2cqw] shadow-[0_1.2cqw_3cqw_rgba(53,99,240,0.08)] dark:border-white/10 dark:bg-zinc-900">
          <span className="flex h-[3.6cqw] w-[3.6cqw] shrink-0 items-center justify-center rounded-full bg-[#3563f0] text-[1.8cqw] font-bold text-white">
            A
          </span>
          <p className="whitespace-nowrap text-[1.7cqw] leading-[1.6] text-[#2a2c31] dark:text-zinc-200">
            <span className="font-semibold text-[#101011] dark:text-zinc-100">
              Looks great!
            </span>
            <br />
            Can we try a brighter tone here?
          </p>
        </div>

        {/* Approved pill, top-right */}
        <div className="absolute right-[17cqw] top-[7.9cqw] flex items-center gap-[1.6cqw] rounded-[2.2cqw] border border-[#d9e5fb] bg-white px-[2.4cqw] py-[1.6cqw] shadow-[0_1.2cqw_3cqw_rgba(53,99,240,0.08)] dark:border-white/10 dark:bg-zinc-900">
          <span className="flex h-[3.2cqw] w-[3.2cqw] items-center justify-center rounded-full bg-[#f5b719]">
            <Check className="h-[2.1cqw] w-[2.1cqw] text-white" strokeWidth={4} />
          </span>
          <span className="text-[2.1cqw] font-semibold text-[#101011] dark:text-zinc-100">
            Approved
          </span>
        </div>

        {/* Edit tile, bottom-left */}
        <span className="absolute left-[10.1cqw] top-[91.8cqw] flex h-[6.2cqw] w-[6.2cqw] items-center justify-center rounded-[1.8cqw] border border-[#d9e5fb] bg-[#eef4ff] dark:border-white/10 dark:bg-[#1a2440]">
          <Pencil className="h-[2.9cqw] w-[2.9cqw] text-[#3563f0]" />
        </span>

        {/* Dot matrix, bottom-left */}
        <span className="absolute left-[4.7cqw] top-[108.5cqw] h-[12cqw] w-[11.5cqw] bg-[radial-gradient(circle,#c9d9f5_18%,transparent_20%)] bg-[length:2.3cqw_2.3cqw] dark:bg-[radial-gradient(circle,#2b3856_18%,transparent_20%)]" />

        {/* Comment card, bottom-right */}
        <div className="absolute left-[60.5cqw] top-[107cqw] flex items-center gap-[1.8cqw] rounded-[2.6cqw] border border-[#d9e5fb] bg-white px-[2.4cqw] py-[2cqw] shadow-[0_1.2cqw_3cqw_rgba(53,99,240,0.08)] dark:border-white/10 dark:bg-zinc-900">
          <span className="flex h-[3.6cqw] w-[3.6cqw] shrink-0 items-center justify-center rounded-full bg-[#3563f0] text-[1.8cqw] font-bold text-white">
            R
          </span>
          <p className="whitespace-nowrap text-[1.7cqw] leading-[1.6] text-[#2a2c31] dark:text-zinc-200">
            Let&apos;s update the headline
            <br />
            and make it bolder.
          </p>
        </div>

        {/* Copy block */}
        <div className="absolute inset-x-0 top-[37cqw] flex flex-col items-center px-[8cqw] text-center">
          <h2 className="font-heading text-[6.5cqw] font-bold leading-[1.14] tracking-[-0.02em] text-[#101011] dark:text-white">
            Take your creative
            <br />
            workflow to{" "}
            <span className="relative whitespace-nowrap font-serif-italic italic font-medium text-[#3563f0] dark:text-[#5b86ff]">
              the next level!
              <svg
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                className="absolute -bottom-[1.2cqw] left-0 h-[2.6cqw] w-full"
              >
                <path
                  d="M4 6C60 2 140 1 196 5"
                  stroke="#f5c518"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
                <path
                  d="M104 11C144 13 172 12 197 9"
                  stroke="#f5c518"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-[5.5cqw] max-w-[62cqw] text-[2.45cqw] leading-[1.55] text-[#6b7078] dark:text-zinc-400">
            Revolutionise your workflow with the most effective collaboration
            tool. Perfect for freelancers, agencies and marketing teams.
          </p>

          <span className="proofrr-button-shadow mt-[8cqw] inline-flex h-[8.4cqw] items-center gap-[2.2cqw] rounded-full bg-[#3563f0] px-[5.5cqw] text-[2.9cqw] font-semibold text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[0.4cqw]">
            Start Free
            <ArrowRight className="h-[3.2cqw] w-[3.2cqw] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[0.8cqw]" />
          </span>
        </div>
      </Link>
    </div>
  );
}

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section id="pricing" className={cn("w-full flex justify-center px-0 mx-0", className)}>
      <Link
        href={PLATFORM_URL}
        target="_blank"
        rel="noreferrer"
        className="hidden md:block w-full transition-transform duration-300 hover:scale-[1.002]"
      >
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784713026/Frame_1000002119_3_ekuklx.png"
          alt="Take your creative workflow to the next level! Start Free"
          width={1920}
          height={600}
          className="w-full h-auto dark:invert dark:hue-rotate-180"
        />
      </Link>

      <MobileCta />
    </section>
  );
}
