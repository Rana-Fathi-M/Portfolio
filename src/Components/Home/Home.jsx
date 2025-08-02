import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'


export default function Home() {
  useEffect(() => {
    document.title = 'Home'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">

      <HeroSection />
      

    </div>
  )
}