/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter, Terminal, Sparkles, CodeXml } from "lucide-react";
import { BIO_DATA } from "../data";
// @ts-ignore
import devAvatar from "../assets/images/dev_avatar_1780473518955.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  accentColor: "indigo" | "emerald" | "rose" | "amber";
}

export default function Hero({ onNavigate, accentColor }: HeroProps) {
  const accentTextClasses = {
    indigo: "text-indigo-400 font-semibold",
    emerald: "text-emerald-400 font-semibold",
    rose: "text-rose-400 font-semibold",
    amber: "text-amber-400 font-semibold"
  };

  const accentGlowClasses = {
    indigo: "shadow-indigo-500/10 border-indigo-900/40 bg-indigo-500/10 text-indigo-300",
    emerald: "shadow-emerald-500/10 border-emerald-900/40 bg-emerald-500/10 text-emerald-300",
    rose: "shadow-rose-500/10 border-rose-900/40 bg-rose-500/10 text-rose-300",
    amber: "shadow-amber-500/10 border-amber-900/40 bg-amber-500/10 text-amber-300"
  };

  const accentBgClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20",
    emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20",
    rose: "bg-rose-600 hover:bg-rose-500 shadow-rose-600/20",
    amber: "bg-amber-600 hover:bg-amber-500 shadow-amber-600/20"
  };

  const socialIcons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 sm:pb-24 overflow-hidden">
      {/* Dynamic Background Glowing Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] opacity-15 transition-all duration-700 ${
          accentColor === "indigo" ? "bg-indigo-500" :
          accentColor === "emerald" ? "bg-emerald-500" :
          accentColor === "rose" ? "bg-rose-500" : "bg-amber-500"
        }`} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900 rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Landing Copy Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border text-[10px] font-mono tracking-[0.2em] font-bold uppercase ${accentGlowClasses[accentColor]}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for New Projects</span>
            </motion.div>

            {/* Overarching Heading */}
            <div className="space-y-3 pt-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl min-[375px]:text-5xl sm:text-[70px] lg:text-[85px] leading-[0.85] font-black tracking-tighter text-white text-left uppercase"
              >
                AUTOMATED<br />
                QUALITY<br />
                <span className={`bg-gradient-to-r text-transparent bg-clip-text ${
                  accentColor === "indigo" ? "from-indigo-500 via-purple-500 to-indigo-300" :
                  accentColor === "emerald" ? "from-emerald-500 via-teal-500 to-cyan-300" :
                  accentColor === "rose" ? "from-rose-500 via-pink-500 to-red-300" :
                  "from-amber-500 via-orange-500 to-yellow-300"
                }`}>
                  ASSURED.
                </span>
              </motion.h1>
            </div>

            {/* Sub-headline explanation */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[420px] font-normal"
            >
              {BIO_DATA.subtitle} Over {BIO_DATA.experienceCount} years of implementing robust E2E test rigs, automated test suites, and high-performance pipeline continuous integrations.
            </motion.p>

            {/* Call to Actions (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={() => onNavigate("projects")}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white tracking-wide shadow-lg active:scale-95 transition-all cursor-pointer ${accentBgClasses[accentColor]}`}
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all active:scale-95 cursor-pointer"
              >
                Let&apos;s Connect
              </button>
            </motion.div>

            {/* Socials & GitHub / LinkedIn Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-5 pt-4 border-t border-slate-900 w-full"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Find Me:
              </span>
              <div className="flex items-center gap-3">
                {BIO_DATA.socials
                  .filter((soc) => soc.iconName in socialIcons)
                  .map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      className="p-2 bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-slate-700 text-slate-400 hover:text-white rounded-lg transition-all"
                      title={soc.name}
                    >
                      {socialIcons[soc.iconName as keyof typeof socialIcons]}
                    </a>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Floating Avatar Block */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full overflow-hidden p-2">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[280px] min-[375px]:max-w-[320px] sm:max-w-[360px] lg:max-w-md aspect-square"
            >
              {/* Spinning Accent Border Frame */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-dashed transition-all duration-1000 animate-[spin_40s_linear_infinite] ${
                accentColor === "indigo" ? "border-indigo-500/35" :
                accentColor === "emerald" ? "border-emerald-500/35" :
                accentColor === "rose" ? "border-rose-500/35" : "border-amber-500/35"
              }`} />

              {/* Offset Glow Box */}
              <div className={`absolute inset-4 rounded-3xl blur-2xl opacity-25 -z-10 transition-all duration-500 ${
                accentColor === "indigo" ? "bg-indigo-500" :
                accentColor === "emerald" ? "bg-emerald-500" :
                accentColor === "rose" ? "bg-rose-500" : "bg-amber-500"
              }`} />

              {/* Core Avatar Image Container */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={devAvatar}
                  alt={`${BIO_DATA.name} Abstract Concept Avatar`}
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Corner Code Tag */}
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur border border-slate-800 px-2 py-1 rounded font-mono text-slate-400 text-[10px] uppercase flex items-center gap-1">
                  <CodeXml className="w-3 h-3" />
                  <span>Interactive Hub</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Summary Bento Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 mt-16 p-6 rounded-3xl bg-zinc-950/40 border border-zinc-900 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900"
        >
          <div className="text-center sm:text-left">
            <span className={`block text-3xl sm:text-5xl font-black tracking-tighter ${accentTextClasses[accentColor]}`}>
              {BIO_DATA.experienceCount}
            </span>
            <span className="block mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 font-mono">
              Years Experience
            </span>
          </div>
          <div className="text-center sm:text-left pt-4 sm:pt-0 sm:pl-6 md:pl-8 sm:px-6 md:px-8">
            <span className={`block text-3xl sm:text-5xl font-black tracking-tighter ${accentTextClasses[accentColor]}`}>
              {BIO_DATA.completedCount}+
            </span>
            <span className="block mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 font-mono">
              Projects Done
            </span>
          </div>
          <div className="text-center sm:text-left pt-4 sm:pt-0 sm:pl-6 md:pl-8">
            <span className={`block text-3xl sm:text-5xl font-black tracking-tighter ${accentTextClasses[accentColor]}`}>
              {BIO_DATA.clientSatisfaction}
            </span>
            <span className="block mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 font-mono">
              Success Index
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
