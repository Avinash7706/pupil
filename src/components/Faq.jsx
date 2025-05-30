import React, { useState } from "react";

const faqs = [
  {
    question: "What is “Candidate-as-a-Service”?",
    answer:
      "It’s a new way to hire — we deliver pre-evaluated, interview-ready candidates as a service, so you skip the grunt work and go straight to final interviews.",
  },
  {
    question: "How fast can I expect to make a hire?",
    answer:
      "Most clients make a hire within 7–14 days after beginning the process, depending on role complexity.",
  },
  {
    question: "What roles or industries do you cover?",
    answer:
      "We specialize in tech, product, and design roles — but can also support marketing, ops, and more on request.",
  },
  {
    question:"Can I customize the interview process or questions?",
    answer:"Yes! You can choose from our expert-vetted question bank or add your own questions. Even custom interview panels."
  },
  {
    question:"How is PromptHire different from traditional hiring platforms?",
    answer:"We combine AI + Human insight to deliver only high-fit, evaluated candidates — no resume dumps, no guesswork."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  

  return (
   <div className="bg-white">
     <main className="max-w-4xl mx-auto px-6 py-16 ">
      <div className="flex justify-center mb-6">
        <span className="text-sm text-gray-700 border border-gray-300 rounded-full px-4 py-1 select-none">
          Common Question
        </span>
      </div>
      <h1
        className="text-center font-serif font-black text-4xl sm:text-5xl mb-12 leading-tight"
        style={{ fontFamily: "serif" }}
      >
        Frequently Asked Questions
      </h1>

      <section className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100  rounded-xl sm:rounded-3xl px-6 py-2 sm:py-4 sm:px-6 max-w-3xl mx-auto transition-all duration-300"
          >
           <button
  type="button"
  onClick={() => toggle(index)}
  className="w-full flex justify-between items-start text-left text-lg sm:text-xl font-semibold text-gray-900"
  aria-expanded={openIndex === index}
  aria-controls={`faq${index}`}
>
  <span className="flex-1 pr-4">{faq.question}</span>
  
  <span className="w-6 h-6 flex items-center justify-center">
    <svg
      className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
        openIndex === index ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </span>
</button>

            <div
              id={`faq${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-base sm:text-lg max-w-xl">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
   </div>
  );
}
