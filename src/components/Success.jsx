import React from 'react'
import anupam from '../images/anupam.jpeg'
import abhiroop from '../images/abhiroop.jpeg'
import monika from '../images/monika.jpeg'
import auruko from '../images/auruko.jpeg'
import shubham from '../images/shubham.jpeg'
import karan from '../images/Karan.jpeg'
import samantha from '../images/samta.jpeg'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const testimonials = [
    {
      name: "Abhiroop Medhekar",
      role: "Founder | Velocity",
      text: "We had to scale fast across Tech, Ops, and Sales — and PromptHire delivered. Their speed and consistency made them our default hiring partner across all functions. They came in, understood our urgency, and just took charge of the hiring.",
      img: abhiroop, // Add image URL if available
    },
    {
      name: "Monika LakhanPal",
      role: "Founder | VakeelSaab",
      text: "We needed to build a solid Tech and Product team — Ankit and team stepped in with not just great hires but real guidance. From stack selection to MVP delivery, they were truly hands-on. It was more than hiring — it felt like we had a tech advisor on board.",
      img: monika, // Add image URL if available
    },
    {
      name: "Shubham Garg",
      role: "Founder | Codevyasa",
      text: "Finding specialized engineers used to be a challenge, but PromptHire made it easy. Their AI-led interviews, backed by expert input, helped us identify the right talent instantly. It felt like they knew exactly what we were looking for — and saved us weeks of effort.",
      img: shubham, // Add image URL if available
    },
    {
      name: "Anupam Agarwal",
      role: "Founder | Revv",
      text: "PromptHire helped us fill 20+ sales roles in just 2 weeks — something no platform or vendor had achieved for us before. They also helped close Sr. Product and Sr. Frontend roles just as fast. The speed and quality felt unreal at first — now we don't hire without them.",
      img: anupam,
    },
    {
      name: "Aurko Bhattacharya",
      role: "Founder | ePayLater",
      text: "We were stuck with outdated platforms and inefficient recruiters — then came PromptHire. Their AI + human model helped us scale our Tech team with precision, speed, and the right structure. They understand tech deeply — and it shows in every hire.",
      img:auruko,
    },
    {
      name: "Karan Jain",
      role: "Founder | Carrum",
      text: "PromptHire helped us build our entire Product and Engineering team from scratch. Ankit’s input on the right skill and experience needed was spot on — we closed 10 roles in 3 weeks. They felt more like an extension of our team than a vendor.",
      img:karan, // Add image URL if available
    },
    {
      name: "Samta Mishra",
      role: "TA Specialist | SaasLabs",
      text: "What began as an experiment is now a trusted partnership. PromptHire helped us scale our Frontend and Data teams with unmatched speed, deep domain expertise, and incredible support. It’s rare to find a hiring partner who’s fast, sharp, and actually cares.",
      img:samantha, // Add image URL if available
    },
  ];
  
  function FadeInOnScroll({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
  
    useEffect(() => {
      if (inView) controls.start({ opacity: 1, y: 0 });
      else controls.start({ opacity: 0, y: 30 });
    }, [inView, controls]);
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }
  export default function Success() {
    return (
      <div className="py-16 px-5 sm:px-16 bg-[#fafafa] shadow-2xl shadow-black">
        <div className="text-center max-w-2xl mx-auto">
          <FadeInOnScroll>
            <span className="inline-block mb-4 px-4 py-1 text-xs border rounded-full text-black border-gray-300">
              Testimonials
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <h1 className="text-[48px] font-bold text-black leading-[1] sm:leading-tight">
              Success stories from our <br /> valued clients
            </h1>
          </FadeInOnScroll>
        </div>
  
        <div className="marquee mt-12 bg-[#f9f9f9] overflow-x-auto ">
  <div className="marquee-track flex sm:p-10 w-max">
    {[...testimonials, ...testimonials].map((t, i) => (
      <div
        key={i}
        className="testimonial-card inline-block w-80 min-w-[18rem] bg-white rounded-2xl p-8 m-2 shadow-md"
      >
        <p className="text-sm text-gray-700 leading-relaxed">{t.text}</p>
        <div className="mt-4 flex items-center space-x-4">
          <img
            src={t.img}
            alt={t.name}
            className="w-12 h-12 rounded-full object-cover border-blue-400 border-2 p-1"
          />
          <div className="text-left">
            <p className="font-semibold text-sm text-gray-900 leading-tight">
              {t.name}
            </p>
            <p className="text-xs text-gray-400 leading-tight whitespace-pre-line">
              {t.role}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    );
  }
  
