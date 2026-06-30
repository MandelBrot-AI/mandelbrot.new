'use client';

import React from 'react';
import { Reveal, Parallax } from '@/components/ui';

export default function WhyPartnerSection() {
  const pillars = [
    {
      number: '01',
      title: 'Sovereign Technology',
      desc: 'No wrapper systems. No generic APIs. We deploy self-hosted models and deep architectures on private infrastructure that your firm owns completely.',
    },
    {
      number: '02',
      title: 'Absolute Privacy',
      desc: 'Your data is your competitive edge. We build in isolated environments with zero-retention policies, ensuring your operational context never leaves your walls.',
    },
    {
      number: '03',
      title: 'Flawless Precision',
      desc: 'High-speed business pipelines require bulletproof reliability. We design execution graphs with custom telemetry, built to run with mathematical precision.',
    },
  ];

  return (
    <section id="why-mandelbrot" className="py-24 md:py-40 bg-[#050505] relative border-b border-white/10 overflow-hidden">
      {/* Background Parallax Ticker */}
      <Parallax speed={-0.1} className="absolute top-[30%] w-full flex justify-center pointer-events-none mix-blend-screen opacity-[0.02]">
        <span className="text-[25vw] font-bold tracking-tighter leading-none select-none text-white">PARTNER</span>
      </Parallax>

      <div className="max-w-[90rem] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <Reveal type="scale" threshold={0.1}>
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Engineering Standards</span>
            <h2 className="text-[10vw] lg:text-[5vw] font-medium tracking-tight mb-8 leading-[0.9] text-glow">
              Why Mandelbrot
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl">
              We reject off-the-shelf wrappers and bloated dependencies. We build native systems that perform under load.
            </p>
          </div>
        </Reveal>

        {/* Pillars Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => (
            <Reveal key={index} delay={index * 150} type="up" className="h-full">
              <div className="glass-panel p-10 h-full flex flex-col justify-between hover:border-white/20 transition-all duration-500 group">
                <div>
                  <div className="text-white/20 font-mono text-xl mb-12">/ / {pillar.number}</div>
                  <h3 className="text-2xl font-medium text-white mb-6 group-hover:text-glow transition-all">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-12 h-[2px] bg-white/20 mt-12 group-hover:w-20 group-hover:bg-white transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
