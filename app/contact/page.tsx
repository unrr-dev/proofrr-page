import type { Metadata } from "next";
import { Mail, PhoneCall } from "lucide-react";

import { FAQ_ITEMS } from "@/lib/proofrr-content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-14 md:pt-20">
        <Reveal className="max-w-3xl">
          <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7xl">
            Get in touch with us
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#606266]">
            Have questions, need help, or want to discover more about Draftr?
            We&apos;re here to support you every step of the way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-white px-6 py-7 shadow-[0_20px_50px_rgba(16,16,17,0.07)] sm:px-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[#2b2b2c]">
                  <span>Name*</span>
                  <Input className="h-12 rounded-2xl border-0 bg-[#f0f2f6] px-4 shadow-none" />
                </label>
                <label className="space-y-2 text-sm font-medium text-[#2b2b2c]">
                  <span>Email*</span>
                  <Input type="email" className="h-12 rounded-2xl border-0 bg-[#f0f2f6] px-4 shadow-none" />
                </label>
                <label className="space-y-2 text-sm font-medium text-[#2b2b2c]">
                  <span>Company*</span>
                  <Input className="h-12 rounded-2xl border-0 bg-[#f0f2f6] px-4 shadow-none" />
                </label>
                <label className="space-y-2 text-sm font-medium text-[#2b2b2c]">
                  <span>Phone*</span>
                  <Input type="tel" className="h-12 rounded-2xl border-0 bg-[#f0f2f6] px-4 shadow-none" />
                </label>
              </div>
              <label className="mt-4 block space-y-2 text-sm font-medium text-[#2b2b2c]">
                <span>Message*</span>
                <Textarea className="min-h-40 rounded-[1.5rem] border-0 bg-[#f0f2f6] px-4 py-4 shadow-none" />
              </label>
              <button
                type="button"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "proofrr-button-shadow mt-6 h-13 rounded-full border-0 bg-[linear-gradient(180deg,#4d7fff_0%,#3563f0_100%)] px-6 text-[15px] font-semibold text-white"
                )}
              >
                Send message
              </button>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06}>
              <div className="rounded-[2rem] bg-[#f0f2f6] px-6 py-7">
                <p className="text-lg leading-8 text-[#606266]">
                  Questions, feedback, or support? Our team&apos;s just a message away.
                </p>
                <h2 className="mt-8 font-heading text-3xl font-semibold text-[#101011]">
                  Get in touch with us
                </h2>
                <a
                  href="mailto:hello@proofrr.com"
                  className="mt-5 flex items-center gap-3 text-lg font-medium text-[#101011]"
                >
                  <Mail className="h-5 w-5 text-[#3563f0]" />
                  hello@proofrr.com
                </a>
                <div className="mt-3 flex items-center gap-3 text-base text-[#606266]">
                  <PhoneCall className="h-5 w-5 text-[#3563f0]" />
                  Questions, support, and early access conversations.
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2rem] bg-white px-6 py-7 shadow-[0_20px_50px_rgba(16,16,17,0.07)]">
                <h2 className="font-heading text-3xl font-semibold text-[#101011]">
                  Frequently asked questions
                </h2>
                <p className="mt-3 text-base leading-7 text-[#606266]">
                  Find quick answers to common questions about Draftr.
                </p>
                <Accordion
                  className="mt-6 gap-3"
                  defaultValue={FAQ_ITEMS[0] ? [FAQ_ITEMS[0].question] : []}
                >
                  {FAQ_ITEMS.map((faq) => (
                    <AccordionItem
                      key={faq.question}
                      value={faq.question}
                      className="rounded-[1.5rem] border-0 bg-[#f0f2f6] px-4 py-1"
                    >
                      <AccordionTrigger className="py-4 text-base font-semibold text-[#101011] hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-base leading-7 text-[#606266]">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
