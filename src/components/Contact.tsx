/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, MessageSquare, Trash2, Calendar, User, Info } from "lucide-react";
import { BIO_DATA } from "../data";
import { GuestbookMessage } from "../types";

interface ContactProps {
  accentColor: "indigo" | "emerald" | "rose" | "amber";
}

export default function Contact({ accentColor }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitState, setSubmitState] = useState<"idle" | "delivering" | "sent">("idle");
  const [guestMessages, setGuestMessages] = useState<GuestbookMessage[]>([]);

  // Load messages from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dev_portfolio_messages");
      if (saved) {
        setGuestMessages(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load local portfolio messages", e);
    }
  }, []);

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

  const accentBorderFocusClasses = {
    indigo: "focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
    emerald: "focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
    rose: "focus:border-rose-500 focus:ring-1 focus:ring-rose-500",
    amber: "focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please declare your reference name.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "An email communication line is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please construct a valid email structure.";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please configure a message subject heading.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write your statement of intent.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitState("delivering");

    // Simulate messaging dispatch through delivery channels
    setTimeout(() => {
      const newMessage: GuestbookMessage = {
        id: `msg-${Date.now()}`,
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      };

      const updatedHistory = [newMessage, ...guestMessages];
      setGuestMessages(updatedHistory);
      try {
        localStorage.setItem("dev_portfolio_messages", JSON.stringify(updatedHistory));
      } catch (err) {
        console.error("Local save error", err);
      }

      setSubmitState("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleClearMessages = () => {
    if (confirm("Are you sure you want to clear your message delivery log history?")) {
      setGuestMessages([]);
      localStorage.removeItem("dev_portfolio_messages");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Backing Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute bottom-0 right-10 translate-y-1/3 w-80 h-80 rounded-full blur-[140px] opacity-10 transition-all duration-700 ${
          accentColor === "indigo" ? "bg-indigo-500" :
          accentColor === "emerald" ? "bg-emerald-500" :
          accentColor === "rose" ? "bg-rose-500" : "bg-amber-500"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] font-mono ${accentTextClasses[accentColor]}`}>
            // 03. Inquiry Delivery Box
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-none mt-2">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-center">
          
          {/* Descriptive instructions & Details (Left) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col text-left">
            <div className="space-y-4">
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono">
                Initiate Inquiry
              </span>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                Let&apos;s build something amazing.
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                Want to expand your team stack, initiate research contracts, or review custom SaaS projects? Input your data and dispatch a communication. I generally review and follow up within one business cycle.
              </p>
            </div>

            {/* Quick Contact Links Box */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${BIO_DATA.email}`}
                className="flex items-center gap-4 p-4 rounded-3xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950 transition-all group cursor-pointer overflow-hidden"
              >
                <div className={`p-3 rounded-xl bg-zinc-950 border border-zinc-900 shrink-0 ${accentTextClasses[accentColor]}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] font-bold">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors block mt-0.5 truncate" title={BIO_DATA.email}>
                    {BIO_DATA.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-3xl bg-zinc-950/20 border border-zinc-900 overflow-hidden">
                <div className={`p-3 rounded-xl bg-zinc-950 border border-zinc-900 shrink-0 ${accentTextClasses[accentColor]}`}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] font-bold">
                    Office Hours
                  </span>
                  <span className="text-sm font-semibold text-zinc-400 block mt-0.5 truncate">
                    Mon - Fri // 09:00 - 18:00 PST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Input Form container (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-10 rounded-[32px] bg-white text-zinc-950 shadow-2xl text-left relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitState !== "sent" ? (
                  <motion.form
                    key="contact-form-layout"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Rows of Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-[10px] font-bold text-zinc-500 tracking-[0.25em] uppercase">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Robin Banks"
                          className={`w-full px-4 py-3 bg-zinc-100 border rounded-xl text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all ${
                            errors.name ? "border-red-500/50 focus:border-red-500" : "border-zinc-200"
                          } focus:bg-zinc-50 focus:border-zinc-900`}
                        />
                        {errors.name && (
                          <span className="text-[10px] font-bold text-red-500 block mt-1">{errors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5 font-sans">
                        <label htmlFor="email" className="block text-[10px] font-bold text-zinc-500 tracking-[0.25em] uppercase">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. robin@gmail.com"
                          className={`w-full px-4 py-3 bg-zinc-100 border rounded-xl text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all ${
                            errors.email ? "border-red-500/50 focus:border-red-500" : "border-zinc-200"
                          } focus:bg-zinc-50 focus:border-zinc-900`}
                        />
                        {errors.email && (
                          <span className="text-[10px] font-bold text-red-500 block mt-1">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-[10px] font-bold text-zinc-500 tracking-[0.25em] uppercase">
                        Subject Line
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Redesign Consultation Request"
                        className={`w-full px-4 py-3 bg-zinc-100 border rounded-xl text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all ${
                          errors.subject ? "border-red-500/50 focus:border-red-500" : "border-zinc-200"
                        } focus:bg-zinc-50 focus:border-zinc-900`}
                      />
                      {errors.subject && (
                        <span className="text-[10px] font-bold text-red-500 block mt-1">{errors.subject}</span>
                      )}
                    </div>

                    {/* Chat Text area */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-[10px] font-bold text-zinc-500 tracking-[0.25em] uppercase">
                        Statement / Detailed Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please write your design parameters, business context, or general message copy..."
                        className={`w-full px-4 py-3 bg-zinc-100 border rounded-xl text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all resize-none ${
                          errors.message ? "border-red-500/50 focus:border-red-500" : "border-zinc-200"
                        } focus:bg-zinc-50 focus:border-zinc-900`}
                      />
                      {errors.message && (
                        <span className="text-[10px] font-bold text-red-500 block mt-1">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit layout action */}
                    <button
                      type="submit"
                      disabled={submitState !== "idle"}
                      className="w-full px-6 py-4 rounded-xl text-sm font-bold text-white tracking-wider uppercase bg-zinc-950 hover:bg-zinc-900 transition-all active:scale-95 disabled:opacity-75 disabled:active:scale-100 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {submitState === "idle" && (
                        <>
                          <span>Transmit Secure Message</span>
                          <Send className="w-4 h-4 ml-0.5" />
                        </>
                      )}
                      {submitState === "delivering" && (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Establishing Delivery Channel...</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submit-success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-6 text-center space-y-6 flex flex-col items-center text-zinc-900"
                  >
                    <div className="p-4 rounded-full bg-zinc-100 border border-zinc-200 text-emerald-600 animate-bounce">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-zinc-950">
                        Inquiry Successfully Logged!
                      </h3>
                      <p className="text-sm text-zinc-550 max-w-sm mx-auto leading-relaxed">
                        Your message has been processed successfully and recorded in your local browser guestbook timeline below. Talk to you soon!
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitState("idle")}
                      className="px-6 py-2.5 rounded-lg text-xs font-mono font-black uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 text-white transition-all cursor-pointer"
                    >
                      Create Another Delivery
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dynamic Local Storage Guestbook / Received Messages Log Board */}
        <div className="mt-20 border-t border-zinc-900 pt-16 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-[0.25em] flex items-center gap-2">
                <Info className="w-4 h-4" />
                Browser Local Session Storage
              </span>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase mt-1.5">
                Sent Messages Log (Guestbook)
              </h3>
            </div>
            {guestMessages.length > 0 && (
              <button
                onClick={handleClearMessages}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold bg-red-950/20 border border-red-900/30 text-red-500 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Local Logs</span>
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {guestMessages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guestMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layoutId={msg.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 rounded-3xl bg-zinc-950/40 border border-zinc-900 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2 border-b border-zinc-900 pb-2.5">
                        <div>
                          <span className="text-sm font-bold text-white flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-zinc-500" />
                            {msg.name}
                          </span>
                          <span className="block text-[10px] font-mono text-zinc-500 lowercase">
                            {msg.email}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-950 border border-zinc-900 rounded text-[9px] font-mono text-slate-400">
                          <Calendar className="w-2.5 h-2.5" />
                          {msg.timestamp}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className={`block text-xs font-mono uppercase tracking-wide font-bold ${accentTextClasses[accentColor]}`}>
                          Re: {msg.subject}
                        </span>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal italic">
                          &quot;{msg.message}&quot;
                        </p>
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-zinc-600 border-t border-zinc-900 pt-2 flex items-center gap-1.5 uppercase font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Stored Log Successfully</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center rounded-3xl bg-zinc-950/10 border border-dashed border-zinc-900 max-w-md mx-auto">
                <MessageSquare className="w-8 h-8 text-zinc-650 mx-auto opacity-50 mb-3" />
                <p className="text-sm text-zinc-500 leading-relaxed">
                  No submissions have been dispatched from this browser session yet. Submit the contact form above to see your letter added to this local guestbook storage!
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
