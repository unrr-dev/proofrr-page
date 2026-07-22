"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";

import { NAV_LINKS, PLATFORM_URL } from "@/lib/proofrr-content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProofrrLinkButton } from "@/components/proofrr-link-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LOGO_SRC = "/proofrr/logo-nav.svg";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 pt-4 md:pt-6">
      <div className="container-shell">
        <div className="proofrr-nav-shadow flex items-center justify-between rounded-full border border-[#cfe0ff] bg-[rgba(240,242,246,0.84)] px-3 py-3 backdrop-blur-xl md:px-6">
          <Link
            href="/"
            aria-label="Proofrr home"
            className="inline-flex shrink-0 items-center rounded-full"
          >
            <Image
              src={NAV_LOGO_SRC}
              alt="Proofrr"
              width={640}
              height={288}
              className="h-auto w-[104px] md:w-[112px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium text-[#606266] hover:text-[#101011]",
                  isActive(pathname, item.href) && "text-[#101011]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href={PLATFORM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-[#3563f0] hover:text-[#254cc9]"
            >
              Sign In
            </Link>
            <ProofrrLinkButton
              href={PLATFORM_URL}
              label="Start Free"
              target="_blank"
              rel="noreferrer"
              withArrow
              className="proofrr-button-shadow h-11 rounded-full border-0 bg-[#3563f0] px-6 text-[15px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_12px_24px_rgba(53,99,240,0.3)] hover:-translate-y-0.5"
            />
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e3ff] bg-white/90 text-[#101011] shadow-[0_10px_24px_rgba(16,16,17,0.08)]"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86vw] border-l border-[#d7e3ff] bg-white p-0 text-[#101011]"
              >
                <SheetHeader className="border-b border-[#eef2fb] px-5 py-6">
                  <Image
                    src={NAV_LOGO_SRC}
                    alt="Proofrr"
                    width={640}
                    height={288}
                    className="h-auto w-[108px]"
                  />
                  <SheetTitle className="mt-4 text-xl font-semibold">
                    Navigate Proofrr
                  </SheetTitle>
                  <SheetDescription className="text-[#606266]">
                    Explore the public pages or head straight into the beta.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-5 py-5">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-base font-medium transition-colors",
                        isActive(pathname, item.href)
                          ? "border-[#cfe0ff] bg-[#f0f5ff] text-[#101011]"
                          : "border-transparent bg-[#f7f9fd] text-[#606266] hover:border-[#dce7ff] hover:text-[#101011]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 px-5 pb-6">
                  <Link
                    href={PLATFORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-full items-center justify-center rounded-full border border-[#d7e3ff] text-[15px] font-semibold text-[#3563f0] hover:bg-[#f0f5ff]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href={PLATFORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "proofrr-button-shadow flex h-12 w-full items-center justify-center gap-2 rounded-full border-0 bg-[#3563f0] text-[15px] font-semibold text-white hover:brightness-105"
                    )}
                  >
                    <Sparkles className="h-4 w-4" />
                    Start Free
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
