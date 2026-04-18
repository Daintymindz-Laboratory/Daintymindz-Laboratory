import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Values from "./components/Values";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="gradient-mesh">
      <Hero />
      <div className="amber-line" />
      <About />
      <div className="amber-line" />
      <MissionVision />
      <div className="amber-line" />
      <Services />
      <div className="amber-line" />
      <Values />
      <div className="amber-line" />
      <Team />
      <div className="amber-line" />
      <Projects />
      <div className="amber-line" />
      <Contact />
    </main>
  );
}
