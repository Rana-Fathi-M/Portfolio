import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link
        to="/features"
        className={`transition-colors duration-300 text-black`}
      >
        Features
      </Link>
      <Link
        to="/howItWorks"
        className={`transition-colors duration-300 text-black`}
      >
        How It Works
      </Link>
      <Link
        to="/stories"
        className={`transition-colors duration-300 text-black`}
      >
        Stories
      </Link>
      <Link
        to="/pricing"
        className={`transition-colors duration-300 text-black`}
      >
        Pricing
      </Link>
      <Link
        to="/testimonials"
        className={`transition-colors duration-300 text-black`}
      >
        Testimonials
      </Link>
      <Link
        to="/blog"
        className={`transition-colors duration-300 text-black`}
      >
        Blog
      </Link>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-10 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3.5 border-b-[1px] border-blackColor" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className={`text-2xl font-bold text-black`}>
            Salis Employee
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center gap-6 text-base md:text-lg font-medium">
          {navLinks}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex flex-1 justify-end gap-3">
          <button
            className={`px-7 py-3 rounded-3xl font-semibold transition-all duration-300 border bg-black text-white border-black hover:bg-gray-800"}`}>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            ) : (
              <FiMenu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`
        md:hidden flex flex-col gap-4 items-center mt-4 overflow-hidden
        px-6 py-4 rounded-lg backdrop-blur-md bg-white/30
        ${isScrolled ? "text-black" : "text-white"}
      `}
          >
            <div className="flex flex-col items-center gap-4 w-full">
              {[
                { to: "/features", label: "Features" },
                { to: "/howItWorks", label: "How It Works" },
                { to: "/stories", label: "Stories" },
                { to: "/pricing", label: "Pricing" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/blog", label: "Blog" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-base font-medium w-full text-center hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button className="w-full mt-2 px-4 py-2 rounded-lg bg-black text-white">
                Login
              </button>
              <button className="w-full px-4 py-2 rounded-lg bg-black text-white">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
