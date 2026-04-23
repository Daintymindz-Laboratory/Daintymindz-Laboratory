export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  photo: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    slug: "judith",
    name: "Dr. Judith Nkechinyere Njoku",
    role: "Founder & Director of Research",
    location: "USA",
    photo: "/images/team/judith.jpg",
    bio: "As the founding DaintyMind, Dr. Judith is a distinguished researcher and the visionary architect behind Daintymindz Laboratory. With a Ph.D. and advanced expertise in Electrical Engineering and Computer Science, she leads the lab\u2019s strategic expansion into Digital Twins, Deep Learning, and Autonomous Systems. She also serves as the Technical Advisor to the Machine Learning Department.",
  },
  {
    slug: "gloria",
    name: "Gloria",
    role: "Researcher",
    location: "Nigeria",
    photo: "/images/team/gloria.jpg",
    bio: "Based in Nigeria, DaintyMind Gloria is a Food Technologist and research-driven innovator focused on transforming agricultural and food systems through data and intelligent technologies. She leads Ground Truth initiatives, designing and managing bio-agricultural data pipelines that enable the development of inclusive, real-world AI models.",
  },
  {
    slug: "cynthia",
    name: "Cynthia",
    role: "Head of Data Analytics",
    location: "Canada",
    photo: "/images/team/cynthia.jpeg",
    bio: "Representing our Canadian hub as a strategic DaintyMind, Cynthia Osewemen is a data analytics and operations professional with over 10 years of experience spanning banking operations, customer service leadership, and data analysis. She leads the Data Analytics Division, overseeing analytical projects and establishing structured workflows.",
  },
  {
    slug: "anthony",
    name: "Anthony",
    role: "Head of Software Engineering",
    location: "South Korea",
    photo: "/images/team/anthony.png",
    bio: "Operating as a senior DaintyMind from South Korea, Anthony is a Senior Full-Stack Engineer with over seven years of experience designing scalable web, mobile, and distributed systems. He leads the Software Development division, driving the architecture and delivery of robust, production-grade platforms that support the lab\u2019s research, AI, and data-driven initiatives.",
  },
];
