import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
export default function EndHiring() {
  const tableHeaders = [
    '',
    'PromptHire (AI + Human)',
    'HackerEarth/HackerRank etc.',
    'Typical AI Interview tools',
  ];

  const tableRows = [
    {
      feature: 'End-to-End Hiring',
      values: [
        { type: 'check', text: 'Sourcing → AI Interviews → Shortlist' },
        { type: 'cross', text: 'Only assessments' },
        { type: 'warn', text: 'Does not do technical screening' },
      ],
    },
    {
      feature: 'Speed & Scale',
      values: [
        { type: 'text', text: '🚀 10x candidates screened in 5x less time, TAT < 7 Days' },
        { type: 'warn', text: 'Only test delivery, rest is fragmented' },
        { type: 'cross', text: 'Slower due to only manual effort' },
      ],
    },
    {
      feature: 'Quality & Fit',
      values: [
        { type: 'text', text: '🎯 AI + domain experts ensure JD-level accuracy' },
        { type: 'warn', text: 'Tests only technical skills' },
        { type: 'warn', text: 'Does only superficial vetting' },
      ],
    },
    {
      feature: 'Automation & Coordination',
      values: [
        { type: 'text', text: '🤖 Automatic communication + human coordination' },
        { type: 'warn', text: 'Communication only related to assessment' },
        { type: 'warn', text: 'Communication only related to scheduling' },
      ],
    },
    {
      feature: 'Integrity / Compliance',
      values: [
        { type: 'text', text: 'Best in Industry Proctoring capability + AI ensure no bias' },
        { type: 'warn', text: 'Only supports superficial proctoring' },
        { type: 'warn', text: 'Chance of human bias and NO fraud detection' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
        duration: 0.5,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
  };
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
    <div className="bg-[#fffcfa] justify-center items-center flex flex-col pt-10 pb-20 px-5">
      <FadeInOnScroll><h1 className="text-[28px] sm:text-[36px] md:text-[55px] text-center max-w-2xl mx-auto py-10 font-bold leading-tight text-black">
        End the Hiring Circus. Go All-In with PromptHire.
      </h1>
      </FadeInOnScroll>
      <div className="w-full bg-[#fffcfa] flex justify-center">
        <div className="w-full max-w-6xl mx-auto flex justify-center items-start">
          <div className="pt-10 px-0 sm:px-20 overflow-x-auto w-full scrollbar-hidden">
            <motion.table
              className="w-full max-w-6xl border-collapse border-transparent text-xs sm:text-sm md:text-base"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <thead>
                <tr className="text-left text-black">
                  {tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className={`min-w-[100px] max-w-[300px] px-1 sm:px-6 py-3 sm:py-4 font-semibold break-words text-wrap ${
                        index === 1 ? 'bg-purple-200 rounded-t-3xl' : ''
                      } ${index === tableHeaders.length - 1 ? 'rounded-tr-3xl' : ''}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-black">
                {tableRows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    className="border-t border-gray-200 px-20 cursor-pointer"
                    variants={rowVariants}
                    whileHover="hover"
                  >
                    <td className="py-4 px-1 sm:py-6 sm:px-6 align-top font-normal max-w-[120px] sm:max-w-[300px] text-wrap">
                      {row.feature}
                    </td>
                    {row.values.map((val, colIndex) => (
                      <td
                        key={colIndex}
                        className={`py-4 px-1 sm:py-6 sm:px-6 max-w-[120px] sm:max-w-[240px] text-wrap ${
                          colIndex === 0
                            ? 'bg-purple-200 border-2 border-r-purple-300 border-l-purple-300 font-semibold'
                            : ''
                        }`}
                      >
                        <span className="inline-flex items-start sm:gap-2 px-1 sm:px-2 leading-snug">
                          {val.type === 'check' && (
                            <i className="fas fa-check-square hidden sm:flex text-green-500 text-sm sm:text-base"></i>
                          )}
                          {val.type === 'cross' && (
                            <span className="text-sm sm:text-xl font-normal text-red-500">✗</span>
                          )}
                          {val.type === 'warn' && (
                            <span className="text-yellow-400 text-sm sm:text-lg font-semibold">⚠️</span>
                          )}
                          {val.type === 'spy' && (
                            <span className="text-sm sm:text-xl">🕵️‍♂️</span>
                          )}
                          <span className="text-[12px] sm:text-base max-w-[120px] sm:max-w-full block break-words">
                            {val.type === 'check' ? <strong>{val.text}</strong> : val.text}
                          </span>
                        </span>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
    </div>
  );
}
