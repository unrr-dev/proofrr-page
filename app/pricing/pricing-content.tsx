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
    <div className="pb-24 bg-[#f6f8fc] min-h-screen">
      <section className="container-shell pt-14 md:pt-20">
        {/* Title block */}
        <div className="text-center mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7.5xl">
              Simple pricing, no surprises
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[#606266] max-w-2xl mx-auto">
              Choose the plan that fits your team and streamline feedback, approvals, and creative
              collaboration.
            </p>
          </Reveal>
        </div>

        {/* Billing cycle toggle */}
        <div className="mt-10 flex justify-center">
          <Reveal delay={0.05}>
            <div className="bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-1.5 rounded-full inline-flex items-center">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold transition-all text-sm cursor-pointer select-none",
                  billingCycle === "monthly"
                    ? "bg-[#0069fc] text-white shadow-sm"
                    : "text-[#606266] hover:text-slate-800"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold transition-all text-sm cursor-pointer select-none",
                  billingCycle === "yearly"
                    ? "bg-[#0069fc] text-white shadow-sm"
                    : "text-[#606266] hover:text-slate-800"
                )}
              >
                Yearly
              </button>
              <span className="text-[12px] font-semibold text-[#10b981] ml-3 pr-4">
                Save up to 30%
              </span>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards Grid of Flat Figma Exports */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center items-start max-w-[1680px] mx-auto px-4 md:px-6">
          {CARD_ASSETS.map((card, index) => {
            const isPlusPlan = card.name === "Plus Plan";

            return (
              <Reveal key={card.name} delay={index * 0.02} className="flex justify-center">
                <div
                  className={cn(
                    "w-full transition-all duration-300 hover:-translate-y-1 rounded-[16px] overflow-hidden",
                    isPlusPlan ? "md:scale-[1.03]" : ""
                  )}
                >
                  <Image
                    src={card.url}
                    alt={card.name}
                    width={380}
                    height={650}
                    className="w-full h-auto object-contain"
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
