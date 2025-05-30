import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Reusable scroll-triggered fade-in animation component
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

export default function Scrollbar() {
  const articleData = [
    {
      icon: "🤖",
      title: "AI for Speed & Scale",
      description:
        "Automates screening, analyzes interviews, and ranks candidates — so you get top talent faster.",
    },
    {
      icon: "👤",
      title: "Humans for Judgment & Nuance",
      description:
        "Domain experts add context, assess real-world fit, and ensure nothing gets lost in translation.",
    },
    {
      icon: "⚡",
      title: "80% Faster Hiring",
      description:
        "Let AI do the heavy lifting while humans refine the results — our clients hire significantly faster.",
    },
    {
      icon: "🎯",
      title: "95% Better Fit",
      description:
        "Combining data with expertise means fewer mismatches and better long-term hires.",
    },
    {
      icon: "📈",
      title: "Fully Scalable & Customizable",
      description:
        "From 1 to 100 hires, tailor every step to your company’s needs — and grow without friction.",
    },
    {
      icon: "📊",
      title: "Insights You Can Act On",
      description:
        "Get ranked lists, AI scores, interview videos, and expert notes in one easy-to-use package.",
    },
  ];

  return (
    <div>
      <div className="bg-[#eef0ff] min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 py-20 pb-12">
          {/* Left Section */}
          <div className="md:w-1/2 pr-0 md:pr-12">
            <p className="inline-block bg-white rounded-full px-4 py-2 text-xs text-gray-700 mb-8">
              Smarter tech. Human touch. Better hires.
            </p>
            <FadeInOnScroll>
    <h1 className="font-serif-black text-4xl md:text-5xl leading-tight mb-6 text-black">
      Why AI <span className="font-normal">+</span> Human Is the Winning Formula
    </h1>
  </FadeInOnScroll>
            <FadeInOnScroll>
    <p className="text-gray-600 mb-8 max-w-xl">
      AI brings speed and consistency. Humans bring nuance and context.
      PromptHire brings them together.
    </p>
  </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="flex flex-wrap gap-6 max-w-xl">
              <span className="bg-white rounded-full px-4 py-2 text-xs font-semibold text-black shadow-[0_0_10px_rgba(0,0,0,0.05)]">
                AI + Human-powered evaluation
              </span>
              
              <span className="bg-white rounded-full px-4 py-2 text-xs font-semibold text-black shadow-[0_0_10px_rgba(0,0,0,0.05)]">
                Customizable
              </span>
              <span className="bg-white rounded-full px-4 py-2 text-xs font-semibold text-black shadow-[0_0_10px_rgba(0,0,0,0.05)]">
                Domain expert insights
              </span>
              <span className="bg-white rounded-full px-4 py-2 text-xs font-semibold text-black shadow-[0_0_10px_rgba(0,0,0,0.05)]">
                Only top candidates delivered
              </span>
            </div>
            </FadeInOnScroll>
          </div>

          {/* Right Scroll Section */}
          <section className="md:w-1/2 mt-10 md:mt-0 pl-6">
          <div className="space-y-8 max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-4 scrollbar-hidden">
              {articleData.map((item, index) => (
                <FadeInOnScroll key={index}>
                  <article className="flex gap-4 p-4 rounded">
                    <div className="flex justify-center items-center">
                      <div className="w-1 h-32 rounded-full overflow-hidden">
                        <div className="w-1 h-16 bg-purple-900"></div>
                        <div className="w-[4px] h-16 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                      </div>
                    </div>
                    <div>
                      <h2 className="flex items-center gap-6 font-semibold text-lg text-gray-900 mb-2">
                        {item.icon} {item.title}
                      </h2>
                      <p className="text-gray-600 max-w-md mb-2 leading-[1.9rem] sm:leading-[2.5rem]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </FadeInOnScroll>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
