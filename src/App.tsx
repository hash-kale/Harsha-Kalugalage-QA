/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [accentColor, setAccentColor] = useState<"indigo" | "emerald" | "rose" | "amber">("indigo");

  // Multi-section scroll tracker to highlight navbar options in real time
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // Trigger when section occupies core viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Smooth navigator trigger function
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 flex flex-col justify-between selection:bg-white selection:text-black antialiased overflow-x-hidden">
      {/* Top Fixed Header with dynamic color theme manager */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />

      {/* Main Sections Body */}
      <main className="flex-1 w-full">
        {/* Home section */}
        <Hero onNavigate={handleNavigate} accentColor={accentColor} />

        {/* About section */}
        <About accentColor={accentColor} />

        {/* Projects section */}
        <Projects accentColor={accentColor} />

        {/* Contact section */}
        <Contact accentColor={accentColor} />
      </main>

      {/* Sophisticated bottom footer signature */}
      <Footer onNavigate={handleNavigate} accentColor={accentColor} />
    </div>
  );
}
