import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const NotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(containerRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center text-[#f4f4f4] px-6 overflow-hidden">
      <div ref={containerRef} className="flex flex-col items-center text-center">
        
        {/* Large 404 Text */}
        <h1 className="text-[25vw] md:text-[20vw] font-serif uppercase tracking-tighter leading-none mb-4" style={{ transform: 'scaleY(1.2)' }}>
          404
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 font-sans tracking-widest uppercase text-sm md:text-base mb-12">
          It seems you've wandered off the grid.
        </p>
        
        {/* Return Button */}
        <Link 
          to="/" 
          className="group relative inline-flex items-center justify-center px-10 py-4 bg-transparent border border-gray-600 rounded-full overflow-hidden transition-all duration-300 hover:border-white"
        >
          {/* Hover Fill Effect */}
          <div className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
          
          <span className="relative z-10 text-xs tracking-widest uppercase text-white group-hover:text-black transition-colors duration-300">
            Return Home
          </span>
        </Link>
        
      </div>
    </div>
  );
};

export default NotFound;