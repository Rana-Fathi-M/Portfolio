// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger to enable scroll-based animations
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function MyWorks() {
//   const sectionRef = useRef(null);
//   const projectRefs = useRef([]);

//   const projects = [
//     { 
//       name: 'ZENYVEG', 
//       url: 'https://zenvyeg.com', 
//       client: 'Salis Digital',
//       role: 'Full-Stack (React/NestJS)',
//       desc: 'A modern fashion e-commerce platform featuring seamless product browsing and secure checkout.',
//       image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop'
//     },
//     { 
//       name: 'SALIS AQAR', 
//       url: 'https://aqar.salis.app', 
//       client: 'Salis Digital',
//       role: 'Frontend Development',
//       desc: 'A comprehensive real estate platform designed for property listings and advanced search filtering.',
//       image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
//     },
//     { 
//       name: 'TATWEER PRO', 
//       url: 'https://tatweer.pro', 
//       client: 'Tatweer',
//       role: 'Full-Stack Solutions',
//       desc: 'An enterprise business solution focusing on scalable architecture and high-performance APIs.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
//     },
//     { 
//       name: 'SADA HEALTH', 
//       url: 'https://sadahealth.salis.app', 
//       client: 'Salis Digital',
//       role: 'Web Application',
//       desc: 'A healthcare platform connecting patients with services, featuring robust data privacy measures.',
//       image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop'
//     }
//   ];

//   useEffect(() => {
//     let ctx = gsap.context(() => {
      
//       projectRefs.current.forEach((project, index) => {
//         if (!project) return;

//         const marqueeText = project.querySelector('.marquee-text');
//         const contentContainer = project.querySelector('.content-container');

//         // 1. Horizontal Marquee Effect
//         const direction = index % 2 === 0 ? -1 : 1;
//         gsap.to(marqueeText, {
//           xPercent: 20 * direction,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: project,
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 1,
//           }
//         });

//         // 2. Stacking & Scaling Effect (The "Wow" Factor)
//         if (index < projects.length - 1) {
//           gsap.to(contentContainer, {
//             scale: 0.85,
//             opacity: 0,              // Fade out completely so it doesn't bleed through
//             filter: "blur(8px)",    // Added blur for 3D depth as it gets pushed back
//             ease: 'none',
//             scrollTrigger: {
//               trigger: project,
//               start: 'top top', 
//               // THE FIX: Instead of 'bottom top', we scrub for exactly 100% of the element's height.
//               // This perfectly aligns with the next card scrolling up 100vh to cover it.
//               end: '+=100%', 
//               scrub: true,
//             }
//           });
//         }
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full bg-[#0d0d0d] text-[#f4f4f4] pb-[10vh]">
//       {projects.map((project, i) => (
//         <div 
//           key={i} 
//           ref={el => projectRefs.current[i] = el}
//           className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
//           style={{ zIndex: i }} 
//         >
//           <div className="content-container relative w-full h-full flex flex-col items-center justify-center origin-top pt-20">
            
//             {/* Background Marquee Text */}
//             <div className="absolute top-1/2 -translate-y-1/2 w-[200vw] flex justify-center opacity-10 pointer-events-none overflow-hidden z-0">
//               <h2 className="marquee-text whitespace-nowrap text-[22vw] font-serif uppercase tracking-tighter leading-none">
//                 {project.name} &mdash; {project.name} &mdash; {project.name} &mdash;
//               </h2>
//             </div>

//             {/* Central Project Image */}
//             <a 
//               href={project.url} 
//               target="_blank" 
//               rel="noreferrer"
//               className="image-container relative z-10 w-[90%] md:w-[70%] max-w-5xl aspect-video overflow-hidden group cursor-pointer shadow-2xl shadow-black/50"
//             >
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
//               <img 
//                 src={project.image} 
//                 alt={project.name}
//                 className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
//               />
//             </a>

//             {/* 3-Column Detail Footer */}
//             <div className="relative z-10 w-[90%] md:w-[70%] max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base bg-[#0d0d0d]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
//               <div className="flex flex-col">
//                 <span className="font-bold mb-2 text-white/50 uppercase tracking-widest text-xs">Client</span>
//                 <span>{project.client}</span>
//               </div>
              
//               <div className="flex flex-col">
//                 <span className="font-bold mb-2 text-white/50 uppercase tracking-widest text-xs">Role / Tech</span>
//                 <span>{project.role}</span>
//               </div>
              
//               <div className="flex flex-col md:col-span-1">
//                 <span className="leading-relaxed opacity-90">
//                   {project.desc}
//                 </span>
//               </div>
//             </div>

//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MyWorks() {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      name: 'ZENYVEG',
      url: 'https://zenvyeg.com',
      client: 'Salis Digital',
      role: 'Full-Stack (React/NestJS)',
      desc: 'A modern fashion e-commerce platform featuring seamless product browsing and secure checkout.',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS AQAR',
      url: 'https://aqar.salis.app',
      client: 'Salis Digital',
      role: 'Frontend Development',
      desc: 'A comprehensive real estate platform designed for property listings and advanced search filtering.',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'TATWEER PRO',
      url: 'https://tatweer.pro',
      client: 'Tatweer',
      role: 'Full-Stack Solutions',
      desc: 'An enterprise business solution focusing on scalable architecture and high-performance APIs.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SADA HEALTH',
      url: 'https://sadahealth.salis.app',
      client: 'Salis Digital',
      role: 'Web Application',
      desc: 'A healthcare platform connecting patients with services, featuring robust data privacy measures.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = projectRefs.current;

      // STACK SETUP
      gsap.set(cards, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        willChange: 'transform',
      });

      // ✅ FIXED STARTING SPACE
      gsap.set(cards, {
        yPercent: 100,
      });

      // first card visible immediately
      gsap.set(cards[0], {
        yPercent: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${projects.length * 85}%`,
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        if (!card) return;

        const marquee = card.querySelector('.marquee-text');

        // skip first card animation to remove empty beginning
        if (i !== 0) {
          tl.to(
            card,
            {
              yPercent: 0,
              ease: 'none',
            },
            i - 0.2
          );
        }

        // DEPTH EFFECT
        if (i > 0) {
          tl.to(
            cards[i - 1],
            {
              scale: 0.92,
              opacity: 0.6,
              filter: 'blur(4px)',
              ease: 'none',
            },
            i - 0.2
          );
        }

        // AUTO INFINITE MARQUEE
        if (marquee) {
          const dir = i % 2 === 0 ? -1 : 1;

          gsap.to(marquee, {
            xPercent: 25 * dir,
            duration: 18,
            repeat: -1,
            ease: 'linear',
            yoyo: true,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0d0d0d] text-[#f4f4f4]"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {projects.map((project, i) => (
        <div
          key={i}
          ref={(el) => (projectRefs.current[i] = el)}
          className="flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
        >
          <div className="content-container relative w-full h-full flex flex-col items-center justify-center origin-top pt-8 md:pt-10">

            {/* MARQUEE */}
            <div className="absolute top-1/2 -translate-y-1/2 w-[220vw] flex justify-center opacity-[0.08] pointer-events-none overflow-hidden z-0">
              <h2 className="marquee-text whitespace-nowrap text-[22vw] font-serif uppercase tracking-tighter leading-none">
                {project.name} &mdash; {project.name} &mdash; {project.name} &mdash; {project.name}
              </h2>
            </div>

            {/* IMAGE */}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 w-[90%] md:w-[70%] max-w-5xl aspect-video overflow-hidden group cursor-pointer shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
            </a>

            {/* FOOTER */}
            <div className="relative z-10 w-[90%] md:w-[70%] max-w-5xl mt-7 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base bg-[#0d0d0d]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <div className="flex flex-col">
                <span className="font-bold mb-2 text-white/50 uppercase tracking-widest text-xs">
                  Client
                </span>

                <span>{project.client}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold mb-2 text-white/50 uppercase tracking-widest text-xs">
                  Role / Tech
                </span>

                <span>{project.role}</span>
              </div>

              <div className="flex flex-col">
                <span className="leading-relaxed opacity-90">
                  {project.desc}
                </span>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}