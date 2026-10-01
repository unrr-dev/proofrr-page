import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquare, Zap, Shield } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Proofrr brings people, projects, and feedback together — so ideas move forward, not in circles.",
};

export default function AboutPage() {
  return (
    <div className="pb-0 overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Feature Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <p className="text-[13px] sm:text-[14px] font-bold text-[#2563eb] dark:text-[#3b82f6] tracking-[0.14em] uppercase mb-4 sm:mb-5">
                ABOUT PROOFRR
              </p>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-bold text-[#0f172a] dark:text-white leading-[1.08] tracking-[-0.03em] mb-5 sm:mb-6">
                Everything in the<br />
                right place for<br />
                <span className="text-[#2563eb] dark:text-[#3b82f6]">creative teams.</span>
              </h1>

              <p className="text-[15px] sm:text-[17px] text-[#64748b] dark:text-zinc-400 leading-[1.65] max-w-[450px] mb-8 sm:mb-11">
                Proofrr brings people, projects, and feedback together — so ideas move
                forward, not in circles.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2">
                {/* 1. One Workspace */}
                <div className="flex flex-col items-start">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#eef4ff] dark:bg-blue-950/60 text-[#2563eb] dark:text-blue-400 flex items-center justify-center mb-3 shadow-xs">
                    <MessageSquare className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-xs sm:text-[14px] font-bold text-[#0f172a] dark:text-white mb-1 leading-tight">
                    One Workspace
                  </h3>
                  <p className="text-[11px] sm:text-[12.5px] text-[#64748b] dark:text-zinc-400 leading-[1.4]">
                    For reviews, feedback and approvals
                  </p>
                </div>

                {/* 2. Built for creatives */}
                <div className="flex flex-col items-start">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#eef4ff] dark:bg-blue-950/60 text-[#2563eb] dark:text-blue-400 flex items-center justify-center mb-3 shadow-xs">
                    <Zap className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-xs sm:text-[14px] font-bold text-[#0f172a] dark:text-white mb-1 leading-tight">
                    Built for creatives
                  </h3>
                  <p className="text-[11px] sm:text-[12.5px] text-[#64748b] dark:text-zinc-400 leading-[1.4]">
                    Who care about speed and clarity.
                  </p>
                </div>

                {/* 3. Secure & private */}
                <div className="flex flex-col items-start">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#eef4ff] dark:bg-blue-950/60 text-[#2563eb] dark:text-blue-400 flex items-center justify-center mb-3 shadow-xs">
                    <Shield className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-xs sm:text-[14px] font-bold text-[#0f172a] dark:text-white mb-1 leading-tight">
                    Secure & private
                  </h3>
                  <p className="text-[11px] sm:text-[12.5px] text-[#64748b] dark:text-zinc-400 leading-[1.4]">
                    Because your works deserve it.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Mockup Image with 3D Floating Pop-up Card Effect */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <Reveal delay={0.1} className="w-full max-w-[660px]">
              <div className="relative rounded-[28px] sm:rounded-[32px] bg-white dark:bg-zinc-900 border border-slate-100/90 dark:border-zinc-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12),0_12px_32px_-8px_rgba(0,0,0,0.06)] dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.16)]">
                <Image
                  src="https://res.cloudinary.com/djxnyqaya/image/upload/v1790875669/ChatGPT_Image_Oct_1_2026_10_57_26_PM_vc3c0k.png"
                  alt="Proofrr Campaign Review Mockup"
                  width={1466}
                  height={1073}
                  className="w-full h-auto rounded-[28px] sm:rounded-[32px]"
                  priority
                  unoptimized
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR PHILOSOPHY (Split: Light Blue Left + White Right) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <Reveal>
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/80 dark:border-zinc-800 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT HALF: Light Blue Background */}
            <div className="lg:col-span-5 bg-[#eaf2fe] dark:bg-blue-950/40 p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center">
              <p className="text-[13px] sm:text-[14px] font-bold text-[#2563eb] dark:text-[#3b82f6] tracking-[0.14em] uppercase mb-4 sm:mb-5">
                OUR PHILOSOPHY
              </p>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0f172a] dark:text-white leading-[1.12] tracking-[-0.02em] mb-5 sm:mb-6">
                Built with<br />
                <span className="text-[#2563eb] dark:text-[#3b82f6]">creators,</span><br />
                for creators.
              </h2>

              <p className="text-[15px] sm:text-base text-[#64748b] dark:text-zinc-300 leading-relaxed max-w-md">
                We believe creative teams deserve tools that remove friction, not add
                to it. That's why every feature in Proofrr is designed to keep your
                ideas moving forward.
              </p>
            </div>

            {/* RIGHT HALF: Crisp White Background with Radar Graphic */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 sm:p-12 md:p-14 lg:p-16 relative flex flex-col justify-center">
              {/* Background Radar Image on Right */}
              <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djxnyqaya/image/upload/v1790870646/ChatGPT_Image_Sep_2_2026_02_18_27_PM_1_l1riej.png"
                  alt="Philosophy Radar Graphic"
                  fill
                  className="object-cover object-right opacity-100 dark:opacity-20"
                  unoptimized
                />
              </div>

              {/* 01, 02, 03 Content List */}
              <div className="relative z-10 space-y-6 max-w-xl">
                {/* 01 Focus over noise */}
                <div className="flex items-start gap-5 sm:gap-6">
                  <span className="text-base sm:text-lg font-bold text-[#2563eb] dark:text-[#3b82f6] w-7 shrink-0">
                    01
                  </span>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0f172a] dark:text-white mb-1">
                      Focus over noise
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#64748b] dark:text-zinc-400 leading-relaxed">
                      No clutter. No unnecessary complexity. Just what you need to
                      create and ship.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-zinc-800" />

                {/* 02 People first */}
                <div className="flex items-start gap-5 sm:gap-6">
                  <span className="text-base sm:text-lg font-bold text-[#2563eb] dark:text-[#3b82f6] w-7 shrink-0">
                    02
                  </span>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0f172a] dark:text-white mb-1">
                      People first
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#64748b] dark:text-zinc-400 leading-relaxed">
                      Collaboration that feels natural, so teams can do their best
                      work together.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-zinc-800" />

                {/* 03 Crafted for speed */}
                <div className="flex items-start gap-5 sm:gap-6">
                  <span className="text-base sm:text-lg font-bold text-[#2563eb] dark:text-[#3b82f6] w-7 shrink-0">
                    03
                  </span>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0f172a] dark:text-white mb-1">
                      Crafted for speed
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#64748b] dark:text-zinc-400 leading-relaxed">
                      From feedback to final delivery, everything happens in one
                      flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* SECTION 3: CTA SECTION */}
      <CtaSection className="pt-8 md:pt-14 relative z-20" />
    </div>
  );
}
