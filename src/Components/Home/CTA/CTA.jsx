import React from 'react';

const CTA = () => {
  return (
    <div className="bg-[#111111] text-[#E5E5E5] px-6 py-16 md:px-16 lg:px-24 font-sans">
      
      {/* Main Statement Heading */}
      <div className="mb-24">
        <h1 className="text-2xl md:text-4xl text-center uppercase font-serif tracking-tight leading-[1.1]">
          Based in Alexandria. Currently a Full-Stack Web Developer at Salis Digital. You can explore my code on GitHub @Rana-Fathi-M and connect with me on LinkedIn.
        </h1>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full">
        
        {/* Education Column */}
        <div className="flex flex-col">
          <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-8 border-b border-gray-800 pb-4">
            Education & Certifications
          </h3>
          <div className="flex flex-col gap-8 mt-2">
            
            <div className="flex justify-between items-start">
              <span className="text-gray-400 text-sm md:text-base">Graduating 2026 / Computer Science</span>
              <span className="uppercase text-lg md:text-xl tracking-wider font-light text-right">Alexandria<br/>University</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-gray-400 text-sm md:text-base">Diploma / Full-Stack Web Dev</span>
              <span className="uppercase text-lg md:text-xl tracking-wider font-light text-right">Route<br/>Academy</span>
            </div>

          </div>
        </div>

        {/* Experiences Column */}
        <div className="flex flex-col">
          <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-8 border-b border-gray-800 pb-4">
            Experience & Key Projects
          </h3>
          <div className="flex flex-col gap-8 mt-2">
            
            <div className="flex justify-between items-start">
              <span className="text-gray-400 text-sm md:text-base">Jan 2023 - Present / Full-Stack Web Dev</span>
              <span className="uppercase text-lg md:text-xl tracking-wider font-light text-right">Salis Digital</span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="text-gray-400 text-sm md:text-base">Project / Fashion E-commerce Platform</span>
              <span className="uppercase text-lg md:text-xl tracking-wider font-light text-right">Zenvy</span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="text-gray-400 text-sm md:text-base">Project / Real Estate Platform</span>
              <span className="uppercase text-lg md:text-xl tracking-wider font-light text-right">Salis Aqar</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;