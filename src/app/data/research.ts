export type ResearchThrust = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
};

export const thrusts: ResearchThrust[] = [
  {
    slug: "machine-learning",
    title: "Machine Learning | Autonomous & Predictive Intelligence",
    shortTitle: "Machine Learning",
    description:
      "We design deep learning architectures that learn and adapt in real-time. Our focus is on perception under uncertainty and human-AI alignment to build the \"predictive brains\" of future systems.",
    tags: ["AI", "Deep Learning", "Autonomy"],
  },
  {
    slug: "software-systems",
    title: "Software Systems | Immersive Engineering & Applications",
    shortTitle: "Software Systems",
    description:
      "We transform research into functional tools. From high-fidelity Digital Twins to immersive VR/AR simulations, we build groundbreaking applications to solve urban and rural challenges.",
    tags: ["Digital Twins", "VR/AR", "Systems Design"],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics | Decisional Intelligence & Visualization",
    shortTitle: "Data Analytics",
    description:
      "Turning complex data into actionable foresight. We develop advanced dashboards and analytical models that help industries navigate climate change and energy transitions.",
    tags: ["Analytics", "Dashboards", "Foresight"],
  },
  {
    slug: "data-operations",
    title: "Data Operations (Data Ops) | Novel Curation & Field Intelligence",
    shortTitle: "Data Operations",
    description:
      "Solving problems with \"Ground Truth.\" Our global field teams capture and curate unique, high-quality datasets missing from traditional archives, ensuring our AI is inclusive and unbiased.",
    tags: ["DataOps", "Ground Truth", "Field Curation"],
  },
];
