"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  UserCheck, 
  ShieldCheck, 
  Share2, 
  Layers, 
  Sparkles, 
  CreditCard, 
  Database, 
  Ban, 
  Activity, 
  AlertCircle, 
  Mail 
} from "lucide-react";

import { TERMS_SECTIONS } from "@/lib/proofrr-content";
import { Reveal } from "@/components/reveal";

const SECTION_ICONS = [
  FileText,
  UserCheck,
  ShieldCheck,
  Share2,
  Layers,
  Sparkles,
  CreditCard,
  Database,
  Ban,
  Activity,
  AlertCircle,
  Mail,
];

export default function TermsContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pb-12 md:pb-24 bg-[#fbfbfe] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-10 md:pt-14 lg:pt-20">
        <div className="text-center mx-auto max-w-3xl px-4 md:px-0">
          <Reveal>
            <h1 className="font-heading text-[2.2rem] md:text-7.5xl font-bold md:font-semibold tracking-tight md:tracking-[-0.05em] text-slate-900 md:text-[#101011] dark:text-white mb-4 md:mb-0">
              Terms & Conditions
            </h1>
            <p className="text-[13px] md:text-[17px] leading-relaxed text-slate-500 md:text-[#606266] dark:text-zinc-400 max-w-2xl mx-auto mb-10 md:mb-0 md:mt-5">
              Welcome to Proofrr. Please read these Terms & Conditions carefully
              before using our creative proofing and collaboration platform.
            </p>
          </Reveal>
        </div>

        <div className="max-w-[800px] md:max-w-[1440px] mx-auto w-full px-4 md:px-8 md:mt-14">
          <div className="space-y-3 md:space-y-4">
            {TERMS_SECTIONS.map((section, index) => {
              const IconComponent = SECTION_ICONS[index % SECTION_ICONS.length] || FileText;
              const isExpanded = expandedIndex === index;
              const titleWithoutNumber = section.title.replace(/^\d+\.\s+/, "");

              return (
                <Reveal key={section.title} delay={index * 0.01}>
                  <div className="bg-white dark:bg-zinc-900/50 rounded-[1.25rem] md:rounded-[16px] border border-slate-100 dark:border-zinc-800/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-[0_8px_30px_rgba(0,0,0,0.015)] dark:md:shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleSection(index)}
                      className="w-full px-4 md:px-6 py-3.5 md:py-5 flex items-center justify-between text-left font-normal cursor-pointer select-none transition-colors hover:bg-slate-50/40 dark:hover:bg-zinc-800/30"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 md:mr-4 shrink-0 flex items-center justify-center h-9 w-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                          <IconComponent className="h-5 w-5 stroke-[2]" />
                        </div>
                        <span className="font-sans text-[14px] md:text-[21px] font-bold md:font-semibold text-slate-900 md:text-slate-800 dark:text-zinc-200 tracking-tight">
                          {titleWithoutNumber}
                        </span>
                      </div>
                      <div className="text-slate-400 dark:text-zinc-500">
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 md:h-5 md:w-5 stroke-[2.5] text-blue-500 md:text-slate-400 dark:md:text-zinc-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 md:h-5 md:w-5 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 md:px-6 pb-5 md:pb-6 pt-1 md:pt-2 md:border-t md:border-slate-50 md:dark:border-zinc-800/50 text-slate-600 dark:text-zinc-300 text-[13px] md:text-[17px] leading-[1.6] md:leading-relaxed">
                          <div className="space-y-3">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
