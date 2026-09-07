import {
  BarChart3,
  ClipboardList,
  Database,
  Gauge,
  ScanSearch,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Workflow", href: "#workflow" },
  { label: "Engagement", href: "#engagement" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Five Core Service Pillars                                          */
/* ------------------------------------------------------------------ */

export const servicePillars = [
  {
    icon: Gauge,
    title: "AI Quality Assurance & Training",
    description:
      "LLM evaluation, RLHF, preference scoring, and hallucination review for production-grade model reliability.",
  },
  {
    icon: ScanSearch,
    title: "Annotation & Search Refinement",
    description:
      "Multimodal vision and text labeling, search relevance, ranking, data cleaning, and deduplication.",
  },
  {
    icon: BarChart3,
    title: "Data & Systems Analysis",
    description:
      "Workflow process mapping, data quality audits, and precise requirements documentation.",
  },
  {
    icon: ClipboardList,
    title: "Technical Project & Ops Management",
    description:
      "SOP design, workforce operations, and transparent client delivery reporting.",
  },
  {
    icon: Database,
    title: "Data Collection & Dataset Development",
    description:
      "Custom dataset curation across audio, image, and text — with defined train/test splits.",
  },
];

/* ------------------------------------------------------------------ */
/*  Multimodal Capability Tabs                                         */
/* ------------------------------------------------------------------ */

export const capabilityTabs = [
  {
    id: "vision",
    label: "Vision",
    heading: "Full-fidelity visual understanding.",
    items: [
      "Image & video annotation — bounding boxes, segmentation, classification",
      "Multimodal vision-text labeling & image-caption alignment",
      "Visual QA labeling and multimodal preference scoring",
      "Visual content moderation review",
    ],
  },
  {
    id: "language",
    label: "Language & Search",
    heading: "Judgment-grade language evaluation.",
    items: [
      "LLM output evaluation & RLHF-style comparative judgment",
      "Hallucination & factuality review",
      "Search relevance & ranking evaluation",
      "Text annotation, entity tagging, and intent classification",
    ],
  },
  {
    id: "documents",
    label: "Documents & Audio",
    heading: "Structured signal from unstructured sources.",
    items: [
      "Native SEA-language audio collection & transcription",
      "OCR-assisted document parsing & field extraction",
      "Requirements & process documentation",
      "Audio/text quality labeling at scale",
    ],
  },
  {
    id: "systems",
    label: "Data & Systems",
    heading: "Operational integrity, end to end.",
    items: [
      "Data quality audits & completeness scoring",
      "Dataset curation with defined train/test splits",
      "Data cleaning & deduplication pipelines",
      "SOP design & client delivery dashboarding",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Six-Step Operating Workflow                                        */
/* ------------------------------------------------------------------ */

export const workflowSteps = [
  {
    number: "01",
    title: "Define",
    description: "Requirements gathering, guideline drafting, task scoping.",
  },
  {
    number: "02",
    title: "Calibrate",
    description: "Gold-set creation, annotator training, IAA baseline.",
  },
  {
    number: "03",
    title: "Produce",
    description: "Skill-tag-matched execution at agreed velocity.",
  },
  {
    number: "04",
    title: "Review",
    description: "Multi-layer QA sampling and label adjudication.",
  },
  {
    number: "05",
    title: "Measure",
    description: "IAA scoring, gold-benchmark accuracy, SLA tracking.",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Structured export, dashboard sync, recap generation.",
  },
];

/* ------------------------------------------------------------------ */
/*  Engagement Models                                                   */
/* ------------------------------------------------------------------ */

export const engagementModels = [
  {
    title: "Pilot Sprint",
    volume: "100 – 1,000 tasks",
    description: "Low-risk entry point to prove the quality benchmark.",
    features: [
      "1–3 week delivery window",
      "Fixed-scope quality report",
      "No long-term commitment",
    ],
    emphasized: false,
  },
  {
    title: "Project-Based",
    volume: "1,000 – 50,000 tasks",
    description: "Scoped delivery against clearly defined outcomes.",
    features: [
      "Complexity-tiered pricing",
      "Dedicated QA pass",
      "Milestone-based delivery",
    ],
    emphasized: false,
  },
  {
    title: "Managed Retainer",
    volume: "Ongoing capacity",
    description: "Reserved monthly capacity with SLA-backed delivery.",
    features: [
      "Continuous evaluation cycles",
      "Priority queue access",
      "Monthly automated recaps",
    ],
    emphasized: true,
    tag: "Most flexible",
  },
  {
    title: "Dedicated Pod",
    volume: "50,000+ tasks",
    description: "Ring-fenced team embedded into your operations.",
    features: [
      "Dedicated QA lead",
      "Custom system integration",
      "Stood up within 5–10 days",
    ],
    emphasized: false,
  },
];
