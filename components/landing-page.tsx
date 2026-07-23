"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Play, Star, MessageSquare, Sparkles, Zap, LayoutGrid, CloudUpload, CheckCircle } from "lucide-react";

import {
  HERO_DEMO_VIDEO_URL,
  HOME_FEATURES,
  INTEGRATIONS,
  INTEGRATIONS_URL,
  MAJOR_BENEFITS,
  MINOR_BENEFITS,
  PLATFORM_URL,
  STEP_ITEMS,
  WORKFLOWS,
} from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CtaSection } from "@/components/cta-section";
import { ProofrrDemoVideo } from "@/components/proofrr-demo-video";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";



const SHADED_CELLS = [
  { r: 1, c: 3 },
  { r: 1, c: 11 },
  { r: 2, c: 6 },
  { r: 3, c: 2 },
  { r: 3, c: 9 },
  { r: 4, c: 13 },
  { r: 5, c: 5 },
  { r: 5, c: 11 },
  { r: 6, c: 1 },
  { r: 7, c: 7 },
  { r: 7, c: 12 },
  { r: 8, c: 4 },
  { r: 9, c: 10 },
];

function GridBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-x-0 top-0 -z-10 h-[950px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.12)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.22)_0%,_transparent_60%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-x-0 top-0 -z-10 h-[950px] overflow-hidden pointer-events-none">
      {/* Soft Radial Center Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.12)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.22)_0%,_transparent_60%)]" />
      
      {/* Grid lines & Shaded cells */}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,_black_30%,_transparent_75%)] opacity-90 flex justify-center">
        <div 
          className="w-[1520px] h-[950px] grid border-l border-t border-slate-300/40 dark:border-zinc-800/60"
          style={{ gridTemplateColumns: "repeat(16, minmax(0, 1fr))", gridTemplateRows: "repeat(10, minmax(0, 1fr))" }}
        >
          {Array.from({ length: 160 }).map((_, index) => {
            const row = Math.floor(index / 16);
            const col = index % 16;
            const isShaded = SHADED_CELLS.some((cell) => cell.r === row && cell.c === col);

            return (
              <div
                key={index}
                className={cn(
                  "aspect-square border-r border-b border-slate-300/40 dark:border-zinc-800/60 transition-colors",
                  isShaded ? "bg-slate-300/45 dark:bg-zinc-700/35" : ""
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="pb-0 relative overflow-hidden">
      <GridBackground />

      <section className="container-shell relative pt-14 md:pt-20">
        <div className="relative px-4 pb-4 pt-6 sm:px-8 md:px-10 md:pb-6 md:pt-10">

          {/* Vaishnavi Card (Slanted) floating next to text */}
          <div className="absolute -right-8 xl:-right-20 top-8 z-30 hidden lg:block w-[140px] xl:w-[180px]">
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784298328/Testimonial_Card_4_r5l7ay.png"
              alt="Vaishnavi Review Card"
              width={180}
              height={120}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1"
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="mt-4 max-w-4xl text-[#101011] font-heading text-[3.5rem] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[5rem] md:text-[6.2rem] flex flex-col items-center">
              <span>Creative Reviews,</span>
              <span className="font-serif-italic font-medium text-[#3563f0] italic leading-tight">Simplified.</span>
            </h1>

            <Reveal delay={0.3} duration={1} className="mt-6 max-w-2xl">
              <p className="text-base leading-relaxed text-[#606266] sm:text-lg">
                Review, comment, approve, and deliver creative work faster. Bring
                feedback, approvals, AI insights, files, and conversations into
                one organized workspace.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell pt-10 md:pt-14 relative z-20">
        <div className="relative mx-auto w-full max-w-[920px]">
          {/* Floating Cards (Figma Mockup Images) */}
          <div className="absolute -left-20 top-[45%] -translate-y-1/2 z-30 hidden xl:block w-[180px]">
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784298354/Testimonial_Card_2_x5ppqh.png"
              alt="Ananya Review Card"
              width={180}
              height={120}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1"
            />
          </div>

          <div className="absolute -right-20 top-[55%] -translate-y-1/2 z-30 hidden xl:block w-[190px]">
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784298333/Testimonial_Card_3_drznbn.png"
              alt="Vinay Review Card"
              width={190}
              height={130}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1"
            />
          </div>

          <Reveal className="overflow-hidden rounded-[2.2rem] border-[6px] border-[#3563f0] bg-slate-900 shadow-[0_30px_70px_rgba(53,99,240,0.15)]">
            <ProofrrDemoVideo
              src={HERO_DEMO_VIDEO_URL}
              poster="/proofrr/dashboard.png"
            />
          </Reveal>
        </div>
      </section>

      {/* Core Benefits Row */}
      <section className="w-full py-8 md:py-12 relative z-10 flex justify-center px-0 mx-0">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712373/Frame_4_1_cqnvt0.png"
          alt="Proofrr Benefits: Faster Feedback, Clear Approvals, AI-powered Summaries, Real-time Comments"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </section>

      <section className="relative z-10 flex justify-center pt-16 md:pt-24 w-full px-0 mx-0">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712430/Frame_1000002101_1_sofvwl.png"
          alt="Why Proofrr? Everything you need to review, all in one place."
          width={1920}
          height={1000}
          className="w-full h-auto"
        />
      </section>

      <section className="relative z-10 flex justify-center pt-4 md:pt-6 w-full px-0 mx-0">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712807/Flow_of_user_1_kwfumg.png"
          alt="Simplify Your Workflow - Up and running in minutes"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </section>

      <section id="integrations" className="relative z-10 flex justify-center pt-20 md:pt-28 px-4">
        <Link
          href={INTEGRATIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-[1200px] block transition-transform duration-300 hover:scale-[1.005]"
        >
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712581/Frame_101_1_tjwazv.png"
            alt="Proofrr Integrations - Connect the tools your team already relies on"
            width={1200}
            height={550}
            className="w-full h-auto"
          />
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 flex justify-center pt-20 md:pt-28 w-full px-0 mx-0">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712689/Frame_1000002113_1_qogfsq.png"
          alt="Teams that moved to Proofrr, love it."
          width={1920}
          height={960}
          className="w-full h-auto"
        />
      </section>

      <CtaSection className="pt-4 md:pt-6" />
    </div>
  );
}
