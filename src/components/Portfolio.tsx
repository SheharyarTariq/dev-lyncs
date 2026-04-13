"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

// ─── PROJECT DATA ──────────────────────────────────────────────────────────────
// Projects 1 & 2 are live. Remaining entries are placeholders — replace image,
// title, category, and href when real project details are available.
const placeholders = [
  {
    id: 3,
    title: "Vanta Labs",
    category: "Development",
    image: "https://picsum.photos/seed/project-vanta/800/500",
    href: "#",
    span: "lg:col-span-4",
    height: "h-72",
  },
  {
    id: 4,
    title: "Luma Studio",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/project-luma/800/500",
    href: "#",
    span: "lg:col-span-4",
    height: "h-72",
  },
  {
    id: 5,
    title: "Crest Finance",
    category: "Web Design",
    image: "https://picsum.photos/seed/project-crest/800/500",
    href: "#",
    span: "lg:col-span-4",
    height: "h-72",
  },
  {
    id: 6,
    title: "Novo Collective",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/project-novo/800/600",
    href: "#",
    span: "lg:col-span-12",
    height: "h-64",
  },
];

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
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500"
        aria-label="View Mi Taller project"
      >
        {/* ── SECTION 1: Hero ─────────────────────────────────────── */}
        <div className="relative bg-[#EEF2FB] overflow-hidden" style={{ height: "220px" }}>

          {/* Navbar */}
          <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 py-2.5 bg-white/85 backdrop-blur-sm border-b border-black/5 z-10">
            <div className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/mitaller-logo.svg" alt="Mi Taller" className="h-4 w-auto" />
              <span className="text-[10px] font-bold text-[#1a3c6b]">Mi Taller</span>
              <span className="ml-1 text-[9px] text-[#1a3c6b]/50">Good Afternoon 👋</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-5 px-2.5 rounded-full border border-[#3B82F6]/30 flex items-center">
                <span className="text-[8px] font-semibold text-[#3B82F6]">Register</span>
              </div>
              <div className="h-5 px-2.5 rounded-full border border-[#3B82F6]/30 flex items-center">
                <span className="text-[8px] font-semibold text-[#3B82F6]">Location</span>
              </div>
              <div className="w-5 h-5 rounded-full border border-black/10 flex items-center justify-center">
                <span className="text-[8px]">🌐</span>
              </div>
            </div>
          </div>

          {/* Headline + search */}
          <div className="absolute top-11 inset-x-0 text-center px-6 z-10">
            <p className="text-[8px] text-[#1a3c6b]/50 mb-0.5">
              We connect users with trusted and verified workshops based on vehicle type or VIN.
            </p>
            <h3 className="text-[13px] font-bold text-[#1a3c6b] leading-tight mb-2">
              Find The <span className="text-[#3B82F6]">Ideal Garage</span> For Your Vehicle
            </h3>
            {/* Search bar */}
            <div className="mx-auto max-w-[280px] bg-white rounded-xl shadow-soft flex items-center gap-1 px-2 py-1.5 border border-black/6">
              <div className="flex flex-col items-start flex-1 min-w-0">
                <span className="text-[7px] font-semibold text-black/50">VIN / Chassisnumber</span>
                <span className="text-[6px] text-black/25">Enter your VIN</span>
              </div>
              <div className="w-px h-5 bg-black/8" />
              <div className="flex flex-col items-start flex-1 min-w-0 px-1">
                <span className="text-[7px] font-semibold text-black/50">Vehicle Type</span>
                <span className="text-[6px] text-black/25">Car, Truck...</span>
              </div>
              <div className="w-px h-5 bg-black/8" />
              <div className="flex flex-col items-start flex-1 min-w-0 px-1">
                <span className="text-[7px] font-semibold text-black/50">Brand</span>
                <span className="text-[6px] text-black/25">Kia, Bentley...</span>
              </div>
              <div className="w-5 h-5 rounded-lg bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px]">⌕</span>
              </div>
            </div>
          </div>

          {/* Car */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/mitaller-car.png"
            alt="Toyota vehicle"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          />
        </div>

        {/* ── SECTION 2: Map ──────────────────────────────────────── */}
        <div className="relative bg-white border-t border-black/5" style={{ height: "110px" }}>
          <div className="px-4 pt-2 pb-1">
            <p className="text-[9px] font-bold text-black/70 text-center">Near By Garages</p>
          </div>
          {/* Map mockup */}
          <div className="mx-4 rounded-lg overflow-hidden border border-black/8" style={{ height: "72px" }}>
            {/* Road grid background */}
            <div className="w-full h-full relative bg-[#F0EBE1]">
              {/* Horizontal roads */}
              <div className="absolute inset-x-0 top-[30%] h-[3px] bg-[#F5C842]/70" />
              <div className="absolute inset-x-0 top-[60%] h-[2px] bg-[#E8C84A]/50" />
              <div className="absolute inset-x-0 top-[80%] h-[1.5px] bg-[#DDD]/60" />
              {/* Vertical roads */}
              <div className="absolute inset-y-0 left-[20%] w-[2px] bg-[#E8C84A]/50" />
              <div className="absolute inset-y-0 left-[45%] w-[3px] bg-[#F5C842]/70" />
              <div className="absolute inset-y-0 left-[70%] w-[2px] bg-[#E8C84A]/50" />
              {/* Water/area patches */}
              <div className="absolute top-0 left-0 w-[15%] h-[40%] bg-[#C9E8F5]/50 rounded-br-lg" />
              <div className="absolute bottom-0 right-[10%] w-[20%] h-[30%] bg-[#C9E8F5]/40 rounded-tl-lg" />
              {/* City labels */}
              <span className="absolute text-[5px] text-black/40 font-medium" style={{top:"8%",left:"60%"}}>Antwerp</span>
              <span className="absolute text-[5px] text-black/40 font-medium" style={{top:"35%",left:"35%"}}>Ghent</span>
              <span className="absolute text-[5px] text-black/40 font-medium" style={{top:"60%",left:"55%"}}>Aalst</span>
              {/* Blue location dot */}
              <div className="absolute" style={{top:"52%",left:"57%"}}>
                <div className="w-3 h-3 rounded-full bg-[#3B82F6] border-2 border-white shadow-md -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 rounded-full bg-[#3B82F6]/25 animate-ping -translate-x-1/2 -translate-y-1/2" />
              </div>
              {/* Zoom controls */}
              <div className="absolute top-1 right-1 flex flex-col gap-px">
                <div className="w-3 h-3 bg-white border border-black/15 rounded-sm flex items-center justify-center shadow-sm">
                  <span className="text-[7px] text-black/50 font-bold leading-none">+</span>
                </div>
                <div className="w-3 h-3 bg-white border border-black/15 rounded-sm flex items-center justify-center shadow-sm">
                  <span className="text-[7px] text-black/50 font-bold leading-none">−</span>
                </div>
              </div>
              {/* Mapbox credit */}
              <span className="absolute bottom-0.5 right-1 text-[4px] text-black/25">© Mapbox © OpenStreetMap</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Garage Cards ─────────────────────────────── */}
        <div className="bg-white border-t border-black/5 px-4 pt-2 pb-3">
          <p className="text-[9px] font-bold text-black/70 text-center mb-2">Near By Garages</p>
          <div className="grid grid-cols-2 gap-2">
            {/* Card 1 */}
            <div className="rounded-lg border border-black/8 overflow-hidden bg-white shadow-soft">
              <div className="h-10 bg-[#2a2a2a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
                <div className="absolute bottom-1 left-1.5">
                  <div className="w-5 h-3 bg-[#c41e1e]/80 rounded-sm" />
                </div>
              </div>
              <div className="px-2 py-1.5">
                <p className="text-[7px] font-bold text-black/80 truncate">ELUPAS - Automotive & Marine</p>
                <p className="text-[6px] text-black/40 mb-1">Car Sales · 42.5 km away</p>
                <div className="flex items-center justify-between">
                  <span className="text-[6px] text-red-500 font-medium">Closed</span>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[7px]">⭐</span>
                    <span className="text-[6px] text-black/50">5</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-lg border border-black/8 overflow-hidden bg-white shadow-soft">
              <div className="h-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-400" />
                <div className="absolute inset-0 flex items-center justify-center gap-1 px-1">
                  <div className="flex-1 h-full bg-slate-300/60 rounded-sm" />
                  <div className="flex-1 h-[80%] bg-slate-400/60 rounded-sm self-end" />
                  <div className="flex-1 h-[60%] bg-slate-300/60 rounded-sm self-end" />
                </div>
              </div>
              <div className="px-2 py-1.5">
                <p className="text-[7px] font-bold text-black/80 truncate">Garage Carrebrouck</p>
                <div className="flex flex-wrap gap-0.5 mb-0.5">
                  <span className="text-[5px] px-1 rounded-full bg-[#3B82F6]/15 text-[#3B82F6] font-medium">Diagnostics</span>
                  <span className="text-[5px] px-1 rounded-full bg-[#3B82F6]/15 text-[#3B82F6] font-medium">Maintenance</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[6px] text-green-500 font-medium">Open</span>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[7px]">⭐</span>
                    <span className="text-[6px] text-black/50">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/55 transition-colors duration-500 z-20" />

        {/* Category tag */}
        <div className="absolute top-4 left-4 z-30">
          <span className="px-3 py-1 rounded-full bg-white/90 text-[10px] uppercase tracking-widest font-semibold text-ink-950">
            Web Platform
          </span>
        </div>

        {/* Live badge */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[9px] font-semibold text-white uppercase tracking-wide">Live</span>
        </div>

        {/* Hover reveal */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-30">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] text-cream-50/60 mb-0.5">mitaller.co</p>
              <h3 className="font-display text-xl font-semibold text-cream-50 leading-snug">Mi Taller</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight size={16} weight="bold" className="text-white" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ─── STRATEGY SHORTCUT FEATURED CARD ──────────────────────────────────────────
const chatItems = [
  "User greeting and conversatio...",
  "Greeting and Conversation Ini...",
  "Business Introduction for Tale...",
  "User greets to start the conve...",
];

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
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500"
        aria-label="View Strategy Shortcut project"
      >
        <div className="relative h-80 bg-white overflow-hidden flex">

          {/* Sidebar */}
          <div className="w-[38%] h-full bg-white border-r border-black/6 flex flex-col flex-shrink-0 p-3 gap-2">
            {/* Logo */}
            <div className="flex items-center gap-2 px-1 pt-1 pb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/strategy-shortcut-wordmark.webp"
                alt="The Strategy Shortcut System"
                className="h-8 w-auto object-contain"
              />
            </div>
            {/* New Chat button */}
            <div className="w-full py-1.5 rounded-lg bg-[#E8542A] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white tracking-wide">New Chat</span>
            </div>
            {/* Chat history */}
            <div className="flex flex-col gap-0.5 mt-1">
              <p className="text-[7px] text-black/30 px-1 mb-0.5 uppercase tracking-widest">Older than last month</p>
              {chatItems.map((item, i) => (
                <div key={i} className="px-2 py-1 rounded-md hover:bg-black/4 transition-colors">
                  <p className="text-[8px] text-black/55 truncate">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main chat area */}
          <div className="flex-1 flex flex-col relative">
            {/* Top bar */}
            <div className="flex items-center justify-end px-3 py-2 border-b border-black/6">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8542A]" />
                <span className="text-[9px] font-semibold text-black/60">Strategy Bot</span>
              </div>
            </div>

            {/* Empty state */}
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <p className="text-[13px] font-bold text-black/80 mb-0.5">Hello there!</p>
              <p className="text-[10px] text-black/40">How can I help you today?</p>
            </div>

            {/* Input bar */}
            <div className="px-3 pb-3">
              <div className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 flex items-center justify-between gap-2 shadow-soft">
                <span className="text-[8px] text-black/25">Send a message...</span>
                <div className="w-5 h-5 rounded-full bg-black/6 flex items-center justify-center">
                  <span className="text-[8px] text-black/30">↑</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/55 transition-colors duration-500 z-20" />

          {/* Category tag */}
          <div className="absolute top-4 left-4 z-30">
            <span className="px-3 py-1 rounded-full bg-white/90 text-[10px] uppercase tracking-widest font-semibold text-ink-950">
              AI Chatbot
            </span>
          </div>

          {/* Live badge */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[9px] font-semibold text-white uppercase tracking-wide">Live</span>
          </div>

          {/* Hover reveal */}
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-30">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[10px] text-cream-50/60 mb-0.5">strategy-shortcut-omega.vercel.app</p>
                <h3 className="font-display text-xl font-semibold text-cream-50 leading-snug">
                  Strategy Shortcut
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E8542A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={16} weight="bold" className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ─── GENERIC PROJECT CARD ──────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof placeholders)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.85,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={project.span}
    >
      <a
        href={project.href}
        className="group block relative overflow-hidden rounded-[2rem] border border-ink-950/8 shadow-soft hover:shadow-soft-lg transition-shadow duration-500"
        aria-label={`View ${project.title} project`}
      >
        <div className={`relative overflow-hidden ${project.height}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/55 transition-colors duration-500" />

          {/* Category tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 text-[10px] uppercase tracking-widest font-semibold text-ink-950">
              {project.category}
            </span>
          </div>

          {/* Hover reveal */}
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="flex items-end justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-cream-50 leading-snug">
                {project.title}
              </h3>
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={16} weight="bold" className="text-white" />
              </div>
            </div>
          </div>
        </div>
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
        <div
          ref={titleRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
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

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Mi Taller — live project */}
          <MiTallerCard />
          {/* Strategy Shortcut — live project */}
          <StrategyShortcutCard />
          {/* Remaining placeholder projects */}
          {placeholders.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
