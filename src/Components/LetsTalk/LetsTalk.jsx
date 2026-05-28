import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LetsTalk = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(formRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.6"
    );

    return () => tl.kill();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto link parameters
    const targetEmail = "rana.fathi.rana@gmail.com";
    const subject = encodeURIComponent("Portfolio Contact - Let's Talk");
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
    
    // Open the user's default email client
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    
    setSubmitStatus('success');
    setEmail('');
    setMessage('');
  };

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] flex flex-col items-center justify-center px-6 py-24 font-sans"
    >
      <div ref={titleRef} className="text-center mb-16 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light uppercase tracking-tight leading-none mb-4" style={{ transform: 'scaleY(1.2)' }}>
          Let's Talk
        </h1>
        <p className="text-gray-400 tracking-widest uppercase text-sm md:text-base">
          Let's get some business done.
        </p>
      </div>

      <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="w-full max-w-2xl flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL" 
            required
            className="w-full bg-[#161616] border border-gray-800 rounded-full px-8 py-5 md:py-6 text-sm md:text-base tracking-widest uppercase text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <textarea 
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="TELL ME MORE" 
            required
            rows="5"
            className="w-full bg-[#161616] border border-gray-800 rounded-3xl px-8 py-6 text-sm md:text-base tracking-widest uppercase text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
          <button 
            type="submit" 
            className="bg-[#161616] border border-gray-800 text-white hover:bg-white hover:text-black rounded-full px-12 py-5 md:px-16 md:py-6 font-serif text-2xl md:text-4xl uppercase tracking-wider transition-all duration-300"
          >
            Send
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-green-500 text-center uppercase tracking-widest text-sm mt-4">
            Opening your mail client...
          </p>
        )}
      </form>
    </div>
  );
};

export default LetsTalk;