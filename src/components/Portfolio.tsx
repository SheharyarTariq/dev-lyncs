"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

// ─── Shared card chrome helpers ────────────────────────────────────────────────
function CategoryTag({ label }: { label: string }) {
  return (
    <div className="absolute top-4 left-4 z-30">
      <span className="px-3 py-1 rounded-full bg-white/90 text-[10px] uppercase tracking-widest font-semibold text-ink-950">
        {label}
      </span>
    </div>
  );
}

function LiveBadge() {
  return (
    <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      <span className="text-[9px] font-semibold text-white uppercase tracking-wide">Live</span>
    </div>
  );
}

function HoverOverlay() {
  return (
    <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/55 transition-colors duration-500 z-20" />
  );
}

function HoverReveal({
  domain,
  title,
  accentColor = "#0d9488",
}: {
  domain: string;
  title: string;
  accentColor?: string;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-30">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] text-cream-50/60 mb-0.5">{domain}</p>
          <h3 className="font-display text-lg font-semibold text-cream-50 leading-snug">{title}</h3>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: accentColor }}
        >
          <ArrowUpRight size={14} weight="bold" className="text-white" />
        </div>
      </div>
    </div>
  );
}

// ─── MI TALLER FEATURED CARD ───────────────────────────────────────────────────
function MiTallerCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-7"
    >
      <a
        href="https://mitaller.co"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-80"
        aria-label="View Mi Taller project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/mitaller.png"
          alt="Mi Taller — Vehicle workshop directory"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="Web Platform" />
        <LiveBadge />
        <HoverReveal domain="mitaller.co" title="Mi Taller" accentColor="#3B82F6" />
      </a>
    </motion.div>
  );
}

// ─── STRATEGY SHORTCUT CARD ────────────────────────────────────────────────────
function StrategyShortcutCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-5"
    >
      <a
        href="https://strategy-shortcut-omega.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-80"
        aria-label="View Strategy Shortcut project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/strategyshortcut.png"
          alt="Strategy Shortcut — AI strategy chatbot"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="AI Chatbot" />
        <LiveBadge />
        <HoverReveal domain="strategy-shortcut-omega.vercel.app" title="Strategy Shortcut" accentColor="#E8542A" />
      </a>
    </motion.div>
  );
}

// ─── EDUVENTS CARD ─────────────────────────────────────────────────────────────
function EduventCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-4"
    >
      <a
        href="https://eduvents.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-72"
        aria-label="View Eduvents project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/eduvents.png"
          alt="Eduvents — Education events platform"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="Event Platform" />
        <LiveBadge />
        <HoverReveal domain="eduvents.co.uk" title="Eduvents" accentColor="#16a34a" />
      </a>
    </motion.div>
  );
}

// ─── NYF TOURS CARD ────────────────────────────────────────────────────────────
function NYFToursCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-4"
    >
      <a
        href="https://nyf-client-fec2b1621ebb.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-72"
        aria-label="View NYF Tours project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/nyf.png"
          alt="NYF Tours — Travel and holidays platform"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="Travel Platform" />
        <LiveBadge />
        <HoverReveal domain="nyf-client-fec2b1621ebb.herokuapp.com" title="NYF Tours" accentColor="#3b4e9e" />
      </a>
    </motion.div>
  );
}

// ─── ATHADAK CARD ──────────────────────────────────────────────────────────────
function AthadakCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-4"
    >
      <a
        href="https://athatok.vercel.app/home"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-72"
        aria-label="View Athadak project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/athadak.png"
          alt="Athadak — Football challenges platform"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="Sports Platform" />
        <LiveBadge />
        <HoverReveal domain="athatok.vercel.app" title="Athadak" accentColor="#ef4444" />
      </a>
    </motion.div>
  );
}

// ─── TOPNOTEPAD CARD ───────────────────────────────────────────────────────────
function TopNotepadCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-6"
    >
      <a
        href="https://topnotepad.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-72"
        aria-label="View TopNotepad project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/topnotepad.png"
          alt="TopNotepad — SaaS invoicing dashboard"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="SaaS Dashboard" />
        <LiveBadge />
        <HoverReveal domain="topnotepad.com" title="TopNotepad" accentColor="#1b3a6b" />
      </a>
    </motion.div>
  );
}

// ─── RED FARMS CARD ────────────────────────────────────────────────────────────
function REDFarmsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-6"
    >
      <a
        href="https://red-farms.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500 h-72"
        aria-label="View RED Farms project"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/red-farms.png"
          alt="RED Farms — Poultry farm e-commerce site"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <HoverOverlay />
        <CategoryTag label="E-commerce" />
        <LiveBadge />
        <HoverReveal domain="red-farms.com" title="RED Farms" accentColor="#c0392b" />
      </a>
    </motion.div>
  );
}

// ─── SECTION ───────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-cream-100/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-950/12 bg-ink-950/4 mb-5"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-800/60">
                Selected work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-tight tracking-tight text-ink-950"
            >
              Projects we&apos;re
              <br />
              <em className="not-italic text-ink-800/45">proud of.</em>
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors self-start lg:self-auto"
          >
            Start your project
            <span className="w-7 h-7 rounded-full bg-teal-600/10 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={12} weight="bold" />
            </span>
          </motion.a>
        </div>

        {/* Projects grid — 3 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Row 1: Mi Taller (7) + Strategy Shortcut (5) */}
          <MiTallerCard />
          <StrategyShortcutCard />

          {/* Row 2: Eduvents (4) + NYF Tours (4) + Athadak (4) */}
          <EduventCard />
          <NYFToursCard />
          <AthadakCard />

          {/* Row 3: TopNotepad (6) + RED Farms (6) */}
          <TopNotepadCard />
          <REDFarmsCard />
        </div>
      </div>
    </section>
  );
}
