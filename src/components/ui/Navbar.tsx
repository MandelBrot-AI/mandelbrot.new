'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed z-50 px-6 md:px-10 pt-6 top-0 left-0 right-0 flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3 border border-white/5">
        <svg viewBox="0 0 256 256" className="h-5 w-5">
          <path
            d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
            fill="#ffffff"
          />
        </svg>
        <span className="text-white text-sm font-normal tracking-tight">mandelbrot</span>
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
        initialize
      </a>
    </nav>
  );
}
