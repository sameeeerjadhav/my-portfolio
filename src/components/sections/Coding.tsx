import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Coding: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-[95%] md:w-[85%] lg:w-[75%] ml-auto relative bg-custom-yellow border-4 border-r-0 border-black shadow-neo"
    >

        <div className="flex items-center justify-between px-6 md:px-10 py-6">
            <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">CERTIFICATIONS</h2>
            <button 
              onClick={onToggle} 
              className="bg-black text-custom-yellow px-6 py-2 font-bold border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
            >
                {isOpen ? 'Close' : 'Open'}
            </button>
        </div>


        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="overflow-hidden"
            >
                <div className="px-6 md:px-10 pb-10">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all flex flex-col items-start gap-4 shadow-neo">
                            <h3 className="text-3xl font-shrikhand text-green-700 mb-2">My Certifications</h3>
                            <ul className="list-disc list-inside space-y-2 text-lg font-medium w-full border-t-2 border-black pt-4">
                                <li>Spectra Vision International Workshop – 3rd Place</li>
                                <li>DIPEX Project Presentation Certificate</li>
                                <li>Micromouse Competition Participation Certificate</li>
                                <li>NASSCOM AI ASCEND Level 1</li>
                                <li>NASSCOM AI ASCEND Level 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.section>
  );
};

export default Coding;
