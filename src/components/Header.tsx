/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Paintbrush, Check, ChevronRight } from "lucide-react";
import { BIO_DATA } from "../data";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  accentColor: "indigo" | "emerald" | "rose" | "amber";
  setAccentColor: (color: "indigo" | "emerald" | "rose" | "amber") => void;
}

export default function Header({
  activeSection,
  onNavigate,
  accentColor,
  setAccentColor
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  const colorOptions: { name: string; value: typeof accentColor; class: string }[] = [
    { name: "Indigo Flare", value: "indigo", class: "bg-indigo-500" },
    { name: "Emerald Glint", value: "emerald", class: "bg-emerald-500" },
    { name: "Rose Velvet", value: "rose", class: "bg-rose-500" },
    { name: "Amber Glow", value: "amber", class: "bg-amber-500" }
  ];

  const accentColorClasses = {
    indigo: "text-indigo-400 hover:text-indigo-300 border-indigo-500",
    emerald: "text-emerald-400 hover:text-emerald-300 border-emerald-500",
    rose: "text-rose-400 hover:text-rose-300 border-rose-500",
    amber: "text-amber-400 hover:text-amber-300 border-amber-500"
  };

  const accentBgClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-500",
    emerald: "bg-emerald-600 hover:bg-emerald-500",
    rose: "bg-rose-600 hover:bg-rose-500",
    amber: "bg-amber-600 hover:bg-amber-500"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate("home")}>
            <span className="text-xl font-extrabold tracking-tighter text-white flex items-center gap-1.5 uppercase">
              <span className={`w-2.5 h-2.5 rounded-full ${
                accentColor === "indigo" ? "bg-indigo-500" :
                accentColor === "emerald" ? "bg-emerald-500" :
                accentColor === "rose" ? "bg-rose-500" : "bg-amber-500"
              }`} />
              HARSHA<span className="text-zinc-500">.KALUGALAGE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-1 py-2 text-xs uppercase tracking-widest font-semibold transition-colors duration-205 cursor-pointer ${
                  activeSection === item.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      accentColor === "indigo" ? "bg-indigo-500" :
                      accentColor === "emerald" ? "bg-emerald-500" :
                      accentColor === "rose" ? "bg-rose-500" : "bg-amber-500"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side Tools (Accent Color + Call to Action) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Color Accent Picker Button */}
            <div className="relative">
              <button
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer"
                title="Change Accent Theme"
              >
                <Paintbrush className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isColorPickerOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsColorPickerOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 p-3 shadow-xl z-50"
                    >
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                        Theme Paint Accent
                      </p>
                      <div className="space-y-1">
                        {colorOptions.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => {
                              setAccentColor(opt.value);
                              setIsColorPickerOpen(false);
                            }}
                            className="flex items-center justify-between w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-3 h-3 rounded-full ${opt.class}`} />
                              <span>{opt.name}</span>
                            </div>
                            {accentColor === opt.value && (
                              <Check className="w-3.5 h-3.5 text-white" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer text-white flex items-center gap-1.5 ${
                accentBgClasses[accentColor]
              }`}
            >
              Contact Me
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <Paintbrush className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Mobile Color Selection Modal (Floating Overlay) */}
      <AnimatePresence>
        {isColorPickerOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsColorPickerOpen(false)} />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 rounded-t-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold tracking-wider font-mono text-zinc-400 uppercase">
                  Select Theme Color Accent
                </span>
                <button
                  onClick={() => setIsColorPickerOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white bg-zinc-800 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-2">
                {colorOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setAccentColor(opt.value);
                      setIsColorPickerOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                      accentColor === opt.value
                        ? "bg-zinc-800 border-white text-white"
                        : "bg-zinc-950/40 border-zinc-800 text-zinc-400"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${opt.class}`} />
                    <span>{opt.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation Links */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-900 bg-zinc-950"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 opacity-50 ${
                    activeSection === item.id ? accentColorClasses[accentColor] : ""
                  }`} />
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center px-3">
                <span className="text-[10px] text-zinc-500 font-mono tracking-wide truncate max-w-[150px]">// {BIO_DATA.email}</span>
                <button
                  onClick={() => {
                    onNavigate("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg text-white ${accentBgClasses[accentColor]} cursor-pointer`}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
