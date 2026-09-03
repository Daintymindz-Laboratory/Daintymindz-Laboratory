export type ExperienceEntry = {
  title: string;
  org: string;
  period?: string;
};

export type PortfolioLink = {
  label: string;
  url: string;
};

export type MetricEntry = {
  label: string;
  value: string;
};

export type PublicationEntry = {
  title: string;
  venue: string;
  year: string;
  url?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  membershipType: MembershipType;
  location: string;
  photo: string;
  bio: string;
  education?: string[];
  certifications?: string[];
  skills?: string[];
  experience?: ExperienceEntry[];
  links?: PortfolioLink[];
  projects?: string[];
  metrics?: MetricEntry[];
  publications?: PublicationEntry[];
  publicationsUrl?: string;
};

export enum MembershipType {
  Leadership = "Leadership",
  ResearchAssociate = "Research Associate",
  Intern = "Intern",
}

export const team: TeamMember[] = [
  {
    slug: "judith",
    name: "Dr. Judith Vowels",
    role: "Director of Research",
    membershipType: MembershipType.Leadership,
    location: "USA",
    photo: "/images/team/judith_pic.png",
    bio: `As the founding DaintyMind, Dr. Judith Vowels is a distinguished researcher and the visionary architect behind Daintymindz Laboratory. She holds a Ph.D. in IT Convergence Engineering and an M.Sc. in Electronics Engineering from Kumoh National Institute of Technology, and currently serves as a Distinguished Postdoctoral Fellow at the University of Wyoming, where she leads the lab's strategic expansion into Digital Twins, Deep Learning, and Autonomous Systems.

    Her research integrates digital twins, trustworthy and explainable AI, computer vision, and simulation to make complex physical systems, from batteries and bridges to city infrastructure, more observable, predictable, and trustworthy. Her doctoral work, BatteryMetrix, is a user-centered digital twin for predictive, explainable, and secure battery management in electric vehicles. She has also led research on adverse-weather image restoration for autonomous perception (OmniRestore, presented at CVPR 2026), predictive digital twins for smart parking (PANDA), and multi-bridge structural health monitoring in South Korea (BridgeSync). Her work has been widely cited and published in venues including IEEE Access, the IEEE Internet of Things Journal, and IEEE/CVF CVPR Workshops.

    Based in the United States, Judith bridges the critical gap between complex academic theory and the deployment of high-impact software systems. In addition to her role as Founder, she serves as the Technical Advisor to the Machine Learning Department, where she guides the development of predictive models for climate resilience, infrastructure diagnostics, and agricultural intelligence. Her leadership ensures that every project at DMZ Lab is grounded in scientific rigor while remaining focused on "Engineering Intelligent Futures" for global communities.`,
    education: [
      "PhD, IT Convergence Engineering, Kumoh National Institute of Technology, 2025",
      "MSc, Electronics Engineering, Kumoh National Institute of Technology, 2021",
      "BEng, Petroleum Engineering, Federal University of Technology, Owerri, 2014",
    ],
    skills: [
      "Digital Twins",
      "Trustworthy & Explainable AI",
      "Computer Vision",
      "Cyber-Physical Systems",
      "Simulation",
      "Machine Learning",
    ],
    experience: [
      { title: "Distinguished Postdoctoral Fellow", org: "Secure Sensing and Learning Research Lab & Center for Rural Community Resilience and Innovation, University of Wyoming", period: "2025 – Present" },
      { title: "Visiting Research Scholar", org: "Climate Smart Decision Support Systems Laboratory, Michigan State University", period: "2024" },
      { title: "Research Specialist and Supervisor", org: "Climate Smart Decision Support Systems Laboratory (CLIMDES), Kyungpook National University & Michigan State University", period: "Aug 2022 – Jul 2024" },
      { title: "Graduate Research Assistant", org: "Networked Systems Laboratory, Kumoh National Institute of Technology", period: "2022 – 2025" },
      { title: "Graduate Research and Teaching Assistant", org: "Future Communications Systems Laboratory, Kumoh National Institute of Technology", period: "2019 – 2021" },
      { title: "Customer Experience Management Personnel and IT Buddy", org: "Sterling Bank PLC, Lagos, Nigeria", period: "Apr 2017 – Jul 2019" },
      { title: "National Youth Service Corps Intern", org: "Ministry of Energy, Alausa, Ikeja, Lagos, Nigeria", period: "Nov 2015 – Oct 2016" },
    ],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/judith989" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" },
      { label: "GitHub", url: "https://github.com/Judith989" },
    ],
    metrics: [
      { label: "Citations", value: "1,350+" },
      { label: "h-index", value: "14" },
      { label: "Research Led", value: "$150K" },
      { label: "Interns Supervised", value: "15+" },
    ],
    publications: [
      {
        title: "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration",
        venue: "IEEE/CVF CVPR Workshops",
        year: "2026",
      },
      {
        title: "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse",
        venue: "IEEE Internet of Things Journal",
        year: "2025",
      },
      {
        title: "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles",
        venue: "IEEE Access",
        year: "2024",
      },
    ],
    publicationsUrl: "https://judithnjoku.me/publications/",
    projects: ["freshlab-tomato", "bitter-gourd-freshness-detection"],
  },
  {
    slug: "cynthia",
    name: "Mrs. Cynthia Osewemen",
    role: "Head of Data Analytics",
    membershipType: MembershipType.Leadership,
    location: "Canada",
    photo: "/images/team/cynthia2.jpeg",
    bio: `Representing our Canadian hub as a strategic DaintyMind, Cynthia Chidinma Osewemen is a data analytics and operations leader with more than 10 years of banking experience, complemented by work in analytics consulting, project management, workflow automation, and financial advisory. She has led or supervised more than 30 staff and delivered over 20 data analytics and automation projects, building a career around turning complex operational data into clear, actionable decisions.

    Cynthia currently leads the Data Analytics function at DaintyMindz Laboratory, where she oversees analytical projects, mentors interns, reviews deliverables, establishes documentation standards, and applies AI-driven automation to improve data processing, reporting, and operational workflows. She also works as a Data Analytics Consultant at Amdari, developing Power BI dashboards, KPI reports, and analytical products that support business priorities and operational decision-making. Since 2022, she has worked independently as a Top Rated Project Manager, Data Analyst, and CRM Administrator, delivering workflow and process improvements across platforms including Airtable, Asana, Trello, Jira, Monday.com, Make.com, and n8n.

    Before moving fully into analytics, Cynthia built more than 10 years of experience in Nigerian banking. She progressed through customer service, funds transfer, service operations, branch management, and Head of Operations roles at Keystone Bank and TAJBank. Her work included leading the operational launch of a new TAJBank branch, onboarding and training more than 15 staff, strengthening compliance and reconciliation processes, and delivering service improvements that increased customer satisfaction while reducing transaction errors.

    Her technical toolkit includes SQL, Power BI, Excel, Python, Tableau, Power Query, DAX, IBM Cognos, Snowflake, Amazon S3, and Airbyte. Her original academic background is in the life sciences: she earned a Bachelor of Science in Plant Science and Biotechnology from the University of Port Harcourt before completing an MBA in Human Resource Management. This combination of scientific training, regulated operations experience, and modern analytics expertise informs her practical, evidence-led approach to research and decision intelligence.`,
    education: [
      "Junior Data Analyst Program, NPower Canada, 2026",
      "MBA, Human Resource Management, Ahmadu Bello University, 2020",
      "BSc, Plant Science and Biotechnology, University of Port Harcourt, 2012",
    ],
    certifications: [
      "IBM Data Analyst Professional Certificate, July 2026",
      "Microsoft Azure AI-900 Professional Certificate, May 2026",
      "Data Analyst Skillpath: Zero to Hero in Excel, SQL and Python, Start-Tech Academy, Udemy",
      "Global Data Analytics, AMDOR Analytics, Nigeria",
      "Data Analysis Capstone Project Certificate, IBM",
      "Data Analysis with Python, Coursera and IBM",
    ],
    skills: [
      "Power BI",
      "SQL",
      "Python",
      "Excel",
      "Tableau",
      "Power Query & DAX",
      "IBM Cognos",
      "Snowflake",
      "Data Modeling",
      "Data Storytelling",
      "Workflow Automation",
      "Banking Operations",
    ],
    experience: [
      { title: "Data Analytics Consultant", org: "Amdari, Calgary (Remote)", period: "Apr 2026 – Present" },
      { title: "Supervising Staff, Data Analytics", org: "DaintyMindz Laboratory (Remote)", period: "Feb 2026 – Present" },
      { title: "Project Manager, Data Analyst & CRM Administrator", org: "Upwork (Freelance, Top Rated)", period: "Oct 2022 – Present" },
      { title: "Data Analyst Consultant", org: "Amdor Analytics (Remote)", period: "Aug 2025 – Jan 2026" },
      { title: "Head of Operations & Customer Service Supervisor", org: "TAJBank Ltd., Asaba, Nigeria", period: "Oct 2024 – Aug 2025" },
      { title: "Branch Service Manager", org: "Keystone Bank Limited, Asaba, Nigeria", period: "Feb 2024 – Oct 2024" },
      { title: "Service Officer", org: "Keystone Bank Limited, Asaba, Nigeria", period: "Dec 2017 – Feb 2024" },
      { title: "Funds Transfer Officer, Branch Operations", org: "Keystone Bank Limited, Onitsha, Nigeria", period: "Nov 2016 – Nov 2017" },
      { title: "Team Lead, Customer Service Unit", org: "Keystone Bank Limited, Onitsha, Nigeria", period: "May 2015 – Nov 2016" },
      { title: "Graduate Trainee, Administration & Accounts", org: "Zitadel Limited, Nigeria", period: "Jul 2013 – Mar 2015" },
    ],
    metrics: [
      { label: "Banking Experience", value: "10+ yrs" },
      { label: "Staff Led", value: "30+" },
      { label: "Projects Delivered", value: "20+" },
      { label: "Customer Satisfaction Lift", value: "85%" },
    ],
    links: [
      { label: "Portfolio", url: "https://cynthiaosewemen.github.io/portfolio" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/cynthia-osewemen" },
      { label: "GitHub", url: "https://github.com/CynthiaOsewemen" },
    ],
    projects: ["freshlab-tomato", "bitter-gourd-freshness-detection"],
  },
  {
    slug: "anthony",
    name: "Mr. Anthony Eneh",
    role: "Head of Software Engineering",
    membershipType: MembershipType.Leadership,
    location: "South Korea",
    photo: "/images/team/anthony.png",
    bio: `Operating as a senior DaintyMind from South Korea, he is a Senior Full-Stack Engineer with over nine years of experience designing and building scalable web, mobile, and distributed systems across fintech, e-commerce, blockchain, and AI. He leads the Software Engineering division at DaintyMindz Laboratory, where he is responsible for driving the architecture and delivery of robust, production-grade platforms that support the lab's research, AI, and data-driven initiatives.

    He is currently pursuing a PhD in IT Convergence Engineering at Kumoh National Institute of Technology in South Korea, researching verifiable AI decision infrastructure for regulated, high-stakes operations. He also founded and leads Joypinness Technologies, a web development agency that has delivered 15 or more products to clients across Nigeria and beyond.

    His expertise spans modern tech stacks, cloud-native systems, and blockchain-integrated applications. He has led the development of multiple products across fintech, intelligent systems, and AI-assisted platforms, combining strong engineering principles with practical product thinking. At DaintyMindz, Anthony focuses on building high-quality software systems, mentoring engineers, and establishing technical standards that enable the team to translate research ideas into real-world, impactful products.`,
    education: [
      "PhD (in progress), IT Convergence Engineering, Kumoh National Institute of Technology, South Korea",
    ],
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "React Native",
      "Flutter",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Solidity & Web3",
      "PyTorch / ML",
      "Docker",
      "AWS S3",
    ],
    experience: [
      { title: "Founder & CEO", org: "Joypinness Technologies", period: "Present" },
    ],
    metrics: [
      { label: "Years Experience", value: "9+" },
      { label: "Products Shipped", value: "15+" },
      { label: "Publications", value: "2" },
      { label: "Live Platforms", value: "5" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/tony-eneh" },
      { label: "LinkedIn", url: "https://linkedin.com/in/anthony-eneh" },
    ],
    projects: ["freshlab-tomato", "bitter-gourd-freshness-detection"],
  },
  {
    slug: "gloria",
    name: "Ms. Gloria Njoku",
    role: "Data Operations & Machine Learning Research Associate",
    membershipType: MembershipType.ResearchAssociate,
    location: "Nigeria",
    photo: "/images/team/gloria.jpg",
    bio: `Based in Nigeria, DaintyMind Gloria  is a Food Technologist and research-driven innovator focused on transforming agricultural and food systems through data and intelligent technologies. At DaintyMindz Laboratory, she leads Ground Truth initiatives, designing and managing bio-agricultural data pipelines that enable the development of inclusive, real-world AI models.
    
    Her expertise spans food product development, agro-based research, and data structuring, giving her a unique ability to translate complex field data into actionable scientific insights. She is particularly interested in tackling post-harvest losses, improving food quality, and strengthening data reliability across global food systems.
    
    Operating from Nigeria, Gloria is building a strong research trajectory centered on leveraging data to solve critical food challenges in developing regions, positioning her as a rising contributor to global food security innovation.`,
    projects: ["freshlab-tomato", "bitter-gourd-freshness-detection"],
  },
  {
    slug: "kings",
    name: "Mr. Kings Opara",
    role: "Machine Learning Research Associate",
    membershipType: MembershipType.ResearchAssociate,
    location: "Nigeria",
    photo: "/images/team/kings.jpeg",
    bio: `Based in Nigeria, DaintyMind Kings is a mechanical engineer and researcher whose academic work has focused on renewable-energy systems and applied engineering design. His undergraduate thesis at the Federal University of Technology Owerri, "Design and Fabrication of an Eddy Current Braking System," examined how current flow through an electromagnet enhances brake torque, with applications in high-speed locomotives and electric vehicles. He has also co-authored a peer-reviewed study on optimal photovoltaic tilt angles across Nigeria's six geopolitical zones.

    Beyond research, Kings has worked as an equipment installation site engineer on microwave antenna projects for MTN Nigeria, interned in predictive maintenance at the Egbin Thermal Power Plant, and taught chemistry and STEM subjects to secondary school students. At Daintymindz Laboratory, he brings this engineering and applied-research background to the Machine Learning track.`,
    education: [
      "B.Eng, Mechanical Engineering, Federal University of Technology Owerri, 2023",
    ],
    skills: ["Python", "MATLAB", "Data Analysis", "Research & Analytical Skills", "Autodesk Fusion 360", "SolidWorks"],
    experience: [
      { title: "Equipment Installation Site Engineer", org: "ZTE Corporation, Nigeria (MTN Microwave Antenna Installation Project)", period: "Present" },
      { title: "Chemistry Teacher", org: "Day Secondary School, Kuta, Niger State", period: "2024 – 2025" },
      { title: "Mechanical Engineering Intern", org: "Egbin Thermal Power Plant, Ikorodu, Lagos", period: "Jan 2022 – Jun 2022" },
    ],
    publications: [
      {
        title: "Exploring the Ideal Photovoltaic (PV) Tilt Angle Across the Six Geo-Political Zones in Nigeria",
        venue: "Journal of Electrical Engineering and Electronics Design",
        year: "2024",
      },
    ],
  },
  {
    slug: "victory",
    name: "Ms. Victory Ikpeyi",
    role: "Data Operations Research Associate",
    membershipType: MembershipType.ResearchAssociate,
    location: "Nigeria",
    photo: "/images/team/victory.jpeg",
    bio: `Based in Nigeria, DaintyMind Victory is a data management and operations professional with a background in data quality assurance and large-scale field data collection. She has worked with Nigeria's National Population Commission across several roles, progressing from Enumerator to Supervisor to Data Quality Manager, reviewing and validating population records, resolving data inconsistencies, and supervising field teams to ensure accuracy and compliance with quality standards.

    She is trained in data quality management, UX design, and administrative support. At Daintymindz Laboratory, she brings this field-operations and data-integrity background to the Data Operations track.`,
    education: [
      "HND, Food Science and Technology, Federal Polytechnic Owerri, 2019",
      "ND, Food Science and Technology, Federal Polytechnic Owerri, 2015",
    ],
    skills: ["Data Entry & Validation", "Records Management", "Documentation Review", "Report Preparation", "Microsoft Excel", "Google Workspace"],
    experience: [
      { title: "Data Quality Manager (Adhoc)", org: "National Population Commission, Yenagoa, Bayelsa", period: "Jan 2024 – Feb 2024" },
      { title: "Supervisor (Adhoc)", org: "National Population Commission, Yenagoa, Bayelsa", period: "Jun 2023 – Jul 2023" },
      { title: "Enumerator (Adhoc)", org: "National Population Commission, Yenagoa, Bayelsa", period: "Mar 2022 – Apr 2023" },
    ],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/ikpeyi-victory" }],
  },
  {
    slug: "tobi",
    name: "Mr. Tobi Allison",
    role: "Data Analytics Research Associate",
    membershipType: MembershipType.ResearchAssociate,
    location: "Nigeria",
    photo: "/images/team/tobi.jpg",
    bio: `Based in Nigeria, DaintyMind Tobi is a data analyst with a background in marine engineering and experience spanning supply chain systems, logistics operations, and agricultural intelligence platforms. As a Data & Backend Analyst at ARVA, an agricultural intelligence platform, he has designed scalable PostgreSQL database structures, built offline-first data synchronization for low-connectivity environments, and analyzed farmer interaction data to support product decisions.

    Previously, as a Data Analyst for a Nestlé distributor, he built structured reporting systems used by more than 50 field staff and improved reporting accuracy through data validation and reconciliation. At Daintymindz Laboratory, he brings this data analysis and operational intelligence background to the Data Analytics track.`,
    education: [
      "B.Tech, Marine Engineering, Rivers State University, 2023",
    ],
    skills: ["SQL", "Python (Pandas, NumPy)", "Power BI (DAX)", "Excel (Power Query, PivotTables)", "PostgreSQL", "Data Visualization & Storytelling"],
    experience: [
      { title: "Data & Backend Analyst", org: "ARVA (Agricultural Intelligence Platform)", period: "May 2025 – Present" },
      { title: "Data Analyst, Supply Chain & Operations", org: "A.E Chrismerchant Ltd (Nestlé Distributor)", period: "Dec 2024 – Dec 2025" },
      { title: "Field Data Analyst", org: "National Youth Service Corps", period: "Nov 2024 – Jan 2025" },
    ],
  },
  {
    slug: "collins",
    name: "Mr. Collins Ugwu",
    role: "Software Engineering Research Associate",
    membershipType: MembershipType.ResearchAssociate,
    location: "Nigeria",
    photo: "/images/team/collins.jpg",
    bio: `Based in Nigeria, DaintyMind Collins is a frontend developer with a focus on building intuitive, high-performing web applications. His technical toolkit spans React, Next.js, and Tailwind CSS on the frontend, and Node.js, Express, and MongoDB on the backend. At Daintymindz Laboratory, he brings this full-stack development background to the Software Engineering track.`,
    education: [
      "BMLS (in progress), Kingsley Ozumba Mbadiwe University, Ideato, Imo State, 2023 – Present",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js", "Node.js", "Express.js", "MongoDB"],
    links: [{ label: "Portfolio", url: "https://new-portfolio-seven-mu-61.vercel.app/" }],
  },
];
