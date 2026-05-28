import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Info() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 🔥 faster + stronger vertical movement
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["-260%", "260%"]
  );

  // 🔥 stronger horizontal drift
  const xDrift = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "-20%"]
  );

  // 🔥 fade out earlier (feels faster)
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 1, 0]
  );

  const bioText =
    "Rana is a passionate Frontend Engineer with a knack for turning complex problems into seamless digital experiences. With a strong foundation in React and Next.js, and a flair for creative problem-solving, she has been on a relentless quest to build scalable, high-performance web applications.";

  const words = bioText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[120vh] bg-[#0b0b0b] text-[#f4f4f4] flex items-center py-24 md:py-0 overflow-visible"
      style={{ fontFamily: "'Bodoni Moda', serif" }}
    >
      <div className="max-w-[100rem] w-full mx-auto px-6 md:px-12 relative flex flex-col md:flex-row items-center">

        {/* LEFT TEXT */}
        <div className="w-full md:w-[45%] z-20 relative bg-[#0b0b0b] shadow-[0_0_40px_40px_#0b0b0b] rounded-lg">
          <p className="text-[1.2rem] md:text-[2rem] leading-[1.25] uppercase tracking-[0.05em] font-light text-justify flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;

              // 🔥 faster word reveal (narrower range = quicker animation)
              const end = start + 0.6 / words.length;

              const wordOpacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.15, 1]
              );

              return (
                <motion.span
                  key={i}
                  style={{ opacity: wordOpacity }}
                  className="mr-[0.25em] mb-[0.1em]"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>

        {/* BACKGROUND TEXT WRAPPER */}
        <div className="absolute top-0 left-[35%] w-[220vw] h-full pointer-events-none select-none z-0">

          {/* softer edge mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-transparent to-[#0b0b0b] z-10" />

          <motion.h1
            style={{
              y: yTransform,
              x: xDrift,
              opacity: opacityTransform,
            }}
            className="relative text-[4.5rem] md:text-[8rem] lg:text-[11rem] leading-none uppercase tracking-tight text-white/90 whitespace-nowrap rotate-[-8deg]"
          >
            CODE IS A PASSION • CODE IS A PASSION • CODE IS A PASSION •
          </motion.h1>

        </div>

      </div>
    </section>
  );
}