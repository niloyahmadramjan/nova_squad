import Link from "next/link";
import React from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  return (
    <div data-aos="zoom-out-up" className="p-4 rounded-2xl bg-[#ffffff9d] text-[#01130b] group hover:scale-100 transition-all mt-3 shadow-sm shadow-[#8aa4f5]">
      <div className="">
        <img
          className="rounded-xl group-hover:scale-103 transition-all w-full sm:h-45 md:h-55 lg:h-45 xl:h-60"
          src={project.projectImage}
          alt=""
        />
      </div>
      <h1 className="text-xl font-bold my-4">{project.projectName}</h1>
      <p className="mb-5">{project.description.slice(0, 90)}..</p>
      <div className="flex justify-between">
        <a
          href={project.liveLink}
          target="blank"
          className="hover:scale-105 transition-all py-2 flex items-center gap-2 text-blue-600 cursor-pointer focus:text-blue-600"
        >
          Live Demo <FaArrowUpRightFromSquare />
        </a>
        <Link
          href={project.githubLink}
          target="blank"
          className="bg-[#1ded8f] px-3 rounded-lg flex items-center gap-2 hover:scale-97 transition-all"
        >
          Github <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
