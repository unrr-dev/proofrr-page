"use client";

import Link from "next/link";
import { ArrowRight, Check, Pencil } from "lucide-react";
import { PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  className?: string;
};

/**
 * Mobile CTA rebuilt from Figma design frame (405 x 504).
 */
function MobileCta() {
  return (
    <div className="md:hidden w-full px-4">
      <Link
        href={PLATFORM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Take your creative workflow to the next level - Start Free"
        className="group relative block aspect-[405/520] w-full overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_55%,#f4f8ff_100%)] dark:bg-[linear-gradient(180deg,#0b0b0e_0%,#0d1016_55%,#101728_100%)] shadow-sm"
      >
        {/* Mobile Frame Background Image */}
        <img
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788254615/ChatGPT_Image_Jul_16_2026_01_43_29_PM_1_pl6zgz.png"
          alt="Mobile CTA Background Frame"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Center Copy block */}
        <div className="absolute inset-x-0 top-[27%] flex flex-col items-center px-6 text-center z-10">
          <h2 className="font-heading text-2xl font-bold leading-[1.18] tracking-tight text-[#101011] dark:text-white">
            Take your creative
            <br />
            workflow to{" "}
            <span className="relative inline-block font-serif-italic italic font-medium text-[#3563f0] dark:text-[#5b86ff]">
              the next level!
              <svg
                viewBox="0 0 200 14"
                fill="none"
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full"
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

          <p className="mt-4 max-w-[340px] text-sm sm:text-base leading-relaxed text-[#9ca3af] dark:text-zinc-400 font-normal">
            Revolutionise your workflow with the most effective
            <br />
            collaboration tool. Perfect for freelancers, agencies and
            <br />
            marketing teams.
          </p>

          <span className="proofrr-button-shadow mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#3563f0] px-6 text-sm font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5">
            Start Free
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </div>
  );
}

/**
 * Desktop CTA rebuilt with pure React, Tailwind & SVG vector graphics.
 * Stretches 100% full-width edge-to-edge from left to right.
 */
function DesktopCta() {
  return (
    <div className="hidden md:block w-full px-0 mx-0">
      <Link
        href={PLATFORM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Take your creative workflow to the next level - Start Free"
        className="group relative block aspect-[1920/470] min-h-[430px] lg:min-h-[470px] xl:min-h-[520px] 2xl:min-h-[560px] w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_50%,#f4f8ff_100%)] dark:bg-[linear-gradient(180deg,#090b10_0%,#0c1018_50%,#101726_100%)] shadow-sm transition-transform duration-300"
      >
        {/* Soft Radial Glow Top-Left */}
        <div className="pointer-events-none absolute -left-12 -top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(53,99,240,0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(53,99,240,0.18),transparent_70%)]" />

        {/* Vector SVG Background - Arcs, Flow Lines, Nodes, Dashed Box & Corner Waves */}
        <svg
          viewBox="0 0 1920 540"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full text-[#3563f0]"
        >
          {/* Top Left Concentric Radar Arcs */}
          <circle
            cx="70"
            cy="80"
            r="100"
            stroke="#d8e4f8"
            className="dark:stroke-[#1c273e]"
            strokeWidth="1.5"
          />
          <circle
            cx="70"
            cy="80"
            r="180"
            stroke="#d8e4f8"
            className="dark:stroke-[#1c273e]"
            strokeWidth="1.5"
          />
          <circle
            cx="70"
            cy="80"
            r="260"
            stroke="#e2ecfc"
            className="dark:stroke-[#172033]"
            strokeWidth="1.2"
          />
          <circle
            cx="70"
            cy="80"
            r="340"
            stroke="#e2ecfc"
            className="dark:stroke-[#172033]"
            strokeWidth="1.2"
          />
          <circle
            cx="70"
            cy="80"
            r="420"
            stroke="#edf4fe"
            className="dark:stroke-[#121929]"
            strokeWidth="1"
          />

          {/* Top Left Location Pin Node */}
          <circle cx="120" cy="160" r="8" fill="currentColor" />

          {/* Top Left Connector Line from Pin to Comment 1 */}
          <path
            d="M120 160 C 135 190, 150 210, 170 225"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Bottom Left Flow Line & Node */}
          <path
            d="M280 420 C 340 420, 390 490, 510 445 C 590 415, 690 430, 800 420"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="390" cy="460" r="5" fill="currentColor" />

          {/* Top Right Flow Lines & Branching Nodes */}
          <path
            d="M1620 100 C 1650 135, 1675 160, 1690 160"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="1690" cy="160" r="5" fill="currentColor" />

          {/* Branch to Yellow Target Circle */}
          <path
            d="M1690 160 C 1720 160, 1760 130, 1830 125"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle
            cx="1830"
            cy="125"
            r="8.5"
            className="fill-white dark:fill-zinc-900"
            stroke="#f5b719"
            strokeWidth="2.5"
          />
          <circle cx="1830" cy="125" r="3" fill="#f5b719" />

          {/* Branch from Top Node down to Dashed Selector Box */}
          <path
            d="M1690 160 C 1660 210, 1530 240, 1430 340"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Dashed Selector Box (Bottom Right) */}
          <rect
            x="1370"
            y="320"
            width="140"
            height="125"
            rx="8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <path
            d="M1440 321 L1440 375"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="4 3.5"
          />
          <circle cx="1440" cy="382" r="7" fill="currentColor" />

          {/* Bottom Right Wave Background Shapes */}
          <path
            d="M1920 220 C 1750 290, 1700 430, 1720 540 L 1920 540 Z"
            className="fill-[#e8f1fd] dark:fill-[#141d33]"
          />
          <path
            d="M1920 320 C 1820 370, 1780 460, 1800 540 L 1920 540 Z"
            className="fill-[#d4e4fc] dark:fill-[#192745]"
          />
          <path
            d="M1920 420 C 1870 455, 1850 490, 1870 540 L 1920 540 Z"
            className="fill-[#c0d7fd] dark:fill-[#203158]"
          />
        </svg>

        {/* Cursor Arrow under Pin (Top Left) */}
        <div className="absolute left-[6.3%] top-[31.5%] pointer-events-none">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 fill-[#3563f0] drop-shadow-sm"
          >
            <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
          </svg>
        </div>

        {/* Comment Card 1 (Top Left) */}
        <div className="absolute left-[6.8%] top-[34%] flex items-center gap-2.5 rounded-[10px] border border-[#3563f0] bg-[#f4f8ff] px-3.5 py-2 shadow-[0_6px_20px_rgba(53,99,240,0.08)] dark:border-blue-500/50 dark:bg-[#101930] transition-transform duration-300 group-hover:-translate-y-1">
          <span className="flex h-6.5 w-6.5 lg:h-7.5 lg:w-7.5 shrink-0 items-center justify-center rounded-full bg-[#3563f0] text-xs font-bold text-white">
            A
          </span>
          <p className="whitespace-nowrap text-xs lg:text-[12.5px] xl:text-[13px] leading-snug text-[#000000] dark:text-white font-bold">
            <span className="font-extrabold text-[#000000] dark:text-white">
              Looks great!
            </span>
            <br />
            <span className="font-bold text-[#000000] dark:text-white">
              Can we try a brighter tone here?
            </span>
          </p>
        </div>

        {/* Pencil Badge Tile (Bottom Left) */}
        <div className="absolute left-[13%] top-[72%] flex h-11 w-11 lg:h-13 lg:w-13 items-center justify-center rounded-[10px] border border-[#3563f0] bg-[#eef4ff] shadow-sm dark:border-white/10 dark:bg-[#1a2440] transition-transform duration-300 group-hover:scale-105">
          <Pencil className="h-5 w-5 lg:h-5.5 lg:w-5.5 text-[#3563f0]" />
        </div>

        {/* Dot Matrix Grid (Bottom Left) */}
        <span className="absolute left-[2.2%] top-[76%] h-18 w-36 bg-[radial-gradient(circle,#cbdcfd_24%,transparent_26%)] bg-[length:14px_14px] dark:bg-[radial-gradient(circle,#283756_24%,transparent_26%)] pointer-events-none opacity-80" />

        {/* Approved Rectangle Badge (Top Right) */}
        <div className="absolute right-[12.5%] top-[11%] flex items-center gap-3.5 rounded-[10px] border border-[#3563f0] bg-[#f4f8ff] px-5 py-3 shadow-[0_6px_20px_rgba(53,99,240,0.08)] dark:border-white/10 dark:bg-[#101930] transition-transform duration-300 group-hover:-translate-y-1">
          <span className="flex h-5 w-5 lg:h-5.5 lg:w-5.5 items-center justify-center rounded-full bg-[#f5b719]">
            <Check className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-white" strokeWidth={3.5} />
          </span>
          <span className="text-xs lg:text-[12.5px] xl:text-[13px] font-extrabold text-[#000000] dark:text-white">
            Approved
          </span>
        </div>

        {/* Comment Card 2 (Bottom Right) */}
        <div className="absolute right-[7%] top-[63%] flex items-center gap-2.5 rounded-[10px] border border-[#3563f0] bg-[#f4f8ff] px-3.5 py-2 shadow-[0_6px_20px_rgba(53,99,240,0.08)] dark:border-blue-500/50 dark:bg-[#101930] transition-transform duration-300 group-hover:-translate-y-1">
          <span className="flex h-6.5 w-6.5 lg:h-7.5 lg:w-7.5 shrink-0 items-center justify-center rounded-full bg-[#3563f0] text-xs font-bold text-white">
            R
          </span>
          <p className="whitespace-nowrap text-xs lg:text-[12.5px] xl:text-[13px] leading-snug text-[#000000] dark:text-white font-bold">
            <span className="font-bold text-[#000000] dark:text-white">
              Let&apos;s update the headline
            </span>
            <br />
            <span className="font-bold text-[#000000] dark:text-white">
              and make it bolder.
            </span>
          </p>
        </div>

        {/* Center Main Content (Headline, Subtitle, CTA Button) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-7 lg:-translate-y-10 xl:-translate-y-12 px-8 text-center pointer-events-none">
          <div className="pointer-events-auto max-w-[800px] flex flex-col items-center">
            {/* Main Headline */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#101011] dark:text-white">
              Take your creative workflow to
              <br />
              <span className="relative inline-block mt-1 font-serif-italic italic font-medium text-[#3563f0] dark:text-[#5b86ff]">
                the next level!
                {/* Hand drawn double underline SVG */}
                <svg
                  viewBox="0 0 240 16"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-3 lg:h-4 w-full"
                >
                  <path
                    d="M4 6C70 2 170 1 236 5"
                    stroke="#f5c518"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M124 12C174 14 208 13 237 9"
                    stroke="#f5c518"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtitle / Description (Exact 3 lines matching screenshot) */}
            <p className="mt-5 max-w-[840px] text-lg lg:text-xl xl:text-[23px] 2xl:text-[25px] leading-[1.5] text-[#9ca3af] dark:text-zinc-400 font-normal">
              Revolutionise your workflow with the most effective
              <br />
              collaboration tool. Perfect for freelancers, agencies and
              <br />
              marketing teams.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <span className="proofrr-button-shadow inline-flex h-14 lg:h-16 xl:h-[68px] items-center gap-3.5 rounded-full bg-[#3563f0] px-9 lg:px-11 text-base lg:text-lg xl:text-xl font-semibold text-white transition-all duration-300 group-hover:bg-[#2052e5] group-hover:scale-[1.03]">
                Start Free
                <ArrowRight className="h-5.5 w-5.5 lg:h-6.5 lg:w-6.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section
      id="pricing"
      className={cn(
        "w-full flex justify-center px-0 mx-0 relative z-10 overflow-hidden",
        className
      )}
    >
      <DesktopCta />
      <MobileCta />
    </section>
  );
}


