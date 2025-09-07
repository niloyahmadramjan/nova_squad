"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function SkillsSection() {
  const groups = [
    {
      title: "Frontend",
      accent: "from-blue-400 to-cyan-400",
      skills: [
        {
          name: "HTML",
          level: 95,
          icon: <SiHtml5 className="text-orange-400" aria-hidden />,
        },
        {
          name: "CSS",
          level: 90,
          icon: <SiCss3 className="text-blue-600" aria-hidden />,
        },
        {
          name: "JavaScript",
          level: 88,
          icon: <SiJavascript className="text-yellow-400" aria-hidden />,
        },
        {
          name: "React",
          level: 86,
          icon: <FaReact className="text-blue-500" aria-hidden />,
        },
        {
          name: "Tailwind CSS",
          level: 85,
          icon: <SiTailwindcss className="text-cyan-500" aria-hidden />,
        },
      ],
    },
    {
      title: "Backend",
      accent: "from-green-400 to-emerald-400",
      skills: [
        {
          name: "Node.js",
          level: 85,
          icon: <FaNodeJs className="text-green-600" aria-hidden />,
        },
        {
          name: "Express.js",
          level: 82,
          icon: <SiExpress className="text-gray-700" aria-hidden />,
        },
      ],
    },
    {
      title: "Database",
      accent: "from-purple-400 to-fuchsia-400",
      skills: [
        {
          name: "MongoDB",
          level: 84,
          icon: <SiMongodb className="text-green-600" aria-hidden />,
        },
        {
          name: "SQL",
          level: 70,
          icon: <FaDatabase className="text-purple-600" aria-hidden />,
        },
      ],
    },
    {
      title: "Others",
      accent: "from-pink-400 to-rose-400",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          icon: <FaGitAlt className="text-rose-600" aria-hidden />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-[#f6fefb] dark:bg-gray-900"
    >
      {/* Background circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-pink-200/20 to-purple-200/20 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">
            Our Skills & Expertise
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We craft modern, scalable web apps with the MERN stack and a strong
            focus on performance, accessibility, and clean UI.
          </p>
        </motion.div>

        {/* Skill cards */}
        {groups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="mb-10"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-4">
              {group.skills.map((skill, si) => (
                <motion.li
                  key={skill.name}
                  className="flex-1 min-w-[150px] rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 shadow-sm hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, delay: si * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                        delay: si * 0.05,
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                      aria-hidden
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            {
              label: "HTML",
              icon: <SiHtml5 className="text-orange-400" aria-hidden />,
            },
            { label: "CSS", icon: <SiCss3 className="text-blue-600" aria-hidden /> },
            {
              label: "JavaScript",
              icon: <SiJavascript className="text-yellow-400" aria-hidden />,
            },
            { label: "React", icon: <FaReact className="text-blue-400" aria-hidden /> },
            { label: "Node.js", icon: <FaNodeJs className="text-cyan-500" aria-hidden /> },
            {
              label: "Express.js",
              icon: <SiExpress className="text-gray-700" aria-hidden />,
            },
            {
              label: "MongoDB",
              icon: <SiMongodb className="text-green-600" aria-hidden />,
            },
            { label: "GitHub", icon: <FaGitAlt className="text-red-500" aria-hidden /> },
          ].map((t, i) => (
            <motion.span
              key={t.label}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:shadow transition"
            >
              {t.icon}
              {t.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
