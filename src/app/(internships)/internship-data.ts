export interface InternshipTrack {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  mode: string;
  image: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  applyUrl: string;
  relatedProjects: string[];
}

export const PROGRAM_INFO = {
  name: "DAINTYMINDZ Internship Programme 2026",
  tagline: "Are You a Future Daintymind?",
  duration: "6 months — June 2026 to December 2026",
  mode: "Remote (Global)",
  eligibility:
    "Students, recent graduates, and early-career professionals passionate about using technology for real-world impact.",
  email: "internships@daintymindz.com",
  heroImage: "/images/internships/hero.jpg",
} as const;

export const TRACKS: InternshipTrack[] = [
  {
    slug: "ml-internship",
    title: "Machine Learning",
    subtitle: "Autonomous & Predictive Intelligence",
    duration: "6 months",
    mode: "Remote",
    image: "/images/internships/ml.jpg",
    description:
      "Join the ML thrust and help build predictive models that tackle challenges in agriculture, healthcare, and sustainability. You will work with computer vision, NLP, and time-series forecasting to push the boundaries of autonomous intelligence.",
    responsibilities: [
      "Build and evaluate predictive models for agriculture, healthcare, and sustainability applications",
      "Work with computer vision, NLP, and time-series forecasting pipelines",
      "Contribute to active projects including HarvestGuard AI and the Seed Viability Predictor",
      "Collaborate with cross-functional teams on data preprocessing and model optimization",
      "Document experiments, results, and model performance metrics",
    ],
    requirements: [
      "Proficiency in Python",
      "Familiarity with TensorFlow or PyTorch",
      "Understanding of core ML concepts (supervised/unsupervised learning, evaluation metrics)",
      "Experience with data manipulation libraries (NumPy, Pandas)",
      "Strong analytical and problem-solving skills",
    ],
    applyUrl: "#", // TODO: Replace with Airtable form URL
    relatedProjects: ["HarvestGuard AI", "Seed Viability Predictor", "Crop Shelf-Life Estimator"],
  },
  {
    slug: "software-systems",
    title: "Software Systems",
    subtitle: "Immersive Engineering & Applications",
    duration: "6 months",
    mode: "Remote",
    image: "/images/internships/software-systems.jpg",
    description:
      "Work at the intersection of engineering and innovation. As a Software Systems intern, you will develop web and mobile applications, build scalable full-stack systems, and contribute to platforms that connect communities with opportunity.",
    responsibilities: [
      "Develop web and mobile applications using modern frameworks",
      "Work on active projects including Pathfinder and DMZ Mentor Connect",
      "Build and maintain scalable full-stack systems and APIs",
      "Participate in code reviews, testing, and CI/CD workflows",
      "Collaborate with designers and researchers to translate requirements into features",
    ],
    requirements: [
      "Proficiency in JavaScript or TypeScript",
      "Experience with React, Next.js, or similar frontend frameworks",
      "Familiarity with Node.js or a comparable backend runtime",
      "Understanding of RESTful APIs and version control (Git)",
      "Eagerness to learn and build in a fast-paced, globally distributed team",
    ],
    applyUrl: "#", // TODO: Replace with Airtable form URL
    relatedProjects: ["Pathfinder", "DMZ Mentor Connect"],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    subtitle: "Decisional Intelligence & Visualization",
    duration: "6 months",
    mode: "Remote",
    image: "/images/internships/data-analytics.jpg",
    description:
      "Turn raw data into actionable insight. As a Data Analytics intern, you will design dashboards, perform statistical analysis, and craft visualizations that inform critical decisions across the lab's research thrusts.",
    responsibilities: [
      "Design interactive dashboards and data visualizations for research projects",
      "Work with projects including PurityScale and the Crop Shelf-Life Estimator",
      "Perform statistical analysis, reporting, and trend identification",
      "Clean, transform, and prepare datasets for analytical workflows",
      "Present findings and recommendations to cross-functional stakeholders",
    ],
    requirements: [
      "Proficiency in Python or R for data analysis",
      "Solid SQL skills for querying and managing data",
      "Experience with visualization tools (Tableau, Power BI, or similar)",
      "Understanding of descriptive and inferential statistics",
      "Attention to detail and strong communication skills",
    ],
    applyUrl: "#", // TODO: Replace with Airtable form URL
    relatedProjects: ["PurityScale", "Crop Shelf-Life Estimator"],
  },
  {
    slug: "data-operations",
    title: "Data Operations",
    subtitle: "Novel Curation & Field Intelligence",
    duration: "6 months",
    mode: "Remote",
    image: "/images/internships/data-operations.jpg",
    description:
      "Data is the foundation of every breakthrough. As a Data Operations intern, you will curate novel datasets, manage field data pipelines, and ensure the integrity of information flowing into our ML and analytics workflows.",
    responsibilities: [
      "Curate, clean, and validate novel datasets for research use",
      "Support field data collection initiatives and manage data pipelines",
      "Develop and maintain data ingestion and transformation workflows",
      "Ensure data quality, consistency, and compliance with ethical guidelines",
      "Collaborate with ML and analytics teams to meet downstream data needs",
    ],
    requirements: [
      "Proficiency in SQL and Python",
      "Experience with data wrangling and cleaning workflows",
      "Familiarity with ETL processes or data pipeline tools",
      "Strong organizational skills and attention to data quality",
      "Interest in field research and real-world data challenges",
    ],
    applyUrl: "#", // TODO: Replace with Airtable form URL
    relatedProjects: ["HarvestGuard AI", "Seed Viability Predictor", "PurityScale"],
  },
];
