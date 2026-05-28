import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // or next/link if using Next.js
import { motion } from "framer-motion";
import rana from "../../assets/imgs/rana.jpeg"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between rounded-[40px] bg-[#141414] border border-white/10 text-white shadow-2xl transition-all duration-300 ${
          isScrolled ? "py-2 px-3 gap-6" : "py-3 px-4 gap-12"
        }`}
      >
        {/* Left: Profile Picture */}
        <Link to="/" className="flex-shrink-0 rounded-full overflow-hidden w-10 h-10 border border-white/20 hover:scale-105 transition-transform">
          <img 
            src={rana}
            alt="Rana - Profile" 
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-300">
          <Link to="/work" className="hover:text-white transition-colors">Work</Link>
          <Link to="/me" className="hover:text-white transition-colors">Me</Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link 
            to="/contact" 
            className="px-5 py-2.5 bg-[#222222] hover:bg-[#333333] border border-white/5 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}