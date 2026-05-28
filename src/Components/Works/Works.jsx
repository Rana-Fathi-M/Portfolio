import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Works() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      name: 'ZENVY',
      url: 'https://www.zenvyeg.com/',
      client: 'Personal Brand',
      role: 'Full-Stack E-Commerce',
      desc: 'Modern fashion e-commerce platform with smooth UX and secure checkout system.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS AQAR',
      url: 'https://aqar.salis.app/',
      client: 'Salis Digital',
      role: 'Real Estate Platform',
      desc: 'Advanced real estate system for property listing, filtering, and browsing.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS DIGITAL',
      url: 'https://salis.digital/',
      client: 'Salis Digital',
      role: 'Company Website',
      desc: 'Official digital agency website showcasing services, branding, and portfolio.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS ORDER',
      url: 'https://order.salis.app/',
      client: 'Salis Digital',
      role: 'Order Management System',
      desc: 'Full order processing system with cart, checkout, and admin handling.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS CHAT',
      url: 'https://chat.salis.app/',
      client: 'Salis Digital',
      role: 'Realtime Chat App',
      desc: 'Realtime messaging platform with modern UI and instant communication.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS SIYANA',
      url: 'https://siyana.salis.app/',
      client: 'Salis Digital',
      role: 'Service Platform',
      desc: 'Platform for service management and structured workflow handling.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'TATWEER PRO',
      url: 'https://tatweer.pro/',
      client: 'Tatweer',
      role: 'Enterprise Solution',
      desc: 'High-performance business platform with scalable backend architecture.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SALIS EMPLOYEE',
      url: 'https://employee.salis.app/',
      client: 'Salis Digital',
      role: 'HR System',
      desc: 'Employee management system for attendance, tasks, and workflow tracking.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'SADA HEALTH',
      url: 'https://sadahealth.salis.app/',
      client: 'Salis Digital',
      role: 'Healthcare Platform',
      desc: 'Healthcare system connecting patients and services with secure data handling.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'LINKEDIN PROFILE',
      url: 'https://www.linkedin.com/in/rana-fathi-059ba425a',
      client: 'Professional',
      role: 'Networking',
      desc: 'Professional profile showcasing experience, projects, and career journey.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'GITHUB PROFILE',
      url: 'https://github.com/Rana-Fathi-M',
      client: 'Open Source',
      role: 'Code Repository',
      desc: 'Source code, projects, and contributions across multiple technologies.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'DEMO PROJECTS',
      url: '#',
      client: 'Testing Environment',
      role: 'Demo Access',
      desc: 'Demo login available for testing systems: username: demo / password: 123demo123',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = projectRefs.current;

      // =========================
      // ✨ TITLE ANIMATION
      // =========================
      const titleLetters = titleRef.current?.querySelectorAll('.letter');

      gsap.fromTo(
        titleLetters,
        {
          y: 40,
          opacity: 0,
          filter: 'blur(6px)',
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.08,
          duration: 1,
          ease: 'power4.out',
        }
      );

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: true,
        },
        scale: 0.95,
        opacity: 0.85,
      });

      // =========================
      // CARDS SYSTEM
      // =========================
      gsap.set(cards, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        willChange: 'transform',
        yPercent: 100,
      });

      gsap.set(cards[0], { yPercent: 0 });

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

        if (i !== 0) {
          tl.to(card, { yPercent: 0, ease: 'none' }, i - 0.2);
        }

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
      {/* ================= TITLE ================= */}
      <div
        ref={titleRef}
        className="absolute top-28 left-1/2 -translate-x-1/2 z-50 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase">
          {'MY WORKS'.split('').map((char, i) => (
            <span key={i} className="letter inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div className="h-1 w-40 mx-auto mt-4 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />
      </div>

      {/* ================= PROJECTS ================= */}
      {projects.map((project, i) => (
        <div
          key={i}
          ref={(el) => (projectRefs.current[i] = el)}
          className="flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center pt-8 md:pt-10">

            {/* MARQUEE */}
            <div className="absolute top-1/2 -translate-y-1/2 w-[220vw] flex justify-center opacity-[0.08] pointer-events-none z-0">
              <h2 className="marquee-text whitespace-nowrap text-[22vw] font-serif uppercase tracking-tighter leading-none">
                {project.name} — {project.name} — {project.name}
              </h2>
            </div>

            {/* IMAGE */}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 w-[90%] md:w-[70%] max-w-5xl aspect-video overflow-hidden group shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10" />

              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-700"
              />
            </a>

            {/* FOOTER */}
            <div className="relative z-10 w-[90%] md:w-[70%] max-w-5xl mt-7 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base bg-[#0d0d0d]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <div>
                <span className="text-white/40 uppercase text-xs">Client</span>
                <p>{project.client}</p>
              </div>

              <div>
                <span className="text-white/40 uppercase text-xs">Role</span>
                <p>{project.role}</p>
              </div>

              <div>
                <p className="opacity-90">{project.desc}</p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}