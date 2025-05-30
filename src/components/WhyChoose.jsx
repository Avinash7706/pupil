import React, { useEffect } from "react";
import timer from '../images/timer.svg';
import msg from '../images/message.svg';
import calender from '../images/calender.svg';
import people from '../images/people.svg';
import edit from '../images/edit.svg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxesData = [
  {
    headings: ["AI Hiring", "Engine"],
    paragraphs: ["AI interviews + smart ranking = faster, sharper shortlists."],
    images: [
      {
        alt: "AI engine icon",
        src: timer,
        width: 24,
        height: 24,
      },
    ],
  },
  {
    headings: ["Human Recruiter", "Layer"],
    paragraphs: ["Domain experts review every response for fit and nuance."],
    images: [
      {
        alt: "Calendar icon",
        src: calender,
        width: 24,
        height: 24,
      },
    ],
  },
  {
    headings: ["Expert Question", "Bank"],
    paragraphs: ["Role-specific questions and rubrics built by hiring pros."],
    images: [
      {
        alt: "People icon",
        src: people,
        width: 24,
        height: 24,
      },
    ],
  },
];

function SingleBox({ headings, paragraphs, images }) {
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
          {headings.map((text, idx) => (
            <h2
              key={idx}
              className={`text-black text-xl font-semibold leading-[1.4] text-start ${idx > 0 ? "-mt-1" : ""}`}
            >
              {text}
            </h2>
          ))}
          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 text-base sm:text-base md:text-lg leading-relaxed mt-2 text-start">

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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

export default function WhyChoose() {
  return (
    <div className="bg-white w-full px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <FadeInOnScroll>
          <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold leading-tight text-[#111]">
            Why Choose Between Tech and Talent When You Can Have Both?
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-[#616161] text-base sm:text-[16px] md:text-[18px] mt-4 leading-[1.6] px-5 md:px-32">
            A tech-powered engine, human-led judgment, and full flexibility — all working together to help you hire faster, smarter, better.
          </p>
        </FadeInOnScroll>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-8 md:px-12 lg:px-24">
        {boxesData.map((box, idx) => (
          <SingleBox
            key={idx}
            headings={box.headings}
            paragraphs={box.paragraphs}
            images={box.images}
          />
        ))}
      </div>

      {/* Bottom Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-5xl mx-auto px-6 sm:px-0">
        {[
          {
            title: "Customizable Process",
            desc: "Use your own questions or plug in your panel — your call.",
            icon: msg,
          },
          {
            title: "Clear Deliverables",
            desc: "Ranked list, interview videos, expert notes — all in one place.",
            icon: edit,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f0f1f3] rounded-3xl p-4 sm:px-6 py-8 sm:py-10 flex justify-between items-center relative"
          >
            <div>
              <h2 className="text-black text-[18px] sm:text-[20px] font-semibold text-start">
                {item.title}
              </h2>
              {/* <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-[320px] leading-relaxed text-start"> */}
              <p className="text-gray-600 text-base sm:text-base md:text-lg mt-2 max-w-[320px] leading-relaxed text-start">

                {item.desc}
              </p>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 -mt-10 sm:-mt-12 rounded-full bg-gradient-to-b from-white to-[#f0f1f3] flex items-center justify-center shadow-md">
              <img alt={`${item.title} icon`} src={item.icon} className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
