import React, { useState } from 'react';
import { FaFolderOpen, FaMinus, FaRegWindowMaximize, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const companies = [
  { name: "Buhler and Scherler", logo: "/buhler.png", link: "https://portal.labxco.cloud/", color: "bg-custom-blue" },
  { name: "KM Associates", logo: "/kma.jpg", link: "https://kmassociates.in/", color: "bg-custom-pink" },
  { name: "Strandforce", logo: "/strandforce.png", link: "https://strandforce.in/", color: "bg-custom-green" },
  { name: "Gyanam", logo: "/glogo.jpeg", link: "https://gyanamindia.labxco.in/", color: "bg-custom-yellow" },
  { name: "Sarvam Enterprises", logo: "/sarvam.jpeg", link: "https://swaraaqua.labxco.in/", color: "bg-custom-purple" }
];

const Companies = () => {
  const [showBSOD, setShowBSOD] = useState(false);

  return (
    <section id="clients" className="py-20 max-w-6xl mx-auto px-4 w-full">
      <div className="flex justify-center mb-10">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
          <h2 className="text-3xl font-shrikhand text-black uppercase">CLIENTS</h2>
        </div>
      </div>
      <div className="w-full border-4 border-black rounded-xl shadow-neo bg-white overflow-hidden">
        
        {/* Window Title Bar */}
        <div className="bg-black border-b-4 border-black px-4 py-3 flex items-center justify-between select-none">
          <div className="font-mono font-bold text-white tracking-widest flex items-center gap-3">
            <FaFolderOpen className="text-custom-yellow text-xl" />
            <span className="text-lg hidden sm:inline">C:\SameerOS\Clients</span>
            <span className="text-lg sm:hidden">Clients</span>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 border-2 border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <FaMinus />
            </button>
            <button className="w-8 h-8 border-2 border-white bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <FaRegWindowMaximize />
            </button>
            <button 
              onClick={() => setShowBSOD(true)}
              className="w-8 h-8 border-2 border-white bg-custom-red text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>
        </div>
        
        {/* Window Toolbar */}
        <div className="bg-gray-200 border-b-4 border-black px-4 py-2 flex gap-4 font-mono text-sm font-bold border-t-2 border-t-white">
          <span className="cursor-pointer hover:underline">File</span>
          <span className="cursor-pointer hover:underline">Edit</span>
          <span className="cursor-pointer hover:underline">View (Large Icons)</span>
          <span className="cursor-pointer hover:underline">Help</span>
        </div>

        {/* Window Body - Icon Grid */}
        <div className="p-8 md:p-12 bg-white min-h-[400px] relative overflow-hidden" 
             style={{ backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
          
          <div className="flex flex-wrap gap-x-12 gap-y-16 justify-center md:justify-start pb-8">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center gap-3 w-48 relative"
              >
                {/* Desktop Icon Wrapper (Thumbnail View) */}
                <div className="w-48 h-32 bg-white border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all flex flex-col relative">
                  
                  {/* Top color bar */}
                  <div className={`absolute top-0 left-0 right-0 h-4 ${company.color} border-b-4 border-black z-10`}></div>
                  
                  {/* External Link Button */}
                  <a 
                    href={company.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white border-2 border-white rounded-full flex items-center justify-center hover:bg-custom-yellow hover:text-black hover:scale-110 transition-all z-20 shadow-sm"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>

                  {/* Logo Container */}
                  <div className="flex-1 p-4 pt-6 flex items-center justify-center bg-white relative overflow-hidden">
                    {/* Decorative subtle background pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                    
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-w-full max-h-full object-contain relative z-10 font-bold text-center"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                        const nextSibling = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                        if (nextSibling) nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="font-shrikhand text-3xl text-black hidden absolute z-10">{company.name}</span>
                  </div>
                </div>
                
                {/* Icon Label */}
                <span className="font-mono font-bold text-sm text-center px-2 py-1 group-hover:bg-blue-600 group-hover:text-white border-2 border-transparent group-hover:border-dotted group-hover:border-white transition-colors cursor-default">
                  {company.name.toLowerCase().replace(/\s+/g, '_')}.png
                </span>
              </div>
            ))}
          </div>

          {/* Status Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-200 border-t-4 border-black px-4 py-1 flex justify-between font-mono text-xs font-bold border-t-2 border-t-white z-20">
            <span>{companies.length} object(s)</span>
            <span>Thumbnail View enabled</span>
          </div>

          {/* BSOD Overlay */}
          {showBSOD && (
            <div 
              className="absolute inset-0 bg-[#0000aa] z-50 p-8 flex flex-col justify-center items-center text-white font-mono cursor-pointer"
              onClick={() => setShowBSOD(false)}
            >
              <div className="bg-[#aaaaaa] text-[#0000aa] px-4 py-1 font-bold mb-6 tracking-widest">Windows</div>
              <div className="max-w-2xl text-lg sm:text-xl leading-relaxed">
                <p className="mb-4">A fatal exception 0E has occurred at 0028:C0011E36 in UXD Sameer(01). The current application will be terminated.</p>
                <p className="mb-8">* Sameer's awesomeness cannot be closed by a mere mortal.</p>
                <p className="mb-8">* Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</p>
                <p className="text-center animate-pulse">Press any key (or click here) to continue _</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Companies;
