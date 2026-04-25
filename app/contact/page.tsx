import type { Metadata } from "next";
import { Plus } from "lucide-react";

import { FAQ_ITEMS } from "@/lib/proofrr-content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-[25rem] md:pt-[15rem]">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <h1 className="font-heading text-5xl font-semibold leading-none tracking-[-0.04em] text-[#101011] sm:text-6xl md:text-[4.7rem]">
            Get in touch with us
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#606266]">
            Have questions, need help, or want to discover more about Draftr?
            We&apos;re here to support you every step of the way.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-[560px]">
          <form className="space-y-5">
            <label className="block space-y-3 text-base font-semibold text-[#2b2b2c]">
              <span>Name*</span>
              <Input
                placeholder="Full name"
                className="h-[52px] rounded-full border-0 bg-[#f0f2f6] px-5 text-base shadow-none placeholder:text-[#73757a]"
              />
            </label>
            <label className="block space-y-3 text-base font-semibold text-[#2b2b2c]">
              <span>Email*</span>
              <Input
                type="email"
                placeholder="Email address"
                className="h-[52px] rounded-full border-0 bg-[#f0f2f6] px-5 text-base shadow-none placeholder:text-[#73757a]"
              />
            </label>
            <div className="grid grid-cols-2 gap-5">
              <label className="space-y-3 text-base font-semibold text-[#2b2b2c]">
                <span>Company*</span>
                <Input
                  placeholder="Company here"
                  className="h-[52px] rounded-full border-0 bg-[#f0f2f6] px-5 text-base shadow-none placeholder:text-[#73757a]"
                />
              </label>
              <label className="space-y-3 text-base font-semibold text-[#2b2b2c]">
                <span>Phone*</span>
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="h-[52px] rounded-full border-0 bg-[#f0f2f6] px-5 text-base shadow-none placeholder:text-[#73757a]"
                />
              </label>
            </div>
            <label className="block space-y-3 text-base font-semibold text-[#2b2b2c]">
              <span>Message*</span>
              <Textarea
                placeholder="Enter message"
                className="min-h-[116px] rounded-[1.7rem] border-0 bg-[#f0f2f6] px-5 py-4 text-base shadow-none placeholder:text-[#73757a]"
              />
            </label>
            <button
              type="button"
              className="proofrr-button-shadow h-[52px] w-full rounded-full border-0 bg-[linear-gradient(180deg,#5d91ff_0%,#4274f5_100%)] px-6 text-base font-semibold text-white"
            >
              Send message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-5 max-w-[560px]">
          <p className="text-base font-semibold leading-7 text-[#606266]">
            Questions, feedback, or support? Our team&apos;s just a message away.
          </p>
          <h2 className="mt-20 font-heading text-3xl font-semibold text-[#101011]">
            Get in touch with us
          </h2>
          <a
            href="mailto:hello@proofrr.com"
            className="mt-3 inline-block text-lg font-semibold text-[#101011] underline underline-offset-2"
          >
            hello@proofrr.com
          </a>
        </Reveal>

        <Reveal delay={0.16} className="mx-auto mt-44 max-w-[620px]">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[#101011] sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#606266]">
              Find quick answers to common questions about Draftr.
            </p>
          </div>
          <Accordion className="mt-14 gap-4">
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="rounded-[1.8rem] border-0 bg-[#f0f2f6] px-7 shadow-none data-[open]:rounded-[2rem]"
              >
                <AccordionTrigger
                  className="group py-5 text-left text-base font-semibold leading-7 text-[#101011] hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden"
                >
                  <span>{faq.question}</span>
                  <Plus className="ml-6 h-6 w-6 shrink-0 transition-transform group-aria-expanded:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-8 text-[#606266]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </div>
  );
}
