"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type BillingCycle = "monthly" | "yearly";

type CardAsset = {
  name: string;
  url: string;
};

const CARD_ASSETS: CardAsset[] = [
  {
    name: "Free Plan",
    url: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784311073/Frame_630_ce3xun.png",
  },
  {
    name: "Lite Plan",
    url: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784311056/Frame_637_lixyse.png",
  },
  {
    name: "Plus Plan",
    url: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784311030/Frame_1000002114_1_z9eb1z.png",
  },
  {
    name: "Pro Plan",
    url: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784311095/Frame_639_qrmycm.png",
  },
  {
    name: "Enterprise Plan",
    url: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784311113/Frame_640_sjoeyh.png",
  },
];

export default function PricingContent() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <div className="pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-10 md:pt-16">
        {/* Title block */}
        <div className="text-center mx-auto max-w-3xl px-4">
          <Reveal>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#101011] dark:text-white leading-[1.1]">
              Simple pricing,<br className="md:hidden" /> no surprises
            </h1>
            <p className="mt-4 md:mt-5 text-[15px] md:text-lg leading-relaxed text-[#606266] dark:text-zinc-400 max-w-2xl mx-auto">
              Choose the plan that fits your team and streamline feedback, approvals, and creative
              collaboration.
            </p>
          </Reveal>
        </div>

        {/* Billing cycle toggle */}
        <div className="mt-8 md:mt-10 flex justify-center px-4">
          <Reveal delay={0.05}>
            <div className="bg-white border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-1.5 rounded-full inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-5 md:px-6 py-2 rounded-full font-semibold transition-all text-xs md:text-sm cursor-pointer select-none",
                  billingCycle === "monthly"
                    ? "bg-[#0069fc] text-white shadow-md shadow-blue-500/20"
                    : "text-[#606266] hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-4 md:px-5 py-2 rounded-full font-semibold transition-all text-xs md:text-sm cursor-pointer select-none flex items-center gap-2",
                  billingCycle === "yearly"
                    ? "bg-[#0069fc] text-white shadow-md shadow-blue-500/20"
                    : "text-[#606266] hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                <span>Yearly</span>
                <span
                  className={cn(
                    "text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 whitespace-nowrap",
                    billingCycle === "yearly"
                      ? "bg-emerald-400 text-zinc-950 shadow-sm"
                      : "bg-emerald-50 dark:bg-emerald-950/50 text-[#10b981]"
                  )}
                >
                  Save up to 30%
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards Grid / Horizontal Scroll on Mobile */}
        <div className="mt-10 md:mt-14 flex md:grid overflow-x-auto snap-x snap-mandatory md:overflow-visible flex-nowrap md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 justify-start md:justify-center items-stretch max-w-[1480px] mx-auto px-4 md:px-6 pb-12 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CARD_ASSETS.map((card, index) => {
            const isPlusPlan = card.name === "Plus Plan";

            return (
              <Reveal key={card.name} delay={index * 0.02} className="flex justify-center shrink-0 snap-center w-[270px] sm:w-[300px] md:w-full">
                <div
                  className={cn(
                    "w-full transition-all duration-300 hover:-translate-y-1 rounded-[1.25rem] md:rounded-[16px] overflow-hidden",
                    isPlusPlan ? "scale-[1.03] md:scale-[1.04] z-10" : ""
                  )}
                >
                  <Image
                    src={card.url}
                    alt={card.name}
                    width={400}
                    height={680}
                    className="w-full h-auto object-contain dark:invert dark:hue-rotate-180 drop-shadow-sm"
                    priority={index < 3}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
