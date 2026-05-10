"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const companies = [
  { name: "Meridian Co", weight: "font-semibold", tracking: "tracking-tight" },
  { name: "Pulse Labs", weight: "font-bold", tracking: "tracking-tighter" },
  { name: "Vanta Group", weight: "font-semibold", tracking: "tracking-normal" },
  { name: "Luma Creative", weight: "font-medium", tracking: "tracking-tight" },
  { name: "Crest Finance", weight: "font-bold", tracking: "tracking-tight" },
  {
    name: "Novo Collective",
    weight: "font-semibold",
    tracking: "tracking-tighter",
  },
  { name: "Arbor Health", weight: "font-medium", tracking: "tracking-normal" },
  { name: "Summit IO", weight: "font-bold", tracking: "tracking-tight" },
];

// Duplicate list for seamless marquee loop
const marqueeItems = [...companies, ...companies];

export default function ClientLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-20 bg-cream-50">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Eyebrow + heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-950/12 bg-ink-950/4 mb-5"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-800/60">
              Our clients
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight text-ink-950"
          >
            Trusted by brands that
            <br />
            <em className="not-italic text-ink-800/45">think differently.</em>
          </motion.h2>
        </div>

        {/* Divider top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-ink-950/8 origin-center"
        />

        {/* Desktop + tablet grid (hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 py-10 gap-y-8">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.22 + i * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center justify-center"
            >
              <span
                className={`text-sm md:text-base ${company.weight} ${company.tracking} text-ink-950/25 hover:text-ink-950/60 transition-colors duration-300 cursor-default select-none`}
              >
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile marquee (shown only on xs) */}
        <div className="sm:hidden overflow-hidden py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-12 w-max animate-marquee"
          >
            {marqueeItems.map((company, i) => (
              <span
                key={`${company.name}-${i}`}
                className={`text-sm ${company.weight} ${company.tracking} text-ink-950/25 whitespace-nowrap cursor-default select-none`}
              >
                {company.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Divider bottom */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-ink-950/8 origin-center"
        />
      </div>
    </section>
  );
}
