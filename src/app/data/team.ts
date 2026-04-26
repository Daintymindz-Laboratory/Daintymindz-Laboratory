export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  membershipType: MembershipType;
  location: string;
  photo: string;
  bio: string;
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
    photo: "/images/team/judith.jpg",
    bio: `As the founding DaintyMind, Dr. Judith Nkechinyere Njoku is a distinguished researcher and the visionary architect behind Daintymindz Laboratory. With a Ph.D. and advanced expertise in Electrical Engineering and Computer Science, she leads the lab’s strategic expansion into Digital Twins, Deep Learning, and Autonomous Systems.
    
    Based in the United States, Judith bridges the critical gap between complex academic theory and the deployment of high-impact software systems. In addition to her role as Founder, she serves as the Technical Advisor to the Machine Learning Department, where she guides the development of predictive models for climate resilience, infrastructure diagnostics, and agricultural intelligence. Her leadership ensures that every project at DMZ Lab is grounded in scientific rigor while remaining focused on "Engineering Intelligent Futures" for global communities.`,
  },
  {
    slug: "cynthia",
    name: "Mrs. Cynthia Osewemen",
    role: "Head of Data Analytics",
    membershipType: MembershipType.Leadership,
    location: "Canada",
    photo: "/images/team/cynthia.jpeg",
    bio: `Representing our Canadian hub as a strategic DaintyMind, Cynthia Osewemen is a data analytics and operations professional with over 10 years of experience spanning banking operations, customer service leadership, and data analysis. She currently leads the Data Analytics Division  at DaintyMindz Lab. In her role, Cynthia oversees analytical projects, supervises interns, reviews deliverables, and engages with clients to ensure high-quality outcomes. She plays a key role in establishing structured workflows, optimizing processes, and maintaining high standards for data accuracy, reporting, and client satisfaction as the lab continues to grow.
    
    Cynthia has strong expertise in data analysis and reporting, working with tools such as Microsoft Excel, SQL, Python, and Power BI to transform data into actionable insights. She also brings growing experience in AI-driven automation, leveraging technology to streamline workflows, improve efficiency, and enhance data processing and reporting capabilities.
    
    Her approach combines technical proficiency with a strong focus on process improvement, workflow optimization, and operational efficiency, ensuring that systems are not only functional but scalable and sustainable.
    
    Prior to transitioning into data analytics, she built a solid foundation in the banking sector, where she held leadership roles in operations and customer service. This experience strengthened her ability to manage teams, optimize processes, and deliver results in high-performance, regulated environments.
    
    She holds a Master of Business Administration (MBA) in Human Resources Management and continues to expand her expertise in data analytics, automation, and emerging technologies.
    
    Cynthia is passionate about leveraging data and technology to drive informed decision-making, improve systems, and support innovation across industries.`,
  },
  {
    slug: "anthony",
    name: "Mr. Anthony Eneh",
    role: "Head of Software Engineering",
    membershipType: MembershipType.Leadership,
    location: "South Korea",
    photo: "/images/team/anthony.png",
    bio: `Operating as a senior DaintyMind from South Korea, he is a Senior Full-Stack Engineer with over seven years of experience designing and building scalable web, mobile, and distributed systems. He leads the Software Development division at DaintyMindz Research Laboratory, where he is responsible for driving the architecture and delivery of robust, production-grade platforms that support the lab’s research, AI, and data-driven initiatives.
    
    His expertise spans modern tech stacks, cloud-native systems, and blockchain-integrated applications. He has led the development of multiple products across fintech, intelligent systems, and AI-assisted platforms, combining strong engineering principles with practical product thinking.
    
    At DaintyMindz, Anthony focuses on building high-quality software systems, mentoring engineers, and establishing technical standards that enable the team to translate research ideas into real-world, impactful products.`,
  },
  {
    slug: "gloria",
    name: "Ms. Gloria Njoku",
    role: "Research Associate",
    membershipType: MembershipType.ResearchAssociate,
    location: "Nigeria",
    photo: "/images/team/gloria.jpg",
    bio: `Based in Nigeria, DaintyMind Gloria  is a Food Technologist and research-driven innovator focused on transforming agricultural and food systems through data and intelligent technologies. At DaintyMindz Laboratory, she leads Ground Truth initiatives, designing and managing bio-agricultural data pipelines that enable the development of inclusive, real-world AI models.
    
    Her expertise spans food product development, agro-based research, and data structuring, giving her a unique ability to translate complex field data into actionable scientific insights. She is particularly interested in tackling post-harvest losses, improving food quality, and strengthening data reliability across global food systems.
    
    Operating from Nigeria, Gloria is building a strong research trajectory centered on leveraging data to solve critical food challenges in developing regions, positioning her as a rising contributor to global food security innovation.`,
  },
];
