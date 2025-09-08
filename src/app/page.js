import About from "./components/About";
import Hero from "./components/Hero/Hero";
import SkillsSection from "./components/SkillsSection";
import TeamInfo from "./components/TeamInfo";
import OurProjects from "./projects/page";

export default function Home() {
  return (
  <div>
    <Hero/>
    <About/>
    <TeamInfo/>
    <SkillsSection/>
    <OurProjects/>

  </div>
 
  

  );
}
