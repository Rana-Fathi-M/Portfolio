import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blackColor text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 py-16">
                {/* Logo & Intro */}
                <div className=" col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold mb-10">Salis Employee</h2>
                    <p className="text-base text-gray-300 mb-10">
                        HrFlow stands at the forefront of revolutionizing the recruitment landscape, providing cutting-edge solutions to approach talent acquisition.

                    </p>
                    <div className="flex gap-10 mt-6">
                        <FaFacebookF className="hover:text-[#ff6984] cursor-pointer transition" />
                        <FaTwitter className="hover:text-[#ff6984] cursor-pointer transition" />
                        <FaLinkedinIn className="hover:text-[#ff6984] cursor-pointer transition" />
                        <FaInstagram className="hover:text-[#ff6984] cursor-pointer transition" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-10">Company</h3>
                    <ul className="space-y-5 text-white ">
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">About Us</li>
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Careers</li>
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Blog</li>
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-10">Resources</h3>
                    <ul className="space-y-5 text-white ">
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Help Center</li>
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Terms of Service</li>
                        <li className="hover:text-PinkBg duration-150 cursor-pointer">Support</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-lg font-semibold mb-10">Subscribe</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Stay updated with HR insights and news.
                    </p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 rounded-l-full text-black focus:outline-none"
                        />
                        <button className="bg-[#ff6984] px-4 py-2 rounded-r-full text-white font-semibold hover:bg-pink-600 transition">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-subTitleLightText">
                &copy; {new Date().getFullYear()} Salis Employee All rights reserved | Powered by <a href="" className="text-[#ff6984] hover:text-pink-600 transition">Salis Digital</a>
            </div>
        </footer>
    );
}
