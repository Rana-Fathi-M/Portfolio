import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import TestimonialSlider from './SliderSection/SliderSection'
import HRFlow from './HRFlowSection/HRFlowSection'
import RequestDemo from './RequestDemo/RequestDemo'


export default function Home() {
  useEffect(() => {
    document.title = 'Home'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">

      <HeroSection />
      <TestimonialSlider />
      <HRFlow />
      <RequestDemo />
      

    </div>
  )
}