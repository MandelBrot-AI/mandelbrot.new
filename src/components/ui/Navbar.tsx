'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed z-50 px-6 md:px-10 pt-6 top-0 left-0 right-0 flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 120 100" className="h-8 w-[38px] text-white" fill="currentColor">
          <path d="M 42 20 L 80 20 A 16 16 0 0 1 96 36 L 76 76 L 68 60 L 80 36 L 50 36 Z" />
          <path d="M 78 80 L 40 80 A 16 16 0 0 1 24 64 L 44 24 L 52 40 L 40 64 L 70 64 Z" />
        </svg>
        <div className="flex flex-col justify-center">
          <span className="text-white text-xl font-semibold leading-none tracking-wide">Mandelbrot</span>
          <span className="text-white/50 text-[9px] font-bold tracking-[0.16em] uppercase leading-tight mt-1">
            Automating the Future
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2 border border-white/5">
        {['AI Services', 'LLM', 'Web Solutions', 'Why Mandelbrot', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-neutral-400 hover:text-white transition-colors text-sm px-5 py-2 rounded-full whitespace-nowrap"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors btn-glow"
      >
        Chat Now
      </a>
    </nav>
  );
}
