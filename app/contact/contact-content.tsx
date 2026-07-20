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
    <div className="pb-24 bg-[#f6f8fc] min-h-screen">
      <section className="container-shell pt-14 md:pt-20">
        {/* Header Block */}
        <div className="text-center mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7.5xl">
              Get in touch with us
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[#606266] max-w-2xl mx-auto">
              Have questions, need help, or want to discover more about Draft? We&apos;re here to support
              you every step of the way.
            </p>
          </Reveal>
        </div>

        {/* Contact Form Card */}
        <Reveal delay={0.08} className="mx-auto mt-10 max-w-[760px] w-full">
          <div className="bg-white border border-slate-100 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-6 sm:p-8 md:p-10">
            <form className="space-y-5">
              <label className="block space-y-2.5 text-base font-semibold text-[#101011]">
                <span>Name*</span>
                <Input
                  placeholder="Enter your name"
                  className="h-[52px] rounded-[8px] border-0 bg-[#f7f9fc] px-4 text-[15px] text-slate-800 shadow-none placeholder:text-[#9ea2a8] focus-visible:ring-1 focus-visible:ring-blue-500/20"
                />
              </label>

              <label className="block space-y-2.5 text-base font-semibold text-[#101011]">
                <span>Email*</span>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  className="h-[52px] rounded-[8px] border-0 bg-[#f7f9fc] px-4 text-[15px] text-slate-800 shadow-none placeholder:text-[#9ea2a8] focus-visible:ring-1 focus-visible:ring-blue-500/20"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block space-y-2.5 text-base font-semibold text-[#101011]">
                  <span>Company*</span>
                  <Input
                    placeholder="company name here"
                    className="h-[52px] rounded-[8px] border-0 bg-[#f7f9fc] px-4 text-[15px] text-slate-800 shadow-none placeholder:text-[#9ea2a8] focus-visible:ring-1 focus-visible:ring-blue-500/20"
                  />
                </label>
                <label className="block space-y-2.5 text-base font-semibold text-[#101011]">
                  <span>Phone*</span>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    className="h-[52px] rounded-[8px] border-0 bg-[#f7f9fc] px-4 text-[15px] text-slate-800 shadow-none placeholder:text-[#9ea2a8] focus-visible:ring-1 focus-visible:ring-blue-500/20"
                  />
                </label>
              </div>

              <label className="block space-y-2.5 text-base font-semibold text-[#101011]">
                <span>Message*</span>
                <Textarea
                  placeholder="Enter message"
                  className="min-h-[120px] rounded-[8px] border-0 bg-[#f7f9fc] px-4 py-3 text-[15px] text-slate-800 shadow-none placeholder:text-[#9ea2a8] focus-visible:ring-1 focus-visible:ring-blue-500/20 resize-none"
                />
              </label>

              <button
                type="button"
                className="h-[52px] w-full rounded-[8px] border-0 bg-[#0069fc] hover:bg-[#005be0] px-6 text-base font-semibold text-white transition-colors duration-200 mt-2"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-[14px] text-[#606266] mt-6">
              Questions, feedback, or support? Our team&apos;s just a message away.
            </p>
          </div>
        </Reveal>

        {/* Contact Details Card */}
        <Reveal delay={0.12} className="mx-auto mt-6 max-w-[760px] w-full">
          <div className="bg-white border border-slate-100 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-5 flex items-center">
            <div className="mr-4 shrink-0 flex items-center justify-center h-8 w-8">
              <Image
                src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784308321/ic_baseline-mail_nvhjqp.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-slate-800 text-[18px]">
                Get in touch with us
              </span>
              <span className="text-[15px] text-[#606266] mt-0.5 leading-snug">
                Reach out any time and we&apos;ll get back to you.
              </span>
              <a
                href="mailto:hello@proofrr.com"
                className="text-[15px] font-semibold text-[#0069fc] underline mt-1 self-start"
              >
                hello@proofrr.com
              </a>
            </div>
          </div>
        </Reveal>

        {/* FAQ Header */}
        <div className="text-center mx-auto mt-24 max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] text-[#101011] sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#606266]">
              Find quick answers to common questions about Draft.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-12 max-w-[760px] mx-auto w-full px-4 md:px-0">
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <Reveal key={faq.question} delay={index * 0.02}>
                  <div className="bg-white border border-slate-100 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] overflow-hidden transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleSection(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-normal cursor-pointer select-none transition-colors hover:bg-slate-50/40"
                    >
                      <span className="font-sans text-[19px] font-semibold text-slate-800 tracking-tight pr-6">
                        {faq.question}
                      </span>
                      <div className="text-slate-400 shrink-0">
                        <Plus className={`h-6 w-6 stroke-[2] transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-slate-50 text-slate-600 text-[16px] leading-relaxed">
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
