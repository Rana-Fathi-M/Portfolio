import React, { useState, useEffect } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { RiArrowGoForwardFill } from "react-icons/ri";

// Decorative background images
import bgTopLeft from "../../../assets/imgs/price-background.png";
import bgBottomRight from "../../../assets/imgs/price-background-right.png";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [show, setShow] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShow(true), 100);
    const timer2 = setTimeout(() => setShowToggle(true), 400);
    const timer3 = setTimeout(() => setShowCards(true), 700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const prices = isYearly ? ["$12", "$24", "$60"] : ["$15", "$29", "$69"];
  const bottomText = [
    "Ideal for small businesses and startups looking for essential HR management tools.",
    "Ideal for growing teams needing advanced workflow and analytics.",
    "Perfect for large enterprises needing fully customizable solutions.",
  ];

  return (
    <div className="pt-24 md:pt-36 flex flex-col items-center py-10 px-4 relative overflow-hidden">

      {/* Background images - Small Screens */}
      <img
        src={bgTopLeft}
        alt="decoration"
        className="absolute top-0 left-0 w-40 sm:w-72 opacity-50 pointer-events-none z-0 block md:hidden"
      />
      <img
        src={bgBottomRight}
        alt="decoration"
        className="absolute bottom-0 right-0 w-40 sm:w-72 opacity-50 pointer-events-none z-0 block md:hidden"
      />

      {/* Background images - Medium & Up */}
      <img
        src={bgTopLeft}
        alt="decoration"
        className="absolute top-0 left-0 w-32 sm:w-[600px] opacity-20 pointer-events-none z-0 hidden md:block"
      />
      <img
        src={bgBottomRight}
        alt="decoration"
        className="absolute bottom-0 right-0 w-32 sm:w-[600px] opacity-20 pointer-events-none z-0 hidden md:block"
      />

      {/* Header */}
      <div className="text-center mb-6 z-10">
        <h1
          className={`text-3xl sm:text-4xl md:text-[58px] leading-tight text-mainDarkBlue font-bold font-SpaceGrotesk mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          TNC Pricing Plan
        </h1>
        <p
          className={`text-sm sm:text-base md:text-lg text-subTitleLightText max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Unlock the power of seamless recruitment with HrFlow, where innovation
          meets efficiency. Our pricing plans are designed to cater to the
          diverse needs.
        </p>
      </div>

      {/* Toggle */}
      <div
        className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-500 z-10 ${
          showToggle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span
          className={`text-sm sm:text-base font-semibold cursor-pointer ${
            !isYearly ? "text-[#2c3e50]" : "text-gray-400"
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </span>

        <div className="flex gap-2 items-center px-4 py-2 bg-[#ffe7e7] rounded-full border border-[#f37576] shadow-[0_0_10px_#f3757650] cursor-pointer">
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
              !isYearly ? "bg-[#f37576]" : "bg-[#f9f1f1]"
            }`}
            onClick={() => setIsYearly(false)}
          ></div>
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
              isYearly ? "bg-[#f37576]" : "bg-[#f9f1f1]"
            }`}
            onClick={() => setIsYearly(true)}
          ></div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-sm sm:text-base font-semibold cursor-pointer ${
              isYearly ? "text-[#2c3e50]" : "text-gray-400"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </span>
          <RiArrowGoForwardFill className="text-[#f37576]" />
          <span className="text-[#f37576] text-xs font-semibold bg-[#ffe7e7] px-3 py-1 rounded-full">
            Save 30%
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl transition-all duration-700 delay-700 z-10 ${
          showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {[
          {
            title: "Essentials",
            features: [
              "Centralized employee database",
              "Employee self-service portal",
              "Basic offboarding workflows",
              "Standard reports and analytics",
              "Compliance and security features",
            ],
            price: prices[0],
          },
          {
            title: "Advanced HR Management",
            features: [
              "Advanced offboarding workflows",
              "Customizable workflows and approvals",
              "Enhanced analytics and reporting",
              "Employee performance reviews",
              "Priority customer support",
            ],
            price: prices[1],
          },
          {
            title: "Enterprise Solutions",
            features: [
              "Tailored solutions for enterprise-level",
              "Dedicated account manager",
              "API access for integration",
              "Advanced customization options",
              "Training & onboarding assistance",
            ],
            price: prices[2],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="group transition-all duration-300 rounded-2xl bg-transparent"
          >
            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col items-start group-hover:bg-[#263c61] group-hover:shadow-2xl transition-all duration-300">
              <h3 className="text-base sm:text-lg font-semibold text-mainDarkBlue group-hover:text-white">
                {plan.title}
              </h3>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-PinkBg my-6 sm:my-8">
                {plan.price}
              </div>
              <ul className="text-left space-y-3 sm:space-y-4 mb-6 text-sm sm:text-base">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center group-hover:text-[#fffc] font-medium text-subTitleLightText"
                  >
                    <IoCheckmarkDone className="text-subTitleLightText text-xl group-hover:text-[#fffc]" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blackColor text-white py-2 px-5 sm:px-6 rounded-2xl group-hover:bg-PinkBg self-start transition-all duration-300 text-sm sm:text-base">
                Get Started
              </button>
            </div>
            <div className="bg-transparent mt-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-subTitleLightText font-medium group-hover:bg-mainDarkBlue group-hover:text-[#fffc] transition-all duration-300 shadow-xl">
              {bottomText[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
