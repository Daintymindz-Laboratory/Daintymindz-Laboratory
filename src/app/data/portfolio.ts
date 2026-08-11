export type PortfolioProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  url: string;
  images: string[];
};

export const portfolioProducts: PortfolioProduct[] = [
  {
    slug: "daintymindz-academy",
    name: "Daintymindz Academy",
    tagline: "Train minds. Build AI. Ship research.",
    description:
      "A structured learning platform for Daintymindz researchers and interns, spanning 17 courses across four tracks: Artificial Intelligence, Data Analytics, Software Engineering, and Data Operations. Courses run fully project-based, from Python foundations to production AI systems, with a verified certificate on completion.",
    techStack: ["Learning Platform", "AI Curriculum", "Certification"],
    url: "https://academy.daintymindz.com",
    images: ["https://academy.daintymindz.com/logo.png", "/images/products/portfolio/academy-2.png"],
  },
  {
    slug: "fair-smart-traffic",
    name: "Fair Smart Traffic",
    tagline: "Traffic signals that move people, not just cars.",
    description:
      "A five-agent intersection controller that rethinks how traffic signals work. Instead of fixed timers or simple sensor triggers, five cooperating AI agents, covering perception, demand, fairness, safety, and signal control, vote on which direction gets the next green light, weighing pedestrians and buses against single-occupancy vehicles. In simulation, the system achieved a 69% reduction in vehicle wait times, a 62% lower emissions proxy, and 71% pedestrian priority, running entirely on the edge with no personal data leaving the curb.",
    techStack: ["TypeScript", "Vite", "Multi-Agent AI", "Real-Time Simulation", "Edge Computing"],
    url: "https://fair-smart-traffic.vercel.app",
    images: ["/images/products/portfolio/fair-smart-traffic-1.png", "/images/products/portfolio/fair-smart-traffic-2.png"],
  },
  {
    slug: "puretrace",
    name: "PureTrace v2",
    tagline: "Reproducibility scoring for machine learning research.",
    description:
      "Extracts reproducibility evidence from machine learning research papers, flags missing methodological details, and computes a 0-1 reproducibility score, anchoring each assessment on an immutable blockchain so journals and readers get verifiable confidence in published results. Supports five paper types and evaluates across 8-10 evidence dimensions, including dataset availability, code access, hyperparameter reporting, and statistical testing.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Blockchain"],
    url: "https://puretrace-v2-web.vercel.app",
    images: ["/images/products/portfolio/puretrace-1.png", "/images/products/portfolio/puretrace-2.png"],
  },
  {
    slug: "notely",
    name: "Notely",
    tagline: "A refined writing experience with intelligent AI assistance.",
    description:
      "A modern note-taking app built as an alternative to Notion. A rich block editor supports effortless idea capture, content organizes into hierarchical notebooks, and OpenAI-powered writing assistance helps with drafting, editing, and brainstorming. Ships as a fully installable Progressive Web App with push notifications, offline capability, and a share-to-note feature from a phone's share menu.",
    techStack: ["Next.js", "Prisma", "Clerk Auth", "OpenAI", "Plate.js", "PWA"],
    url: "https://notely.joypinness.com",
    images: ["/images/products/portfolio/notely-1.png", "/images/products/portfolio/notely-2.png"],
  },
  {
    slug: "edgeconsent",
    name: "EdgeConsent",
    tagline: "Fine-grained, on-chain data consent for IoT.",
    description:
      "A blockchain-based consent management system for IoT and privacy-sensitive environments. Attribute-based access control is implemented through five Solidity smart contracts, letting data subjects define granular consent policies that are cryptographically enforced on-chain, at under 190K gas per consent rule. Includes a dashboard for managing consent policies, viewing audit logs, and monitoring access patterns.",
    techStack: ["Next.js", "Solidity", "Smart Contracts", "Web3", "ABAC", "Ethereum"],
    url: "https://edgeconsent.vercel.app",
    images: ["/images/products/portfolio/edgeconsent-1.png", "/images/products/portfolio/edgeconsent-2.png"],
  },
  {
    slug: "ogapredict",
    name: "OgaPredict",
    tagline: "A production sports prediction platform.",
    description:
      "A live sports prediction platform serving real users with real-time odds, match analysis, and prediction tracking. Includes a comprehensive admin panel with audit trails for every system action, role-based user management, payment integration for premium features, and automated match data ingestion, built to handle concurrent users and real-time updates.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "REST API", "Payments"],
    url: "https://ogapredict.com",
    images: ["/images/products/portfolio/ogapredict-1.png", "/images/products/portfolio/ogapredict-2.png"],
  },
  {
    slug: "choirs-hub",
    name: "Choirs Hub",
    tagline: "Choir management, practice, and music library, in one platform.",
    description:
      "An all-in-one platform for choir management, practice coordination, and music library sharing, spanning a NestJS API, a React web dashboard for choir directors, and a React Native/Expo mobile app for members. Features include music library uploads with audio playback, practice room scheduling, role-based member management, and real-time notifications, sharing a common package architecture for type safety across all three apps.",
    techStack: ["NestJS", "React", "React Native/Expo", "Prisma", "AWS S3", "JWT Auth"],
    url: "https://choirs-hub-web.vercel.app",
    images: ["/images/products/portfolio/choirs-hub-1.png", "/images/products/portfolio/choirs-hub-2.png"],
  },
  {
    slug: "fieldsnap",
    name: "FieldSnap",
    tagline: "Mobile workforce management for field teams.",
    description:
      "A mobile workforce management platform for businesses that deploy field workers such as maintenance crews, delivery teams, and sales representatives. Field workers use a Flutter mobile app to clock in and out, submit job reports with photos, track location, and receive task assignments, while managers get real-time visibility into worker locations, completion rates, and automated timesheets through a web admin dashboard.",
    techStack: ["Flutter/Dart", "Next.js", "Clerk Auth", "Prisma", "Vercel Blob"],
    url: "https://fieldsnap-admin.vercel.app",
    images: ["/images/products/portfolio/fieldsnap-1.png", "/images/products/portfolio/fieldsnap-2.png"],
  },
  {
    slug: "steeze",
    name: "Steeze",
    tagline: "A bespoke fashion marketplace for custom tailoring.",
    description:
      "A fashion marketplace connecting customers with trusted designers for custom-tailored clothing, built as a monorepo spanning four applications: an admin dashboard, an API handling orders and escrow payments, a landing page, and a mobile app. Designer portfolios, fabric customization with transparent pricing, and protected escrow payments that release funds only after delivery confirmation give buyers and designers a trustworthy transaction flow.",
    techStack: ["Angular", "NestJS", "Prisma", "PostgreSQL", "Escrow Payments"],
    url: "https://steeze-landing.vercel.app",
    images: ["/images/products/portfolio/steeze-1.png", "/images/products/portfolio/steeze-2.png"],
  },
  {
    slug: "sme-gear-dashboard",
    name: "SME Gear Dashboard",
    tagline: "Financial visibility for small and medium enterprises.",
    description:
      "A business analytics dashboard built for small and medium enterprises that need financial visibility without enterprise-grade complexity. Multi-tenant, role-based access lets business owners, accountants, and team leads view different slices of the same data, with financial reporting, invoice tracking, customer management, and automated alerts for overdue payments, backed by atomic ledger mutations that keep financial data consistent under concurrent operations.",
    techStack: ["Next.js", "Prisma", "Multi-Tenant Auth", "Atomic Ledger", "PostgreSQL"],
    url: "https://sme-gear-dashboard-three.vercel.app",
    images: ["/images/products/portfolio/sme-gear-dashboard-1.png", "/images/products/portfolio/sme-gear-dashboard-2.png"],
  },
];
