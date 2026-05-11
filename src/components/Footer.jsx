"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-5 mt-16">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Resume<span className="text-blue-500">AI</span>
        </h1>

        {/* Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Templates
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Testimonials
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400 text-center">
          © 2026 ResumeAI
        </p>
      </div>
    </footer>
  );
}