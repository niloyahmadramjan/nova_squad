<<<<<<< HEAD
import OurProjects from "./projects/page";

export default function Home() {
  return (
    <div className="bg-[#f6fefb]">
      <OurProjects/>
=======
<<<<<<< HEAD
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    
    <SkillsSection/>
=======
<<<<<<< HEAD
'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./components/Hero/Hero'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
      </main>
>>>>>>> 8c2addca950b15f0b638cec895098ea2e5ef4edd
    </div>
=======
>>>>>>> 88b78156acb5a655bebe1f3c59a9ee642ada03e8
import Image from "next/image";
import About from "./components/About";

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   
  <About></About>
    // </div>
>>>>>>> 972adfe595afa9e39058bf5337f96c0af299a697
  );
}
