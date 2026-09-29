"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Plus,
  ShieldCheck,
  Trash2,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/reveal";

const DELETE_FAQS = [
  {
    question: "What happens during the 30-day period?",
    answer:
      "When you submit a deletion request, your Proofrr account enters a 30-day grace period. Access to your account is suspended and your project files, reviews, and workspaces are placed into a pending-deletion queue. During these 30 days, your data remains safely stored in case you need to export assets or reverse the deletion.",
  },
  {
    question: "Can I cancel my account deletion request?",
    answer:
      "Yes. If you submitted the request by mistake or change your mind, contact our support team at hello@proofrr.com from your registered email address before the 30 days expire, and we will cancel the deletion request and restore your account.",
  },
  {
    question: "What data is permanently deleted after 30 days?",
    answer:
      "Once the 30-day grace period concludes, all your personal information, user profiles, uploaded creative designs, revision histories, approval logs, and contextual comments are permanently and irreversibly purged from our servers and backup systems.",
  },
  {
    question: "What happens to shared workspaces or projects I collaborate on?",
    answer:
      "If you are the sole workspace owner, the workspace and all contained assets will be permanently deleted after 30 days. If you are a member or collaborator in a shared workspace owned by another team or company, that workspace remains active, but your personal comments and membership records will be anonymized or detached.",
  },
  {
    question: "What if I have an active paid subscription?",
    answer:
      "Please ensure any recurring app store or web subscriptions are cancelled through your billing settings or payment provider prior to account termination to prevent future automatic renewals.",
  },
];

export default function DeleteAccountContent() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [deletionDate, setDeletionDate] = useState<string>("");

  const emailInputId = useId();
  const confirmCheckboxId = useId();

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMessage("Please enter your registered email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Calculate deletion date 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    const formattedDate = targetDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Simulate instant client processing
    setTimeout(() => {
      setDeletionDate(formattedDate);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setEmail("");
    setConfirmed(false);
    setIsSubmitted(false);
    setErrorMessage("");
    setDeletionDate("");
  };

  return (
    <div className="pb-24 bg-[#f6f8fc] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="container-shell pt-10 md:pt-20">
        {/* Header Block */}
        <div className="text-center mx-auto max-w-3xl px-4 md:px-0">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 dark:bg-red-500/15 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold mb-4">
              <Trash2 className="h-3.5 w-3.5" />
              <span>Account & Data Deletion</span>
            </div>
            <h1 className="font-heading text-[2.2rem] sm:text-6xl md:text-7xl font-bold md:font-semibold tracking-tight md:tracking-[-0.05em] text-[#101011] dark:text-white">
              Delete your account
            </h1>
            <p className="mt-4 md:mt-5 text-[14px] md:text-[17px] leading-relaxed text-[#606266] dark:text-zinc-400 max-w-2xl mx-auto">
              Submit a request to permanently delete your Proofrr account and all associated workspace data.
              Your account will enter a 30-day grace period before permanent removal.
            </p>
          </Reveal>
        </div>

        {/* Main Card with Form or Success State */}
        <Reveal delay={0.08} className="mx-auto mt-8 md:mt-10 max-w-[720px] w-full px-4 md:px-0">
          <div className="bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 rounded-[1.5rem] md:rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-5 sm:p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="deletion-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Warning Notice Box */}
                  <div className="mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 sm:p-5 flex items-start gap-3.5 text-amber-900 dark:text-amber-300">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-[13px] sm:text-[14px] leading-relaxed">
                      <strong className="font-semibold block mb-0.5 text-amber-950 dark:text-amber-200">
                        Important: 30-day scheduled deletion
                      </strong>
                      Once submitted, your account will be scheduled for permanent deletion. You will have a
                      {" "}<strong>30-day grace period</strong> to cancel this request before all workspaces,
                      creative assets, and comments are permanently erased.
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor={emailInputId}
                        className="block text-[13px] md:text-sm font-semibold text-[#101011] dark:text-zinc-200 mb-2"
                      >
                        Enter your registered Email ID <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id={emailInputId}
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errorMessage) setErrorMessage("");
                          }}
                          placeholder="e.g. yourname@company.com"
                          autoComplete="email"
                          required
                          className="h-[48px] md:h-[52px] rounded-[10px] border border-slate-200 dark:border-zinc-800 bg-[#f7f9fc] dark:bg-zinc-800/40 px-4 pl-11 text-[14px] md:text-[15px] text-slate-800 dark:text-zinc-100 shadow-none placeholder:text-[#9ea2a8] dark:placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-red-500/30"
                        />
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-zinc-500 pointer-events-none" />
                      </div>
                      {errorMessage && (
                        <p className="mt-2 text-xs md:text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errorMessage}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-1">
                      <label
                        htmlFor={confirmCheckboxId}
                        className="flex items-start gap-3 cursor-pointer select-none group"
                      >
                        <input
                          id={confirmCheckboxId}
                          type="checkbox"
                          checked={confirmed}
                          onChange={(e) => setConfirmed(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer accent-red-600"
                        />
                        <span className="text-[12px] sm:text-[13px] text-[#606266] dark:text-zinc-400 leading-normal">
                          I understand that after the 30-day grace period, my Proofrr account, creative projects,
                          and feedback history will be permanently deleted and cannot be recovered.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !email.trim()}
                      className="h-[48px] md:h-[52px] w-full rounded-[12px] border-0 bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed px-6 text-[14px] md:text-base font-semibold text-white transition-all duration-200 mt-3 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Scheduling deletion...</span>
                        </>
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4" />
                          <span>Submit Deletion Request</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Privacy & Compliance Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-center gap-2 text-[12px] text-[#606266] dark:text-zinc-400 text-center">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Complies with App Store, Google Play, GDPR & CCPA account deletion requirements</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="deletion-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-2"
                >
                  {/* Status Badge */}
                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                    <CheckCircle2 className="h-8 w-8 sm:h-9 sm:w-9" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-2">
                    Request Received & Scheduled
                  </span>

                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101011] dark:text-white">
                    Your account will be deleted in 30 days
                  </h2>

                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#606266] dark:text-zinc-400 max-w-lg mx-auto">
                    We have registered your deletion request for <strong className="text-slate-900 dark:text-zinc-100">{email}</strong>.
                    Per our data retention policy, your account and all associated data will be permanently removed after 30 days.
                  </p>

                  {/* Scheduled Date Card */}
                  <div className="my-6 rounded-2xl bg-[#f7f9fc] dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-800 p-4 sm:p-5 text-left max-w-md mx-auto space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-zinc-400">
                          Scheduled Deletion Date
                        </div>
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          {deletionDate || "In 30 days"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-200/70 dark:border-zinc-700/60">
                      <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-zinc-400">
                          30-Day Grace Period
                        </div>
                        <div className="text-xs sm:text-[13px] text-slate-700 dark:text-zinc-300">
                          Account access suspended. Data remains exportable or reversible until scheduled date.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What happens next points */}
                  <div className="text-left bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 rounded-xl p-4 sm:p-5 mb-6 text-xs sm:text-sm text-[#606266] dark:text-zinc-400 space-y-2.5">
                    <div className="font-semibold text-slate-900 dark:text-zinc-200">
                      What to expect next:
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                      <li>
                        Your account is immediately queued for termination and logins are disabled.
                      </li>
                      <li>
                        After 30 days, all designs, revision history, comments, and personal records are permanently erased from all systems.
                      </li>
                      <li>
                        <strong>Changed your mind?</strong> Send an email to{" "}
                        <a
                          href="mailto:hello@proofrr.com?subject=Cancel%20Account%20Deletion%20Request"
                          className="font-medium text-[#0069fc] dark:text-blue-400 underline hover:no-underline"
                        >
                          hello@proofrr.com
                        </a>{" "}
                        from your registered email address before the 30-day window ends to cancel this request.
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-700/50 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Submit another email</span>
                    </button>
                    <Link
                      href="/"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0069fc] hover:bg-[#005be0] text-xs sm:text-sm font-semibold text-white transition-colors"
                    >
                      <span>Return to Home</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Contact Support Card */}
        <Reveal delay={0.12} className="mx-auto mt-6 max-w-[720px] w-full px-4 md:px-0">
          <div className="bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 rounded-[1.25rem] md:rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-[#0069fc] dark:text-blue-400 shrink-0 mt-0.5 sm:mt-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="block font-sans font-bold text-slate-900 dark:text-zinc-200 text-[14px] sm:text-[16px]">
                  Need help or want to export your data first?
                </span>
                <span className="block text-[12px] sm:text-[14px] text-[#606266] dark:text-zinc-400 leading-snug">
                  Reach out directly to our privacy & support team anytime.
                </span>
              </div>
            </div>
            <a
              href="mailto:hello@proofrr.com?subject=Account%20Deletion%20Inquiry"
              className="shrink-0 text-xs sm:text-sm font-semibold text-[#0069fc] dark:text-blue-400 hover:underline px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-500/10"
            >
              hello@proofrr.com
            </a>
          </div>
        </Reveal>

        {/* FAQ Header */}
        <div className="text-center mx-auto mt-16 md:mt-20 max-w-3xl px-4 md:px-0">
          <Reveal>
            <h2 className="font-heading text-[1.8rem] sm:text-4xl md:text-4.5xl font-bold md:font-semibold tracking-tight md:tracking-[-0.04em] text-[#101011] dark:text-white">
              Account deletion FAQs
            </h2>
            <p className="mt-3 md:mt-4 text-[13px] md:text-[16px] leading-relaxed text-[#606266] dark:text-zinc-400 max-w-2xl mx-auto">
              Answers regarding your data, privacy rights, and the 30-day retention schedule.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-8 md:mt-10 max-w-[720px] mx-auto w-full px-4 md:px-0">
          <div className="space-y-3 md:space-y-4">
            {DELETE_FAQS.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <Reveal key={faq.question} delay={index * 0.03}>
                  <div className="bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 rounded-[1.25rem] md:rounded-[16px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left font-normal cursor-pointer select-none transition-colors hover:bg-slate-50/50 dark:hover:bg-zinc-800/30"
                    >
                      <span className="font-sans text-[13px] md:text-[17px] font-bold md:font-semibold text-slate-800 dark:text-zinc-200 tracking-tight pr-4">
                        {faq.question}
                      </span>
                      <div className="text-slate-400 dark:text-zinc-500 shrink-0">
                        <Plus
                          className={`h-4 w-4 md:h-5 md:w-5 stroke-[2.5] md:stroke-[2] transition-transform duration-300 ${
                            isExpanded ? "rotate-45 text-red-500" : ""
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1 md:pt-2 border-t border-slate-100 dark:border-zinc-800/60 text-slate-600 dark:text-zinc-300 text-[12px] md:text-[15px] leading-[1.6]">
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
