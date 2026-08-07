export type Project = {
  slug: string;
  name: string;
  status: string;
  category: string;
  image: string | null;
  problem: string;
  solution: string;
  tags: string[];
  venue?: string;
  paperUrl?: string;
  posterUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "bitter-gourd-freshness-detection",
    name: "Explainable Bitter Gourd Freshness Detection using MobileNetV3 and GradCAM",
    status: "Published",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/kics-bitter-gourd-poster.png",
    problem: "More than 50% of fruit and vegetable yield is lost across the global supply chain, and manual freshness inspection for underexplored crops like bitter gourd remains slow, subjective, and inconsistent.",
    solution: "An explainable deep learning pipeline pairing a lightweight MobileNetV3 classifier with GradCAM visual explanations, reaching 100% accuracy on held-out test images while showing exactly which regions of the fruit drove each fresh/rotten decision — built for mobile and edge deployment in the field.",
    tags: ["MachineLearning"],
    venue: "KICS Summer 2026",
    paperUrl: "/papers/kics-bitter-gourd-freshness-paper.pdf",
    posterUrl: "/papers/kics-bitter-gourd-freshness-poster.pdf",
  },
  {
    slug: "seed-viability",
    name: "Climate-Window Security via Seed Viability Scanning",
    status: "Field Testing Phase",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/seed-viability.png",
    problem: "Up to 30% of local seeds are unviable due to micro-cracks or pests, wasting crucial planting windows.",
    solution: "A mobile Computer Vision app where farmers scan seeds to receive an instant Germination Probability Score, securing harvests before the first seed hits the soil.",
    tags: ["DataOps", "MachineLearning", "SoftwareSystems"],
  },
  {
    slug: "harvestguard",
    name: "HarvestGuard: Predictive Shelf-Life Analytics",
    status: "Model Optimization",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/harvestguard.png",
    problem: "Perishables like cassava and tomatoes suffer up to 40% transit loss from \"hidden\" internal rot.",
    solution: "A surface-analysis model that detects early vascular streaking and micro-bruising to calculate remaining shelf-life in days, optimizing the supply chain.",
    tags: ["DataOps", "MachineLearning"],
  },
  {
    slug: "purityscale",
    name: "PurityScale: Dry Food Supply Chain Standardization",
    status: "Field Testing Phase",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/purityscale.png",
    problem: "Manual grain pricing often misses hidden weevil damage and stones, causing massive losses for bulk buyers.",
    solution: "A high-density object detection tool that provides an objective Purity & Quality Grade for local Nigerian grain samples.",
    tags: ["DataOps", "MachineLearning"],
  },
  {
    slug: "pathfinder",
    name: "PathFinder: Real-time Cyber-Physical Infrastructure Diagnostics",
    status: "Model Optimization",
    category: "Smart Infrastructure & Transport",
    image: "/images/projects/pathfinder.png",
    problem: "Transforming standard dashboards into intelligent \"Senses.\"",
    solution: "A YOLO-based edge-computing model trained on underserved Nigerian road datasets. It instantly identifies and classifies potholes, severe cracks, and surface damage to provide real-time safety hazards and transit delay mapping.",
    tags: ["SoftwareSystems", "MachineLearning"],
  },
  {
    slug: "mobile-vision-core",
    name: "Daintymindz Mobile Vision Core",
    status: "Platform Build",
    category: "Software & Data Analytics",
    image: null,
    problem: "Complex Computer Vision models cannot run on low-end devices in remote regions.",
    solution: "A specialized software framework that allows complex CV models (like our Seed Viability and Shelf-Life scanners) to run locally on a smartphone, with high-performance cloud backends and Edge-Computing interfaces.",
    tags: ["SoftwareSystems"],
  },
  {
    slug: "decision-engine",
    name: "Daintymindz Decision Engine",
    status: "Dashboard Design",
    category: "Software & Data Analytics",
    image: null,
    problem: "Raw qualitative field data is not actionable for supply chain decisions.",
    solution: "Our analysts use PowerBI and Tableau to translate raw field data into high-fidelity \"Actionable Foresight\" dashboards, integrating ML-driven seed viability scores and produce shelf-life predictions.",
    tags: ["DataAnalytics"],
  },
];

export const statusClasses: Record<string, string> = {
  "Field Testing Phase": "bg-emerald-500/12 text-emerald-300 border-emerald-400/20",
  "Model Optimization": "bg-sky-500/12 text-sky-300 border-sky-400/20",
  "Platform Build": "bg-violet-500/12 text-violet-300 border-violet-400/20",
  "Dashboard Design": "bg-amber/12 text-amber border-amber/20",
  "Published": "bg-indigo-500/12 text-indigo-300 border-indigo-400/20",
};
