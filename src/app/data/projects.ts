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
  organization?: string;
  publicationType?: string;
  publicationDate?: string;
  version?: string;
  authors?: string[];
  doiUrl?: string;
  zenodoUrl?: string;
  license?: string;
  citation?: string;
};

export const projects: Project[] = [
  {
    slug: "freshlab-tomato",
    name: "FreshLab-Tomato: A Longitudinal Shelf-Life Dataset",
    status: "Published",
    category: "Open Research Dataset",
    image: "/images/projects/freshlab-tomato-cover.webp",
    problem:
      "Reliable shelf-life and spoilage research needs longitudinal produce imagery paired with environmental measurements and consistent annotations.",
    solution:
      "FreshLab-Tomato is a longitudinal image and environmental dataset developed for tomato shelf-life assessment and spoilage prediction. It contains 1,080 images of 12 tomatoes monitored over 10 consecutive days under ambient, outdoor, and refrigerated storage conditions. The release includes temperature and relative-humidity readings, visual spoilage annotations, structured metadata, collection and annotation protocols, and sample exploratory analysis.",
    tags: [
      "Open Data",
      "Agricultural Research",
      "Computer Vision",
      "Postharvest Monitoring",
      "Food Quality",
    ],
    venue: "September 2026 · Version 1.0",
    organization: "DaintyMindz Laboratory",
    publicationType: "Open research dataset",
    publicationDate: "September 2026",
    version: "1.0",
    authors: [
      "Gloria Iheoma Njoku",
      "Anthony Uchenna Eneh",
      "Cynthia Chidinma Osewemen",
      "Judith Nkechinyere Njoku-Vowels",
    ],
    doiUrl: "https://doi.org/10.21227/wvqh-5c80",
    zenodoUrl: "https://zenodo.org/records/22239910",
    license: "Creative Commons Attribution 4.0 International",
    citation:
      "Njoku, G. I., Eneh, A. U., Osewemen, C. C., and Njoku-Vowels, J. N. (2026). FreshLab-Tomato: A Longitudinal Shelf-Life Dataset (Version 1.0). IEEE DataPort. https://doi.org/10.21227/wvqh-5c80",
  },
  {
    slug: "bitter-gourd-freshness-detection",
    name: "Explainable Bitter Gourd Freshness Detection using MobileNetV3 and GradCAM",
    status: "Published",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/kics-bitter-gourd-poster.png",
    problem: "More than 50% of fruit and vegetable yield is lost across the global supply chain, much of it from spoilage that goes unnoticed. Manual freshness inspection is slow, subjective, and inconsistent at scale, and bitter gourd, despite being a high-value medicinal crop, has no automated freshness assessment method even as demand grows. Deep learning can help, but the black-box nature of most models is a barrier to trust in food-safety contexts.",
    solution: "An explainable deep learning pipeline pairing a lightweight MobileNetV3-Small classifier with GradCAM visual explanations, reaching 100% accuracy, precision, recall, and F1 on a held-out test set of 40 images while showing exactly which regions of the fruit, not background or spurious cues, drove each fresh/rotten decision. The lightweight backbone is built for low-resource, mobile and edge deployment in real post-harvest field settings.",
    tags: ["MachineLearning"],
    venue: "KICS Summer 2026",
    paperUrl: "/papers/kics-bitter-gourd-freshness-paper.pdf",
    posterUrl: "/papers/kics-bitter-gourd-freshness-poster.pdf",
  },
];

export const statusClasses: Record<string, string> = {
  "Field Testing Phase": "bg-emerald-500/12 text-emerald-300 border-emerald-400/20",
  "Model Optimization": "bg-sky-500/12 text-sky-300 border-sky-400/20",
  "Platform Build": "bg-violet-500/12 text-violet-300 border-violet-400/20",
  "Dashboard Design": "bg-amber/12 text-amber border-amber/20",
  "Published": "bg-indigo-500/12 text-indigo-300 border-indigo-400/20",
};
