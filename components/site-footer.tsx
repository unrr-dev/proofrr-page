import Image from "next/image";
import Link from "next/link";

import {
  FOOTER_ALL_PAGES,
  FOOTER_QUICK_LINKS,
  SOCIAL_LINKS,
} from "@/lib/proofrr-content";

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-[#0e0f11] text-white">
      <div className="container-shell">
        <div className="bg-[#0e0f11] px-4 py-10 sm:px-8 sm:py-14">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.35fr_0.85fr_0.85fr]">
            <div className="space-y-6">
              <div className="w-[140px] sm:w-[186px]">
                <Image
                  src="/proofrr/logo-footer.svg"
                  alt="Proofrr"
                  width={186}
                  height={60}
                  className="w-full"
                  style={{ height: "auto" }}
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-normal text-[#888888]">Follow us on:</p>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href="https://www.instagram.com/helloproofrr/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#f2f4f8] text-black transition-transform hover:scale-105 shadow-sm"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/proofrr/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#f2f4f8] text-black transition-transform hover:scale-105 shadow-sm"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://x.com/HelloProofrr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#f2f4f8] text-black transition-transform hover:scale-105 shadow-sm"
                  >
                    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-lg sm:text-2xl font-bold tracking-tight">Quick Links</h2>
              <div className="mt-4 space-y-2.5 text-sm sm:text-base text-[#a7a7a7]">
                {FOOTER_QUICK_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} className="block hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-lg sm:text-2xl font-bold tracking-tight">All Pages</h2>
              <div className="mt-4 space-y-2.5 text-sm sm:text-base text-[#a7a7a7]">
                {FOOTER_ALL_PAGES.map((item) => (
                  <Link key={item.href} href={item.href} className="block hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
