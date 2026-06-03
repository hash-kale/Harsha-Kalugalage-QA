/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, ClientTimelineItem, ProjectSection } from "./types";

export const BIO_DATA = {
  name: "Harsha Kalugalage",
  title: "Lead QA Automation Engineer & SDET",
  subtitle: "Ensuring software resilience, robust test automation infrastructure, and zero-defect deployments.",
  experienceCount: "6+",
  completedCount: "120+", // verified automated suites & verified production releases
  clientSatisfaction: "99.9%", // Service SLA Compliance
  email: "harsha2001kalugalage@gmail.com",
  phone: "+1 (555) 381-0294",
  location: "Colombo, Sri Lanka (Open to Remote)",
  aboutParagraph1: "I am a Senior Quality Assurance Engineer & SDET specializing in the design, implementation, and scaling of robust automated test environments. Over the past six years, I have successfully partnered with high-growth startup teams and enterprise organizations to transition legacy manual testing processes into high-speed, parallelized automation suites.",
  aboutParagraph2: "My methodology pairs leading end-to-end framework layers like Playwright and Cypress with integrated containerized execution environments (Docker) and optimized CI/CD runners (GitHub Actions, GitLab CI). I specialize in diagnosing interface regressions, load-testing high-throughput backend APIs under extreme stress, and establishing clear telemetry dashboards to secure pristine release compliance.",
  resumeUrl: "#", // Mock download link
  socials: [
    { name: "GitHub", url: "https://github.com", iconName: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", iconName: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", iconName: "twitter" }
  ]
};

export const SKILLS_DATA: Skill[] = [
  // Automation Tools
  { name: "Playwright", category: "Automation Tools", level: 98 },
  { name: "Cypress", category: "Automation Tools", level: 95 },
  { name: "Selenium WebDriver", category: "Automation Tools", level: 88 },
  { name: "Appium (Mobile)", category: "Automation Tools", level: 82 },
  { name: "Postman & Newman", category: "Automation Tools", level: 94 },

  // Methodologies
  { name: "CI/CD & DevOps", category: "QA Methodologies", level: 92 },
  { name: "API Integration Testing", category: "QA Methodologies", level: 96 },
  { name: "Load & Stress Testing (k6)", category: "QA Methodologies", level: 87 },
  { name: "Security (OWASP Top 10)", category: "QA Methodologies", level: 80 },
  { name: "A11y (WCAG / Axe-Core)", category: "QA Methodologies", level: 90 },

  // Languages
  { name: "TypeScript", category: "Languages & Core", level: 94 },
  { name: "JavaScript (ES6+)", category: "Languages & Core", level: 96 },
  { name: "Python", category: "Languages & Core", level: 85 },
  { name: "SQL & Databases", category: "Languages & Core", level: 88 },
  { name: "Bash Scripting", category: "Languages & Core", level: 80 },

  // Platforms/Tools
  { name: "Docker", category: "Platforms & CI", level: 90 },
  { name: "GitHub Actions", category: "Platforms & CI", level: 94 },
  { name: "Grafana & Prometheus", category: "Platforms & CI", level: 82 },
  { name: "Google Cloud Platform", category: "Platforms & CI", level: 85 }
];

export const TIMELINE_DATA: ClientTimelineItem[] = [
  {
    id: "exp-1",
    role: "Lead QA Automation Engineer / SDET",
    company: "Aether Technologies",
    period: "2024 - Present",
    description: "Orchestrated end-to-end regression pipelines utilizing Playwright, TypeScript, and Docker. Consolidated parallel testing nodes to execute over 1,500 test assertions in under 4 minutes, cutting CI/CD execution pipeline overheads by 65%. Introduced real-time visual regression testing and flaky-test analyzer algorithms.",
    skillsUsed: ["Playwright", "TypeScript", "Docker", "GitHub Actions", "GCP"]
  },
  {
    id: "exp-2",
    role: "Senior Test Automation Engineer",
    company: "Prism Quality Labs",
    period: "2022 - 2024",
    description: "Architected API contract testing workflows using Postman and Cypress, guaranteeing sub-second system integrations across enterprise SaaS gateways. Built custom distributed loading harnesses with k6 to assert on API SLAs and identify platform memory leakage during mock 100k-user events.",
    skillsUsed: ["JavaScript", "Cypress", "Postman", "k6 Testing", "Node.js"]
  },
  {
    id: "exp-3",
    role: "Quality Assurance Specialist",
    company: "Pixel Technical Systems",
    period: "2020 - 2022",
    description: "Collaborated deeply with engineering leads to define robust test cases and validation plans. Automated accessibility scanning compliance to WCAG 2.1 AA benchmarks using axe-core and initiated automated functional sweeps across dynamic multi-device targets, lowering production error escapes by 42%.",
    skillsUsed: ["Selenium", "Axe-Core", "SQL", "HTML5 / CSS3", "Python"]
  }
];

export const PROJECTS_DATA: ProjectSection[] = [
  {
    id: "proj-1",
    title: "Sentinel: E2E Playwright Automation Framework",
    description: "A professional-grade, modular automated test engineering harness built with Playwright and TypeScript, offering parallel matrix execution, tracer report capturing, and live status reporting.",
    longDescription: "Sentinel is a highly scalable enterprise end-to-end browser automation harness designed according to the Page Object Model (POM) pattern. It uses dynamic concurrency triggers, custom multi-browser matrix pipelines, structured trace auditing, and automatic artifact exports. It integrates directly with standard Slack webhook streams, alerting stakeholders with instant snapshots and detailed screen-capture walk-throughs upon regression detection.",
    category: "Test Framework",
    tags: ["Playwright", "TypeScript", "Docker", "CI/CD Gate"],
    techStack: ["Playwright Core", "TypeScript 5", "Docker Engine", "Slack API Hooks", "CI Pipeline Matrix", "HTML Reporting Board"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    stats: [
      { label: "Execution Slashed", value: "-65% Time" },
      { label: "Test Reliability", value: "99.85%" },
      { label: "Line Node Coverage", value: "94.2%" }
    ],
    keyFeatures: [
      "Page Object Model (POM) architecture to isolate test logic from interface structures",
      "Dynamic browser testing matrix running across Chromium, WebKit, and Firefox engines concurrently",
      "Pre-configured automatic retry parameters with trace logging, dynamic video capture, and HTML outputs",
      "Full integration with CI/CD gates to block builds with critical accessibility/assertion failures"
    ]
  },
  {
    id: "proj-2",
    title: "Aegis: Distributed k6 Performance Engine",
    description: "A modular benchmarking platform leveraging containerized k6 scripts to load-test cloud APIs, validating response boundaries, memory stability, and service SLA parameters under high stress.",
    longDescription: "Aegis allows software delivery teams to verify backend stability under extreme loads. Built with k6 scripts orchestrating Docker virtual nodes, it subjects REST, gRPC, and GraphQL gateways to synthetic spikes of up to 100,000 concurrent user sessions. All performance data is collected, parsed, and live-monitored through Prometheus metrics and high-definition Grafana dashboards.",
    category: "Performance Tool",
    tags: ["k6 Stress Engine", "Prometheus Metrics", "Docker Architecture"],
    techStack: ["k6 Load Core", "JavaScript", "Docker Compose", "Prometheus Gateway", "Grafana Dashboards", "InfluxDB Connector"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    stats: [
      { label: "Load Capacity", value: "100k Users" },
      { label: "Precision Rate", value: "99.99% Accuracy" },
      { label: "Latency Tracker", value: "<150ms SLA" }
    ],
    keyFeatures: [
      "Orchestrates hundreds of virtual user profiles validating database reads and index limits",
      "Preloaded threshold configurations asserting on strict P95 and P99 latency margins",
      "Parameterized testing setups using dynamic environment profiles to block browser/database caching",
      "Real-time cluster monitoring including memory footprint tracking and active connection audits"
    ]
  },
  {
    id: "proj-3",
    title: "Axe-Guard: Automated Accessibility Audit Core",
    description: "An continuous delivery gate module utilizing custom axe-core scanners and headless runners to audit enterprise web modules against WCAG 2.2 standards.",
    longDescription: "Axe-Guard audits modern web pages for accessibility defects. Integrated directly post-compile, headless drivers crawl application pages to examine keyboard navigability, semantic layouts, color contrast, and interactive screen-reader compatibility. It breaks production builds if severe ADA deviations are introduced.",
    category: "Audit Tool",
    tags: ["Axe-Core Engine", "Headless Crawler", "Jest Integrations"],
    techStack: ["axe-core API", "Puppeteer Client", "NodeJS Compiler", "Tailwind CSS Reports", "Jest Assertion Kit", "JSON Schema Parser"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    stats: [
      { label: "WCAG Specs", value: "v2.2 Level AA" },
      { label: "Audit Modules", value: "85+ System Rules" },
      { label: "Prod Escape Rate", value: "0% Accessibility" }
    ],
    keyFeatures: [
      "Crawls server-rendered pages and dynamic single-page content with automated coordinate sweeps",
      "Compiles localized visual indicators displaying precise failing markup and styling lines",
      "Outputs detailed structural logs outlining clear instructions to remedy identified compliance violations",
      "Flexible thresholding to permit light warning logs while strictly failing critical accessibility barriers"
    ]
  },
  {
    id: "proj-4",
    title: "MockFlow: Isolated API Sandbox Engine",
    description: "A lightweight mocking service supporting quick, sandboxed environment configurations to test frontend interfaces under complex asynchronous failures.",
    longDescription: "MockFlow bridges testing issues when direct external microservice dependencies are slow or unstable. It equips testing engineers with an intuitive web panel to map synthetic endpoints, delay network times, trigger custom HTTP status failures, and mimic server-side payload structures seamlessly.",
    category: "QA Tool",
    tags: ["Mock Gateway", "Express.js", "GraphQL Mocking"],
    techStack: ["Express Sandbox", "Node.js Platform", "TypeScript", "WebSocket SocketIO", "Tailwind Panel", "Swagger API Reader"],
    image: "https://images.unsplash.com/photo-1510017808638-a84d440d9045?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    stats: [
      { label: "Latency Simulator", value: "0ms - 10s Adjustable" },
      { label: "Deploy Launch", value: "<10s Overheads" },
      { label: "Endpoints Logged", value: "Infinite Sandboxes" }
    ],
    keyFeatures: [
      "Simulate extreme connection losses and unstable latency to test off-grid app capabilities",
      "Interactive swagger integration mapping REST and GraphQL requests schema directly",
      "Mock WebSocket broadcasting simulating real-time system alerts and concurrent user signals",
      "Lightweight standalone distribution easily run locally inside Docker files"
    ]
  }
];
