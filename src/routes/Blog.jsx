import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const posts = [
  {
    date: "2025-05-24",
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: "Hiring Tech",
    title: "How AI Is Transforming the Way Companies Hire in 2025",
    description:
      "Discover how artificial intelligence is revolutionizing recruitment—automating interviews, enhancing candidate experience, and removing bias from the hiring process in 2025.",
  },
  {
    date: "2025-05-24",
    tag: "Hiring Tech",
    image: 'https://plus.unsplash.com/premium_photo-1682126289082-a6dccdba5081?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3ByZWFkc2hlZXR8ZW58MHx8MHx8fDA%3D',
    title: "Goodbye Spreadsheets: Why Manual Hiring Processes Are Costing You Top Talent",
    description:
      "Manual hiring methods like spreadsheets are slowing down your recruitment process and silently driving top candidates to your competitors. Here’s why it’s time to upgrade.",
  },
  {
    date: "2025-05-24",
    tag: "Hiring Trends",
    image: 'https://images.unsplash.com/photo-1588856122867-363b0aa7f598?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D',
    title: "Top 5 Hiring Trends in India for 2025: What Startups & Enterprises Need to Know",
    description:
      "From AI-driven recruitment to hybrid work demands, discover the top 5 hiring trends reshaping how companies hire in India in 2025.",
  },
  {
    date: "2025-05-24",
    tag: "Hiring Strategy",
    image: 'https://images.unsplash.com/photo-1710503913397-df9bfea7e50b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc3R8ZW58MHx8MHx8fDA%3D',
    title: "The Real Cost of a Bad Hire in Sales/Tech Roles (And How to Avoid It)",
    description:
      "A single wrong hire in sales or tech can cost your company lakhs—or even crores—in lost revenue, morale, and momentum. Learn the hidden costs and how to avoid them.",
  },
  {
    date: "2025-05-24",
    tag: "Startup Hiring",
    image: 'https://plus.unsplash.com/premium_photo-1676666379051-383ed1b005e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlyZXxlbnwwfHwwfHx8MA%3D%3D',
    title: "How Founders Can Hire Their First 10 Employees Without Losing Sleep",
    description:
      "Hiring your first 10 employees can make or break your startup. Here’s how founders can recruit top talent without burnout, guesswork, or sleepless nights.",
  },
  {
    date: "2025-05-24",
    tag: "Startup Hiring",
    image: 'https://plus.unsplash.com/premium_photo-1676666379051-383ed1b005e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlyZXxlbnwwfHwwfHx8MA%3D%3D',
    title: "Scaling from 5 to 50 Employees: Hiring Playbook for Early-Stage Startups",
    description:
      "Scaling your startup from 5 to 50 people is a make-or-break phase. This playbook helps founders hire at speed without breaking culture or quality.",
  },
  {
    date: "2025-05-24",
    tag: "Product Deep Dive",
    image: 'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFpfGVufDB8fDB8fHww',
    title: "What Makes PromptHire’s Resume Scoring Engine Different?",
    description:
      "Most resume filters just scan for keywords. PromptHire goes further—with context-aware scoring, intent matching, and role-specific intelligence. Here’s how it works.",
  },
  {
    date: "2025-05-24",
    tag: "Trust & Compliance",
    image: 'https://plus.unsplash.com/premium_photo-1673688152102-b24caa6e8725?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2RwcnxlbnwwfHwwfHx8MA%3D%3D',
    title: "AI in Hiring: How We Ensure GDPR and SOC2 Compliance",
    description:
      "Using AI in hiring comes with responsibility. Here’s how PromptHire ensures full compliance with GDPR and SOC2 standards—while keeping your data secure, ethical, and auditable.",
  },
  {
    date: "2025-05-24",
    tag: "Ethical AI",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWl8ZW58MHx8MHx8fDA%3D',
    title: "Can AI Be Biased? How We Audit Fairness in Interview Evaluation",
    description:
      "AI is only as fair as the data it learns from. Here's how PromptHire identifies, measures, and fixes bias in its AI-driven interview evaluation engine.",
  },
];



export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:px-10">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-[130px] h-[70px] object-contain" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black text-base font-normal hover:text-[#5B21B6] transition">Home</Link>
            <a href="#" className="text-black text-base font-normal hover:text-[#5B21B6] transition">Features</a>
            <a href="#" className="text-[#5B21B6] text-base font-semibold border-b-2 border-[#5B21B6] pb-[2px]">Blog</a>
            <a
              href="#"
              className="ml-6 bg-[#640dfb] text-white text-base font-semibold rounded-full px-6 py-2 shadow-[0_10px_15px_-3px_rgba(91,33,182,0.5)] hover:shadow-[0_10px_20px_-3px_rgba(91,33,182,0.7)] transition-shadow"
            >
              Contact Us
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-3 space-y-3 shadow-md">
            <Link to="/" className="block text-black hover:text-[#5B21B6]">Home</Link>
            <a href="#" className="block text-black hover:text-[#5B21B6]">Features</a>
            <a href="#" className="block text-[#5B21B6] font-semibold">Blog</a>
            <a href="#" className="block bg-[#640dfb] text-white font-semibold rounded-full px-4 py-2 w-fit">
              Contact Us
            </a>
          </div>
        )}
      </div>

      {/* Hero */}
      <div className="h-[400px] sm:h-[450px] flex items-center justify-center bg-[#f5f6fc] px-4 pt-28 sm:pt-0">
        <div className="text-center max-w-2xl">
          <h1 className="font-inter font-bold text-[48px] text-[#333] mb-4">PromptHire Blog</h1>
          <p className="font-inter text-[18px] text-[#666]">
            Insights and updates on AI automation, agent-based systems, and the future of work
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="bg-[#edf0ff] p-6 sm:p-16">
        <main className="max-w-7xl mx-auto">
          <h2 className="text-black text-2xl font-extrabold mb-6">Featured Articles</h2>
          <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                <img
                  alt={post.title}
                  src={post.image}
                  className="w-full object-cover rounded-t-xl h-[200px] scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 text-gray-700 text-sm">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="text-purple-600 font-semibold ml-2">{post.tag}</span>
                  </div>
                  <h3 className="text-black font-extrabold text-xl leading-tight mb-3 hover:text-[#9333ec]">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 flex-grow leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <a className="text-purple-600 font-semibold inline-flex items-center hover:underline" href="#">
                    Read More <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

      {/* Footer */}
      <div className="bg-[#161618] text-white">
        <footer className="mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start px-3 sm:px-10 gap-12 md:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">
                Prompt<span className="italic text-[#1D4ED8]">hire</span>
              </h1>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 flex-grow">
              <div>
                <h2 className="font-extrabold text-white mb-4">Company</h2>
                <ul className="space-y-3 text-gray-400 text-base font-normal">
                  <li>Home</li>
                  <li>Features</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h2 className="font-extrabold text-white mb-4">Resources</h2>
                <ul className="space-y-3 text-gray-400 text-base font-normal">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Tutorials</li>
                </ul>
              </div>
              <div>
                <h2 className="font-extrabold text-white mb-4">Legal</h2>
                <ul className="space-y-3 text-gray-400 text-base font-normal">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 AgentYuga. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <i className="fab fa-twitter text-white text-sm"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <i className="fab fa-linkedin-in text-white text-sm"></i>
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <i className="fab fa-facebook-f text-white text-sm"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}


