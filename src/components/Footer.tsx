"use client";

import { motion } from "framer-motion";
import {
  XLogo,
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
} from "@phosphor-icons/react";

const links = {
  Work: [
    "Brand Identity",
    "Web & App Design",
    "Development",
    "Digital Marketing",
    "View all projects",
  ],
  Company: [
    "About us",
    "Our process",
    "Careers",
    "Blog",
    "Press",
  ],
  Connect: [
    "Contact us",
    "Book a call",
    "hello@axisstudio.co",
    "LinkedIn",
    "Dribbble",
  ],
  Legal: [
    "Privacy policy",
    "Terms of service",
    "Cookie settings",
    "Accessibility",
  ],
};

const socials = [
  { icon: XLogo, label: "X / Twitter" },
  { icon: LinkedinLogo, label: "LinkedIn" },
  { icon: DribbbleLogo, label: "Dribbble" },
  { icon: GithubLogo, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mb-14 pb-14 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full bg-teal-600" />
                <div className="absolute inset-[3px] rounded-full bg-ink-950 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-600" />
                </div>
              </div>
              <span className="font-display font-600 text-[15px] tracking-tight text-cream-50">
                AXIS Studio
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream-50/35 max-w-[28ch] mb-6">
              A full-service creative studio crafting brands, products, and campaigns for ambitious companies.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/25 hover:bg-white/8 transition-all duration-300"
                >
                  <Icon size={13} weight="fill" className="text-cream-50/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(links).map(([section, items]) => (
              <div key={section}>
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-cream-50/30 mb-4">
                  {section}
                </p>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13px] text-cream-50/45 hover:text-cream-50/80 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-cream-50/25">
            &copy; {new Date().getFullYear()} AXIS Studio Ltd. All rights reserved.
          </p>
          <p className="text-[12px] text-cream-50/20">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
