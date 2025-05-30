import React from 'react'
import girlLogo from '../images/girld.png'
import boyLogo from '../images/boy.png'
import blurimage from '../images/blurImage1.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
export default function StartWeek() {
  function FadeInOnScroll({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: false,
      margin: "0px 0px -100px 0px", // Trigger before fully in view
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center  p-4 bg-white px-5 sm:px-0">
  <div className="relative max-w-6xl w-full bg-white rounded-3xl border border-white shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10 md:p-[128px] ">
   <img alt="Blurred purple light effect top left corner" className="absolute bg-transparent  -top-2 -left-5 sm:-left-16  w-[40%] rounded-tl-3xl  pointer-events-none select-none"  loading="lazy" src={blurimage} /> 
  <img alt="Blurred purple light effect top right corner" className="absolute -top-[5%] sm:-top-12 -right-3 sm:-right-7 w-[40%] rounded-tr-3xl rotate-90   pointer-events-none select-none" loading="lazy" src={blurimage}  /> 
   <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
    <span className="inline-block text-[11px] font-normal text-gray-700 bg-white border border-gray-300 rounded-full px-4 py-1">
     Elevate Your Business
    </span>
   <FadeInOnScroll><h1 className="font-merriweather font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
     Start Seeing Interview-Ready
     <br/>
     Candidates This Week
    </h1>
    </FadeInOnScroll> 
    <FadeInOnScroll> 
    <p className="text-gray-600 text-base sm:text-base max-w-xl">
     Sign up today and see the difference Active can make for your business.
    </p>
    </FadeInOnScroll> 
    <Link to="/contact " className="mt-4 bg-black text-white text-sm sm:text-base font-semibold rounded-full px-8 py-3 shadow-[0_0_10px_rgba(0,0,0,0.7)] hover:shadow-[0_0_15px_rgba(0,0,0,0.9)] transition-shadow flex items-center space-x-2" type="button">
     <span>
      Start hiring now
     </span>
     <i className="fas fa-arrow-right">
     </i>
    </Link>
   </div>
   <img alt="Avatar of a woman with light skin tone and brown hair" className="absolute top-[80%] sm:top-[70%] left-0 sm:left-32 z-50 animate-bounce w-16"  src={girlLogo}/>
   <img alt="Avatar of a man with light skin tone and beard" className="absolute top-[10%] sm:top-[20%] right-0 sm:right-40 animate-bounce z-50 w-16"   src={boyLogo} />
  
   
  </div>
 </div>
    </div>
  )
}
