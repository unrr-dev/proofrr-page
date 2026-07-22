import type { Metadata } from "next";
import Image from "next/image";
import { PLATFORM_URL } from "@/lib/proofrr-content";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="pb-0">
      {/* Section 1: Top Hero Card */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-14 md:pt-20 flex justify-center">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784307319/Frame_1000002119_2_mz5gvc.png"
          alt="Built for How Creative Work Actually Happens"
          width={1440}
          height={936}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Section 2: Split columns - Why we built Proofrr */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-0 relative z-10 flex justify-center">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784306774/Frame_1000002125_jjpjlx.png"
          alt="Why we built Proofrr: We didn't build another generic project management tool"
          width={1440}
          height={810}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Section 3: CTA Section */}
      <CtaSection className="pt-4 md:pt-6" />
    </div>
  );
}
