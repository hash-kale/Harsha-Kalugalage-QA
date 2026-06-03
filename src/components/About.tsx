/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  Download,
  Check,
  ChevronRight,
  Briefcase,
  History,
  Terminal,
  Cpu
} from "lucide-react";
import { BIO_DATA, SKILLS_DATA, TIMELINE_DATA } from "../data";

interface AboutProps {
  accentColor: "indigo" | "emerald" | "rose" | "amber";
}

export default function About({ accentColor }: AboutProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<"All" | "Automation Tools" | "QA Methodologies" | "Languages & Core" | "Platforms & CI">("All");
  const [downloadState, setDownloadState] = useState<"idle" | "preparing" | "downloading" | "complete">("idle");

  const skillCategories: ("All" | "Automation Tools" | "QA Methodologies" | "Languages & Core" | "Platforms & CI")[] = [
    "All",
    "Automation Tools",
    "QA Methodologies",
    "Languages & Core",
    "Platforms & CI"
  ];

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedSkillCategory === "All" || skill.category === selectedSkillCategory
  );

  const accentColorClasses = {
    indigo: "text-indigo-400 border-indigo-500 bg-indigo-500/10",
    emerald: "text-emerald-400 border-emerald-500 bg-emerald-500/10",
    rose: "text-rose-400 border-rose-500 bg-rose-500/10",
    amber: "text-amber-400 border-amber-500 bg-amber-500/10"
  };

  const accentTextClasses = {
    indigo: "text-indigo-400",
    emerald: "text-emerald-400",
    rose: "text-rose-400",
    amber: "text-amber-400"
  };

  const accentBgClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-500",
    emerald: "bg-emerald-600 hover:bg-emerald-500",
    rose: "bg-rose-600 hover:bg-rose-500",
    amber: "bg-amber-600 hover:bg-amber-500"
  };

  const handleDownloadResume = () => {
    if (downloadState !== "idle") return;

    setDownloadState("preparing");
    setTimeout(() => {
      setDownloadState("downloading");
      setTimeout(() => {
        setDownloadState("complete");
        // Start simulated file download
        const mockPdfUrl = "data:application/pdf;base64,JVBERi0xLjQKJldots"; // sample placeholder representation
        const link = document.createElement("a");
        link.href = "#";
        link.setAttribute("download", "Harsha_Kalugalage_Resume_2026.pdf");
        // Reset state after brief timeout
        setTimeout(() => {
          setDownloadState("idle");
        }, 1800);
      }, 1200);
    }, 800);
  };

  return (
    <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] font-mono ${accentTextClasses[accentColor]}`}>
            // 01. Professional Bio & Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-none mt-2">
            About {BIO_DATA.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative & Info (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-zinc-100 tracking-wide font-sans">
              Bridging robust automated test coverage with flawless software execution.
            </h3>
            
            <div className="space-y-4 text-slate-400 leading-relaxed font-normal text-sm sm:text-base">
              <p>{BIO_DATA.aboutParagraph1}</p>
              <p>{BIO_DATA.aboutParagraph2}</p>
            </div>

            {/* Structured Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-3xl bg-zinc-950/40 border border-zinc-900 text-left overflow-hidden">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`p-2 rounded-xl bg-zinc-950 border border-zinc-900 ${accentTextClasses[accentColor]} shrink-0`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">Location</span>
                  <span className="text-sm text-zinc-200 mt-0.5 font-medium block truncate" title={BIO_DATA.location}>{BIO_DATA.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono overflow-hidden">
                <div className={`p-2 rounded-xl bg-zinc-950 border border-zinc-900 ${accentTextClasses[accentColor]} shrink-0`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-500 font-bold uppercase tracking-wider">Email</span>
                  <a href={`mailto:${BIO_DATA.email}`} className="text-xs sm:text-sm text-zinc-200 hover:underline hover:text-white mt-0.5 block truncate" title={BIO_DATA.email}>
                    {BIO_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono overflow-hidden">
                <div className={`p-2 rounded-xl bg-zinc-950 border border-zinc-900 ${accentTextClasses[accentColor]} shrink-0`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-500 font-bold uppercase tracking-wider">Contact</span>
                  <span className="text-sm text-zinc-200 mt-0.5 font-medium block truncate" title={BIO_DATA.phone}>{BIO_DATA.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`p-2 rounded-xl bg-zinc-950 border border-zinc-900 ${accentTextClasses[accentColor]} shrink-0`}>
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">Commitment</span>
                  <span className="text-sm text-emerald-400 mt-0.5 font-medium flex items-center gap-1 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>Open for select roles</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Resume Downloader */}
            <div className="pt-3">
              <button
                onClick={handleDownloadResume}
                className={`px-6 py-3.5 rounded-xl text-sm font-semibold text-white shadow-lg flex items-center gap-2.5 transition-all active:scale-95 cursor-pointer ${
                  downloadState === "complete" ? "bg-emerald-600 hover:bg-emerald-500" : accentBgClasses[accentColor]
                }`}
              >
                {downloadState === "idle" && (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download CV / Resume (PDF)</span>
                  </>
                )}
                {downloadState === "preparing" && (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Synthesizing Document Data...</span>
                  </>
                )}
                {downloadState === "downloading" && (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Transmitting File Bytes...</span>
                  </>
                )}
                {downloadState === "complete" && (
                  <>
                    <Check className="w-4 h-4 text-white animate-bounce" />
                    <span>CV Transmitted Successfully!</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Skills Dashboard (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-zinc-950/40 border border-zinc-900 shadow-xl">
              <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-4">
                <span className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                  <Terminal className={`w-4 h-4 ${accentTextClasses[accentColor]}`} />
                  Skills & Core Competency
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                  {filteredSkills.length} Checked
                </span>
              </div>

              {/* Skill Tabs Filter Bar */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {skillCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedSkillCategory === cat
                        ? `bg-slate-800 border-slate-700 text-white font-semibold border ${
                            accentColor === "indigo" ? "border-indigo-500/40 text-indigo-300" :
                            accentColor === "emerald" ? "border-emerald-500/40 text-emerald-300" :
                            accentColor === "rose" ? "border-rose-500/40 text-rose-300" :
                            "border-amber-500/40 text-amber-300"
                          }`
                        : "bg-slate-950/40 text-slate-500 hover:text-slate-350 border border-transparent"
                    }`}
                  >
                    {cat === "Automation Tools" ? "Automation" : cat === "QA Methodologies" ? "Methodology" : cat === "Languages & Core" ? "Languages" : cat === "Platforms & CI" ? "CI & Platform" : cat}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-slate-500 font-mono font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Interactive Custom Progress Slider */}
                      <div className="relative h-2 rounded-full bg-slate-950 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`absolute left-0 top-0 bottom-0 rounded-full ${
                            accentColor === "indigo" ? "bg-gradient-to-r from-indigo-600 to-purple-500" :
                            accentColor === "emerald" ? "bg-gradient-to-r from-emerald-600 to-teal-500" :
                            accentColor === "rose" ? "bg-gradient-to-r from-rose-600 to-pink-500" :
                            "bg-gradient-to-r from-amber-600 to-yellow-500"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Experiences History Timeline Section */}
        <div className="mt-20 border-t border-zinc-900 pt-16">
          <div className="text-center md:text-left mb-12">
            <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-[0.25em] flex items-center justify-center md:justify-start gap-2">
              <History className="w-4 h-4" />
              Professional Chronology
            </span>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase mt-1.5">
              Work History & Experience
            </h3>
          </div>

          <div className="relative border-l border-zinc-900 ml-4 md:ml-12 pl-6 md:pl-8 space-y-12 max-w-4xl">
            {/* Timeline Items */}
            {TIMELINE_DATA.map((item, index) => (
              <div key={item.id} className="relative group text-left">
                
                {/* Visual Circle Node anchor */}
                <div className={`absolute -left-[31px] md:-left-[39px] w-4 h-4 rounded-full border-2 border-zinc-950 bg-zinc-900 transition-all duration-300 group-hover:scale-125 ${
                  accentColor === "indigo" ? "group-hover:bg-indigo-500 group-hover:border-indigo-400" :
                  accentColor === "emerald" ? "group-hover:bg-emerald-500 group-hover:border-emerald-400" :
                  accentColor === "rose" ? "group-hover:bg-rose-500 group-hover:border-rose-400" :
                  "group-hover:bg-amber-500 group-hover:border-amber-400"
                }`} />

                {/* Main Card */}
                <div className="p-6 rounded-3xl bg-zinc-950/40 border border-zinc-900 shadow-md group-hover:border-zinc-800 group-hover:bg-zinc-950/60 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-3 mb-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-100 font-sans tracking-wide">
                        {item.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 opacity-60" />
                        <span>{item.company}</span>
                      </p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-full text-xs font-mono font-medium text-slate-400">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Skills tags associated */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsUsed.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 bg-zinc-950 border border-zinc-900 rounded-md text-[10px] font-mono text-zinc-500 uppercase tracking-wider group-hover:text-zinc-300 transition-colors"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
