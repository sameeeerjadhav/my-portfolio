import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTimes, FaMedium, FaTwitter } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
      <div className="bg-white w-full max-w-md border-4 border-black rounded-3xl p-6 shadow-neo relative animate-bounce-in">
        
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-shrikhand">Get in Touch</h2>
          <button onClick={onClose} className="text-2xl hover:rotate-90 transition-transform cursor-pointer">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-4 font-bold">
            <div className="text-center mb-2">
                <p className="text-lg">Sameer Pradeep Jadhav</p>
                <p className="text-sm font-medium">Let's build something amazing together.</p>
            </div>
            <a href="mailto:sameerpjadhav12@gmail.com" className="flex items-center gap-3 p-3 bg-custom-yellow border-2 border-black rounded-xl hover:translate-x-1 hover:shadow-neo-sm transition-all">
                <FaEnvelope className="text-xl"/> sameerpjadhav12@gmail.com
            </a>
            <div className="flex items-center gap-3 p-3 bg-custom-green border-2 border-black rounded-xl">
                <span>+91 8788743507</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-custom-pink border-2 border-black rounded-xl">
                <span>Jalgaon, Maharashtra, India</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a href="https://github.com/sameeeerjadhav" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-2 bg-gray-200 border-2 border-black rounded-xl hover:translate-y-1 hover:shadow-neo-sm transition-all text-sm">
                  <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sameer-jadhav-a040921b5/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-2 bg-blue-200 border-2 border-black rounded-xl hover:translate-y-1 hover:shadow-neo-sm transition-all text-sm">
                  <FaLinkedin /> LinkedIn
              </a>
              <a href="https://leetcode.com/u/sameeeer_jadhav/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-2 bg-orange-200 border-2 border-black rounded-xl hover:translate-y-1 hover:shadow-neo-sm transition-all text-sm">
                  <FaCode /> LeetCode
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-2 bg-purple-200 border-2 border-black rounded-xl hover:translate-y-1 hover:shadow-neo-sm transition-all text-sm">
                  Portfolio
              </a>
            </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-6 w-full bg-custom-red text-white font-bold py-3 border-2 border-black rounded-xl shadow-neo-sm hover:shadow-none hover:translate-y-1 transition-all cursor-pointer"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ContactModal;