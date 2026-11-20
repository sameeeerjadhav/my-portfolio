import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10">
      <div className="animate-marquee inline-block font-shrikhand text-2xl">
        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK DEVELOPER 💻</span>
        <span className="mx-4">JAVA • SPRING BOOT • REACT • NEXT.JS ⚡</span>
        <span className="mx-4">DOCKER • POSTGRESQL • NODE.JS • n8n 🛠️</span>
        <span className="mx-4">BUILDING SCALABLE PRODUCTION SYSTEMS 🌐</span>
        <span className="mx-4">AVAILABLE FOR SOFTWARE ENGINEERING ROLES 💼</span>

        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK DEVELOPER 💻</span>
        <span className="mx-4">JAVA • SPRING BOOT • REACT • NEXT.JS ⚡</span>
        <span className="mx-4">DOCKER • POSTGRESQL • NODE.JS • n8n 🛠️</span>
        <span className="mx-4">BUILDING SCALABLE PRODUCTION SYSTEMS 🌐</span>
        <span className="mx-4">AVAILABLE FOR SOFTWARE ENGINEERING ROLES 💼</span>
      </div>

      
      <div className="animate-marquee inline-block font-shrikhand text-2xl absolute top-3 left-0">
        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK DEVELOPER 💻</span>
        <span className="mx-4">JAVA • SPRING BOOT • REACT • NEXT.JS ⚡</span>
        <span className="mx-4">DOCKER • POSTGRESQL • NODE.JS • n8n 🛠️</span>
        <span className="mx-4">BUILDING SCALABLE PRODUCTION SYSTEMS 🌐</span>
        <span className="mx-4">AVAILABLE FOR SOFTWARE ENGINEERING ROLES 💼</span>

        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK DEVELOPER 💻</span>
        <span className="mx-4">JAVA • SPRING BOOT • REACT • NEXT.JS ⚡</span>
        <span className="mx-4">DOCKER • POSTGRESQL • NODE.JS • n8n 🛠️</span>
        <span className="mx-4">BUILDING SCALABLE PRODUCTION SYSTEMS 🌐</span>
        <span className="mx-4">AVAILABLE FOR SOFTWARE ENGINEERING ROLES 💼</span>
      </div>
    </div>
  );
};

export default Marquee;