import React from 'react';
import { MARQUEE_ITEMS } from '@/lib/constants';

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-black overflow-hidden relative z-20">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee items-center gap-10 w-max">
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {MARQUEE_ITEMS.map((item, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="text-xl md:text-2xl font-normal tracking-tight text-white/40">
                  {item.label}
                </span>
                <span className="text-white/20">/ /</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
