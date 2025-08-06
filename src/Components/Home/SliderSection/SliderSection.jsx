import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Jonathan Cole",
        role: "UX Designer",
        text: "HrFlow's transformative capabilities have significantly improved our recruitment dynamics. The boolean search functionality and Figma flows have become our go-to resources for identifying and engaging top-tier talent.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Emily Watson",
        role: "HR Manager",
        text: "With HrFlow, our hiring process has become more streamlined and effective. It’s a game changer.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Michael Lee",
        role: "Recruiter",
        text: "We’ve found great success using HrFlow to connect with top candidates faster and more efficiently.",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
        name: "Sarah Kim",
        role: "Talent Acquisition",
        text: "The AI-driven insights from HrFlow have transformed how we build teams.",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
        name: "Ahmed Youssef",
        role: "Hiring Consultant",
        text: "HrFlow helps us discover talent we wouldn’t have found otherwise.",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
];

export default function TestimonialSlider() {
    return (
        <div className="relative flex justify-center items-center bg-[#252937] text-white rounded-xl my-10 md:my-20 mx-3 md:mx-10 px-4 py-10 md:p-10 max-w-5xl lg:mx-auto text-center md:h-[400px]">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                slidesPerView={1}
                loop
            >
                {testimonials.map((t, currentIndex) => {
                    const getCircleIndexes = () => {
                        const total = testimonials.length;
                        const left = (currentIndex - 2 + total) % total;
                        const midLeft = (currentIndex - 1 + total) % total;
                        const midRight = (currentIndex + 1) % total;
                        const right = (currentIndex + 2) % total;
                        return [left, midLeft, currentIndex, midRight, right];
                    };

                    const surrounding = getCircleIndexes();

                    return (
                        <SwiperSlide key={currentIndex}>
                            <div className="flex justify-center items-center gap-4 mb-6">
                                {surrounding.map((index, i) => {
                                    const isCenter = index === currentIndex;
                                    return (
                                        <img
                                            key={i}
                                            src={testimonials[index].image}
                                            alt={testimonials[index].name}
                                            className={`rounded-full border-4 border-white transition-all duration-300 object-cover ${isCenter
                                                ? "w-20 h-20 z-10"
                                                : "w-12 h-12 opacity-0 md:opacity-50 grayscale"
                                                }`}
                                        />
                                    );
                                })}
                            </div>

                            <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-4">
                                {t.text}
                            </p>
                            <h4 className="font-semibold text-lg">{t.name}</h4>
                            <p className="text-sm text-gray-400">{t.role}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute left-4 md:-left-4 bottom-2 md:top-1/2 -translate-y-1/4 z-10">
                <button className="swiper-button-prev-custom bg-PinkBg p-3 md:px-6 md:py-4 md:text-xl rounded-lg text-white shadow-md">
                    <FaArrowLeft />
                </button>
            </div>
            <div className="absolute right-4 md:-right-4 bottom-2 md:top-1/2 -translate-y-1/4 z-10">
                <button className="swiper-button-next-custom bg-PinkBg p-3 md:px-6 md:py-4 md:text-xl rounded-lg text-white shadow-md">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
