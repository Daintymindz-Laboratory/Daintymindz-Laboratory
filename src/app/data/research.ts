export type ResearchStat = {
  value: string;
  label: string;
  source: string;
  url: string;
};

export type ResearchThrust = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
  image: string;
  whyItMatters: string;
  stats: ResearchStat[];
};

export const thrusts: ResearchThrust[] = [
  {
    slug: "machine-learning",
    title: "Machine Learning | Autonomous & Predictive Intelligence",
    shortTitle: "Machine Learning",
    description:
      "We design deep learning architectures that learn and adapt in real-time. Our focus is on perception under uncertainty and human-AI alignment to build the \"predictive brains\" of future systems.",
    tags: ["AI", "Deep Learning", "Autonomy"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=80",
    whyItMatters:
      "Most real-world failures in automated systems trace back to a machine misreading an uncertain situation, not a lack of raw computing power. That is why this thrust centers on perception under uncertainty: models that know what they do not know, and stay aligned with the humans relying on them.",
    stats: [
      {
        value: "94%",
        label: "of vehicle crashes cite human error as the critical reason, underscoring the case for safer predictive and autonomous systems",
        source: "NHTSA National Motor Vehicle Crash Causation Survey",
        url: "https://cyberlaw.stanford.edu/blog/2013/12/human-error-cause-vehicle-crashes/",
      },
      {
        value: "$15.7T",
        label: "the projected contribution of AI to the global economy by 2030",
        source: "PwC, Sizing the Prize",
        url: "https://www.ciodive.com/news/whats-the-global-value-of-ai-157-trillion-by-2030-pwc-says/446552/",
      },
    ],
  },
  {
    slug: "software-systems",
    title: "Software Engineering | Immersive Engineering & Applications",
    shortTitle: "Software Engineering",
    description:
      "We transform research into functional tools. From high-fidelity Digital Twins to immersive VR/AR simulations, we build groundbreaking applications to solve urban and rural challenges.",
    tags: ["Digital Twins", "VR/AR", "Systems Design"],
    image: "https://images.unsplash.com/photo-1554474051-0256b98c36f8?auto=format&fit=crop&w=1800&q=80",
    whyItMatters:
      "Research that stays in a paper never reaches the person who needs it. This thrust is the engineering engine that turns models and datasets into software people can actually touch: mobile apps, dashboards, and digital twins that mirror real infrastructure in real time.",
    stats: [
      {
        value: "$572B",
        label: "the projected size of the global digital twin market by 2035, up from roughly $38B today",
        source: "Precedence Research",
        url: "https://www.precedenceresearch.com/digital-twin-market",
      },
      {
        value: "30-40%",
        label: "the compound annual growth rate forecast across major digital twin market analyses",
        source: "Fortune Business Insights",
        url: "https://www.fortunebusinessinsights.com/digital-twin-market-106246",
      },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics | Decisional Intelligence & Visualization",
    shortTitle: "Data Analytics",
    description:
      "Turning complex data into actionable foresight. We develop advanced dashboards and analytical models that help industries navigate climate change and energy transitions.",
    tags: ["Analytics", "Dashboards", "Foresight"],
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=1800&q=80",
    whyItMatters:
      "Data that is not translated into a decision is just noise. This thrust builds the dashboards and analytical models that turn raw datasets into foresight, the gap between having information and actually using it.",
    stats: [
      {
        value: "23x",
        label: "more likely to acquire customers when an organization is data-driven",
        source: "McKinsey Global Institute",
        url: "https://www.keboola.com/blog/5-stats-that-show-how-data-driven-organizations-outperform-their-competition",
      },
      {
        value: "19x",
        label: "more likely to be profitable for data-driven organizations versus their peers",
        source: "McKinsey Global Institute",
        url: "https://www.keboola.com/blog/5-stats-that-show-how-data-driven-organizations-outperform-their-competition",
      },
    ],
  },
  {
    slug: "data-operations",
    title: "Data Operations (Data Ops) | Novel Curation & Field Intelligence",
    shortTitle: "Data Operations",
    description:
      "Solving problems with \"Ground Truth.\" Our global field teams capture and curate unique, high-quality datasets missing from traditional archives, ensuring our AI is inclusive and unbiased.",
    tags: ["DataOps", "Ground Truth", "Field Curation"],
    image: "https://images.unsplash.com/photo-1504224357642-c87eacea1da4?auto=format&fit=crop&w=1800&q=80",
    whyItMatters:
      "Global AI is trained overwhelmingly on data from a narrow slice of the world. That gap is not an abstraction, it shows up as models that fail on African crops, African faces, and African languages. This thrust exists to close it, one properly documented, field-verified dataset at a time.",
    stats: [
      {
        value: "98%",
        label: "of African languages remain unsupported by large language models, a direct measure of the ground-truth data gap",
        source: "Analysis of African AI data representation",
        url: "https://muwado.com/the-impact-of-african-linguistic-cultural-and-socioeconomic-data-under-representation-in-global-ai-training-datasets/",
      },
      {
        value: "13.3%",
        label: "of food produced worldwide is lost after harvest, before it ever reaches retail, valued at roughly $400B a year",
        source: "FAO Sustainable Development Goals Data Portal",
        url: "https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en",
      },
    ],
  },
];
