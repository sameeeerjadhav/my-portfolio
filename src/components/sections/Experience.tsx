import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  color: string;
}

const ExperienceCard = ({ role, company, duration, location, description, color }: ExperienceProps) => (
  <div className={`relative bg-white border-4 border-black p-6 md:p-8 pt-28 md:pt-8 rounded-3xl border-b-8 border-r-8 hover:-translate-y-2 hover:border-b-4 hover:border-r-4 transition-all z-10 w-full h-full shadow-neo mt-12 md:mt-6 flex flex-col`}>


    <div className="absolute -top-8 md:-top-6 left-4 right-4 md:left-auto md:right-8 flex flex-col gap-2 font-mono font-bold text-xs md:text-sm bg-custom-yellow px-4 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] z-20 transform hover:rotate-0 transition-transform">
      <div className="flex items-center gap-2">
        <FaCalendarAlt className="text-black" /> {duration}
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-black" /> {location}
      </div>
    </div>

    <div className="mt-2 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div>
        <h3 className="text-3xl md:text-4xl font-shrikhand leading-tight mb-2 uppercase tracking-wide">{role}</h3>
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className={`px-3 py-1 border-2 border-black rounded-md ${color} shadow-neo-sm`}>
            {company}
          </span>
        </div>
      </div>
    </div>

    <div className="text-base font-medium bg-gray-50 p-4 rounded-xl border-2 border-black leading-relaxed shadow-inner mt-auto">
      <div className="flex gap-2 mb-3 border-b-2 border-black pb-3">
        <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black"></div>
        <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black"></div>
        <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black"></div>
      </div>
      {description}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Research Intern",
      company: "IIT BHU, Varanasi",
      duration: "May 2026 - Present",
      location: "Varanasi, India · On-site",
      description: "Developing LLMs and AI-driven workflows for biotechnology research applications.",
      color: "bg-custom-purple"
    },
    {
      role: "Web Development Executive Intern",
      company: "Dialogues Media Pvt. Ltd.",
      duration: "June 2025 - September 2025",
      location: "Mumbai, India · Remote",
      description: "Developed React applications, reusable UI components and integrated REST APIs while delivering production-ready web solutions.",
      color: "bg-custom-yellow"
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "HCL Tech",
      duration: "May 2025 - July 2025",
      location: "Lucknow, India · Remote",
      description: "Built full-stack modules using Node.js, Express.js and frontend frameworks. Developed secure APIs and database-driven applications.",
      color: "bg-custom-green"
    },
    {
      role: "Software Development Intern",
      company: "Softaid Solutions Ltd.",
      duration: "June 2023 - July 2023",
      location: "Jalgaon, India · On-site",
      description: "Worked on web application development using HTML, CSS, JavaScript and SQL while gaining practical SDLC experience.",
      color: "bg-custom-blue"
    }
  ];

  return (
    <div className="relative w-full py-10">

      <div className="absolute top-1/2 left-0 w-full h-0 z-50 pointer-events-none flex items-center">
        <motion.div
          initial={{ x: "-50vw" }}
          animate={{ x: "150vw" }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2
          }}
          className="flex items-center absolute -translate-y-1/2"
        >

          <div className="w-[80vw] h-6 bg-white opacity-60 blur-xl rounded-full mr-[-20px]"></div>
          <div className="w-[60vw] h-3 bg-white opacity-80 blur-md rounded-full mr-[-40px] absolute right-[60px]"></div>


          <FaPlane className="text-gray-800 text-6xl  drop-shadow-neo z-10" />
        </motion.div>
      </div>

      <section id="experience" className="px-4 max-w-7xl mx-auto bg-custom-purple border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo relative z-10 py-10">
        <div className="flex justify-center mb-10 relative z-10">
          <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
            <h2 className="text-3xl font-shrikhand tracking-wide">EXPERIENCE</h2>
          </div>
        </div>

        <div className="flex flex-row gap-8 items-stretch relative z-10 px-4 md:px-8 overflow-x-auto pb-12 pt-8 snap-x snap-mandatory w-full custom-scrollbar">
          {experiences.map((exp, index) => (
            <div key={index} className="min-w-[320px] md:min-w-[450px] flex-shrink-0 snap-center flex">
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
