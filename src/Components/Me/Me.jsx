import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

// Replace these with your actual portfolio/personal images
const trailImages = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80"
];

const Me = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track global mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#111111] text-[#E5E5E5] overflow-hidden flex flex-col justify-center items-center cursor-crosshair">
      
      {/* Background Text Overlay - z-index ensures it stays behind the images unless you want it in front */}
      <div className="z-10 text-center pointer-events-none select-none mix-blend-difference">
        <h1 className="text-7xl md:text-[9rem] font-serif uppercase tracking-tighter leading-[0.9]">
          It's Me<br />Rana
        </h1>
        <p className="mt-8 text-sm md:text-base tracking-[0.2em] font-sans text-gray-400 uppercase">
          Get inspired and contact me here.
        </p>
      </div>

      {/* Map through the images to create the trailing effect */}
      {trailImages.map((img, index) => (
        <ImageFollower 
          key={index} 
          src={img} 
          mousePos={mousePos} 
          index={index} 
          total={trailImages.length} 
        />
      ))}
    </div>
  );
};

// Individual Image Component
const ImageFollower = ({ src, mousePos, index, total }) => {
  // Stagger the spring physics based on the index.
  // The first image (index 0) has highest stiffness (follows fastest).
  // The last image has lowest stiffness (lags behind the most).
  const springConfig = {
    damping: 25,
    stiffness: 200 - (index * 30), 
    mass: 0.5 + (index * 0.2) 
  };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Offset by half the image width/height (120px / 160px) to center the image perfectly on the cursor
    x.set(mousePos.x - 120); 
    y.set(mousePos.y - 160); 
  }, [mousePos, x, y]);

  // Give each image a slight static rotation to look like a messy stack of photos
  const rotation = (index - total / 2) * 5; 

  return (
    <motion.img
      src={src}
      style={{
        x,
        y,
        rotate: rotation,
        zIndex: total - index, // Reverses z-index so the fastest image is on top
      }}
      className="absolute top-0 left-0 w-[240px] h-[320px] object-cover rounded-xl shadow-2xl pointer-events-none border border-white/10"
      alt={`Trailing image ${index}`}
    />
  );
};

export default Me;