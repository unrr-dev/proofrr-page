"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, Sun, Moon } from "lucide-react";

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (dark: boolean) => {
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-40 pt-4 md:pt-6">
      <div className="container-shell">
        <div className="flex items-center justify-between rounded-[14px] border border-slate-200/50 bg-white/95 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl md:px-6 dark:border-zinc-800/80 dark:bg-black/90 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
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
                  "text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100",
                  isActive(pathname, item.href) && "text-slate-900 font-semibold dark:text-white"
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
              className="text-[15px] font-semibold text-[#3563f0] hover:text-[#254cc9] dark:text-[#3b82f6] dark:hover:text-[#60a5fa]"
            >
              Sign In
            </Link>
            <ProofrrLinkButton
              href={PLATFORM_URL}
              label="Start Free →"
              target="_blank"
              rel="noreferrer"
              withArrow={false}
              className="proofrr-button-shadow h-11 rounded-[10px] border-0 bg-[#3563f0] px-6 text-[15px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_12px_24px_rgba(53,99,240,0.3)] hover:-translate-y-0.5 dark:bg-[#3563f0] dark:hover:shadow-[0_12px_24px_rgba(53,99,240,0.5)]"
            />
            
            {/* Theme Toggle Container */}
            <div className="flex h-11 w-[92px] items-center justify-between rounded-full bg-[#f0f2f6] p-1 border border-slate-200/40 dark:bg-zinc-800 dark:border-zinc-700/60">
              <button
                type="button"
                onClick={() => toggleTheme(false)}
                aria-label="Light theme"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none",
                  !isDark
                    ? "bg-white text-slate-900 shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                    : "text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300"
                )}
              >
                <Sun className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => toggleTheme(true)}
                aria-label="Dark theme"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none",
                  isDark
                    ? "bg-white text-slate-900 shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                    : "text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300"
                )}
              >
                <Moon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme Toggle for Mobile */}
            <div className="flex h-11 w-[92px] items-center justify-between rounded-full bg-[#f0f2f6] p-1 border border-slate-200/40 dark:bg-zinc-800 dark:border-zinc-700/60">
              <button
                type="button"
                onClick={() => toggleTheme(false)}
                aria-label="Light theme"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none",
                  !isDark
                    ? "bg-white text-slate-900 shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                    : "text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300"
                )}
              >
                <Sun className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => toggleTheme(true)}
                aria-label="Dark theme"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none",
                  isDark
                    ? "bg-white text-slate-900 shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                    : "text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300"
                )}
              >
                <Moon className="h-5 w-5" />
              </button>
            </div>

            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e3ff] bg-white/90 text-[#101011] shadow-[0_10px_24px_rgba(16,16,17,0.08)] dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-white dark:shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86vw] border-l border-[#d7e3ff] bg-white p-0 text-[#101011] dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              >
                <SheetHeader className="border-b border-[#eef2fb] px-5 py-6 dark:border-zinc-800/80">
                  <Image
                    src={NAV_LOGO_SRC}
                    alt="Proofrr"
                    width={640}
                    height={288}
                    className="h-auto w-[108px]"
                  />
                  <SheetTitle className="mt-4 text-xl font-semibold dark:text-white">
                    Navigate Proofrr
                  </SheetTitle>
                  <SheetDescription className="text-[#606266] dark:text-zinc-400">
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
                          ? "border-[#cfe0ff] bg-[#f0f5ff] text-[#101011] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                          : "border-transparent bg-[#f7f9fd] text-[#606266] hover:border-[#dce7ff] hover:text-[#101011] dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:text-white"
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
                    className="flex h-12 w-full items-center justify-center rounded-[10px] border border-[#d7e3ff] text-[15px] font-semibold text-[#3563f0] hover:bg-[#f0f5ff] dark:border-zinc-800 dark:text-[#3b82f6] dark:hover:bg-zinc-900"
                  >
                    Sign In
                  </Link>
                  <Link
                    href={PLATFORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "proofrr-button-shadow flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border-0 bg-[#3563f0] text-[15px] font-semibold text-white hover:brightness-105 dark:bg-[#3563f0]"
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
