/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: "Languages" | "Frameworks & Libs" | "Design & Tools" | "Platforms" | "Automation Tools" | "QA Methodologies" | "Languages & Core" | "Platforms & CI"; // or custom category names
  level: number; // 0-100 representation
}

export interface ClientTimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skillsUsed: string[];
}

export interface ProjectSection {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web App" | "Mobile" | "UI-UX" | "Test Framework" | "Performance Tool" | "Audit Tool" | "QA Tool";
  tags: string[];
  techStack: string[];
  image: string; // url address
  demoUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  keyFeatures: string[];
}

export interface GuestbookMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
