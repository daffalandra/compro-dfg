import {
  BarChart3,
  ClipboardList,
  Database,
  Gauge,
  ScanSearch,
} from "lucide-react";
import type { Bilingual } from "../i18n/LanguageContext";

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks: { label: Bilingual; href: string }[] = [
  { label: { en: "Services", id: "Layanan" }, href: "#services" },
  { label: { en: "Capabilities", id: "Kapabilitas" }, href: "#capabilities" },
  { label: { en: "Workflow", id: "Alur Kerja" }, href: "#workflow" },
  { label: { en: "Engagement", id: "Kerja Sama" }, href: "#engagement" },
  { label: { en: "Contact", id: "Kontak" }, href: "#contact" },
];

export const navCta = {
  en: "Request Pilot",
  id: "Ajukan Pilot",
} as Bilingual;

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  badge: {
    en: "AI Data Operations · Southeast Asia",
    id: "Operasional Data AI · Asia Tenggara",
  } as Bilingual,
  headlineLine1: {
    en: ["Fine", "in", "detail."],
    id: ["Presisi", "dalam", "detail."],
  },
  headlineLine2: {
    en: ["Good", "in", "use."],
    id: ["Optimal", "saat", "digunakan."],
  },
  subhead: {
    en: "DFG engineers the human judgment and delivery infrastructure that turns raw, inconsistent data into production-ready assets for AI systems across Southeast Asia.",
    id: "DFG merancang penilaian manusia dan infrastruktur pengiriman yang mengubah data mentah dan tidak konsisten menjadi aset siap produksi untuk sistem AI di seluruh Asia Tenggara.",
  } as Bilingual,
  ctaPrimary: {
    en: "Request Pilot Sprint",
    id: "Ajukan Pilot Sprint",
  } as Bilingual,
  ctaSecondary: {
    en: "Explore Capabilities",
    id: "Jelajahi Kapabilitas",
  } as Bilingual,
  image: "/assets/hero/hero.png",
};

/* ------------------------------------------------------------------ */
/*  About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: { en: "About DFG", id: "Tentang DFG" } as Bilingual,
  heading: {
    en: "Built for the operational reality of AI at scale.",
    id: "Dibangun untuk realitas operasional AI di skala besar.",
  } as Bilingual,
  description: {
    en: "We are a lean, specialist team based in Southeast Asia — combining rigorous quality governance, regional linguistic fluency, and systems-level automation to deliver data operations that enterprise AI teams can actually rely on.",
    id: "Kami adalah tim spesialis yang ramping berbasis di Asia Tenggara — memadukan tata kelola kualitas yang ketat, kefasihan linguistik regional, dan otomasi di tingkat sistem untuk menghadirkan operasional data yang benar-benar dapat diandalkan oleh tim AI perusahaan.",
  } as Bilingual,
  stat1: { value: "5+", label: { en: "Service Pillars", id: "Pilar Layanan" } as Bilingual },
  stat2: { value: "6", label: { en: "Step QA Workflow", id: "Langkah Alur QA" } as Bilingual },
  stat3: { value: "SEA", label: { en: "Native Context", id: "Konteks Lokal" } as Bilingual },
  image: "/assets/about/about.png",
};

/* ------------------------------------------------------------------ */
/*  Five Core Service Pillars                                          */
/* ------------------------------------------------------------------ */

export const servicePillarsHeader = {
  eyebrow: { en: "What We Do", id: "Layanan Kami" } as Bilingual,
  heading: {
    en: "Five pillars of data operations.",
    id: "Lima pilar operasional data.",
  } as Bilingual,
  description: {
    en: "One accountable partner spanning the full lifecycle — from raw data to AI-ready, governed output.",
    id: "Satu mitra yang bertanggung jawab penuh atas seluruh siklus — dari data mentah hingga output siap-AI yang terkelola.",
  } as Bilingual,
};

export const servicePillars: {
  icon: typeof Gauge;
  title: Bilingual;
  description: Bilingual;
  image?: string;
}[] = [
  {
    icon: Gauge,
    title: {
      en: "AI Quality Assurance & Training",
      id: "Jaminan Kualitas & Pelatihan AI",
    },
    description: {
      en: "LLM evaluation, RLHF, preference scoring, and hallucination review for production-grade model reliability.",
      id: "Evaluasi LLM, RLHF, penilaian preferensi, dan tinjauan halusinasi untuk keandalan model tingkat produksi.",
    },
    image: "/assets/our services/Quality Assurance & Training.jpeg",
  },
  {
    icon: ScanSearch,
    title: {
      en: "Annotation & Search Refinement",
      id: "Anotasi & Penyempurnaan Pencarian",
    },
    description: {
      en: "Multimodal vision and text labeling, search relevance, ranking, data cleaning, and deduplication.",
      id: "Pelabelan visual dan teks multimodal, relevansi pencarian, pemeringkatan, pembersihan data, dan deduplikasi.",
    },
    image: "/assets/our services/ANNOTATION & SEARCH REFINEMENT.jpeg",
  },
  {
    icon: BarChart3,
    title: {
      en: "Data & Systems Analysis",
      id: "Analisis Data & Sistem",
    },
    description: {
      en: "Workflow process mapping, data quality audits, and precise requirements documentation.",
      id: "Pemetaan proses kerja, audit kualitas data, dan dokumentasi kebutuhan yang presisi.",
    },
    image: "/assets/our services/Data and System analysis.png",
  },
  {
    icon: ClipboardList,
    title: {
      en: "Technical Project & Ops Management",
      id: "Manajemen Proyek Teknis & Operasional",
    },
    description: {
      en: "SOP design, workforce operations, and transparent client delivery reporting.",
      id: "Perancangan SOP, operasional tenaga kerja, dan pelaporan pengiriman klien yang transparan.",
    },
    image: "/assets/our services/Technical Project & Ops Management.png",
  },
  {
    icon: Database,
    title: {
      en: "Data Collection & Dataset Development",
      id: "Pengumpulan Data & Pengembangan Dataset",
    },
    description: {
      en: "Custom dataset curation across audio, image, and text — with defined train/test splits.",
      id: "Kurasi dataset khusus untuk audio, gambar, dan teks — lengkap dengan pembagian train/test yang terdefinisi.",
    },
    // No image for pillar 5 — uses icon-only treatment
  },
];

/* ------------------------------------------------------------------ */
/*  Multimodal Capability Tabs                                         */
/* ------------------------------------------------------------------ */

export const capabilitiesHeader = {
  eyebrow: { en: "Capabilities", id: "Kapabilitas" } as Bilingual,
  heading: {
    en: "Full-spectrum multimodal coverage.",
    id: "Cakupan multimodal secara menyeluruh.",
  } as Bilingual,
};

export const capabilityTabs: {
  id: string;
  label: Bilingual;
  heading: Bilingual;
  items: Bilingual[];
  image: string;
}[] = [
  {
    id: "vision",
    label: { en: "Vision", id: "Visual" },
    heading: {
      en: "Full-fidelity visual understanding.",
      id: "Pemahaman visual dengan akurasi tinggi.",
    },
    items: [
      {
        en: "Image & video annotation — bounding boxes, segmentation, classification",
        id: "Anotasi gambar & video — bounding box, segmentasi, klasifikasi",
      },
      {
        en: "Multimodal vision-text labeling & image-caption alignment",
        id: "Pelabelan visual-teks multimodal & penyelarasan gambar-teks",
      },
      {
        en: "Visual QA labeling and multimodal preference scoring",
        id: "Pelabelan QA visual dan penilaian preferensi multimodal",
      },
      {
        en: "Visual content moderation review",
        id: "Tinjauan moderasi konten visual",
      },
    ],
    image: "/assets/capabilities/VISION — VEHICLE & PEOPLE LABELLING.png",
  },
  {
    id: "language",
    label: { en: "Language & Search", id: "Bahasa & Pencarian" },
    heading: {
      en: "Judgment-grade language evaluation.",
      id: "Evaluasi bahasa dengan standar penilaian tinggi.",
    },
    items: [
      {
        en: "LLM output evaluation & RLHF-style comparative judgment",
        id: "Evaluasi output LLM & penilaian komparatif gaya RLHF",
      },
      {
        en: "Hallucination & factuality review",
        id: "Tinjauan halusinasi & akurasi faktual",
      },
      {
        en: "Search relevance & ranking evaluation",
        id: "Evaluasi relevansi & pemeringkatan pencarian",
      },
      {
        en: "Text annotation, entity tagging, and intent classification",
        id: "Anotasi teks, penandaan entitas, dan klasifikasi intent",
      },
    ],
    image: "/assets/capabilities/LANGUAGE & SEARCH.jpeg",
  },
  {
    id: "documents",
    label: { en: "Documents & Audio", id: "Dokumen & Audio" },
    heading: {
      en: "Structured signal from unstructured sources.",
      id: "Sinyal terstruktur dari sumber tidak terstruktur.",
    },
    items: [
      {
        en: "Native SEA-language audio collection & transcription",
        id: "Pengumpulan & transkripsi audio bahasa lokal Asia Tenggara",
      },
      {
        en: "OCR-assisted document parsing & field extraction",
        id: "Penguraian dokumen & ekstraksi bidang berbantuan OCR",
      },
      {
        en: "Requirements & process documentation",
        id: "Dokumentasi kebutuhan & proses kerja",
      },
      {
        en: "Audio/text quality labeling at scale",
        id: "Pelabelan kualitas audio/teks dalam skala besar",
      },
    ],
    image: "/assets/capabilities/DOCUMENTS & MEDIA.png",
  },
  {
    id: "systems",
    label: { en: "Data & Systems", id: "Data & Sistem" },
    heading: {
      en: "Operational integrity, end to end.",
      id: "Integritas operasional dari ujung ke ujung.",
    },
    items: [
      {
        en: "Data quality audits & completeness scoring",
        id: "Audit kualitas data & penilaian kelengkapan",
      },
      {
        en: "Dataset curation with defined train/test splits",
        id: "Kurasi dataset dengan pembagian train/test yang terdefinisi",
      },
      {
        en: "Data cleaning & deduplication pipelines",
        id: "Pipeline pembersihan data & deduplikasi",
      },
      {
        en: "SOP design & client delivery dashboarding",
        id: "Perancangan SOP & dashboard pengiriman klien",
      },
    ],
    image: "/assets/capabilities/DATA & SYSTEMS.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Regional Operations                                                */
/* ------------------------------------------------------------------ */

export const regionalOpsHeader = {
  eyebrow: { en: "Regional Operations", id: "Operasional Regional" } as Bilingual,
  heading: {
    en: "Real work, real context.",
    id: "Pekerjaan nyata, konteks nyata.",
  } as Bilingual,
  description: {
    en: "Our teams operate across diverse data environments — from discovery and research to logistics and document quality assurance.",
    id: "Tim kami beroperasi di berbagai lingkungan data — dari penemuan dan riset hingga logistik dan penjaminan kualitas dokumen.",
  } as Bilingual,
};

export const regionalOpsImages = [
  {
    src: "/assets/regional operations/DISCOVERY : RESEARCH.png",
    caption: { en: "Discovery & Research", id: "Penemuan & Riset" } as Bilingual,
  },
  {
    src: "/assets/regional operations/DATA REVIEW.png",
    caption: { en: "Data Review", id: "Tinjauan Data" } as Bilingual,
  },
  {
    src: "/assets/regional operations/DOCUMENT QUALITY.png",
    caption: { en: "Document Quality", id: "Kualitas Dokumen" } as Bilingual,
  },
  {
    src: "/assets/regional operations/LOGISTICS.png",
    caption: { en: "Logistics", id: "Logistik" } as Bilingual,
  },
];

/* ------------------------------------------------------------------ */
/*  Six-Step Operating Workflow                                        */
/* ------------------------------------------------------------------ */

export const workflowHeader = {
  eyebrow: { en: "How We Operate", id: "Cara Kami Bekerja" } as Bilingual,
  heading: {
    en: "A disciplined six-step workflow.",
    id: "Alur kerja enam langkah yang disiplin.",
  } as Bilingual,
};

export const workflowBg = "/assets/workflow section bg/discover.png";

export const workflowSteps: {
  number: string;
  title: Bilingual;
  description: Bilingual;
}[] = [
  {
    number: "01",
    title: { en: "Define", id: "Definisikan" },
    description: {
      en: "Requirements gathering, guideline drafting, task scoping.",
      id: "Pengumpulan kebutuhan, penyusunan pedoman, penentuan lingkup tugas.",
    },
  },
  {
    number: "02",
    title: { en: "Calibrate", id: "Kalibrasi" },
    description: {
      en: "Gold-set creation, annotator training, IAA baseline.",
      id: "Pembuatan gold-set, pelatihan anotator, penetapan baseline IAA.",
    },
  },
  {
    number: "03",
    title: { en: "Produce", id: "Produksi" },
    description: {
      en: "Skill-tag-matched execution at agreed velocity.",
      id: "Eksekusi sesuai skill-tag pada kecepatan yang disepakati.",
    },
  },
  {
    number: "04",
    title: { en: "Review", id: "Tinjau" },
    description: {
      en: "Multi-layer QA sampling and label adjudication.",
      id: "Sampling QA berlapis dan ajudikasi label.",
    },
  },
  {
    number: "05",
    title: { en: "Measure", id: "Ukur" },
    description: {
      en: "IAA scoring, gold-benchmark accuracy, SLA tracking.",
      id: "Penilaian IAA, akurasi gold-benchmark, pelacakan SLA.",
    },
  },
  {
    number: "06",
    title: { en: "Deliver", id: "Kirim" },
    description: {
      en: "Structured export, dashboard sync, recap generation.",
      id: "Ekspor terstruktur, sinkronisasi dashboard, pembuatan rekap.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Engagement Models                                                   */
/* ------------------------------------------------------------------ */

export const engagementHeader = {
  eyebrow: { en: "Engagement", id: "Kerja Sama" } as Bilingual,
  heading: {
    en: "Structured to match your scale.",
    id: "Terstruktur sesuai skala kebutuhan Anda.",
  } as Bilingual,
  learnMore: { en: "Learn more", id: "Selengkapnya" } as Bilingual,
};

export const engagementModels: {
  title: Bilingual;
  volume: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  emphasized: boolean;
  tag?: Bilingual;
}[] = [
  {
    title: { en: "Pilot Sprint", id: "Pilot Sprint" },
    volume: { en: "100 – 1,000 tasks", id: "100 – 1.000 tugas" },
    description: {
      en: "Low-risk entry point to prove the quality benchmark.",
      id: "Titik awal berisiko rendah untuk membuktikan standar kualitas.",
    },
    features: [
      { en: "1–3 week delivery window", id: "Jangka waktu pengiriman 1–3 minggu" },
      { en: "Fixed-scope quality report", id: "Laporan kualitas dengan lingkup tetap" },
      { en: "No long-term commitment", id: "Tanpa komitmen jangka panjang" },
    ],
    emphasized: false,
  },
  {
    title: { en: "Project-Based", id: "Berbasis Proyek" },
    volume: { en: "1,000 – 50,000 tasks", id: "1.000 – 50.000 tugas" },
    description: {
      en: "Scoped delivery against clearly defined outcomes.",
      id: "Pengiriman terlingkup sesuai hasil yang telah ditentukan dengan jelas.",
    },
    features: [
      { en: "Complexity-tiered pricing", id: "Harga bertingkat sesuai kompleksitas" },
      { en: "Dedicated QA pass", id: "Proses QA khusus" },
      { en: "Milestone-based delivery", id: "Pengiriman berbasis milestone" },
    ],
    emphasized: false,
  },
  {
    title: { en: "Managed Retainer", id: "Retainer Terkelola" },
    volume: { en: "Ongoing capacity", id: "Kapasitas berkelanjutan" },
    description: {
      en: "Reserved monthly capacity with SLA-backed delivery.",
      id: "Kapasitas bulanan yang dicadangkan dengan pengiriman terjamin SLA.",
    },
    features: [
      { en: "Continuous evaluation cycles", id: "Siklus evaluasi berkelanjutan" },
      { en: "Priority queue access", id: "Akses antrean prioritas" },
      { en: "Monthly automated recaps", id: "Rekap otomatis bulanan" },
    ],
    emphasized: true,
    tag: { en: "Most flexible", id: "Paling fleksibel" },
  },
  {
    title: { en: "Dedicated Pod", id: "Dedicated Pod" },
    volume: { en: "50,000+ tasks", id: "50.000+ tugas" },
    description: {
      en: "Ring-fenced team embedded into your operations.",
      id: "Tim khusus yang terintegrasi langsung ke dalam operasional Anda.",
    },
    features: [
      { en: "Dedicated QA lead", id: "QA lead khusus" },
      { en: "Custom system integration", id: "Integrasi sistem khusus" },
      { en: "Stood up within 5–10 days", id: "Siap beroperasi dalam 5–10 hari" },
    ],
    emphasized: false,
  },
];

/* ------------------------------------------------------------------ */
/*  CTA Banner                                                          */
/* ------------------------------------------------------------------ */

export const ctaBanner = {
  eyebrow: { en: "Get Started", id: "Mulai Sekarang" } as Bilingual,
  heading: {
    en: "Let's build the data foundation your AI deserves.",
    id: "Mari bangun fondasi data yang layak untuk AI Anda.",
  } as Bilingual,
  subhead: {
    en: "Deploy a Pilot Sprint within days. No long-term commitment required.",
    id: "Jalankan Pilot Sprint dalam hitungan hari. Tanpa komitmen jangka panjang.",
  } as Bilingual,
  cta: { en: "Request Pilot Sprint", id: "Ajukan Pilot Sprint" } as Bilingual,
  image: "/assets/CTA/CTA BG.png",
};

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  blurb: {
    en: "Fine in detail, Good in use. AI data operations and quality infrastructure for Southeast Asia.",
    id: "Fine in detail, Good in use. Operasional data AI dan infrastruktur kualitas untuk Asia Tenggara.",
  } as Bilingual,
  location: {
    en: "Jakarta, Indonesia · Southeast Asia",
    id: "Jakarta, Indonesia · Asia Tenggara",
  } as Bilingual,
  navigateHeading: { en: "Navigate", id: "Navigasi" } as Bilingual,
  companyHeading: { en: "Company", id: "Perusahaan" } as Bilingual,
  about: { en: "About", id: "Tentang" } as Bilingual,
  pricing: { en: "Pricing", id: "Harga" } as Bilingual,
  contact: { en: "Contact", id: "Kontak" } as Bilingual,
  rights: {
    en: "All rights reserved.",
    id: "Seluruh hak dilindungi.",
  } as Bilingual,
  logo: "/assets/Logo/DFG logo.png",
  branding: "/assets/Logo/DFG branding.png",
};
