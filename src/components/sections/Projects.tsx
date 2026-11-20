import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  tools: string[];
  description: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

const ProjectCard = ({ title, tools, description, liveUrl, githubUrl, color }: ProjectProps) => (
  <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col h-full">
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 flex justify-between items-start mb-4 gap-2">
        <div>
            <h3 className="text-2xl font-shrikhand">{title}</h3>
            {liveUrl && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md inline-block mt-1 animate-pulse">
                  LIVE PROJECT
              </span>
            )}
        </div>
        <div className="flex gap-2 shrink-0">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title="View Code on GitHub"
            >
                <FaGithub size={16} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-custom-yellow text-black border-2 border-black p-2 rounded-lg hover:bg-yellow-400 transition-colors shadow-neo-sm hover:shadow-none"
              title="Open Live Website"
            >
                <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((t: string) => (
            <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
                {t}
            </span>
        ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4 mt-auto">
        {description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
        ))}
    </ul>
  </div>
);

const Projects = () => {
    const projects: ProjectProps[] = [
      {
        title: "Samparkasetu CRM",
        color: "bg-custom-purple",
        tools: ["Next.js", "PostgreSQL", "Redis", "n8n", "Docker", "Dokploy"],
        liveUrl: "https://samparkasetu.com",
        description: [
          "Built a subscription-based CRM platform automating onboarding and daily lead distribution for tractor dealers.",
          "Designed n8n workflows integrated with Gupshup API for automated dealer messaging.",
          "Containerized production deployment on VPS infrastructure using Docker and Dokploy.",
          "High performance with Redis caching and PostgreSQL schema design."
        ]
      },
      {
        title: "AI SQL Workbench (Datalk)",
        color: "bg-custom-blue",
        tools: ["React", "FastAPI", "Gemini AI", "PostgreSQL", "SQLAlchemy"],
        githubUrl: "https://github.com/sameeeerjadhav/SQL-Agent", 
        liveUrl: "https://datalk.onrender.com/",
        description: [
          "Developed an AI-powered SQL assistant converting natural language to SQL queries with automatic chart generation.",
          "Google Gemini AI integration with conversational querying.",
          "Data visualization and secure multi-tenant schema isolation.",
          "Production deployment on Render."
        ]
      },
      {
        title: "Online Exam Portal",
        color: "bg-custom-pink",
        tools: ["Laravel 12", "MySQL", "Redis", "Tailwind CSS", "WebSockets"],
        githubUrl: "https://github.com/sameeeerjadhav/online-exam-system",
        liveUrl: "https://labxco.cloud/gyanam/exam_portal/index.html",
        description: [
          "Scalable examination platform built for 1,000+ concurrent students with real-time proctoring via WebSockets.",
          "Anti-cheating detection for tab-switching and fullscreen exits.",
          "Auto-save engine with Redis optimization.",
          "Role-based authentication with Laravel Sanctum."
        ]
      },
      {
        title: "QR Maintenance & Device System",
        color: "bg-custom-red",
        tools: ["Angular", "Spring Boot", "MySQL", "JWT", "QR Code"],
        githubUrl: "https://github.com/sameeeerjadhav/digital-maintenance-logbook", 
        description: [
          "Developed a QR-based maintenance tracking system for device monitoring and lifecycle logging.",
          "Role-Based Access Control (RBAC) for Admin, HOD, and Faculty.",
          "Device maintenance logs and real-time status dashboards.",
          "Secure Spring Boot REST API backend."
        ]
      },
      {
        title: "QuickChat",
        color: "bg-custom-green",
        tools: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
        githubUrl: "https://github.com/sameeeerjadhav/quickchat-app", 
        liveUrl: "https://quickchat-app-woad.vercel.app/",
        description: [
          "Real-time instant messaging platform with WebSocket presence detection.",
          "Authenticated, low-latency group and 1-on-1 chats.",
          "MongoDB persistent chat storage.",
          "Deployed across Vercel and Render."
        ]
      },
      {
        title: "Healthcare EHR System",
        color: "bg-custom-purple", 
        tools: ["Angular", "Spring Boot", "MySQL", "JWT", "REST API"],
        githubUrl: "https://github.com/sameeeerjadhav/EHR_Full_Stack", 
        description: [
          "Full-stack Electronic Health Record system with patient & doctor management.",
          "JWT Authentication and Role-Based Access Control.",
          "Appointment scheduling and medication tracking.",
          "Modular enterprise architecture."
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