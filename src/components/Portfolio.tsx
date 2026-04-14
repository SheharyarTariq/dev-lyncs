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
          <div className="mx-4 rounded-lg overflow-hidden border border-black/8" style={{ height: "72px" }}>
            <div className="w-full h-full relative bg-[#F0EBE1]">
              <div className="absolute inset-x-0 top-[30%] h-[3px] bg-[#F5C842]/70" />
              <div className="absolute inset-x-0 top-[60%] h-[2px] bg-[#E8C84A]/50" />
              <div className="absolute inset-x-0 top-[80%] h-[1.5px] bg-[#DDD]/60" />
              <div className="absolute inset-y-0 left-[20%] w-[2px] bg-[#E8C84A]/50" />
              <div className="absolute inset-y-0 left-[45%] w-[3px] bg-[#F5C842]/70" />
              <div className="absolute inset-y-0 left-[70%] w-[2px] bg-[#E8C84A]/50" />
              <div className="absolute top-0 left-0 w-[15%] h-[40%] bg-[#C9E8F5]/50 rounded-br-lg" />
              <div className="absolute bottom-0 right-[10%] w-[20%] h-[30%] bg-[#C9E8F5]/40 rounded-tl-lg" />
              <span className="absolute text-[5px] text-black/40 font-medium" style={{ top: "8%", left: "60%" }}>Antwerp</span>
              <span className="absolute text-[5px] text-black/40 font-medium" style={{ top: "35%", left: "35%" }}>Ghent</span>
              <span className="absolute text-[5px] text-black/40 font-medium" style={{ top: "60%", left: "55%" }}>Aalst</span>
              <div className="absolute" style={{ top: "52%", left: "57%" }}>
                <div className="w-3 h-3 rounded-full bg-[#3B82F6] border-2 border-white shadow-md -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 rounded-full bg-[#3B82F6]/25 animate-ping -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute top-1 right-1 flex flex-col gap-px">
                <div className="w-3 h-3 bg-white border border-black/15 rounded-sm flex items-center justify-center shadow-sm">
                  <span className="text-[7px] text-black/50 font-bold leading-none">+</span>
                </div>
                <div className="w-3 h-3 bg-white border border-black/15 rounded-sm flex items-center justify-center shadow-sm">
                  <span className="text-[7px] text-black/50 font-bold leading-none">−</span>
                </div>
              </div>
              <span className="absolute bottom-0.5 right-1 text-[4px] text-black/25">© Mapbox © OpenStreetMap</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Garage Cards ─────────────────────────────── */}
        <div className="bg-white border-t border-black/5 px-4 pt-2 pb-3">
          <p className="text-[9px] font-bold text-black/70 text-center mb-2">Near By Garages</p>
          <div className="grid grid-cols-2 gap-2">
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

        <HoverOverlay />
        <CategoryTag label="Web Platform" />
        <LiveBadge />
        <HoverReveal domain="mitaller.co" title="Mi Taller" accentColor="#3B82F6" />
      </a>
    </motion.div>
  );
}

// ─── STRATEGY SHORTCUT CARD ────────────────────────────────────────────────────
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
            <div className="flex items-center gap-2 px-1 pt-1 pb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/strategy-shortcut-wordmark.webp" alt="Strategy Shortcut" className="h-8 w-auto object-contain" />
            </div>
            <div className="w-full py-1.5 rounded-lg bg-[#E8542A] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white tracking-wide">New Chat</span>
            </div>
            <div className="flex flex-col gap-0.5 mt-1">
              <p className="text-[7px] text-black/30 px-1 mb-0.5 uppercase tracking-widest">Older than last month</p>
              {chatItems.map((item, i) => (
                <div key={i} className="px-2 py-1 rounded-md hover:bg-black/4 transition-colors">
                  <p className="text-[8px] text-black/55 truncate">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Main */}
          <div className="flex-1 flex flex-col relative">
            <div className="flex items-center justify-end px-3 py-2 border-b border-black/6">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8542A]" />
                <span className="text-[9px] font-semibold text-black/60">Strategy Bot</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <p className="text-[13px] font-bold text-black/80 mb-0.5">Hello there!</p>
              <p className="text-[10px] text-black/40">How can I help you today?</p>
            </div>
            <div className="px-3 pb-3">
              <div className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 flex items-center justify-between gap-2 shadow-soft">
                <span className="text-[8px] text-black/25">Send a message...</span>
                <div className="w-5 h-5 rounded-full bg-black/6 flex items-center justify-center">
                  <span className="text-[8px] text-black/30">↑</span>
                </div>
              </div>
            </div>
          </div>
          <HoverOverlay />
          <CategoryTag label="AI Chatbot" />
          <LiveBadge />
          <HoverReveal domain="strategy-shortcut-omega.vercel.app" title="Strategy Shortcut" accentColor="#E8542A" />
        </div>
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
        {/* Navbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-black/6">
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-black text-gray-900 tracking-tight">EDUVENTS</span>
            <div className="w-3 h-0.5 bg-green-500 mt-[1px]" />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[7px] text-gray-600">Find Events</span>
            <span className="text-[7px] text-gray-600">List Your Event</span>
            <span className="text-[7px] text-green-600 font-semibold">Home</span>
            <span className="text-[7px] text-red-500 font-semibold">Logout</span>
          </div>
        </div>

        {/* Hero */}
        <div
          className="relative px-5 py-5 flex flex-col items-center text-center"
          style={{ background: "linear-gradient(135deg, #0c2d57 0%, #0f3460 60%, #1a4a7a 100%)" }}
        >
          <h3 className="text-[14px] font-black text-white leading-tight mb-2.5">
            Education Events<br />That Inspire
          </h3>
          <p className="text-[7px] text-white/60 mb-3">Discover CPD training, Webinars, Conferences & more.</p>
          {/* Search bar */}
          <div className="w-full max-w-[200px] bg-white rounded-lg flex items-center gap-1 px-2 py-1.5 shadow-sm mb-2">
            <span className="text-[8px] text-black/30">🔍</span>
            <span className="text-[7px] text-black/30 flex-1 text-left">Search events...</span>
            <div className="px-2 py-0.5 rounded bg-gray-900 flex items-center">
              <span className="text-[7px] text-white font-semibold">Search</span>
            </div>
          </div>
          {/* List button */}
          <div className="border border-white/50 rounded-md px-3 py-1 flex items-center gap-1">
            <span className="text-[7px] text-white font-medium">List Your Event</span>
            <span className="text-[7px] text-white">→</span>
          </div>
        </div>

        {/* Featured strip */}
        <div className="bg-[#f5f5f5] px-4 pt-2 pb-2 flex-1">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] font-bold text-gray-800">Featured Events</span>
            <span className="text-[7px] text-green-600 font-semibold">View all →</span>
          </div>
          <div
            className="rounded-lg overflow-hidden relative"
            style={{ height: "44px", background: "linear-gradient(135deg, #1a3a5c 0%, #2d6a4f 100%)" }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-1.5 left-2 flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded-full bg-pink-500 text-[5px] font-bold text-white">Festival</span>
              <span className="text-[7px] font-bold text-white">Festival of Education UK</span>
            </div>
          </div>
        </div>

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
        {/* Top white bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-black/6">
          <div className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center">
            <span className="text-[7px] font-bold text-gray-600">N</span>
          </div>
          <div className="flex-1 mx-2 bg-gray-100 rounded-full px-2 py-0.5">
            <span className="text-[7px] text-black/30">Search for destination, activity or attraction</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[7px] text-gray-600 font-medium">SGD</span>
            <span className="text-[8px]">🛒</span>
          </div>
        </div>

        {/* Blue nav bar */}
        <div className="flex items-center justify-center gap-3 px-3 py-1.5" style={{ backgroundColor: "#3b4e9e" }}>
          {["Activities", "Holidays", "Transport", "Offers", "Contact"].map((item) => (
            <span key={item} className="text-[7px] text-white/85 font-medium">{item}</span>
          ))}
        </div>

        {/* Hero — sky gradient for Taj Mahal feel */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-4 text-center py-5 relative"
          style={{
            background: "linear-gradient(180deg, #b8d4e8 0%, #8ab8d4 40%, #6aa3c4 100%)",
            minHeight: "140px",
          }}
        >
          {/* Silhouette hint */}
          <div
            className="absolute bottom-0 inset-x-0 h-12 opacity-20"
            style={{ background: "linear-gradient(180deg, transparent 0%, #5c4a32 100%)" }}
          />
          <h3 className="text-[13px] font-black text-white drop-shadow leading-tight mb-1 relative z-10">
            Amazing Tours &amp; Holidays with NYF
          </h3>
          <p className="text-[7px] text-white/80 mb-3 relative z-10">Plan better with 3000+ travel experiences.</p>
          {/* Search widget */}
          <div className="bg-white rounded-xl shadow-md flex items-stretch overflow-hidden relative z-10 w-full max-w-[200px]">
            <div className="flex-1 px-2 py-1.5 border-r border-black/8">
              <p className="text-[6px] font-bold text-black/60">Where to?</p>
              <p className="text-[6px] text-black/30">Search a place…</p>
            </div>
            <div className="flex-1 px-2 py-1.5">
              <p className="text-[6px] font-bold text-black/60">When?</p>
              <p className="text-[6px] text-black/30">Select Date</p>
            </div>
            <div className="w-7 bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px]">🔍</span>
            </div>
          </div>
        </div>

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
        {/* Full dark card */}
        <div className="w-full h-full flex flex-col" style={{ background: "linear-gradient(160deg, #0a0e1a 0%, #0f1629 60%, #161e35 100%)" }}>

          {/* Navbar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/6">
            <span className="text-[12px] font-black tracking-tight" style={{ color: "#ef4444" }}>AT&apos;HADAK</span>
            <div className="flex items-center gap-2">
              {["Home", "Collaborations", "About Us", "Blogs"].map((item) => (
                <span key={item} className="text-[7px] text-white/50">{item}</span>
              ))}
            </div>
          </div>

          {/* Hero content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative">
            {/* Stadium silhouette at bottom */}
            <div
              className="absolute bottom-0 inset-x-0 h-16 opacity-15"
              style={{
                background: "radial-gradient(ellipse 80% 40% at 50% 100%, #4a5568 0%, transparent 70%)",
              }}
            />
            <p className="text-[7px] text-white/30 uppercase tracking-widest mb-2">Follow the Athaddak Roadmap</p>
            <h3 className="leading-none font-black mb-1 relative z-10">
              <span className="text-[22px] text-white block">BUILD YOUR</span>
              <span className="text-[22px] block" style={{ color: "#f97316" }}>STARDOM</span>
            </h3>
          </div>

          {/* Steps strip */}
          <div className="px-4 pb-4 pt-2 border-t border-white/6" style={{ backgroundColor: "#111827" }}>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {["Create an Account", "Create/Join a Team", "Join the Season"].map((step) => (
                <span
                  key={step}
                  className="text-[6.5px] px-2 py-0.5 rounded-full border border-white/25 text-white/70 font-medium"
                >
                  {step}
                </span>
              ))}
              {["Record Attendance", "Confirm Result", "Achieve Victory"].map((step) => (
                <span
                  key={step}
                  className="text-[6.5px] px-2 py-0.5 rounded-full border border-white/25 text-white/70 font-medium"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>

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

  const sidebarItems = ["Products", "Clients", "Estimates", "Invoices", "Payments", "Refunds", "Delivery Note"];

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
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ backgroundColor: "#1b3a6b" }}
        >
          <span className="text-[11px] font-black text-white tracking-tight">TopNotepad</span>
          <div className="flex items-center gap-1.5">
            <div className="px-2 py-0.5 rounded bg-green-500 flex items-center">
              <span className="text-[7px] text-white font-semibold">Upgrade Now</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-[8px] text-white">?</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
              <span className="text-[7px] text-white font-bold">U</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100% - 32px)" }}>
          {/* Sidebar */}
          <div className="w-[26%] h-full flex flex-col py-3 px-2" style={{ backgroundColor: "#1e3f73" }}>
            <div className="flex items-center gap-1 mb-2 px-1">
              <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#22c55e" }} />
              <span className="text-[8px] font-bold text-green-400">Sales</span>
            </div>
            {sidebarItems.map((item) => (
              <div key={item} className="flex items-center gap-1 px-1 py-0.5 rounded hover:bg-white/5">
                <div className="w-1.5 h-1.5 rounded-sm bg-white/20 flex-shrink-0" />
                <span className="text-[6.5px] text-white/50 truncate">{item}</span>
              </div>
            ))}
            <div className="mt-2 px-1">
              <span className="text-[7px] font-bold text-white/40">Purchases</span>
            </div>
            <div className="mt-1 px-1">
              <span className="text-[7px] font-bold text-white/40">Accounting</span>
            </div>
          </div>

          {/* Main area */}
          <div className="flex-1 relative bg-[#f3f4f6] flex items-center justify-center">
            {/* Background hint: invoice list */}
            <div className="absolute inset-0 opacity-30 px-3 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-4 bg-white rounded mb-1 border border-black/5" />
              ))}
            </div>
            {/* Modal overlay */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg border border-black/8 mx-3 p-3 w-full">
              <p className="text-[8px] font-bold text-black/80 mb-2 leading-tight">
                Almost there! Just fill out these details…
              </p>
              <div className="space-y-1.5">
                <div className="h-4 bg-gray-50 border border-gray-200 rounded px-2 flex items-center">
                  <span className="text-[6px] text-black/30">Company Name</span>
                </div>
                <div className="h-4 bg-gray-50 border border-gray-200 rounded px-2 flex items-center">
                  <span className="text-[6px] text-black/30">First Name</span>
                </div>
                <div className="flex gap-1.5">
                  <div
                    className="flex-1 h-8 border-2 border-dashed border-blue-300 rounded flex items-center justify-center"
                    style={{ borderColor: "#3b82f6" }}
                  >
                    <span className="text-[5.5px] text-blue-400 text-center font-medium leading-tight">Your<br />Logo</span>
                  </div>
                  <div className="flex-1 flex items-end justify-end">
                    <div className="px-2 py-1 rounded bg-green-500 flex items-center">
                      <span className="text-[7px] text-white font-semibold">Save</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
        {/* Navbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-black/6">
          <div className="flex items-center gap-1.5">
            {/* RED logo mark */}
            <div className="flex flex-col gap-px">
              <div className="w-2.5 h-1 bg-red-600 rounded-sm" />
              <div className="w-2 h-1 bg-red-600 rounded-sm" />
              <div className="w-1.5 h-0.5 bg-red-600 rounded-sm" />
            </div>
            <div>
              <span className="text-[9px] font-black text-red-600">RED</span>
              <span className="text-[8px] font-semibold text-gray-700"> Farms</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {["Home", "Shop", "Products ▼", "Services ▼", "About"].map((item) => (
              <span key={item} className="text-[6.5px] text-gray-600">{item}</span>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-gray-500">🔍</span>
            <span className="text-[8px] text-gray-500">👤</span>
            <span className="text-[8px] text-gray-500">🛒</span>
          </div>
        </div>

        {/* Hero — dark overlay */}
        <div
          className="relative flex flex-col items-center justify-center text-center px-4 py-5"
          style={{
            background: "linear-gradient(160deg, #2d1a0e 0%, #3d2410 40%, #1a0f07 100%)",
            minHeight: "120px",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10">
            <h3 className="text-[11px] font-black text-white uppercase tracking-wider leading-tight mb-2">
              Months Old Australorp<br />Chicks For Sale
            </h3>
            <div className="inline-block border border-white/60 rounded px-3 py-0.5">
              <span className="text-[7px] text-white font-semibold tracking-wide">Shop Now</span>
            </div>
          </div>
          {/* Slideshow dots hint */}
          <div className="absolute bottom-2 flex items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`rounded-full ${i === 1 ? "w-2 h-2 bg-white" : "w-1.5 h-1.5 bg-white/40"}`} />
            ))}
          </div>
        </div>

        {/* Red brand strip */}
        <div
          className="flex items-center justify-between px-5 py-3 flex-1"
          style={{ backgroundColor: "#c0392b" }}
        >
          <div>
            <div className="flex items-baseline gap-0.5 mb-0.5">
              <span className="text-[16px] font-black text-white leading-none tracking-wide">RED</span>
              <span className="text-[10px] font-black text-white/80 ml-0.5">FARMS</span>
            </div>
            <p className="text-[6.5px] text-white/70 max-w-[120px] leading-snug">
              Best Poultry Farmer for Organic Chicken Farm in Pakistan
            </p>
          </div>
          {/* Rooster silhouette hint */}
          <div className="flex flex-col items-center opacity-60">
            <div className="w-6 h-8 rounded-full bg-white/20" />
            <div className="w-4 h-4 rounded-full bg-white/15 -mt-2" />
          </div>
        </div>

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
