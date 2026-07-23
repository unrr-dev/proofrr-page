"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import { PRIVACY_SECTIONS } from "@/lib/proofrr-content";
import { Reveal } from "@/components/reveal";

const getSectionMeta = (index: number) => {
  const meta = [
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308191/tabler_file-text-filled_xqmg9y.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308197/boxicons_user-filled_o3jya7.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308204/mage_zap-fill_aa6r7k.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308216/mynaui_sparkles-solid_l3iknm.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308256/mdi_users_aw8kfz.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308268/mdi_shield-check_dlfzzh.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308283/boxicons_clock-3-filled_kqywgs.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308297/ix_user-check-filled_xymuky.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308304/material-symbols_cookie_ajf62s.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308308/mdi_puzzle_axqeqy.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308313/mynaui_baby-solid_yw4hdj.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308317/mdi_file-edit_kovmde.png" },
    { imgSrc: "https://res.cloudinary.com/djxnyqaya/image/upload/v1784308321/ic_baseline-mail_nvhjqp.png" }
  ];
  return meta[index] || meta[0];
};

export default function PrivacyContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-14 md:pt-20">
        <div className="text-center mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] dark:text-white sm:text-6xl md:text-7.5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[#606266] dark:text-zinc-400 max-w-2xl mx-auto">
              Welcome to Proofrr. Your privacy is important to us. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our platform.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-[1440px] mx-auto w-full px-4 md:px-8">
          <div className="space-y-4">
            {PRIVACY_SECTIONS.map((section, index) => {
              const { imgSrc } = getSectionMeta(index);
              const isExpanded = expandedIndex === index;
              const titleWithoutNumber = section.title.replace(/^\d+\.\s+/, "");

              return (
                <Reveal key={section.title} delay={index * 0.01}>
                  <div className="bg-white dark:bg-zinc-900/50 rounded-[16px] border border-slate-100 dark:border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleSection(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-normal cursor-pointer select-none transition-colors hover:bg-slate-50/40 dark:hover:bg-zinc-800/30"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 shrink-0 flex items-center justify-center h-8 w-8">
                          <Image
                            src={imgSrc}
                            alt=""
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                        <span className="font-sans text-[21px] font-semibold text-slate-800 dark:text-zinc-200 tracking-tight">
                          {titleWithoutNumber}
                        </span>
                      </div>
                      <div className="text-slate-400 dark:text-zinc-500">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-zinc-800/50 text-slate-600 dark:text-zinc-300 text-[17px] leading-relaxed">
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
