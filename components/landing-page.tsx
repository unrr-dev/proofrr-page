"use client";

import { useState, useEffect, useRef } from "react";
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.08)_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.06)_0%,_transparent_50%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-x-0 top-0 -z-10 h-[950px] overflow-hidden pointer-events-none">
      {/* Soft Radial Center Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.08)_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(53,99,240,0.06)_0%,_transparent_50%)]" />
      
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
    <div className="pb-0 relative overflow-x-clip">
      <GridBackground />

      <section className="container-shell relative pt-14 md:pt-20">
        <div className="relative px-4 pb-4 pt-6 sm:px-8 md:px-10 md:pb-6 md:pt-10">

          {/* Vaishnavi Card (Slanted) floating next to text */}
          <div className="absolute -right-6 sm:-right-12 md:-right-20 lg:-right-28 xl:-right-36 2xl:-right-48 top-1 sm:top-2 md:top-4 lg:top-6 z-30 hidden md:block w-[140px] sm:w-[165px] lg:w-[195px] xl:w-[220px]">
            {/* Light Mode Card */}
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784298328/Testimonial_Card_4_r5l7ay.png"
              alt="Vaishnavi Review Card"
              width={220}
              height={145}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1 dark:hidden"
            />
            {/* Dark Mode Card */}
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788171013/Testimonial_Card_5_dvdvgq.png"
              alt="Vaishnavi Review Card"
              width={220}
              height={145}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1 hidden dark:block"
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="mt-4 max-w-4xl text-[#101011] dark:text-white font-heading text-[3.5rem] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[5rem] md:text-[6.2rem] flex flex-col items-center">
              <span>Creative Reviews,</span>
              <span className="font-serif-italic font-medium text-[#3563f0] dark:text-[#3b82f6] italic leading-tight">Simplified.</span>
            </h1>

            <Reveal delay={0.3} duration={1} className="mt-6 max-w-2xl">
              <p className="text-base leading-relaxed text-[#606266] dark:text-zinc-400 sm:text-lg">
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
          <div className="absolute -left-12 sm:-left-20 md:-left-28 lg:-left-40 xl:-left-52 2xl:-left-64 top-[1%] -translate-y-1/2 z-0 hidden md:block w-[150px] sm:w-[180px] lg:w-[210px] xl:w-[240px]">
            {/* Light Mode Card */}
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784298354/Testimonial_Card_2_x5ppqh.png"
              alt="Ananya Review Card"
              width={240}
              height={160}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1 dark:hidden"
            />
            {/* Dark Mode Card */}
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788171117/Testimonial_Card_6_vb2vef.png"
              alt="Ananya Review Card"
              width={240}
              height={160}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1 hidden dark:block"
            />
          </div>

          <div className="absolute -right-12 sm:-right-20 md:-right-[168px] lg:-right-[204px] xl:-right-[235px] 2xl:-right-[260px] top-[15%] -translate-y-1/2 z-0 hidden md:block w-[155px] sm:w-[185px] lg:w-[215px] xl:w-[245px]">
            {/* Light Mode Card */}
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784298333/Testimonial_Card_3_drznbn.png"
              alt="Vinay Review Card"
              width={245}
              height={165}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1 dark:hidden"
            />
            {/* Dark Mode Card */}
            <Image
              src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788171123/Testimonial_Card_7_lfkw2o.png"
              alt="Vinay Review Card"
              width={245}
              height={165}
              className="w-full h-auto transition-transform duration-300 hover:-translate-y-1 hidden dark:block"
            />
          </div>

          <Reveal className="relative z-10 overflow-hidden rounded-[2.2rem] border-[6px] border-[#3563f0] bg-slate-900 shadow-[0_30px_70px_rgba(53,99,240,0.15)]">
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
          className="w-full h-auto dark:invert dark:hue-rotate-180"
        />
      </section>

      {/* Features Section */}
      <section className="relative z-10 flex flex-col items-center pt-8 md:pt-24 w-full px-0 mx-0">
        {/* Mobile Features Image */}
        <div className="w-full px-4 md:hidden">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788349216/Frame_13_2_m4som9.png"
            alt="Why Proofrr? Everything you need to review, all in one place."
            width={450}
            height={1200}
            className="w-full h-auto mx-auto dark:invert dark:hue-rotate-180"
          />
        </div>
        {/* Desktop Features Image */}
        <div className="hidden md:block w-full">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788347531/Frame_1000002101_3_wrmv6x.png"
            alt="Why Proofrr? Everything you need to review, all in one place."
            width={1920}
            height={1000}
            className="w-full h-auto dark:invert dark:hue-rotate-180"
          />
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative z-10 flex justify-center pt-0 md:pt-6 w-full px-0 mx-0">
        {/* Mobile Workflow Image - Light Mode */}
        <div className="w-full px-4 md:hidden dark:hidden">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788349235/Flow_of_user_3_jgnswm.png"
            alt="Simplify Your Workflow - Up and running in minutes"
            width={450}
            height={1200}
            className="w-full h-auto mx-auto"
          />
        </div>
        {/* Mobile Workflow Image - Black/Dark Mode */}
        <div className="w-full px-4 hidden dark:max-md:block">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788350444/Flow_of_user_4_pfya20.png"
            alt="Simplify Your Workflow - Up and running in minutes"
            width={450}
            height={1200}
            className="w-full h-auto mx-auto"
          />
        </div>
        {/* Desktop Light Mode Steps Image */}
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712807/Flow_of_user_1_kwfumg.png"
          alt="Simplify Your Workflow - Up and running in minutes"
          width={1920}
          height={600}
          className="w-full h-auto hidden md:block dark:hidden"
        />
        {/* Desktop Dark Mode Steps Image */}
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784813419/Flow_of_user_2_dfyv56.png"
          alt="Simplify Your Workflow - Up and running in minutes"
          width={1920}
          height={600}
          className="w-full h-auto hidden md:dark:block"
        />
      </section>

      <section id="integrations" className="relative z-10 flex flex-col items-center pt-16 md:pt-28 px-4 max-w-[1200px] mx-auto">
        {/* Mobile View Integrations */}
        <div className="w-full flex flex-col items-start text-left md:hidden">
          {/* Mobile Diagram Image - Light Mode */}
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788349336/Proofrr_connections_image_1_dxuhw7.png"
            alt="Proofrr connections diagram"
            width={450}
            height={450}
            className="w-full h-auto mx-auto mb-6 dark:hidden"
          />
          {/* Mobile Diagram Image - Black/Dark Mode */}
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788350180/Proofrr_connections_image_2_mup7ir.png"
            alt="Proofrr connections diagram"
            width={450}
            height={450}
            className="w-full h-auto mx-auto mb-6 hidden dark:block"
          />

          {/* UI Text & Button */}
          <div className="w-full px-1">
            <p className="text-[11px] font-bold tracking-wider text-[#101011] dark:text-zinc-300 uppercase mb-2.5">
              ONE PLATFORM, UNLIMITED INTEGRATIONS
            </p>
            <h2 className="font-heading text-3xl font-bold leading-[1.2] text-[#101011] dark:text-white tracking-tight mb-3">
              <span className="font-serif-italic italic font-medium text-[#3563f0] dark:text-[#3b82f6]">Connect the tools your team</span> already relies on.
            </h2>
            <p className="text-sm leading-relaxed text-[#606266] dark:text-zinc-400 font-normal mb-5 max-w-md">
              Proofrr sits in the middle of your review process so files, calendars, calls, AI tools, and delivery workflows stay connected.
            </p>
            <Link
              href={INTEGRATIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101011] dark:bg-white text-white dark:text-[#101011] text-xs font-semibold shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <span>Explore integrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop View Integrations */}
        <Link
          href={INTEGRATIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-[1200px] hidden md:block transition-transform duration-300 hover:scale-[1.005]"
        >
          {/* Light Mode Integrations */}
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784712581/Frame_101_1_tjwazv.png"
            alt="Proofrr Integrations - Connect the tools your team already relies on"
            width={1200}
            height={550}
            className="w-full h-auto dark:hidden"
          />
          {/* Dark Mode Integrations */}
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788171936/Frame_101_2_ct0ihn.png"
            alt="Proofrr Integrations - Connect the tools your team already relies on"
            width={1200}
            height={550}
            className="w-full h-auto hidden dark:block"
          />
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 flex flex-col items-center pt-8 md:pt-28 w-full px-0 mx-0">
        {/* Mobile Testimonials Image - Light Mode */}
        <div className="w-full px-4 md:hidden dark:hidden">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788349464/Frame_1000002111_ldaybg.png"
            alt="Teams that moved to Proofrr, love it."
            width={450}
            height={1200}
            className="w-full h-auto mx-auto"
          />
        </div>
        {/* Mobile Testimonials Image - Dark Mode */}
        <div className="w-full px-4 hidden dark:max-md:block">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788350409/Frame_1000002111_1_ga8xng.png"
            alt="Teams that moved to Proofrr, love it."
            width={450}
            height={1200}
            className="w-full h-auto mx-auto"
          />
        </div>
        {/* Desktop Testimonials Image */}
        <div className="hidden md:block w-full">
          <Image
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1788348123/Frame_1000002113_2_rhdzip.png"
            alt="Teams that moved to Proofrr, love it."
            width={1920}
            height={960}
            className="w-full h-auto dark:invert dark:hue-rotate-180"
          />
        </div>
      </section>

      <CtaSection className="pt-4 md:pt-6" />
    </div>
  );
}
