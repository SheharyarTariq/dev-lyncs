import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaundryFree — Expert Laundry & Dry Cleaning, Delivered",
  description:
    "Free collection & delivery. 48-hour turnaround. Trusted by 50,000+ households across the UK. Book your first collection today.",
  keywords: [
    "laundry service",
    "dry cleaning",
    "laundry delivery",
    "wash and fold",
    "UK laundry",
    "ironing service",
  ],
  openGraph: {
    title: "LaundryFree — Expert Laundry & Dry Cleaning, Delivered",
    description:
      "Free collection & delivery. 48-hour turnaround. Trusted by 50,000+ households across the UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-cream-50 text-ink-950">
        {children}
      </body>
    </html>
  );
}
