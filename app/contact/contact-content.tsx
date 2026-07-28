"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import { FAQ_ITEMS } from "@/lib/proofrr-content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";

export default function ContactContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-10 md:pt-20">
        {/* Header Block */}
        <div className="text-center mx-auto max-w-3xl px-4 md:px-0">
          <Reveal>
            <h1 className="font-heading text-[2.2rem] sm:text-6xl md:text-7.5xl font-bold md:font-semibold tracking-tight md:tracking-[-0.05em] text-[#101011] dark:text-white">
              Get in touch with us
            </h1>
            <p className="mt-4 md:mt-5 text-[13px] md:text-[17px] leading-relaxed text-[#606266] dark:text-zinc-400 max-w-[280px] md:max-w-2xl mx-auto">
              Have questions, need help, or want to discover more about Draft? We&apos;re here to support
              you every step of the way.
            </p>
          </Reveal>
        </div>

        {/* Contact Form Card */}
        <Reveal delay={0.08} className="mx-auto mt-8 md:mt-10 max-w-[760px] w-full px-4 md:px-0">
          <div className="bg-white dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 rounded-[1.5rem] md:rounded-[16px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-[0_8px_30px_rgba(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] p-5 md:p-8 lg:p-10">
            <form className="space-y-4 md:space-y-5">
              <label className="block space-y-1.5 md:space-y-2.5 text-[13px] md:text-base font-semibold text-[#101011] dark:text-zinc-200">
                <span>Name*</span>
                <Input
                  placeholder="Enter your name"
                  className="h-[44px] md:h-[52px] rounded-[8px] border border-transparent dark:border-zinc-800/80 bg-[#f7f9fc] dark:bg-zinc-800/40 px-4 text-[13px] md:text-[15px] text-slate-800 dark:text-zinc-100 shadow-none placeholder:text-[#9ea2a8] dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500/20"
                />
              </label>

              <label className="block space-y-1.5 md:space-y-2.5 text-[13px] md:text-base font-semibold text-[#101011] dark:text-zinc-200">
                <span>Email*</span>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  className="h-[44px] md:h-[52px] rounded-[8px] border border-transparent dark:border-zinc-800/80 bg-[#f7f9fc] dark:bg-zinc-800/40 px-4 text-[13px] md:text-[15px] text-slate-800 dark:text-zinc-100 shadow-none placeholder:text-[#9ea2a8] dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500/20"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <label className="block space-y-1.5 md:space-y-2.5 text-[13px] md:text-base font-semibold text-[#101011] dark:text-zinc-200">
                  <span>Company*</span>
                  <Input
                    placeholder="company name here"
                    className="h-[44px] md:h-[52px] rounded-[8px] border border-transparent dark:border-zinc-800/80 bg-[#f7f9fc] dark:bg-zinc-800/40 px-4 text-[13px] md:text-[15px] text-slate-800 dark:text-zinc-100 shadow-none placeholder:text-[#9ea2a8] dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500/20"
                  />
                </label>
                <label className="block space-y-1.5 md:space-y-2.5 text-[13px] md:text-base font-semibold text-[#101011] dark:text-zinc-200">
                  <span>Phone*</span>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    className="h-[44px] md:h-[52px] rounded-[8px] border border-transparent dark:border-zinc-800/80 bg-[#f7f9fc] dark:bg-zinc-800/40 px-4 text-[13px] md:text-[15px] text-slate-800 dark:text-zinc-100 shadow-none placeholder:text-[#9ea2a8] dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500/20"
                  />
                </label>
              </div>

              <label className="block space-y-1.5 md:space-y-2.5 text-[13px] md:text-base font-semibold text-[#101011] dark:text-zinc-200">
                <span>Message*</span>
                <Textarea
                  placeholder="Enter message"
                  className="min-h-[100px] md:min-h-[120px] rounded-[8px] border border-transparent dark:border-zinc-800/80 bg-[#f7f9fc] dark:bg-zinc-800/40 px-4 py-3 text-[13px] md:text-[15px] text-slate-800 dark:text-zinc-100 shadow-none placeholder:text-[#9ea2a8] dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500/20 resize-none"
                />
              </label>

              <button
                type="button"
                className="h-[44px] md:h-[52px] w-full rounded-[12px] md:rounded-[8px] border-0 bg-[#0069fc] hover:bg-[#005be0] px-6 text-[14px] md:text-base font-bold md:font-semibold text-white transition-colors duration-200 mt-2 cursor-pointer"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-[11px] md:text-[14px] text-[#606266] dark:text-zinc-400 mt-5 md:mt-6 max-w-[220px] md:max-w-none mx-auto">
              Questions, feedback, or support? Our team&apos;s just a message away.
            </p>
          </div>
        </Reveal>

        {/* Contact Details Card */}
        <Reveal delay={0.12} className="mx-auto mt-4 md:mt-6 max-w-[760px] w-full px-4 md:px-0">
          <div className="bg-white dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 rounded-[1.25rem] md:rounded-[16px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-[0_8px_30px_rgba(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] p-4 md:p-5 flex items-start md:items-center">
            <div className="mr-3 md:mr-4 mt-1 md:mt-0 shrink-0 flex items-center justify-center h-8 w-8 bg-blue-50 dark:bg-blue-500/10 md:bg-transparent md:dark:bg-transparent rounded-full">
              <Image
                src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784308321/ic_baseline-mail_nvhjqp.png"
                alt=""
                width={32}
                height={32}
                className="h-4 w-4 md:h-8 md:w-8 object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-slate-800 dark:text-zinc-200 text-[14px] md:text-[18px]">
                Get in touch with us
              </span>
              <span className="text-[11px] md:text-[15px] text-[#606266] dark:text-zinc-400 mt-0.5 md:mt-0.5 leading-snug">
                Reach out any time and we&apos;ll get back to you.
              </span>
              <a
                href="mailto:hello@proofrr.com"
                className="text-[12px] md:text-[15px] font-semibold text-[#0069fc] dark:text-[#3b82f6] underline mt-1 md:mt-1 self-start"
              >
                hello@proofrr.com
              </a>
            </div>
          </div>
        </Reveal>

        {/* FAQ Header */}
        <div className="text-center mx-auto mt-16 md:mt-24 max-w-3xl px-4 md:px-0">
          <Reveal>
            <h2 className="font-heading text-[1.8rem] sm:text-5xl md:text-4xl font-bold md:font-semibold tracking-tight md:tracking-[-0.04em] text-[#101011] dark:text-white">
              Frequently asked questions
            </h2>
            <p className="mt-3 md:mt-4 text-[13px] md:text-[17px] leading-relaxed text-[#606266] dark:text-zinc-400 max-w-[280px] md:max-w-none mx-auto">
              Find quick answers to common questions about Draft.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-8 md:mt-12 max-w-[760px] mx-auto w-full px-4 md:px-0">
          <div className="space-y-3 md:space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <Reveal key={faq.question} delay={index * 0.02}>
                  <div className="bg-white dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 rounded-[1.25rem] md:rounded-[16px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-[0_8px_30px_rgba(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleSection(index)}
                      className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left font-normal cursor-pointer select-none transition-colors hover:bg-slate-50/40 dark:hover:bg-zinc-800/30"
                    >
                      <span className="font-sans text-[13px] md:text-[19px] font-bold md:font-semibold text-slate-800 dark:text-zinc-200 tracking-tight pr-4 md:pr-6">
                        {faq.question}
                      </span>
                      <div className="text-slate-400 dark:text-zinc-500 shrink-0">
                        <Plus className={`h-4 w-4 md:h-6 md:w-6 stroke-[2.5] md:stroke-[2] transition-transform duration-300 ${isExpanded ? "rotate-45 text-blue-500" : ""}`} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1 md:pt-2 border-t border-slate-50 dark:border-zinc-800/50 text-slate-500 dark:text-zinc-300 text-[12px] md:text-[16px] leading-[1.6] md:leading-relaxed">
                          {faq.answer}
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
