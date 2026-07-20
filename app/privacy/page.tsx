import type { Metadata } from "next";

import { PRIVACY_SECTIONS } from "@/lib/proofrr-content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-14 md:pt-20">
        <Reveal className="max-w-4xl">
          <h1 className="font-heading text-5xl font-semibold tracking-[-0.05em] text-[#101011] sm:text-6xl md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#606266]">
            Welcome to Proofrr. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your information
            when you use our platform.
          </p>
        </Reveal>

        <div className="mt-12 rounded-[2rem] bg-white px-6 py-8 shadow-[0_20px_50px_rgba(16,16,17,0.07)] sm:px-8">
          <div className="space-y-10">
            {PRIVACY_SECTIONS.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.02}>
                <section>
                  <h2 className="font-heading text-3xl font-semibold text-[#101011]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#606266]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
