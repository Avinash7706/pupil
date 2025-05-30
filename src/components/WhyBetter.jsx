import React, { useEffect } from 'react';
import ai1 from '../images/Ai1.png';
import cheater from '../images/cheater.png';
import ankit from '../images/ankit.jpg';
import coding from '../images/coding.png';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const capabilities = [
  {
    icon: "📞",
    title: "Phone or Video — Your Call, Literally",
    description: "Conduct interviews via phone or video — flexible formats that match your hiring flow and candidate comfort.",
    bullets: [
      "Choose between phone or video for each round",
      "Candidates interview in their preferred format",
      "Seamless recording, tracking, and reporting — no matter the mode",
    ],
    image: ai1,
  },
  {
    icon: "🧠",
    title: "Assess Skills Beyond Just Coding",
    description: "Test candidates the way the job demands:",
    bullets: [
      "💻 Coding challenges in a full IDE",
      "📊 SQL & data queries for backend/data roles",
      "📄 Case study evaluations for decision-making and structure",
      "🖼️ Imagery-based questions to assess pattern recognition, product sense, and more",
    ],
    image: coding,
  },
  {
    icon: "📊",
    title: "Instant Report Cards — Rich, Reliable, Ready",
    description: "Post-interview, get an actionable summary in seconds:",
    bullets: [
      "✅ Skill breakdown by category",
      "🧠 AI scoring + optional expert review",
      "🔁 Video/audio playback, code replays, and answer logs",
    ],
    image: ankit,
  },
  {
    icon: "🛡️",
    title: "Unmatched Proctoring & Security",
    description: "Our Web + dedicated desktop app offers:",
    bullets: [
      "Live screen monitoring",
      "Face/voice tracking",
      "AI-driven flagging for suspicious behavior",
    ],
    image: cheater,
  },
];

// Component to animate image on scroll
function ZoomInImage({ image, title, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start({ scale: 1.05, opacity: 1 });
    else controls.start({ scale: 1, opacity: 0.5 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 1, opacity: 0.5 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto rounded-3xl bg-[#e6e6fa] pt-5"
    >
      <img
        src={image}
        alt={title}
        className={`rounded-xl w-full h-[300px] object-cover ${index % 2 === 0 ? 'lg:ml-[30px]' : 'lg:mr-[80px]'}`}
      />
    </motion.div>
  );
}

// Component to animate text (title) on scroll
function FadeInTitle({ icon, title }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 30 });
  }, [inView, controls]);

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-[20px] font-semibold leading-tight text-black mb-4"
    >
      {icon} {title}
    </motion.h2>
  );
}
function FadeInOnScroll({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px -100px 0px", // Trigger before fully in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}


export default function WhyBetter() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-20 px-4">
       <FadeInOnScroll><div className="mt-12">
          <span className="inline-block border border-gray-200 rounded-full px-5 py-2 text-gray-800 text-base font-medium font-inter">
            AI capabilities
          </span>
        </div>
        </FadeInOnScroll> 
        <FadeInOnScroll> 
        <h1 className="mt-10 text-center text-black text-4xl sm:text-[52px] font-bold leading-tight max-w-4xl font-playfair">
          Why Our AI Interviews Are Simply Better
        </h1>
        </FadeInOnScroll> 
        <Link
          to="/contact"
          className="mt-10 px-8 py-3 rounded-full bg-black text-white text-base font-semibold font-inter btn-glow hover:brightness-110 transition"
        >
          Request demo <span className="inline-block ml-2">→</span>
        </Link>
      </div>

      {/* Capability Cards */}
      <div className="flex flex-col gap-16 px-6 sm:px-8 md:px-12 lg:px-40 pb-20">
        {capabilities.map((cap, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-10 items-center justify-between`}
          >
            {/* Text Section with Animated Title */}
            <div className="flex-1 max-w-xl">
              <div className="flex text-base font-normal"><FadeInTitle icon={cap.icon} title={cap.title}  /></div>
              <p className="font-semibold text-base text-black mb-6 ">{cap.description}</p>
              <ul className="space-y-3 text-black text-base ">
                {cap.bullets.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-orange-400 text-orange-400 flex items-center justify-center mt-1">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className='text-base'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Animated Image */}
            {cap.image && (
            <div className="flex text-base font-normal">   <ZoomInImage image={cap.image} title={cap.title} index={index} /></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
