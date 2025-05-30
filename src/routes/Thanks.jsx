import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thankRight from '../images/thankRight.png'
export default function ThankYou({ title, message }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#E6E8FF] px-6 py-4 flex items-center justify-between fixed top-0 w-full z-50 shadow-sm">
        <div className="font-sans font-semibold text-gray-900 text-lg">Prompthire</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-sans text-gray-900 text-base">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/" className="hover:underline">Features</Link></li>
          <li><Link to="/" className="hover:underline">Pricing</Link></li>
          <li><Link to="/" className="hover:underline">Contact</Link></li>
          <li> <Link to="/blog" className="block hover:underline">Blog</Link></li>
        </ul>

        <Link to="/contact"> <button
          className="hidden md:block bg-[#9B8AFB] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#7a66e8] transition"
          type="button"
        >
          Start hiring
        </button>
</Link>
        {/* Hamburger icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E6E8FF] px-6 py-4 pt-20 space-y-4 font-sans text-gray-900 text-base fixed top-0 left-0 w-full z-40 shadow-md">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/" className="block hover:underline">Features</Link>
          <Link to="/" className="block hover:underline">Pricing</Link>
          <Link to="/contact" className="block hover:underline">Contact</Link>
          <Link to="/blog" className="block hover:underline">Blog</Link>
          <Link to="/contact"> <button className="bg-[#9B8AFB] text-white font-semibold rounded-full px-6 py-2 w-full hover:bg-[#7a66e8] transition">
            Start hiring
          </button>
          </Link>
        </div>
      )}

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-[#E9E9FF] to-[#F9F7FF] flex items-center justify-center p-6 pt-32">
        <div className="bg-white rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.05)] max-w-lg w-full p-10 text-center">
          <img
            src={thankRight}
            alt="Purple checkmark icon"
            className="mx-auto mb-6 opacity-40"
            width="48"
            height="48"
            decoding="async"
            loading="lazy"
          />
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            {title || "Thank You for Contacting Us!"}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6 px-4 sm:px-0">
            {message || "We've received your message and appreciate your interest in Prompthire. Our team will review your inquiry and get back to you as soon as possible, typically within 24 hours."}
          </p>
          {!message && (
            <p className="text-gray-600 text-base leading-relaxed mb-8 px-4 sm:px-0">
              In the meantime, feel free to explore more about our AI-powered hiring solutions.
            </p>
          )}
          <Link to="/">
          <button
            className="bg-[#9B8CE0] text-white font-semibold rounded-full px-6 py-2 mx-auto block hover:bg-[#7a6ed1] transition-colors"
            type="button"
          >
            Back to Home
          </button>
          </Link>
        </div>
      </div>
      {/* footer content */}
      <footer className="bg-[#f4f8ff] text-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-gray-700">Prompthire</h3>
            <p className="text-base leading-relaxed max-w-xs text-gray-700">
            Our cutting-edge AI technology streamlines your HR processes, from resume screening to interview scheduling. Reduce hiring time by 90% and cut costs in half while finding the perfect candidates.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="#" className="hover:underline">Features</Link></li>
              <li><Link to="#" className="hover:underline">Pricing</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              


            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/blog" className="hover:underline"> Case Studies</Link></li>
              <li><Link to="/blog" className="hover:underline">             
              Help Center</Link></li>
              <li><Link to="/blog" className="hover:underline">API Documentation</Link></li>


            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-base">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              {/* <li>Cookie Policy</li> */}
              <li>GDPR Compliance</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300">
          <p className="text-center text-gray-600 text-sm py-6">© 2025 Prompthire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
