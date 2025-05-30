import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function NoPageFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Link to="/" className="px-20 flex justify-center sm:justify-start bg-[#edf0ff] shadow-md fixed w-full z-50">
        <img src={logo} alt="Logo" className="w-[130px] h-[70px] object-contain" />
      </Link>

      

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-[#f1eeff] px-4">
        <div className="text-center max-w-2xl">
          <h1 className="font-inter font-bold text-[48px] text-[#333] mb-4">404 - Page Not Found</h1>
          <p className="font-inter text-[18px] text-[#666] mb-6">
            Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
          </p>
          <Link to="/" className="inline-block bg-[#9B84D8] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#8a73c9] transition-colors">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
