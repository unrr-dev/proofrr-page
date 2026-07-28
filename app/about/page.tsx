import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquare, Zap, Shield } from "lucide-react";
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
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-14 md:pt-20 flex justify-center hidden md:flex">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784307319/Frame_1000002119_2_mz5gvc.png"
          alt="Built for How Creative Work Actually Happens"
          width={1440}
          height={936}
          className="w-full h-auto dark:invert dark:hue-rotate-180"
          priority
        />
      </section>

      {/* Mobile Section 1: Hero */}
      <section className="w-full px-5 pt-8 md:hidden flex flex-col">
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none">
          <h1 className="text-[2.2rem] font-bold text-slate-900 dark:text-white leading-[1.1] mb-5 tracking-tight">
            Built for How<br />Creative Work<br />Actually Happens
          </h1>
          <p className="text-[15px] leading-relaxed text-slate-500 dark:text-zinc-400 mb-8 max-w-[280px]">
            Proofrr is a creative collaboration and feedback platform designed for freelancers, creative teams, agencies, and growing brands.
          </p>
          <div className="w-full flex justify-center items-center">
             <Image 
               src="https://res.cloudinary.com/djxnyqaya/image/upload/v1785228881/about-hero_1_euhnk0.png" 
               alt="Blobs" 
               width={600}
               height={400} 
               className="w-full h-auto dark:invert dark:hue-rotate-180"
             />
          </div>
        </div>
      </section>

      {/* Section 2: Split columns - Why we built Proofrr */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-0 relative z-10 flex justify-center hidden md:flex">
        <Image
          src="https://res.cloudinary.com/djxnyqaya/image/upload/v1784306774/Frame_1000002125_jjpjlx.png"
          alt="Why we built Proofrr: We didn't build another generic project management tool"
          width={1440}
          height={810}
          className="w-full h-auto dark:invert dark:hue-rotate-180"
          priority
        />
      </section>

      {/* Mobile Section 2: Why we built Proofrr */}
      <section className="w-full px-6 pt-16 pb-0 md:hidden flex flex-col relative z-10">
        <p className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mb-4">
          WHY WE BUILT PROOFRR
        </p>
        <h2 className="text-[2rem] font-bold text-slate-900 dark:text-white leading-[1.15] mb-5 tracking-tight">
          We didn't build another generic project management tool.
        </h2>
        <p className="text-[15px] leading-[1.6] text-slate-500 dark:text-zinc-400 mb-10">
          We built Proofrr to help creative teams escape the chaos of the scattered feedback, endless email threads, and lost revisions - so great can keep moving forward.
        </p>
        
        <div className="flex justify-between items-start mb-10 w-full">
          <div className="flex flex-col items-start max-w-[90px]">
            <MessageSquare className="w-5 h-5 text-blue-500 mb-3" />
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-white mb-1.5 leading-tight">One Workspace</h3>
            <p className="text-[9px] text-slate-500 dark:text-zinc-400 leading-tight">For reviews, feedback and approvals.</p>
          </div>
          
          <div className="flex flex-col items-start max-w-[90px]">
            <Zap className="w-5 h-5 text-blue-500 mb-3" />
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-white mb-1.5 leading-tight">Built for creatives</h3>
            <p className="text-[9px] text-slate-500 dark:text-zinc-400 leading-tight">Who care about speed and clarity.</p>
          </div>
          
          <div className="flex flex-col items-start max-w-[90px]">
            <Shield className="w-5 h-5 text-blue-500 mb-3" />
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-white mb-1.5 leading-tight">Secure & private</h3>
            <p className="text-[9px] text-slate-500 dark:text-zinc-400 leading-tight">Because your work deserves it.</p>
          </div>
        </div>

        <div className="w-full relative mx-auto rounded-[2rem] bg-white dark:bg-transparent overflow-hidden">
          <Image 
            src="https://res.cloudinary.com/djxnyqaya/image/upload/v1785228735/Why_proofrr__a3hkvq.png" 
            alt="Integrations Flow" 
            width={800}
            height={800}
            className="w-full h-auto dark:invert dark:hue-rotate-180" 
          />
        </div>
      </section>

      {/* Section 3: CTA Section */}
      <CtaSection className="pt-0 md:pt-6 -mt-6 md:mt-0 relative z-20" />
    </div>
  );
}
