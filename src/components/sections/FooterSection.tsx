'use client';

import React from 'react';
import { Reveal, FloatingLetters } from '@/components/ui';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function FooterSection() {

  return (
    <footer className="bg-black pt-32 pb-10 px-6 md:px-10 relative z-20 border-t border-white/10 overflow-hidden">
      {/* Large Title */}
      <div className="grid grid-cols-[max-content_1fr] mb-32 select-none">
        <Reveal type="down" className="col-start-1">
          <h2 className="hero-title text-white font-medium text-[15vw] md:text-[13vw] leading-[0.8] tracking-tighter">
            <FloatingLetters text="deploy" />
          </h2>
        </Reveal>
        <Reveal type="up" delay={200} className="col-start-2 row-start-2">
          <h2 className="hero-title text-white/40 font-medium text-[15vw] md:text-[13vw] leading-[0.8] tracking-tighter">
            <FloatingLetters text="system" />
          </h2>
        </Reveal>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mt-32 border-t border-white/10 pt-10">
        {/* CTA Buttons */}
        <Reveal delay={100} type="left" className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href="#contact"
            className="bg-white text-black text-center text-sm font-normal rounded-full px-8 py-4 hover:bg-neutral-200 transition-colors w-full sm:w-auto btn-glow"
          >
            Get in touch
          </a>

        </Reveal>

        {/* Links & Status */}
        <Reveal delay={200} type="right" className="flex flex-col md:items-end gap-2 text-white/40 text-sm w-full md:w-auto">
          <div className="flex gap-6 mb-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 justify-end mb-2">


          </div>
          <p>© 2026 mandelbrot. all rights reserved.</p>
        </Reveal>
      </div>
    </footer>
  );
}
