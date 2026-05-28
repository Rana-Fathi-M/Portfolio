import React from "react";
import { Link } from "react-router-dom"; // or next/link
import { Youtube, Linkedin, Twitter, Facebook, Github, Mail } from "lucide-react";
import rana from "../../assets/imgs/rana.jpeg"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0d] text-[#f4f4f4] pt-24 pb-8 px-6 md:px-16 lg:px-24 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Left Section: Profile, Bio & Socials */}
        <div className="flex flex-col max-w-xs">
          <div className="w-12 h-12 rounded-full overflow-hidden mb-6 border border-white/20">
            <img 
              src={rana}
              alt="Rana" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
            Where seamless interfaces meet high-performance code — unleashing scalable web experiences with React and Next.js.
          </p>
          
          <div className="flex items-center gap-4 text-gray-400">
            <a href="rana.fathi.rana@gmail.com" className="hover:text-white transition-colors"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/rana-fathi-059ba425a" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="https://github.com/Rana-Fathi-M" className="hover:text-white transition-colors"><Github size={18} /></a>
          </div>
        </div>

        {/* Right Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-serif text-gray-500 mb-6">
              My Place
            </h4>
            <div className="flex flex-col gap-4 text-base font-medium">
              <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
              <Link to="/work" className="hover:text-gray-400 transition-colors">Work</Link>
              <Link to="/about" className="hover:text-gray-400 transition-colors">Me</Link>
              <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-serif text-gray-500 mb-6">
              Glow
            </h4>
            <div className="flex flex-col gap-4 text-base font-medium">
              <Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
              <Link to="/thoughts" className="hover:text-gray-400 transition-colors">Thoughts</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-serif text-gray-500 mb-6">
              Utility
            </h4>
            <div className="flex flex-col gap-4 text-base font-medium">
              <Link to="/resume" className="hover:text-gray-400 transition-colors">Resume</Link>
              <Link to="/tech-stack" className="hover:text-gray-400 transition-colors">Tech Stack</Link>
              <Link to="/experience" className="hover:text-gray-400 transition-colors">Experience</Link>
              <Link to="/graduation-2026" className="hover:text-gray-400 transition-colors">Class of '26</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-500">
        <p>© 2026 - Made with 💙 by Rana</p>
        <p>Powered by React & Next.js</p>
      </div>
    </footer>
  );
}