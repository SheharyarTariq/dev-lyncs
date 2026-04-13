"use client";

import { motion } from "framer-motion";
import { Palette, Code, MegaphoneSimple, Pen, Lightbulb, DeviceMobile, Rocket, ChartBar, Star, Browsers } from "@phosphor-icons/react";

const items = [
  { icon: Palette, text: "Brand Identity" },
  { icon: Code, text: "Web Development" },
  { icon: Browsers, text: "UI / UX Design" },
  { icon: MegaphoneSimple, text: "Digital Marketing" },
  { icon: Pen, text: "Copywriting" },
  { icon: Lightbulb, text: "Creative Strategy" },
  { icon: DeviceMobile, text: "App Design" },
  { icon: ChartBar, text: "SEO & Analytics" },
  { icon: Star, text: "Art Direction" },
  { icon: Rocket, text: "Product Launch" },
  { icon: Palette, text: "Brand Identity" },
  { icon: Code, text: "Web Development" },
  { icon: Browsers, text: "UI / UX Design" },
  { icon: MegaphoneSimple, text: "Digital Marketing" },
  { icon: Pen, text: "Copywriting" },
  { icon: Lightbulb, text: "Creative Strategy" },
  { icon: DeviceMobile, text: "App Design" },
  { icon: ChartBar, text: "SEO & Analytics" },
  { icon: Star, text: "Art Direction" },
  { icon: Rocket, text: "Product Launch" },
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-950/8 bg-ink-950 py-4">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {items.map(({ icon: Icon, text }, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 mx-8 text-cream-50/80 flex-shrink-0"
          >
            <Icon size={14} weight="fill" className="text-teal-400 flex-shrink-0" />
            <span className="text-[13px] font-medium tracking-wide uppercase">{text}</span>
            <span className="text-cream-50/20 ml-6">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}
