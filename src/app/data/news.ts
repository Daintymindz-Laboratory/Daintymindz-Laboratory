export type Milestone = {
  date: string;
  title: string;
  summary: string;
  category: string;
  image?: string;
  imageAlt?: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
    fit?: "cover" | "contain";
  }[];
  links?: { label: string; url: string }[];
  people?: { name: string; role: string; slug: string }[];
};

export const milestones: Milestone[] = [
  {
    date: "21 June 2019",
    title: "DaintyMindz begins with words and a bold idea",
    category: "Our Beginning",
    image: "/images/news/daintymindz-original-logo.png",
    imageAlt: "The original DaintyMindz writing agency logo",
    summary:
      "DaintyMindz began as a writing agency, helping clients shape ideas into thoughtful, compelling work. With our original hand-lettered identity and an ambitious spirit, we started building the creative foundation that would one day grow into a multidisciplinary research and technology company.",
  },
  {
    date: "2020–2021",
    title: "Our writing team begins to grow",
    category: "Growth",
    summary:
      "Our writing community steadily expanded as new writers joined, developed their craft, and stepped into lead responsibilities. What began with a small creative team was becoming a dependable agency shaped by shared standards, mentorship, and an appetite for bigger opportunities.",
  },
  {
    date: "2022–2025",
    title: "A new look for a growing DaintyMindz",
    category: "Rebrand",
    image: "/images/news/daintymindz-2022-logo.png",
    imageAlt: "The second DaintyMindz logo introduced during the writing agency's growth",
    summary:
      "As the agency matured, our identity evolved with it. This second DaintyMindz logo marked a more confident chapter: we celebrated repeat engagements, landed major clients across different seasons, and contributed writing to Expat Guide Korea, an important step in our international story.",
  },
  {
    date: "4 January 2026",
    title: "A new chapter: DaintyMindz Ltd is incorporated",
    category: "Company Milestone",
    summary:
      "We proudly entered a new era as Dainty Mindz Ltd, a private company limited by shares. The incorporation formalised our evolution from a writing agency into a company bringing together research, data, machine learning, and software engineering. Company Registration No. 9161423.",
  },
  {
    date: "January 2026",
    title: "Gloria Njoku becomes a Research Associate",
    category: "People",
    summary:
      "From joining our writing journey in 2020 to growing into a lead writer, Gloria's story has always reflected curiosity, commitment, and progress. In January 2026, we were delighted to welcome her into a new chapter as a Research Associate in Data Operations and Machine Learning.",
    people: [
      {
        name: "Gloria Njoku",
        role: "Data Operations & Machine Learning Research Associate",
        slug: "gloria",
      },
    ],
  },
  {
    date: "1 February 2026",
    title: "Cynthia Osewemen and Anthony Eneh join DaintyMindz",
    category: "Leadership",
    summary:
      "We welcomed two accomplished professionals to help carry the DaintyMindz vision forward. Cynthia Osewemen joined as Lead, Data Analytics, while Anthony Eneh took the helm of Software Engineering. Together, they brought deep operational, analytical, and engineering experience to our next phase of growth.",
    people: [
      { name: "Cynthia Osewemen", role: "Lead, Data Analytics", slug: "cynthia" },
      {
        name: "Anthony Eneh",
        role: "Head of Software Engineering",
        slug: "anthony",
      },
    ],
  },
  {
    date: "22 June 2026",
    title: "Research beyond borders at KICS 2026",
    category: "Conference",
    summary:
      "DaintyMindz Laboratory proudly participated in the 2026 KICS Summer Conference in Jeju, South Korea. Anthony Eneh represented the team and presented our research, Explainable Bitter Gourd Freshness Detection using MobileNetV3 and GradCAM, to an international audience. From concept to conference, this milestone celebrates collaboration, innovation, and AI research designed for real-world food quality and agricultural impact. One Lab. Global Impact.",
    gallery: [
      {
        src: "/images/news/kics-2026/instagram-cover.jpg",
        alt: "Anthony Eneh presenting the DaintyMindz bitter gourd freshness research at KICS 2026 in Jeju",
        caption: "Anthony Eneh representing DaintyMindz Laboratory at KICS 2026",
      },
      {
        src: "/images/projects/kics-bitter-gourd-poster.png",
        alt: "Research poster for explainable bitter gourd freshness detection using MobileNetV3 and GradCAM",
        caption: "The research presented to the international conference audience",
        fit: "contain",
      },
    ],
    links: [
      {
        label: "View conference post",
        url: "https://www.instagram.com/p/DZ4tzemFyXz/",
      },
    ],
    people: [
      { name: "Gloria Njoku", role: "Co-author", slug: "gloria" },
      { name: "Cynthia Osewemen", role: "Co-author", slug: "cynthia" },
      {
        name: "Anthony Eneh",
        role: "Conference Representative & Co-author",
        slug: "anthony",
      },
      { name: "Judith Vowels", role: "Co-author", slug: "judith" },
    ],
  },
  {
    date: "August 2026",
    title: "Four new Research Associates join DaintyMindz",
    category: "Research Associate Programme",
    summary:
      "Our Research Associate Programme came to life, and what a welcome it was! We were thrilled to receive four talented professionals across Machine Learning, Data Operations, Data Analytics, and Software Engineering. Their arrival strengthened our ability to turn rigorous ideas into practical, real-world impact.",
    people: [
      { name: "Kings Opara", role: "Machine Learning Research Associate", slug: "kings" },
      { name: "Victory Ikpeyi", role: "Data Operations Research Associate", slug: "victory" },
      { name: "Tobi Allison", role: "Data Analytics Research Associate", slug: "tobi" },
      {
        name: "Collins Ugwu",
        role: "Software Engineering Research Associate",
        slug: "collins",
      },
    ],
  },
  {
    date: "1 September 2026",
    title: "FreshLab-Tomato is published",
    category: "Open Research Dataset",
    image: "/images/projects/freshlab-tomato-cover.webp",
    imageAlt: "Cover of the FreshLab-Tomato longitudinal shelf-life dataset",
    summary:
      "Great news for the DaintyMindz team! FreshLab-Tomato: A Longitudinal Shelf-Life Dataset is now publicly available through IEEE DataPort and Zenodo. Special recognition goes to Gloria Iheoma Njoku for her dedication and excellent work in data collection and organisation. Congratulations to the entire team on turning careful, sustained research into an open resource for shelf-life assessment and spoilage prediction.",
    links: [
      { label: "View dataset", url: "https://doi.org/10.21227/wvqh-5c80" },
      {
        label: "View on Zenodo",
        url: "https://zenodo.org/records/22239910",
      },
    ],
    people: [
      {
        name: "Gloria Njoku",
        role: "Data Collection & Organisation",
        slug: "gloria",
      },
      { name: "Anthony Eneh", role: "Co-author", slug: "anthony" },
      { name: "Cynthia Osewemen", role: "Co-author", slug: "cynthia" },
      { name: "Judith Vowels", role: "Co-author", slug: "judith" },
    ],
  },
  {
    date: "1 October 2026",
    title: "Cynthia Osewemen becomes Managing Director",
    category: "Leadership",
    summary:
      "Today, we celebrate a new leadership chapter as Cynthia Osewemen becomes Managing Director of DaintyMindz Laboratory. After joining us in February as Lead, Data Analytics, Cynthia brought clarity, discipline, and generous mentorship to our work. We are delighted to see her lead the company into its next season of growth.",
    people: [
      { name: "Cynthia Osewemen", role: "Managing Director", slug: "cynthia" },
    ],
  },
];
