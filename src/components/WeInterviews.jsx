import React from 'react'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
export default function WeInterviews() {
  const tableHeaders = [
    '',
    'PromptHire (AI + Human)',
    'HackerEarth/HackerRank etc.',
    'Typical AI Interview tools',
  ]

  const tableRows = [
    {
      feature: 'Live AI-driven technical interview',
      values: [
        {
          type: 'check',
          text: 'Real-time, adaptive questioning & scoring',
        },
        {
          type: 'cross',
          text: 'Tests only (no adaptive AI live interview)',
        },
        {
          type: 'check',
          text: 'Real-time, adaptive questioning & scoring',
        },
      ],
    },
    {
      feature: 'Interactive code editor (+ debugger)',
      values: [
        {
          type: 'check',
          text: 'Full IDE-like editor with breakpoints & console',
        },
        {
          type: 'warn',
          text: 'Static editor, no live interaction',
        },
        {
          type: 'cross',
          text: 'Usually no true coding environment',
        },
      ],
    },
    {
      feature: 'Question depth supported',
      values: [
        {
          type: 'check',
          text: 'MCQ, coding, case study, AI probing follow-ups',
        },
        {
          type: 'warn',
          text: 'MCQ + coding tests only',
        },
        {
          type: 'warn',
          text: 'MCQ + video answers; no deep case-study logic',
        },
      ],
    },
    {
      feature: 'Depth of proctoring',
      values: [
        {
          type: 'check',
          text: 'Deep proctoring with dedicated desktop application',
        },
        {
          type: 'spy',
          text: 'Browser tab & webcam flags only',
        },
        {
          type: 'spy',
          text: 'Browser tab & webcam flags only',
        },
      ],
    },
    {
      feature: 'Integrity guarantee',
      values: [
        {
          type: 'check',
          text: 'Break our proctoring → 10 hires free',
        },
        {
          type: 'text',
          text: "Can't promise",
        },
        {
          type: 'text',
          text: "Can't promise",
        },
      ],
    },
  ]
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
    <div className='bg-[#f6f9ff] justify-center items-center flex flex-col pt-10 pb-20 px-5 sm:px-0'>
    <FadeInOnScroll>  <h1 className="text-[28px] sm:text-[36px] md:text-[52px] text-center max-w-4xl mx-auto py-10 font-bold leading-tight text-black">
        We Don’t Just Assess. We Power Real Interviews.
      </h1>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <p className="font-[Outfit] max-w-2xl pt-2 sm:pt-5 text-base sm:text-base md:text-lg leading-[27px] text-center text-[#616161] not-italic">
        Redefining interviews with cutting-edge AI technology, we bring clarity and confidence to your hiring decisions.
      </p>
      </FadeInOnScroll>
      <div className="w-full bg-[#f6f9ff] flex justify-center">
  <div className=" w-full max-w-6xl mx-auto flex justify-center items-start">
    <div className="pt-10 px-0 sm:px-20 overflow-x-auto w-full scrollbar-hidden">
          <table className="w-full max-w-6xl border-collapse border-transparent text-xs sm:text-sm md:text-base">
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
                  className="border-t border-gray-200 px-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: rowIndex * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
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
          </table>
        </div>
      </div>
      </div>
      
    </div>
  )
}
