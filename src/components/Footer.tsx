/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Terminal } from "lucide-react";
import { BIO_DATA } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  accentColor: "indigo" | "emerald" | "rose" | "amber";
}

export default function Footer({ onNavigate, accentColor }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const accentTextClasses = {
    indigo: "text-indigo-400 hover:text-indigo-300",
    emerald: "text-emerald-400 hover:text-emerald-300",
    rose: "text-rose-400 hover:text-rose-300",
    amber: "text-amber-400 hover:text-amber-300"
  };

  const accentBgClasses = {
    indigo: "bg-indigo-600/10 hover:bg-indigo-600/20 border-indigo-500/20 text-indigo-400",
    emerald: "bg-emerald-600/10 hover:bg-emerald-600/20 border-emerald-500/20 text-emerald-400",
    rose: "bg-rose-600/10 hover:bg-rose-600/20 border-rose-500/20 text-rose-400",
    amber: "bg-amber-600/10 hover:bg-amber-600/20 border-amber-500/20 text-amber-400"
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative overflow-hidden text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-900 pb-8 mb-8">
          {/* Logo signature representation */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <span className="text-white font-extrabold text-base tracking-tighter flex items-center gap-1.5 uppercase">
              <span className={`w-2.5 h-2.5 rounded-full ${
                accentColor === "indigo" ? "bg-indigo-500" :
                accentColor === "emerald" ? "bg-emerald-500" :
                accentColor === "rose" ? "bg-rose-500" : "bg-amber-500"
              }`} />
              HARSHA<span className="text-zinc-500">.KALUGALAGE</span>
            </span>
            <span className="text-zinc-650 text-[10px] font-mono tracking-wider">// AUTOMATION + SDET</span>
          </div>

          {/* Quick anchor scroll list */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold">
            {["home", "about", "projects", "contact"].map((sec) => (
              <button
                key={sec}
                onClick={() => onNavigate(sec)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Back to top click widget */}
          <div>
            <button
              onClick={() => onNavigate("home")}
              className={`p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-mono font-semibold transition-all cursor-pointer ${accentBgClasses[accentColor]}`}
              title="Return back to landing top page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back To Top</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} {BIO_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>Compiled with precision & extreme care</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
