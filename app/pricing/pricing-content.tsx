"use client";

import { useState, useRef, useEffect } from "react";
import { Leaf, Zap, Star, Layers, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export type ApiPlan = {
  id: number;
  name: string;
  maxStorageBytes: number;
  maxUsers: number;
  maxProjects: number;
  maxBriefs: number;
  maxDocuments: number;
};

type BillingCycle = "monthly" | "yearly";

type TierVisualMeta = {
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
  unlimitedAccess: string[];
};

const DEFAULT_METADATA: Record<string, TierVisualMeta> = {
  FREE: {
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
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
  LITE: {
    name: "Lite",
    monthlyPrice: 15,
    annualMonthlyPrice: 10,
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
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
  PLUS: {
    name: "Plus",
    monthlyPrice: 50,
    annualMonthlyPrice: 38,
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
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
  PRO: {
    name: "Pro",
    monthlyPrice: 100,
    annualMonthlyPrice: 69,
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
    unlimitedAccess: ["Project Manager", "Notepad", "Native Chat"],
  },
  ENTERPRISE: {
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
    unlimitedAccess: ["Project Manager", "Notepad", "Task Tracker"],
  },
};

const INITIAL_PLANS: ApiPlan[] = [
  { id: 1, name: "FREE", maxStorageBytes: 262144000, maxUsers: 1, maxProjects: 2, maxBriefs: 2, maxDocuments: 1 },
  { id: 7, name: "LITE", maxStorageBytes: 1073741824, maxUsers: 2, maxProjects: 2, maxBriefs: 10, maxDocuments: 5 },
  { id: 2, name: "PLUS", maxStorageBytes: 53687091200, maxUsers: 3, maxProjects: 5, maxBriefs: 40, maxDocuments: -1 },
  { id: 3, name: "PRO", maxStorageBytes: 536870912000, maxUsers: 10, maxProjects: 20, maxBriefs: 200, maxDocuments: -1 },
  { id: 4, name: "ENTERPRISE", maxStorageBytes: -1, maxUsers: -1, maxProjects: -1, maxBriefs: -1, maxDocuments: -1 },
];

function formatStorage(bytes: number): string {
  if (bytes === -1) return "Unlimited Storage";
  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) {
    const roundedGb = Math.round(gb * 10) / 10;
    return `${Number.isInteger(roundedGb) ? Math.round(gb) : roundedGb}GB Storage`;
  }
  const mb = bytes / (1024 * 1024);
  return `${Math.round(mb)}MB Storage`;
}

function formatLimit(count: number, singular: string, plural: string): string {
  if (count === -1) return `Unlimited ${plural}`;
  if (count === 1) return `1 ${singular}`;
  return `${count} ${plural}`;
}

function generateFeaturesFromApiPlan(plan: ApiPlan): string[] {
  const features: string[] = [];
  features.push(formatLimit(plan.maxUsers, "User", "Users"));
  features.push(formatStorage(plan.maxStorageBytes));
  features.push(formatLimit(plan.maxProjects, "Project", "Projects"));
  features.push(formatLimit(plan.maxBriefs, "Brief", "Briefs"));

  if (plan.maxDocuments !== undefined && plan.maxDocuments !== null) {
    features.push(formatLimit(plan.maxDocuments, "Document", "Documents"));
  }

  return features;
}

export default function PricingContent() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [apiPlans, setApiPlans] = useState<ApiPlan[]>(INITIAL_PLANS);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadPlans() {
      try {
        let res = await fetch("/api/plans");
        if (!res.ok) {
          res = await fetch("https://api.proofrr.com/api/plans");
        }
        if (res.ok) {
          const data: ApiPlan[] = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setApiPlans(data);
          }
        }
      } catch (err) {
        console.error("Error fetching plans from API:", err);
      }
    }
    loadPlans();
  }, []);

  const PLAN_ORDER = ["FREE", "LITE", "PLUS", "PRO", "ENTERPRISE"];
  const sortedPlans = [...apiPlans].sort((a, b) => {
    const idxA = PLAN_ORDER.indexOf(a.name.toUpperCase());
    const idxB = PLAN_ORDER.indexOf(b.name.toUpperCase());
    return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
  });

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = container.children;
    if (!children.length) return;

    const containerLeft = container.getBoundingClientRect().left;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(children).forEach((child, index) => {
      const childLeft = child.getBoundingClientRect().left;
      const distance = Math.abs(childLeft - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCardIndex(closestIndex);
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveCardIndex(index);
    }
  };

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

        {/* Dynamic Pricing Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="mt-8 md:mt-16 flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 lg:gap-6 items-stretch md:items-start max-w-[1380px] mx-auto px-4 md:px-6 pt-5 pb-6 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid-cols-3 lg:grid-cols-5"
        >
          {sortedPlans.map((plan, index) => {
            const planKey = plan.name.toUpperCase();
            const meta = DEFAULT_METADATA[planKey] || {
              name: plan.name,
              monthlyPrice: null,
              annualMonthlyPrice: null,
              description: "Custom plan details.",
              ctaText: "Select Plan",
              ctaClass: "bg-[#0060ff] text-white rounded-[8px]",
              icon: Zap,
              theme: {
                iconBg: "bg-[#e8f2ff]",
                iconText: "text-[#0060ff]",
                checkmark: "text-[#0060ff]",
                border: "border border-slate-200/60 dark:border-zinc-800 shadow-[0_0_18px_rgba(0,0,0,0.08)]",
              },
              unlimitedAccess: ["Project Manager", "Notepad"],
            };

            const Icon = meta.icon;
            const isPlus = planKey === "PLUS";
            const features = generateFeaturesFromApiPlan(plan);

            let displayPrice = "";
            if (meta.monthlyPrice === null) {
              displayPrice = "Contact Us";
            } else if (billingCycle === "yearly") {
              displayPrice = `$${meta.annualMonthlyPrice}`;
            } else {
              displayPrice = `$${meta.monthlyPrice}`;
            }

            return (
              <Reveal
                key={plan.id}
                delay={index * 0.03}
                className="flex shrink-0 snap-center w-[70vw] max-w-[240px] sm:w-[240px] md:max-w-none md:w-auto md:shrink md:snap-align-none h-auto"
              >
                <div
                  className={cn(
                    "relative w-full flex flex-col justify-between rounded-[8px] bg-white dark:bg-zinc-900 transition-all duration-300",
                    isPlus
                      ? "pt-3 px-3.5 pb-5 md:pb-6.5 z-10 shadow-lg md:translate-y-2"
                      : "p-3.5 md:p-4",
                    meta.theme.border
                  )}
                >
                  {/* Top Badge */}
                  {meta.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0038b8] via-[#0055ff] to-[#0088ff] text-white text-[12px] font-bold px-7 md:px-8 py-1.5 rounded-full shadow-md whitespace-nowrap z-20">
                      {meta.badge}
                    </div>
                  )}

                  <div>
                    {/* Header Icon + Name */}
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                          meta.theme.iconBg,
                          meta.theme.iconText
                        )}
                      >
                        <Icon className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <h3 className="font-bold text-[17px] text-[#0f172a] dark:text-white">
                        {meta.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mt-2">
                      {meta.monthlyPrice !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-[28px] font-bold text-[#0f172a] dark:text-white tracking-tight leading-none">
                            {displayPrice}
                          </span>
                          <span className="text-[10px] text-slate-600 font-medium">/mo</span>
                        </div>
                      ) : (
                        <span className="text-[20px] font-bold text-[#0f172a] dark:text-white leading-tight block">
                          Contact Us
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-1.5 text-[11.5px] leading-snug text-slate-600 dark:text-zinc-300 min-h-[28px]">
                      {meta.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      type="button"
                      className={cn(
                        "mt-3 w-full py-1.5 px-3 text-[12px] font-bold transition-all duration-200 cursor-pointer text-center",
                        meta.ctaClass
                      )}
                    >
                      {meta.ctaText}
                    </button>

                    {/* Dynamic API Features list */}
                    <div className="mt-3 space-y-2">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-[11.5px] font-semibold text-[#334155] dark:text-zinc-200">
                          <Check className={cn("w-3 h-3 shrink-0 stroke-[2.5]", meta.theme.checkmark)} />
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
                      {meta.unlimitedAccess.map((accessItem) => (
                        <div key={accessItem} className="flex items-center gap-2 text-[11.5px] font-semibold text-[#334155] dark:text-zinc-200">
                          <Check className={cn("w-3 h-3 shrink-0 stroke-[2.5]", meta.theme.checkmark)} />
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

        {/* Mobile Swipe Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-2">
          {sortedPlans.map((plan, index) => {
            const planKey = plan.name.toUpperCase();
            const meta = DEFAULT_METADATA[planKey];
            const name = meta ? meta.name : plan.name;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => scrollToCard(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeCardIndex === index
                    ? "w-6 bg-[#0060ff]"
                    : "w-2 bg-slate-300 dark:bg-zinc-700"
                )}
                aria-label={`Go to ${name} plan`}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
