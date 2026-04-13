"use client";

/**
 * ScrollStory — Apple-style scroll-driven narrative section
 *
 * Technique: each "chapter" is a sticky container that fills the viewport.
 * Progress through a chapter is driven by scroll position within its wrapper
 * div (which is taller than the viewport — the extra height = scroll room).
 * Framer Motion useScroll + useTransform does all the heavy lifting.
 */

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

// ── Shared spring config (snappy, like Apple's easing) ──────────────────────
const SPRING = { stiffness: 100, damping: 30, restDelta: 0.001 };

// ── Chapter 1 — "The Studio" ─────────────────────────────────────────────────
function ChapterStudio({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.15, 0.7, 0.85], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.15, 0.7, 0.85], [60, 0, 0, -60]);
  const scale = useTransform(progress, [0, 0.15], [0.92, 1]);

  // Glowing orb
  const orbScale = useTransform(progress, [0, 0.5], [0.6, 1.4]);
  const orbOpacity = useTransform(progress, [0, 0.15, 0.7, 0.85], [0, 0.7, 0.7, 0]);

  // Line reveals
  const line1Width = useTransform(progress, [0.05, 0.25], ["0%", "100%"]);
  const line2Width = useTransform(progress, [0.1, 0.3], ["0%", "100%"]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background orb */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-3xl rounded-full"
        aria-hidden="true"
        style={{
          scale: orbScale,
          opacity: orbOpacity,
          background:
            "radial-gradient(circle, rgba(13,148,136,0.22) 0%, rgba(13,148,136,0.04) 60%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />

      {/* Text block */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          className="text-[11px] uppercase tracking-[0.28em] font-semibold text-teal-400 mb-8"
          style={{ opacity }}
        >
          AXIS Studio
        </motion.p>

        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight text-cream-50 mb-8">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              style={{ y: useTransform(progress, [0.05, 0.2], [80, 0]) }}
            >
              Where ideas
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-teal-400"
              style={{ y: useTransform(progress, [0.1, 0.25], [80, 0]) }}
            >
              become brands.
            </motion.span>
          </span>
        </h2>

        {/* Animated rule lines */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <motion.div
            className="h-px bg-white/20"
            style={{ width: line1Width }}
          />
          <span className="text-white/30 text-xs tracking-widest whitespace-nowrap">
            EST. 2016
          </span>
          <motion.div
            className="h-px bg-white/20"
            style={{ width: line2Width }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// ── Chapter 2 — "The Numbers" ────────────────────────────────────────────────
function ChapterNumbers({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.15, 0.75, 0.9], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.15, 0.75, 0.9], [60, 0, 0, -60]);

  const stats = [
    { value: "120+", label: "Projects delivered" },
    { value: "98%", label: "Client satisfaction" },
    { value: "8 yrs", label: "In business" },
    { value: "60+", label: "Brands helped" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
      >
        <p className="text-center text-[11px] uppercase tracking-[0.28em] font-semibold text-teal-400 mb-16">
          By the numbers
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              style={{
                opacity: useTransform(
                  progress,
                  [0.1 + i * 0.04, 0.22 + i * 0.04],
                  [0, 1]
                ),
                y: useTransform(
                  progress,
                  [0.1 + i * 0.04, 0.22 + i * 0.04],
                  [40, 0]
                ),
              }}
              className="text-center"
            >
              <p className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-tight text-cream-50 mb-3">
                {stat.value}
              </p>
              <p className="text-[13px] text-cream-50/40 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── Chapter 3 — "The Services" ───────────────────────────────────────────────
function ChapterServices({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.15, 0.8, 0.95], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.15, 0.8, 0.95], [60, 0, 0, -60]);

  const services = [
    { n: "01", name: "Brand Identity", desc: "Strategy · Logo · Typography · Guidelines" },
    { n: "02", name: "Web & App Design", desc: "UI/UX · Prototypes · Design Systems" },
    { n: "03", name: "Development", desc: "Next.js · React · Full-stack" },
    { n: "04", name: "Digital Marketing", desc: "SEO · Campaigns · Growth" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
      >
        <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-teal-400 mb-16 text-center">
          What we do
        </p>

        <div className="space-y-0 divide-y divide-white/8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.n}
              style={{
                opacity: useTransform(
                  progress,
                  [0.08 + i * 0.05, 0.2 + i * 0.05],
                  [0, 1]
                ),
                x: useTransform(
                  progress,
                  [0.08 + i * 0.05, 0.2 + i * 0.05],
                  [-40, 0]
                ),
              }}
              className="flex items-center justify-between py-6 group"
            >
              <div className="flex items-center gap-8">
                <span className="text-[11px] text-cream-50/25 font-mono w-6">
                  {svc.n}
                </span>
                <span className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] tracking-tight text-cream-50">
                  {svc.name}
                </span>
              </div>
              <span className="text-[13px] text-cream-50/35 hidden md:block">
                {svc.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── Chapter 4 — "The CTA" ────────────────────────────────────────────────────
function ChapterCTA({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(progress, [0, 0.2], [60, 0]);
  const buttonScale = useTransform(progress, [0.3, 0.5], [0.85, 1]);
  const buttonOpacity = useTransform(progress, [0.3, 0.5], [0, 1]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Big glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight text-cream-50 mb-8">
          <span className="block">Let&apos;s build</span>
          <span className="block text-teal-400">something great.</span>
        </h2>

        <motion.div style={{ scale: buttonScale, opacity: buttonOpacity }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 transition-colors duration-300 shadow-teal mt-4"
          >
            Start a project
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Main ScrollStory ─────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "studio", label: "Studio", component: ChapterStudio },
  { id: "numbers", label: "Numbers", component: ChapterNumbers },
  { id: "services", label: "Services", component: ChapterServices },
  { id: "cta", label: "Start", component: ChapterCTA },
];

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof CHAPTERS)[number];
  index: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Each wrapper is 250vh tall → gives 150vh of scroll room while sticky viewport stays at 100vh
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING);
  const Component = chapter.component;

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: "250vh" }}
      id={`chapter-${chapter.id}`}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Chapter progress indicator */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-teal-500/60 z-50 origin-left"
          style={{ scaleX: smoothProgress }}
        />

        <Component progress={smoothProgress} />

        {/* Chapter label — bottom right */}
        <motion.div
          className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.2em] text-cream-50/20 font-semibold"
          style={{ opacity: useTransform(smoothProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]) }}
        >
          {String(index + 1).padStart(2, "0")} / {CHAPTERS.length.toString().padStart(2, "0")} — {chapter.label}
        </motion.div>
      </div>
    </div>
  );
}

export default function ScrollStory() {
  return (
    <section className="bg-ink-950" aria-label="AXIS Studio story">
      {CHAPTERS.map((chapter, i) => (
        <Chapter key={chapter.id} chapter={chapter} index={i} />
      ))}
    </section>
  );
}
