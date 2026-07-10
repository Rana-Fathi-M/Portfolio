import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import rana from "../../../assets/imgs/rana.jpeg" 
export default function HeroSection() {
  const containerRef = useRef(null);
  const piecesRef = useRef([]);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);
  const subTextRef = useRef(null);
  const imageWrapperRef = useRef(null); // New ref for the parallax wrapper

  // Configuration for the grid (5x5 creates 25 fragments)
  const rows = 5;
  const cols = 5;
  const totalPieces = rows * cols;
  
  // Placeholder image URL
  const placeholderImg = rana;

  useEffect(() => {
    // --- 1. INITIAL REVEAL ANIMATION ---
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(textTopRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.8, ease: "power4.out" },
      0
    );

    tl.fromTo(textBottomRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.8, ease: "power4.out" },
      0
    );

    tl.fromTo(subTextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
      0.8
    );

    tl.fromTo(piecesRef.current,
      {
        x: (i) => {
          const col = i % cols;
          const distFromCenter = col - (cols - 1) / 2;
          return `${distFromCenter * 22}vw`; 
        },
        y: (i) => {
          const row = Math.floor(i / cols);
          const distFromCenter = row - (rows - 1) / 2;
          return `${distFromCenter * 18}vh`; 
        },
        scale: 1.6,
        opacity: 0,
        rotation: () => Math.random() * 15 - 7.5 
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        stagger: {
          amount: 1.2,
          from: "edges",
          grid: [rows, cols]
        },
        duration: 2,
        ease: "expo.inOut" 
      }, 
      0.1 
    );

    // --- 2. MOUSE PARALLAX EFFECT ---
    const handleMouseMove = (e) => {
      if (!imageWrapperRef.current) return;
      
      // Calculate mouse position relative to the center of the screen
      const xPos = (e.clientX / window.innerWidth - 0.5) * 40; // 40 is the intensity of the horizontal movement
      const yPos = (e.clientY / window.innerHeight - 0.5) * 40; // 40 is the intensity of the vertical movement

      // Animate the entire wrapper gently towards the mouse
      gsap.to(imageWrapperRef.current, {
        x: xPos,
        y: yPos,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      tl.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center text-[#f4f4f4]"
    >
      {/* LAYER 1: TOP TEXT (BEHIND THE IMAGE) */}
      <div className="absolute top-[12%] md:top-[8%] w-full flex justify-center z-0 pointer-events-none">
        <h1
          ref={textTopRef}
          // Added font-light here to make it less bold
          className="text-[22vw] md:text-[16vw] font-serif font-light uppercase tracking-tight leading-none text-white"
          style={{ transform: 'scaleY(1.2)' }} 
        >
          Rana
        </h1>
      </div>

      {/* LAYER 2: FRAGMENTED IMAGE (MIDDLE) */}
      <div 
        ref={imageWrapperRef} 
        className="relative z-10 w-[280px] h-[380px] md:w-[450px] md:h-[550px]"
      >
        {Array.from({ length: totalPieces }).map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          
          const bgX = (col / (cols - 1)) * 100;
          const bgY = (row / (rows - 1)) * 100;

          return (
            <div
              key={i}
              ref={el => piecesRef.current[i] = el}
              className="absolute"
              style={{
                width: `${100 / cols}%`,
                height: `${100 / rows}%`,
                left: `${(col * 100) / cols}%`,
                top: `${(row * 100) / rows}%`,
                backgroundImage: `url(${placeholderImg})`, 
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${bgX}% ${bgY}%`,
                boxShadow: '0 0 0.5px rgba(0,0,0,0.1)' 
              }}
            />
          );
        })}
      </div>

      {/* LAYER 3: BOTTOM TEXT & PARAGRAPH (IN FRONT OF THE IMAGE) */}
      <div className="absolute bottom-[8%] md:bottom-[6%] w-full flex flex-col items-center z-20 pointer-events-none">
        
        {/* Added font-light here to make it less bold */}
        <h1
          ref={textBottomRef}
          className="text-[18vw] md:text-[14vw] font-serif font-light uppercase tracking-tight leading-none text-white drop-shadow-2xl"
          style={{ transform: 'scaleY(1.2)' }} 
        >
          Engineer
        </h1>

        <div ref={subTextRef} className="mt-6 md:mt-12 px-6 max-w-2xl text-center pointer-events-auto">
          <p className="text-xs md:text-sm font-sans tracking-widest text-gray-400 uppercase leading-relaxed">
            I'm <span className="text-white font-bold">RANA</span> — A Full-Stack Web Developer who thrives on turning complex problems into elegant, scalable solutions. I have a knack for building responsive applications and dynamic APIs.
          </p>
        </div>
      </div>

    </section>
  );
}