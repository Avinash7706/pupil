import React, { useEffect } from 'react';
import start from '../images/start.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  "AI + Human-powered evaluation",
  "Domain expert insights",
  "Only top candidates delivered",
];

export default function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0); //  scroll to top on mount
  }, []);
  
  return (
    <div className="w-full pt-32 flex items-center justify-center bg-[#f3eeff] px-4">
      {/* Main Content */}
      <motion.div
        className="relative max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center bg-white rounded-full px-4 py-[6px] mb-6 shadow-sm select-none mx-auto">
          <span className="text-orange-400 text-lg mr-1">
            <img src={start} className="w-4 h-4" alt="start icon" />
          </span>
          <span className="text-gray-800 text-sm font-normal">Hire smartly</span>
        </div>

        <h1 className="typing-word text-black text-[36px] font-bold sm:text-[64px] leading-[1.08] mb-6 max-w-[700px] px-5 sm:mx-auto">
  <span>10x</span> <span>Faster</span> <span>Hiring</span><br />
  <span>5x</span> <span>Better</span> <span>Candidates.</span><br />
  <span>Zero</span> <span>Guesswork.</span>
</h1>

        <p className="text-black text-base max-w-[600px] px-10 sm:mx-auto mb-10 typewriter">
          Cut through resume clutter. PromptHire combines AI speed with human expertise to deliver only the most relevant, pre-vetted candidates.
        </p>

        <motion.div
          className="flex flex-wrap sm:flex-nowrap font-semibold justify-center gap-x-8 sm:gap-x-16 gap-y-4 sm:gap-y-6 mx-auto mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              }
            }
          }}
        >
          {features.map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-2"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-white shadow-lg rounded-full w-4 h-4 sm:w-8 sm:h-8 flex items-center justify-center">
                <i className="fas fa-check-circle text-orange-400 text-base sm:text-lg"></i>
              </div>
              <span className="font-bold text-black text-sm sm:text-base whitespace-nowrap">
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
         
          className="bg-gradient-to-b from-black to-gray-800 text-white font-semibold rounded-full px-8 py-3 shadow-[0_0_15px_rgba(0,0,0,0.7)] inline-flex items-center space-x-2"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,0,0,0.9)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link  to="/contact">
          <span>Start hiring now</span>
          </Link>         
          <i className="fas fa-arrow-right"></i>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
  className="absolute hidden sm:flex top-1/3 right-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer drop-shadow-md"
  initial={{ x: 300 }}
  animate={{ x: -0 }}
  transition={{ duration: 2, ease: "easeInOut",  repeatType: "reverse" }}
  aria-label="Chart icon"
  role="img"
>
  <i className="fas fa-chart-line text-orange-400 text-lg"></i>
</motion.div>


        <motion.div
          className="absolute hidden sm:flex top-1/2 left-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer drop-shadow-md"
          initial={{ x: -300 }}
          animate={{ x: -0 }}
          transition={{ duration: 2, ease: "easeInOut",  repeatType: "reverse" }}
          aria-label="Lightbulb icon"
          role="img"
        >
          <i className="fas fa-lightbulb text-orange-400 text-lg"></i>
        </motion.div>
      </motion.div>
    </div>
  );
}
