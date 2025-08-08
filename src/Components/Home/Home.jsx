import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import TestimonialSlider from './SliderSection/SliderSection'
import HRFlow from './HRFlowSection/HRFlowSection'
import RequestDemo from './RequestDemo/RequestDemo'
import HowItWorksSection from './HowItWorks/howItWorks'
import Stories from './Stories/stories'
import Pricing from './Pricing/pricing'

import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay ensures DOM is ready
      }
    }
  }, [hash]);

  return null;
}

export default function Home() {
  useEffect(() => {
    document.title = 'Home'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">
       
      <ScrollToHash />

      <HeroSection />
      <HowItWorksSection />
      <Stories />
      <Pricing />
      <TestimonialSlider />
      <HRFlow />
      <RequestDemo />


    </div>
  )
}