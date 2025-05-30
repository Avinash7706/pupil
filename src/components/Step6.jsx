import React, { useEffect } from 'react'
import files from '../images/fils.svg'
import single from '../images/single.svg'
import database from '../images/database.svg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxesData = [
  {
    step: "Step 1",
    headings: ["Share your", "Job Description"],
    paragraphs: ["Submit your role details to get started."],
    images: [{ alt: "Icon for job description", src: single, width: 24, height: 24 }],
  },
  {
    step: "Step 2",
    headings: ["AI Shortlist", "relevant candidates"],
    paragraphs: ["Our AI scans and selects the most relevant profiles."],
    images: [{ alt: "AI shortlist icon", src: files, width: 24, height: 24 }],
  },
  {
    step: "Step 3",
    headings: ["Candidates complete", "AI interviews"],
    paragraphs: ["Shortlisted candidates complete automated, skill-based interviews."],
    images: [{ alt: "Interview icon", src: database, width: 24, height: 24 }],
  },
  {
    step: "Step 4",
    headings: ["Human expert", "review & vet responses"],
    paragraphs: ["Human experts vet responses for quality and fit."],
    images: [{ alt: "Expert review icon", src: single, width: 24, height: 24 }],
  },
  {
    step: "Step 5",
    headings: ["Receive smart", "reports and top candidates"],
    paragraphs: ["Receive clear insights and top candidate recommendations."],
    images: [{ alt: "Reports icon", src: files, width: 24, height: 24 }],
  },
  {
    step: "Step 6",
    headings: ["Hire", "confidently"],
    paragraphs: ["Make informed hiring decisions—fast and accurately."],
    images: [{ alt: "Hire confidently icon", src: database, width: 24, height: 24 }],
  },
];

function SingleBox({ step, headings, paragraphs, images }) {
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-100 rounded-3xl w-full max-w-md mx-auto p-8"
    >
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[#555] text-sm font-semibold mb-1 inline-block">{step}</span>
          {headings.map((text, idx) => (
            <h2
              key={idx}
              className={`text-black text-2xl font-semibold leading-snug text-start ${idx > 0 ? "-mt-1" : ""}`}
            >
              {text}
            </h2>
          ))}
          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 text-lg leading-relaxed mt-2 text-start">
              {para}
            </p>
          ))}
        </div>
        <div className="ml-4 flex-shrink-0">
          {images.map(({ alt, src, width, height }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
            >
              <img alt={alt} src={src} width={width} height={height} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
function FadeInOnScroll({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

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

export default function Step6() {
  return (
    <div className="bg-[#f7f9fb] py-20">
      {/* <div className="relative py-20 px-6 sm:px-10 md:px-20  max-w-[1200px] mx-auto "> */}
      <div className="relative py-20 w-full sm:px-10 md:px-20  px-2 mx-auto">
  <div className="flex justify-center mb-6">
    <button className="bg-white text-[#3a3a3a] text-sm rounded-full px-6 py-2 font-normal shadow-sm" type="button">
      How to Use?
    </button>
  </div>
  
  <FadeInOnScroll>
    <h1 className="text-center text-black  text-[2.5rem] sm:text-[55px] leading-[1.4] w-[360px] sm:w-[700px] mx-auto">
      6 Steps. Zero Chaos. 100% Confidence.
    </h1>
  </FadeInOnScroll>

  <FadeInOnScroll>
    <p className="mt-6 text-center text-gray-600 text-lg max-w-[700px] mx-auto leading-relaxed font-normal">
      From job description to final hire — here’s how PromptHire blends AI and human expertise to deliver pre-vetted, interview-ready candidates in just 6 steps.
    </p>
  </FadeInOnScroll>
</div>


      <div className="px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {boxesData.map((box, idx) => (
            <SingleBox
              key={idx}
              step={box.step}
              headings={box.headings}
              paragraphs={box.paragraphs}
              images={box.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
