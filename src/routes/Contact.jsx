import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.png';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
export default function Contact() {
  const text = "Get in Touch";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.54,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.fullname.trim()) newErrors.fullname = 'Full Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.company.trim()) newErrors.company = 'Company Name is required';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setForm({
          fullname: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setSubmitting(false);
        navigate('/thank-you');
      }, 1000);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); //  scroll to top on mount
  }, []);

  const fullText = "Have questions about our AI-powered hiring platform? We're here to help you streamline your recruitment process and find the perfect candidates.";
  const [displayedText, setDisplayedText] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 30); // typing speed
    return () => clearInterval(interval);
  }, []);
  function FadeInOnScroll({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: false,
      margin: "0px 0px -100px 0px", // Trigger before fully in view
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640); // tailwind 'sm'
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <>
      {/* Header */}
      <Link to="/" className="px-20 flex justify-center sm:justify-start bg-[#edf0ff] shadow-md fixed w-full z-50">
        <img src={logo} alt="Logo" className="w-[130px] h-[70px] object-contain" />
      </Link>

      {/* Hero */}
      <div className="h-[400px] sm:h-[450px] flex items-center justify-center bg-[#f1eeff] px-4 ">
        <div className="text-center max-w-2xl">
        
    
            <motion.h1
      className="font-bold text-[36px] sm:text-[55px] text-[#333] mb-4 w-full  flex justify-center items-center"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnimation}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
    <AnimatePresence>
      {show && (
        <motion.p
          className="text-[18px] text-[#666] leading-[1.9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.p>
      )}
    </AnimatePresence>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-20 px-5 sm:px-24 block sm:flex gap-16 items-start">
        {/* Info */}
        <div>
          <div className="max-w-xl ">
          <FadeInOnScroll>   <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h1></FadeInOnScroll>
          <FadeInOnScroll>   <p
  className="text-gray-600 text-base mb-8 leading-relaxed"
>
  Reach out to our team for any inquiries about our services, pricing, or to schedule a demo. We're committed to helping you transform your hiring process.
</p></FadeInOnScroll>


<FadeInOnScroll>  <ul className="space-y-5 text-gray-800 text-base">

              <li>📍 The Office Pass, Paras Downtown Center, Gurugram, Haryana 122003</li>
              <li>
                📞 <a href="tel:+918287144933" className="underline text-blue-600 hover:text-blue-800">+91 8287144933</a>
              </li>
              <li>
                ✉️ <a href="mailto:sales@prompthire.ai" className="underline text-blue-600 hover:text-blue-800">sales@prompthire.ai</a>
              </li>


              <li>⏰ Monday - Saturday: 9:00 AM - 9:00 PM IST</li>
            </ul>
            </FadeInOnScroll>
            {/* <h3 className="font-semibold text-gray-800 text-lg mt-10 mb-3">Follow Us</h3>
          <nav className="space-x-6 text-gray-600 text-lg">
            <a href="https://linkedin.com" className="underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" className="underline" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" className="underline" target="_blank" rel="noopener noreferrer">Facebook</a>
          </nav> */}
          </div>
          <FadeInOnScroll>    <div className='mt-5 border-2   border-blue-200 rounded-xl overflow-hidden'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10026.61265845274!2d77.10050973046852!3d28.44107964312068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b35a7bd4df%3A0xb13035c25bfda13f!2sThe%20Office%20Pass%20(TOP)%2C%20Golf%20Course%20Road%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1748433608496!5m2!1sen!2sin"
              width="100%"
              height="200px"
              // style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prompthire Office Location"
            ></iframe>
          </div>
          </FadeInOnScroll>


        </div>


        {/* Form */}
        <motion.form  initial={{ x: isMobile ? 0 : 200, opacity: 0 }}
      animate={{ x: isMobile ? 0 : 50, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.11 }} onSubmit={handleSubmit} className="bg-[#F5F4FF] mt-10 sm:mt-0 max-w-xl w-full p-8 rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.1)]">
          <h2  className="text-[#2E2E38] font-bold text-xl mb-6">Send Us a Message</h2>

          {/* Fields */}
          {[
            { name: "fullname", type: "text", label: "Full Name" },
            { name: "email", type: "email", label: "Email Address" },
            { name: "company", type: "text", label: "Company Name" }
          ].map(({ name, type, label }) => (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block text-[#2E2E38] text-base font-semibold mb-2">{label}</label>
              <input
                id={name}
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                className={`w-full rounded-md border ${errors[name] ? 'border-red-500' : 'border-transparent'} focus:border-[#A18FFF] focus:ring-1 focus:ring-[#A18FFF] px-3 py-2 text-[#2E2E38] text-sm font-semibold bg-white`}
              />
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}

          {/* Subject */}
          <label htmlFor="subject" className="block text-[#2E2E38] text-sm font-semibold mb-2">Subject</label>
          <select
            name="subject"
            id="subject"
            value={form.subject}
            onChange={handleChange}
            className={`w-full rounded-md border ${errors.subject ? 'border-red-500' : 'border-transparent'} focus:border-[#A18FFF] focus:ring-1 focus:ring-[#A18FFF] mb-4 px-3 py-2 text-[#2E2E38] text-sm font-semibold bg-white`}
          >
            <option value="" disabled>Select a subject</option>
            <option>General Inquiry</option>
            <option>Product Demo</option>
            <option>Pricing Information</option>
            <option>Technical Support</option>
            <option>Partnership Opportunity</option>
          </select>
          {errors.subject && <p className="text-red-500 text-sm mb-4">{errors.subject}</p>}

          {/* Message */}
          <label htmlFor="message" className="block text-[#2E2E38] text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={`w-full resize-none rounded-md border ${errors.message ? 'border-red-500' : 'border-transparent'} focus:border-[#A18FFF] focus:ring-1 focus:ring-[#A18FFF] mb-4 px-3 py-2 text-[#2E2E38] text-sm font-semibold bg-white`}
          />
          {errors.message && <p className="text-red-500 text-sm mb-4">{errors.message}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#9B84D8] text-white font-semibold text-sm rounded-full py-3 px-4 flex justify-center items-center hover:bg-[#8a73c9] transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
  


      {/* Footer */}
      <footer className="bg-[#f4f8ff] text-gray-700">
  <div className="mx-auto px-6 sm:px-10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-8 max-w-7xl">
    
    <div  className="md:w-1/4">
      <h3 className="font-semibold text-lg mb-3">Prompthire</h3>
      <p className="text-base leading-relaxed max-w-xs">
        Cut through resume clutter. PromptHire combines AI speed with human expertise to deliver only the most relevant, pre-vetted candidates.
        <span className='text-transparent  hidden sm:flex'>.</span><br />
      </p>
    </div>

    <div className="md:w-1/5">
      <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
      <ul className="space-y-2 text-base">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><p className="hover:underline text-transparent cursor-default select-none  hidden sm:flex">Blog</p></li>
        <li><p className="hover:underline text-transparent cursor-default select-none  hidden sm:flex">Blog</p></li>
        <li><p className="hover:underline text-transparent cursor-default select-none hidden sm:flex">Blog</p></li>
      </ul>
    </div>

    <div className="md:w-1/5">
      <h3 className="font-semibold text-lg mb-3">Resources</h3>
      <ul className="space-y-2 text-base">
        <li><Link to="/blog" className="hover:underline ">Blog</Link></li>
        <li><p className="hover:underline text-transparent cursor-default select-none hidden sm:flex ">Blog</p></li>
        <li><p className="hover:underline text-transparent cursor-default select-none  hidden sm:flex">Blog</p></li>
        <li><p className="hover:underline text-transparent cursor-default select-none  hidden sm:flex">Blog</p></li>
      </ul>
    </div>

    <div className="md:w-1/5">
      <h3 className="font-semibold text-lg mb-3">Legal</h3>
      <ul className="space-y-2 text-base">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>GDPR Compliance</li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-300">
    <p className="text-center text-gray-600 text-base py-6">© 2025 Prompthire. All rights reserved.</p>
  </div>
</footer>

    </>
  );
}
