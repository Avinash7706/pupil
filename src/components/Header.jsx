import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f0f1ff] ">
      {/* Fixed Header */}
      <header
  className={`fixed -top-5 sm:top-0 left-0 right-0 z-[9999] flex justify-between items-center max-w-4xl mx-auto mt-6 transition-all duration-300
    ${scrolled ? 'bg-white px-4 py-3' : 'bg-transparent px-5 sm:px-10 py-6 sm:py-2'}
    rounded-full`}
>
        {/* Logo */}
        <h1 className="text-2xl font-semibold flex items-center">
          <span>Prompt</span>
          <span className="italic text-blue-600">hire</span>
        </h1>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <Link to="/contact"
            aria-label="Start hiring"
            className={`flex items-center gap-1 text-base font-semibold text-black bg-white border border-gray-300 rounded-full px-6 py-2 transition
              ${scrolled ? '' : 'shadow-[0_0_20px_0_rgba(0,0,0,0.05)]'} 
              hover:shadow-[0_0_15px_0_rgba(0,0,0,0.15)]`}
          >
            Start hiring
            <FaArrowRightLong className='-rotate-[30deg] w-4 h-4   hover:-rotate-[30deg]'/>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-2xl focus:outline-none"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full fixed top-16 bg-white border border-gray-200 shadow-lg rounded-xl px-6 py-4 z-40">
        <Link to="/contact"
            aria-label="Start hiring"
            className="block w-full text-left font-semibold text-black bg-white border border-gray-300 rounded-full px-6 py-2 hover:shadow-[0_0_15px_0_rgba(0,0,0,0.15)] transition"
          >
            Start hiring
          </Link>
        </div>
      )}
    </div>
  );
}
