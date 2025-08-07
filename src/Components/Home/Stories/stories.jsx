// import React, { useEffect, useState } from "react";
// import tablet from "../../../assets/imgs/tablet.png";

// export default function Stories() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShow(true), 100);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section className="bg-main-gradient-light-two text-white py-8 overflow-hidden">
//       <div className=" grid grid-cols-1 md:grid-cols-3  items-center">
//         <div className="md:col-span-2 md:ml-24">
//          {/* //animations// */}
//           <h2
//             className={`text-3xl md:text-5xl mb-10 font-bold transition-all duration-700 ${
//               show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }`}
//           >
//             Success stories from<br /> around the world
//           </h2>

//           <div
//             className={`w-full h-[1px] bg-[#e7e7e7cc] mb-8 transition-all duration-700 delay-300 ${
//               show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }`}
//           ></div>
//           <div
//             className={`grid-cols-2 gap-16 text-center md:text-left flex transition-all duration-700 delay-500 ${
//               show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }`}
//           >
//             <div>
//               <p className="text-6xl font-bold">90+</p>
//               <p className="text-xl mt-5 text-[#e7e7e7cc]">
//                 Countries customers across
//               </p>
//             </div>
//             <div>
//               <p className="text-6xl font-bold">70k+</p>
//               <p className="text-xl mt-5 text-[#e7e7e7cc]">
//                 Global active users
//               </p>
//             </div>
//             <div>
//               <p className="text-6xl font-bold">90+</p>
//               <p className="text-xl mt-5 text-[#e7e7e7cc]">
//                 Reduction in onboarding queries
//               </p>
//             </div>
//             <div>
//               <p className="text-6xl font-bold">90+</p>
//               <p className="text-xl mt-5 text-[#e7e7e7cc]">
//                 Time saved on managing time off
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* //tab img// */}
//         <div className="hidden md:block">
//           <img
//             src={tablet}
//             alt="tablet img"
//             className="w-full translate-y-14 max-w-lg ml-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useState } from "react";
import tablet from "../../../assets/imgs/tablet.png";

export default function Stories() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-main-gradient-light-two text-white py-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        <div className="md:col-span-2 lg:ml-24 px-4 sm:px-8">
          {/* //animations// */}
          <h2
            className={`text-2xl text-center md:text-left sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-10 font-bold transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Success stories from
            <br />
            around the world
          </h2>

          <div
            className={`w-full h-[1px] bg-[#e7e7e7cc] mb-6 sm:mb-8 transition-all duration-700 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          ></div>

          {/* Responsive stats layout */}
          <div
            className={`grid gap-8 sm:grid-cols-2 sm:gap-16 text-center md:text-left transition-all duration-700 delay-500 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div>
              <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">90+</p>
              <p className="text-base sm:text-xl mt-3 sm:mt-5 text-[#e7e7e7cc]">
                Countries customers across
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">70k+</p>
              <p className="text-base sm:text-xl mt-3 sm:mt-5 text-[#e7e7e7cc]">
                Global active users
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">90+</p>
              <p className="text-base sm:text-xl mt-3 sm:mt-5 text-[#e7e7e7cc]">
                Reduction in onboarding queries
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">90+</p>
              <p className="text-base sm:text-xl mt-3 sm:mt-5 text-[#e7e7e7cc]">
                Time saved on managing time off
              </p>
            </div>
          </div>
        </div>

        {/* //tablet img// */}
        <div className="hidden md:block">
          <img
            src={tablet}
            alt="tablet img"
            className="w-full translate-y-14 max-w-lg ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
