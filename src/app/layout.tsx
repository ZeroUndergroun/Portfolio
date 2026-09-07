import type { Metadata } from "next";
import { Libre_Baskerville, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const heading = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Times New Roman", "Georgia", "serif"],
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  title: "Ryan Torrez — Software · Automation · QA",
  description:
    "Ryan Torrez — software developer, automation developer, and software QA / SQaaS consultant.",
};

// Applies the persisted (or system-preferred) theme before first paint so the
// page never flashes the wrong ground.
const themeScript = `(function(){try{var t=localStorage.getItem('rt-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-bg font-body text-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
