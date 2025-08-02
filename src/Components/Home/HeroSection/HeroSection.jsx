import { motion } from "framer-motion";
import heroImage from "../../../../src/assets/imgs/hero_image.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import HRFlowKeyFeatures from "./HRFlowKeyFeatures/HRFlowKeyFeatures";

export default function HeroSection() {
    const { t } = useTranslation();
    return (
        <section className="bg-main-gradient-light pt-36 py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#263c61] mb-4 leading-[100px]">
                        Simplifying HR Management for Every Business
                    </h1>
                    <p className="text-lg text-[#717185] mb-6">
                        {t("Introducing HrFlow, the unsung hero of streamlined communication in the world of Software as a Service.")}
                    </p>

                    {/* Animated Button with Sliding Arrow to the Left */}
                    <Link
                        to=""
                        className="group bg-rose-500 hover:bg-rose-600 text-white text-lg px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center"
                    >
                        {t("Request Demo")}
                        <span className="pl-3 inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                            <FaArrowRight />
                        </span>
                    </Link>
                </motion.div>

                {/* Right Illustration with infinite x-axis motion */}
                <motion.div
                    animate={{ x: [0, 20, 0, -20, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="flex-1"
                >
                    <img
                        src={heroImage}
                        alt="HR Management Illustration"
                        className="w-full"
                    />
                </motion.div>
            </div>


            <HRFlowKeyFeatures />
        </section>
    );
}
