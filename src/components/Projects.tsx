/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X, Check, Code, Compass, Info, Layers } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { ProjectSection } from "../types";

function getTechBadgeStyle(tech: string) {
  const t = tech.toLowerCase();
  if (t.includes("playwright")) {
    return {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20 group-hover:border-emerald-500/40",
      text: "text-emerald-400 group-hover:text-emerald-300",
      dot: "bg-emerald-400"
    };
  }
  if (t.includes("typescript")) {
    return {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20 group-hover:border-blue-500/40",
      text: "text-blue-400 group-hover:text-blue-300",
      dot: "bg-blue-400"
    };
  }
  if (t.includes("javascript")) {
    return {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20 group-hover:border-yellow-500/40",
      text: "text-yellow-400 group-hover:text-yellow-300",
      dot: "bg-yellow-400"
    };
  }
  if (t.includes("docker")) {
    return {
      bg: "bg-sky-500/10",
      border: "border-sky-500/20 group-hover:border-sky-500/40",
      text: "text-sky-400 group-hover:text-sky-300",
      dot: "bg-sky-400"
    };
  }
  if (t.includes("k6")) {
    return {
      bg: "bg-rose-500/10",
      border: "border-rose-500/20 group-hover:border-rose-500/40",
      text: "text-rose-400 group-hover:text-rose-300",
      dot: "bg-rose-400"
    };
  }
  if (t.includes("axe") || t.includes("accessibility") || t.includes("wcag")) {
    return {
      bg: "bg-purple-500/10",
      border: "border-purple-500/20 group-hover:border-purple-500/40",
      text: "text-purple-400 group-hover:text-purple-300",
      dot: "bg-purple-400"
    };
  }
  if (t.includes("jest") || t.includes("cypress") || t.includes("selenium")) {
    return {
      bg: "bg-pink-500/10",
      border: "border-pink-500/20 group-hover:border-pink-500/40",
      text: "text-pink-400 group-hover:text-pink-300",
      dot: "bg-pink-400"
    };
  }
  if (t.includes("node") || t.includes("express")) {
    return {
      bg: "bg-green-500/10",
      border: "border-green-500/20 group-hover:border-green-500/40",
      text: "text-green-400 group-hover:text-green-300",
      dot: "bg-green-400"
    };
  }
  if (t.includes("prometheus") || t.includes("grafana") || t.includes("influx") || t.includes("monitoring")) {
    return {
      bg: "bg-orange-500/10",
      border: "border-orange-500/20 group-hover:border-orange-500/40",
      text: "text-orange-400 group-hover:text-orange-300",
      dot: "bg-orange-400"
    };
  }
  if (t.includes("socket") || t.includes("websocket")) {
    return {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20 group-hover:border-violet-500/40",
      text: "text-violet-400 group-hover:text-violet-300",
      dot: "bg-violet-400"
    };
  }
  // Default general tech tag style
  return {
    bg: "bg-zinc-900/60",
    border: "border-zinc-800/80 group-hover:border-zinc-700/80",
    text: "text-zinc-400 group-hover:text-zinc-300",
    dot: "bg-zinc-500"
  };
}

interface ProjectsProps {
  accentColor: "indigo" | "emerald" | "rose" | "amber";
}

export default function Projects({ accentColor }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Test Framework" | "Performance Tool" | "Audit Tool" | "QA Tool">("All");
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectSection | null>(null);

  const categories: ("All" | "Test Framework" | "Performance Tool" | "Audit Tool" | "QA Tool")[] = [
    "All",
    "Test Framework",
    "Performance Tool",
    "Audit Tool",
    "QA Tool"
  ];

  const filteredProjects = PROJECTS_DATA.filter(
    (proj) => selectedCategory === "All" || proj.category === selectedCategory
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
    indigo: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20",
    emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20",
    rose: "bg-rose-600 hover:bg-rose-500 shadow-rose-600/20",
    amber: "bg-amber-600 hover:bg-amber-500 shadow-amber-600/20"
  };

  const accentBorderClasses = {
    indigo: "border-indigo-500/40",
    emerald: "border-emerald-500/40",
    rose: "border-rose-500/40",
    amber: "border-amber-500/40"
  };

  return (
    <section id="projects" className="py-24 border-t border-zinc-900 bg-zinc-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-12">
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] font-mono ${accentTextClasses[accentColor]}`}>
            // 02. Highlighted Works & Case Studies
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-none mt-2">
            Projects Portfolio
          </h2>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-start text-left items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? `bg-zinc-950 border-zinc-900 text-white ${
                      accentColor === "indigo" ? "border-indigo-500/50 text-indigo-400" :
                      accentColor === "emerald" ? "border-emerald-500/50 text-emerald-400" :
                      accentColor === "rose" ? "border-rose-500/50 text-rose-400" :
                      "border-amber-500/50 text-amber-400"
                    }`
                  : "bg-zinc-950/40 border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {cat === "All" ? "All Deliverables" : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950/60 transition-all duration-300"
              >
                {/* Project Image Panel */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <img
                    src={proj.image}
                    alt={`${proj.title} Mock Case Image`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Category Stamp (Static Overlay) */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2.5 py-1 rounded bg-zinc-950/90 backdrop-blur border border-zinc-900 font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Info Text Deck */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white tracking-wide font-sans group-hover:text-zinc-150 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed font-normal">
                      {proj.description}
                    </p>
                  </div>

                  {/* Technologies Highlight List */}
                  <div className="pt-6 border-t border-zinc-900 mt-6 space-y-2">
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-zinc-500">
                      QA Integration Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => {
                        const style = getTechBadgeStyle(tech);
                        return (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold flex items-center gap-1.5 transition-all ${style.bg} ${style.border} ${style.text}`}
                          >
                            <span className={`w-1 h-1 rounded-full shrink-0 ${style.dot}`} />
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Grid Overlay CTAs */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-left">
                  {/* Detailed Analysis Button */}
                  <button
                    onClick={() => setActiveProjectModal(proj)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-mono hover:underline cursor-pointer ${accentTextClasses[accentColor]}`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </button>

                  {/* Direct Action Anchors */}
                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-500 hover:text-white rounded-lg border border-zinc-900 transition-all"
                        title="View Source Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 bg-zinc-950 hover:bg-zinc-900 rounded-lg border border-zinc-900 transition-all ${accentTextClasses[accentColor]}`}
                        title="Enter Live Web Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Case Study Specifications Modal */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing Shadow overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Card content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 25 }}
                transition={{ type: "spring", damping: 25, stiffness: 280 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-900 shadow-2xl p-6 sm:p-8 z-10 scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-transparent"
              >
                {/* Header Close triggers */}
                <div className="absolute top-4 right-4 z-25">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-left space-y-6">
                  {/* Title Headers */}
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded text-zinc-400 font-bold tracking-wider">
                      Case Study Spec // {activeProjectModal.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase mt-3">
                      {activeProjectModal.title}
                    </h3>
                  </div>

                  {/* Banner image layout inside modal */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-900">
                    <img
                      src={activeProjectModal.image}
                      alt={activeProjectModal.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Copy analysis description */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono">
                      Project Intent & Walkthrough
                    </h4>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {activeProjectModal.longDescription}
                    </p>
                  </div>

                  {/* Technical details metrics stats layout */}
                  {activeProjectModal.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-zinc-900/40 border border-zinc-900 rounded-2xl text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-zinc-900">
                      {activeProjectModal.stats.map((st, idx) => (
                        <div key={st.label} className={idx > 0 ? "pt-3 sm:pt-0 sm:pl-4" : ""}>
                          <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
                            {st.label}
                          </span>
                          <span className="block text-sm sm:text-base font-black text-white mt-1">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights list with Checkmarks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono flex items-center gap-1.5">
                        <Check className={`w-3.5 h-3.5 ${accentTextClasses[accentColor]}`} />
                        Deliverables & Features
                      </h4>
                      <ul className="space-y-2">
                        {activeProjectModal.keyFeatures.map((kf, i) => (
                          <li key={i} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2 leading-relaxed">
                            <span className="flex-shrink-0 mt-0.5">•</span>
                            <span>{kf}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono flex items-center gap-1.5">
                        <Layers className={`w-3.5 h-3.5 ${accentTextClasses[accentColor]}`} />
                        Platform Stack Integration
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProjectModal.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 bg-zinc-900 border text-xs font-mono font-medium rounded-lg text-zinc-300 ${accentBorderClasses[accentColor]}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action bottom anchor footer inside modal */}
                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-900 mt-6">
                    {activeProjectModal.demoUrl && (
                      <a
                        href={activeProjectModal.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-3 rounded-xl text-sm font-semibold text-white tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer ${accentBgClasses[accentColor]}`}
                      >
                        <Compass className="w-4 h-4" />
                        <span>Launch Live Web Showcase</span>
                      </a>
                    )}
                    {activeProjectModal.githubUrl && (
                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl text-sm font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center gap-1.5 transition-all"
                      >
                        <Code className="w-4 h-4" />
                        <span>Inspect Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
