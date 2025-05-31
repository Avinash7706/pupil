import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessModal = ({ isOpen, onClose, title, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-10 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.05)] max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {title || "Thank You for Contacting Us!"}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6 px-4 sm:px-0">
                {message ||
                  "We've received your message and appreciate your interest in Prompthire. Our team will review your inquiry and get back to you as soon as possible, typically within 24 hours."}
              </p>

              {!message && (
                <p className="text-gray-600 text-base leading-relaxed mb-8 px-4 sm:px-0">
                  In the meantime, feel free to explore more about our AI-powered hiring solutions.
                </p>
              )}

              <button
                onClick={onClose}
                className="bg-[#9B84D8] text-white px-6 py-2 rounded-full hover:bg-[#8a73c9] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
