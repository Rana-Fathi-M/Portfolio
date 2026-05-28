import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const thoughtsData = [
  {
    id: 1,
    title: "BUILT & LAUNCHED ZENVYEG FASHION E-COMMERCE PLATFORM",
    category: "Full-Stack Development",
    date: "React / NestJS",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80"
  },
  {
    id: 2,
    title: "DEVELOPED AQAR REAL ESTATE PLATFORM WITH ADVANCED FILTERING",
    category: "Frontend Development",
    date: "Real Estate Platform",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
  },
  {
    id: 3,
    title: "CREATED MODERN DASHBOARDS & SCALABLE WEB APPLICATIONS",
    category: "UI / UX + APIs",
    date: "Salis Digital",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
  }
];

const Thoughts = () => {
  const [activeItem, setActiveItem] = useState({
    src: '',
    isActive: false,
  });

  // Smooth floating preview
  const springConfig = {
    damping: 25,
    stiffness: 120,
    mass: 0.5,
  };

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 220);
      cursorY.set(e.clientY - 130);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#070707] text-[#EAEAEA] pb-52">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1618331835717-801e976710b2?w=1400&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px) grayscale(100%)',
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* FLOATING IMAGE */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none overflow-hidden shadow-2xl"
        style={{
          x: cursorX,
          y: cursorY,
          width: '440px',
          height: '260px',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: activeItem.isActive ? 1 : 0,
          scale: activeItem.isActive ? 1 : 0.9,
        }}
        transition={{
          type: 'spring',
          stiffness: 140,
          damping: 20,
        }}
      >
        <img
          src={activeItem.src}
          alt="preview"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] leading-none uppercase tracking-[-0.06em] font-serif text-center text-white/90">
            About Me
          </h1>

          {/* RELEVANT TEXT */}
          <p className="max-w-3xl mx-auto text-center mt-10 text-sm md:text-lg text-white/55 leading-[2] tracking-wide">
            Based in Alexandria. Currently a Full-Stack Web Developer at
            <span className="text-white/90"> Salis Digital</span>. You can
            explore my code on GitHub
            <span className="text-white/90"> @Rana-Fathi-M</span> and connect
            with me on LinkedIn.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="flex flex-col gap-40 md:gap-52">

          {thoughtsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
                y: 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`w-full flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              onMouseEnter={() =>
                setActiveItem({
                  src: item.img,
                  isActive: true,
                })
              }
              onMouseLeave={() =>
                setActiveItem({
                  src: '',
                  isActive: false,
                })
              }
            >
              {/* CARD */}
              <div className="group relative w-[92%] sm:w-[78%] md:w-[620px] lg:w-[720px] h-[190px] md:h-[250px] overflow-hidden bg-black/30 backdrop-blur-sm border border-white/10 cursor-pointer">

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />

                {/* DARK GLASS */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-all duration-500" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-9">

                  {/* TITLE */}
                  <h2 className="max-w-[82%] text-lg sm:text-2xl md:text-[2rem] font-serif uppercase leading-tight tracking-tight text-white/95">
                    {item.title}
                  </h2>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between text-[10px] md:text-sm uppercase tracking-[0.25em] text-white/60">
                    <span>{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* LIGHT EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Thoughts;