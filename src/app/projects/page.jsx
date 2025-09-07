import React from "react";
import projects from "@/../public/projects.json";
import ProjectCard from "./projectCard";

const OurProjects = async () => {
  console.log(projects);
  return (
    <div className="py-10 px-4 max-w-[1350px] mx-auto text-[#01130b] bg-[#f6fefb]">
      <h1 data-aos="zoom-in" className="text-3xl font-medium mb-3 text-center">Our Projects</h1>
      <p data-aos="zoom-in" className="text-center mb-6">A collection of collaborative projects demonstrating teamwork, innovation, and professional execution.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
