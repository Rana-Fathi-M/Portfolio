import React, { useEffect, useState, useRef } from "react";
import obj1 from "../../../assets/imgs/obj1.png";
import obj2 from "../../../assets/imgs/obj2.png";
import obj3 from "../../../assets/imgs/obj3.png";
import obj4 from "../../../assets/imgs/obj4.png";
import thinkingg from "../../../assets/imgs/thinkingg.mp4";

export default function HowItWorksSection() {
  const [show, setShow] = useState(false);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState("auto");

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const leftHeight = leftColRef.current?.offsetHeight || 0;
      const rightHeight = rightColRef.current?.offsetHeight || 0;
      setVideoHeight(`${Math.max(leftHeight, rightHeight)}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-white py-20 px-4 mt-16 container overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold text-mainDarkBlue transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          How HRFlow TNC Works
        </h1>
        <p className={`text-subTitleLightText mt-4 mx-auto max-w-3xl text-base md:text-lg transition-all duration-700 delay-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          HRMLand is your all-in-one HR management solution. Our user-friendly interface and modules allow you to tailor the software to fit your specific HR needs.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 justify-center items-center">
        {/* Left Column */}
        <div ref={leftColRef} className={`w-full flex flex-col items-center justify-center gap-3 transition-all duration-700 delay-[1000ms] ${show ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="bg-[#bac1ff] rounded-2xl w-full h-64 flex justify-center">
            <img src={obj1} alt="obj1" className=" p-10 object-contain  " />
          </div>
          <div className="bg-purple-200 rounded-2xl w-full h-64 flex justify-center">
            <img src={obj2} alt="obj2" className=" p-10 object-contain  " />
          </div>
        </div>

        {/* Center Video */}
        <div className={`lg:col-span-2 w-full transition-all duration-700 delay-[600ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} flex justify-center`}>
          <video
            style={{ height: videoHeight }}
            className="w-full rounded-[15px] shadow-xl object-cover"
            autoPlay
            muted
            loop
          >
            <source src={thinkingg} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>

        {/* Right Column */}
        <div ref={rightColRef} className={`w-full flex flex-col items-center justify-center  gap-3 transition-all duration-700 delay-[1400ms] ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="bg-blue-100 rounded-2xl w-full h-64 flex justify-center">
            <img src={obj3} alt="obj3" className=" p-10 object-contain  " />
          </div>
          <div className="bg-pink-100 rounded-2xl w-full h-64 flex justify-center">
            <img src={obj4} alt="obj4" className=" p-10 object-contain  " />
          </div>
        </div>
      </div>
    </div>
  );
}
