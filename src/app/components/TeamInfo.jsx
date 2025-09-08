// app/components/TeamInfo.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "MD Romjan (Team Leader)",
    role: "Team Management",
    skills: ["React", "Next.js", "Tailwind CSS"],
    bio: "Leads the team with a focus on project planning, collaboration, and continuous improvement.",
    photo: "https://i.ibb.co/Zz8H8VFt/backbgprofile.png",
    github: "https://github.com/niloyahmaramjan",
    linkedin: "https://www.linkedin.com/in/niloyahmedramjan",
  },
  {
    name: "Zubaed Hasan",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "Tailwind CSS"],
    bio: "Passionate frontend developer focused on building responsive, user-friendly interfaces with modern web technologies.",
    photo: "https://i.ibb.co/848Hr24Z/done4.png",
    github: "https://github.com/Zihad-pro",
    linkedin: "https://www.linkedin.com/in/zubaed",
  },
  {
    name: "Rasid Khan",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    bio: "Backend engineer who builds secure, scalable APIs and ensures high-performance server-side applications.",
    photo:
      "https://i.postimg.cc/wxXyQZQf/a-studio-portrait-photograph-of-a-young-nu-XA88c-XS5-C6u10u-FLo37g-Yre-LDNYa-TAax-Xyxp-NOL3h-A.jpg",
    github: "https://github.com/skrased2006",
    linkedin: "https://www.linkedin.com/in/shaikh-rasedul-islam/",
  },
  {
    name: "Shakil Ayan",
    role: "Frontend Developer",
    skills: ["React", "CSS", "Redux"],
    bio: "Frontend enthusiast dedicated to creating interactive and accessible web applications with modern frameworks.",
    photo: "https://i.ibb.co.com/NgHYtZwz/IMG-20250723-191547.png",
    github: "https://github.com/shakilahamed07",
    linkedin: "https://www.linkedin.com/in/shakil-ahmed-745566379/",
  },
  {
    name: "Shikat Hasan",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "Tailwind CSS"],
    bio: "Passionate frontend developer focused on building responsive, user-friendly interfaces with modern web technologies.",
    photo:
      "https://i.ibb.co.com/jZjtNtWH/White-Gradient-Creative-Instagram-Profile-Picture.png",
    github: "https://github.com/Pixelcodenow",
    linkedin: "https://www.linkedin.com/in/shaikat-codes/",
  },
  {
    name: "Shafayat",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    bio: "Dedicated backend developer ensuring data integrity, performance, and security in all server-side applications.",
    photo: "https://i.ibb.co/B5fB0xLb/Screenshot-2025-09-07-231129.png",
    github: "https://github.com/shafayat783593",
    linkedin: "https://www.linkedin.com/in/md-shafayat-hosan",
  },
];


const TeamInfo = () => {
  return (
    <section className="py-16 px-6  max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl mb-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Team Information
        </h1>
        <p className="mt-4 text-gray-600">
          Our dedicated team of developers and designers who make it all
          possible.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-indigo-600 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-3">{member.bio}</p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700">Skills:</h4>
              <p className="text-gray-500 text-sm">
                {member.skills.join(", ")}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-5 text-gray-600">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
