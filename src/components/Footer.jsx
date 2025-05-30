import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className="bg-white text-black">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
    <div className="border-t border-b border-black border-opacity-30 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
      <div className="md:w-1/3">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          <span>Prompt</span
          ><span className="italic text-[#1D7CF2]">hire</span>
        </h1>
        <p className="text-base mb-6 font-normal leading-relaxed">
          Ready to cut hiring time in half?
        </p>
        <Link to="/contact"> <button
          className="bg-gradient-to-b from-black to-gray-900 text-white font-semibold rounded-3xl px-8 py-3 shadow-[0_0_10px_3px_rgba(255,255,255,0.3)] flex items-center gap-3 hover:brightness-110 transition"
          type="button"
        >
      Get started now
           <i className="fas fa-arrow-right"></i>
        </button>
        </Link>
          
      </div>
      <div className="md:w-2/3 flex justify-between text-left">
        <div>
          <h2 className="font-semibold text-lg mb-4">Product</h2>
          <ul className="space-y-2 text-gray-600 font-light text-base max-w-[140px]">
            {/* <li>Features</li> */}
            {/* <li>How it works?</li>
            <li>AI interviews</li>
            <li>Platform comparison</li> */}
             <Link to="/contact" className="block hover:underline">Contact</Link>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-600 font-light text-base max-w-[80px]">
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-600 font-light text-base max-w-[220px]">
            <li>sales@prompthire.ai</li>
            <li>
              The Office Pass, 7th Floor, Paras Downtown Center, 54, Golf Course
              Rd, near Sec 53, DLF Phase 5, Gurugram, Haryana 122003
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-black border-opacity-30 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-700 font-light">
      <div>2025 PromptHire. All rights reserved. | Built with ❤️ in India</div>
      <div className="flex gap-6 mt-3 md:mt-0">
        <span>Terms</span>
        <span className="border-l border-gray-400 pl-4">Privacy</span>
        {/* <span className="border-l border-gray-400 pl-4">Cookie Policy</span> */}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
