import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, tools, description, link, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl  p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 flex justify-between items-start mb-4">
        <div>
            <h3 className="text-2xl font-shrikhand">{title}</h3>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse">
                LIVE PROJECT
            </span>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <FaExternalLinkAlt />
        </a>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((t: string) => (
            <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
                {t}
            </span>
        ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
        {description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
        ))}
    </ul>
  </div>
);

const Projects = () => {
    const projects = [
      {
        title: "Healthcare EHR System",
        color: "bg-custom-purple", 
        tools: ["Angular", "Spring Boot", "MySQL", "JWT", "REST API"],
        link: "https://github.com/sameeeerjadhav/EHR_Full_Stack", 
        description: [
          "Built a full-stack Electronic Health Record system featuring patient management, doctor profiles, appointments, medications, orders and secure role-based authentication.",
          "JWT Authentication and Role-Based Access Control.",
          "Appointment Management and Medication Tracking.",
          "Healthcare Workflow Automation."
        ]
      },
      {
        title: "AI SQL Workbench (Datalk)",
        color: "bg-custom-blue",
        tools: ["React", "FastAPI", "Gemini AI", "PostgreSQL", "SQLAlchemy"],
        link: "https://github.com/sameeeerjadhav/SQL-Agent", 
        description: [
          "Developed an AI-powered SQL assistant that converts natural language into SQL queries and automatically visualizes database results.",
          "Natural Language to SQL and Gemini AI Integration.",
          "Data Visualization and Secure Schema Isolation.",
          "Chat-Based Querying."
        ]
      },
      {
        title: "QR Maintenance & Device Management System",
        color: "bg-custom-red",
        tools: ["Angular", "Spring Boot", "MySQL", "JWT", "QR Code"],
        link: "https://github.com/sameeeerjadhav/digital-maintenance-logbook", 
        description: [
          "Developed a QR-based maintenance tracking system for device monitoring, maintenance logging and role-based management.",
          "QR Device Tracking and Maintenance Logs.",
          "Role-Based Dashboards and Device Monitoring.",
          "Secure Backend Architecture."
        ]
      },
      {
        title: "Online Exam Portal",
        color: "bg-custom-pink",
        tools: ["Laravel 12", "MySQL", "Redis", "Tailwind CSS", "WebSockets"],
        link: "https://github.com/sameeeerjadhav/online-exam-system",
        description: [
          "Built a scalable online examination platform supporting 1000+ concurrent students with anti-cheating and monitoring capabilities.",
          "Real-Time Monitoring and Auto Save System.",
          "Anti-Cheating Protection and Redis Optimization.",
          "WebSocket Integration."
        ]
      },
      {
        title: "QuickChat",
        color: "bg-custom-green",
        tools: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
        link: "https://github.com/sameeeerjadhav/quickchat-app", 
        description: [
          "Built a real-time messaging platform with instant communication, authentication and online presence tracking.",
          "Real-Time Messaging and Socket.io Integration.",
          "User Authentication and Presence Detection.",
          "Scalable Deployment."
        ]
      }
    ];

  return (
    <section id="projects" className="py-10 px-4 mx-auto max-w-7xl  bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
            <h2 className="text-3xl font-shrikhand text-white">PROJECTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;