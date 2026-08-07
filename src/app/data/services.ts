export const SERVICE_STATS = [
  { value: "4", label: "Global Hubs" },
  { value: "6+", label: "Active Projects" },
  { value: "4", label: "Departments" },
  { value: "14+", label: "h-index" },
  { value: "60+", label: "Publications" },
];

export type ServiceCategory = {
  title: string;
  tagline: string;
  items: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Data Curation & Ground Truth",
    tagline: "We collect and build datasets that do not exist yet.",
    items: [
      "Custom agricultural, food and environmental datasets, African context",
      "Field data collection with documented SOPs and quality control",
      "Image, video, audio, text and structured data pipelines",
      "Dataset annotation, cleaning and validation",
      "Open dataset publication on Zenodo with a citable DOI",
      "African-language and African-crop specific datasets on request",
    ],
  },
  {
    title: "AI & Machine Learning",
    tagline: "From raw data to deployed, production-ready models.",
    items: [
      "Custom computer vision model development",
      "Object detection, classification and regression modelling",
      "Model fine-tuning on client-provided datasets",
      "Rigorous model evaluation and benchmarking reports",
      "Edge deployment, TFLite and on-device mobile inference",
      "Model cards and full documentation included as standard",
    ],
  },
  {
    title: "Software & Deployment",
    tagline: "We build the tools that make research usable.",
    items: [
      "Research application development, web and mobile",
      "REST API and inference endpoint development",
      "Dashboard development in Power BI and Tableau",
      "Digital twin prototyping",
      "Cloud-backend and edge-computing interfaces",
      "Full documentation and GitHub repository handoff",
    ],
  },
  {
    title: "Research & Advisory",
    tagline: "Strategic research support from proposal to publication.",
    items: [
      "Research consulting and methodology design",
      "Literature review and novelty scoping",
      "Grant writing support and proposal development",
      "Technical report and white paper writing",
      "Peer review preparation and co-authorship",
      "Authorship and publication strategy",
    ],
  },
  {
    title: "Training & Coaching",
    tagline: "We train the next generation of African AI researchers.",
    items: [
      "AI and ML training for researchers and institutions",
      "Data science and analytics skills bootcamps",
      "Research methodology workshops",
      "1:1 and group mentorship programmes",
      "Internal seminars and knowledge transfer sessions",
      "Custom curriculum design for organisations",
    ],
  },
  {
    title: "Data Analytics & Dashboards",
    tagline: "Turning complex data into decisions.",
    items: [
      "Exploratory data analysis and statistical reporting",
      "Power BI and Tableau dashboard design",
      "Agricultural and food-systems data analysis",
      "Benchmark contextualisation against published datasets",
      "Presentation-ready analytical reports",
      "Ongoing analytics retainer arrangements available",
    ],
  },
];

export const QUALITY_STANDARDS = [
  "Every dataset delivered with annotation SOP, metadata CSV, and data dictionary",
  "Every model delivered with a model card, confusion matrix, and honest error reporting",
  "Every report written to publication standard",
  "All AI tool usage declared in every deliverable",
  "Lead researcher: h-index 14, 60+ publications",
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const HOW_IT_WORKS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Email us at info@daintymindz.com with a brief description of your project or dataset need. No lengthy forms, just a conversation.",
  },
  {
    number: "02",
    title: "We Scope the Work",
    description:
      "We respond within 48 hours with a project scope, timeline, and pricing. For complex engagements we schedule a free 30-minute scoping call.",
  },
  {
    number: "03",
    title: "We Deliver",
    description:
      "Work begins with a defined brief, clear milestones, and regular updates. Final deliverables include all documentation and a handover session.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description:
      "Many clients return for follow-on work. We offer retainer arrangements for organisations needing continuous analytical or research support.",
  },
];

export const PRICING_OPTIONS = [
  "One-off project engagements",
  "Monthly retainer arrangements",
  "Academic and NGO rates available",
  "Collaborative research partnerships with co-authorship",
];
