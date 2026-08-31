"use client";

import { useState } from "react";
import { Leaf, Zap, Star, Layers, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type BillingCycle = "monthly" | "yearly";

type PlanTier = {
  id: string;
  name: string;
  monthlyPrice: number | null;
  annualMonthlyPrice: number | null;
  description: string;
  ctaText: string;
  ctaClass: string;
  badge?: string;
  icon: typeof Leaf;
  theme: {
    iconBg: string;
    iconText: string;
    checkmark: string;
    border: string;
  };
  features: string[];
  unlimitedAccess: string[];
};

const PLAN_TIERS: PlanTier[] = [
  {
    id: "FREE",
    name: "Free",
    monthlyPrice: 0,
    annualMonthlyPrice: 0,
    description: "For individuals getting started.",
    ctaText: "Start Free",
    ctaClass: "border border-[#93c5fd] bg-white text-[#0060ff] hover:bg-blue-50/40 rounded-[8px]",
    icon: Leaf,
    theme: {
      iconBg: "bg-[#e6f9ed]",
      iconText: "text-[#10b981]",
      checkmark: "text-[#10b981]",
      border: "border border-slate-200/60 dark:border-zinc-800 shadow-[0_0_18px_rgba(0,0,0,0.08)]",
    },
    features: ["3 Users", "100MB Storage", "5 Projects", "3 Briefs"],
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
  {
    id: "LITE",
    name: "Lite",
    monthlyPrice: 45,
    annualMonthlyPrice: 32,
    description: "Everything you need to get more done.",
    ctaText: "Select Plan",
    ctaClass: "bg-[#a21caf] hover:bg-[#86198f] text-white shadow-md shadow-pink-500/20 rounded-[8px]",
    icon: Zap,
    theme: {
      iconBg: "bg-[#f5e8ff]",
      iconText: "text-[#a855f7]",
      checkmark: "text-[#a855f7]",
      border: "border border-slate-200/60 dark:border-zinc-800 shadow-[0_0_18px_rgba(0,0,0,0.08)]",
    },
    features: ["2 Users", "1GB Storage", "2 Projects", "10 Briefs"],
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
  {
    id: "PLUS",
    name: "Plus",
    monthlyPrice: 80,
    annualMonthlyPrice: 56,
    badge: "Most Popular",
    description: "Perfect for small teams and growing business.",
    ctaText: "Select Plan",
    ctaClass: "bg-gradient-to-r from-[#0038b8] via-[#0055ff] to-[#0088ff] hover:opacity-95 text-white shadow-md shadow-blue-500/20 rounded-[8px]",
    icon: Star,
    theme: {
      iconBg: "bg-[#fff2e8]",
      iconText: "text-[#f97316]",
      checkmark: "text-[#f97316]",
      border: "border-2 border-[#0060ff] shadow-[0_0_18px_rgba(0,0,0,0.08)] dark:border-blue-500",
    },
    features: ["3 Users", "50GB Storage", "5 Projects", "40 Briefs"],
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
  {
    id: "PRO",
    name: "Pro",
    monthlyPrice: 150,
    annualMonthlyPrice: 105,
    description: "Advanced feature for productive teams.",
    ctaText: "Select Plan",
    ctaClass: "bg-gradient-to-r from-[#0038b8] via-[#0055ff] to-[#0088ff] hover:opacity-95 text-white shadow-md shadow-blue-500/20 rounded-[8px]",
    icon: Layers,
    theme: {
      iconBg: "bg-[#e8f2ff]",
      iconText: "text-[#0060ff]",
      checkmark: "text-[#0060ff]",
      border: "border border-slate-200/60 dark:border-zinc-800 shadow-[0_0_18px_rgba(0,0,0,0.08)]",
    },
    features: ["10 Users", "500GB Storage", "20 Projects", "200 Briefs"],
    unlimitedAccess: ["Project Manager", "Notepad", "Native Chat"],
  },
  {
    id: "ENTERPRISE",
    name: "Enterprise",
    monthlyPrice: null,
    annualMonthlyPrice: null,
    description: "Custom solutions for large organizations.",
    ctaText: "Talk to Sales",
    ctaClass: "border border-[#f472b6] bg-white text-[#ec4899] hover:bg-pink-50/40 rounded-[8px]",
    icon: ShieldCheck,
    theme: {
      iconBg: "bg-[#fce8f3]",
      iconText: "text-[#ec4899]",
      checkmark: "text-[#ec4899]",
      border: "border border-slate-200/60 dark:border-zinc-800 shadow-[0_0_18px_rgba(0,0,0,0.08)]",
    },
    features: ["100 Users", "1TB Storage", "Unlimited Projects", "Unlimited Briefs"],
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
];

export default function PricingContent() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <div className="pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-10 md:pt-16 max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Title block */}
        <div className="text-center mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101011] dark:text-white leading-[1.1]">
              Simple pricing,<br className="md:hidden" /> no surprises
            </h1>
            <p className="mt-4 md:mt-5 text-[15px] md:text-lg leading-relaxed text-[#475569] dark:text-zinc-300 max-w-2xl mx-auto">
              Choose the plan that fits your team and streamline feedback, approvals, and creative
              collaboration.
            </p>
          </Reveal>
        </div>

        {/* Billing cycle toggle */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <Reveal delay={0.05}>
            <div className="bg-white border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-1.5 rounded-full inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-5 md:px-6 py-2 rounded-full font-semibold transition-all text-xs md:text-sm cursor-pointer select-none",
                  billingCycle === "monthly"
                    ? "bg-[#0060ff] text-white shadow-md shadow-blue-500/20"
                    : "text-[#475569] hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200"
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
                    ? "bg-[#0060ff] text-white shadow-md shadow-blue-500/20"
                    : "text-[#475569] hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200"
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

        {/* Pricing Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 items-start max-w-[1380px] mx-auto px-4 md:px-6">
          {PLAN_TIERS.map((tier, index) => {
            const Icon = tier.icon;
            const isPlus = tier.id === "PLUS";

            let displayPrice = "";
            if (tier.monthlyPrice === null) {
              displayPrice = "Contact Us";
            } else if (billingCycle === "yearly") {
              displayPrice = `$${tier.annualMonthlyPrice}`;
            } else {
              displayPrice = `$${tier.monthlyPrice}`;
            }

            return (
              <Reveal key={tier.id} delay={index * 0.03} className="flex">
                <div
                  className={cn(
                    "relative w-full flex flex-col justify-between rounded-[8px] bg-white dark:bg-zinc-900 transition-all duration-300",
                    isPlus
                      ? "pt-3 px-4 pb-6.5 z-10 shadow-lg translate-y-2"
                      : "p-4",
                    tier.theme.border
                  )}
                >
                  {/* Top Badge for Plus Plan */}
                  {isPlus && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0038b8] via-[#0055ff] to-[#0088ff] text-white text-[12px] font-bold px-7 md:px-8 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Header Icon + Name */}
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                          tier.theme.iconBg,
                          tier.theme.iconText
                        )}
                      >
                        <Icon className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <h3 className="font-bold text-[17px] text-[#0f172a] dark:text-white">
                        {tier.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mt-2">
                      {tier.monthlyPrice !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-[28px] font-bold text-[#0f172a] dark:text-white tracking-tight leading-none">
                            {displayPrice}
                          </span>
                          {billingCycle === "yearly" && (
                            <span className="text-[10px] text-slate-600 font-medium">/mo</span>
                          )}
                        </div>
                      ) : (
                        <span className="text-[20px] font-bold text-[#0f172a] dark:text-white leading-tight block">
                          Contact Us
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-1.5 text-[11.5px] leading-snug text-slate-600 dark:text-zinc-300 min-h-[28px]">
                      {tier.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      type="button"
                      className={cn(
                        "mt-3 w-full py-1.5 px-3 text-[12px] font-bold transition-all duration-200 cursor-pointer text-center",
                        tier.ctaClass
                      )}
                    >
                      {tier.ctaText}
                    </button>

                    {/* Features list */}
                    <div className="mt-3 space-y-2">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-[11.5px] font-semibold text-[#334155] dark:text-zinc-200">
                          <Check className={cn("w-3 h-3 shrink-0 stroke-[2.5]", tier.theme.checkmark)} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Unlimited access section */}
                  <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-zinc-800">
                    <p className="text-[12px] font-bold text-[#0f172a] dark:text-white mb-2">
                      Unlimited access
                    </p>
                    <div className="space-y-2">
                      {tier.unlimitedAccess.map((accessItem) => (
                        <div key={accessItem} className="flex items-center gap-2 text-[11.5px] font-semibold text-[#334155] dark:text-zinc-200">
                          <Check className={cn("w-3 h-3 shrink-0 stroke-[2.5]", tier.theme.checkmark)} />
                          <span>{accessItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
