import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'

import { useLocation } from "react-router-dom";
import MyWorks from './MyWorks/MyWorks';
import Info from './Info/Info';
import Thoughts from './MyThoughts/MyThoughts';
import CTA from './CTA/CTA';


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
      <MyWorks/>
      <Info/>
      <Thoughts/>
      <CTA/>


    </div>
  )
}