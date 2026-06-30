'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '@/components/ui';

export default function LLMSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [entryProgress, setEntryProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScroll = rect.height - viewportHeight;

      let p = 0;
      if (totalScroll > 0) {
        p = -rect.top / totalScroll;
        p = Math.max(0, Math.min(1, p));
      }

      const ep = Math.max(0, Math.min(1, 1 - (rect.top / viewportHeight)));

      setProgress(isNaN(p) ? 0 : p);
      setEntryProgress(ep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Phase calculations
  let introOpacity = 1;
  if (progress === 0) introOpacity = entryProgress;
  else if (progress > 0.85) introOpacity = Math.max(0, 1 - (progress - 0.85) * 10);

  // Horizontal Scroll Cards: 0.1 to 0.6
  const hScrollProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.5));
  const maxTranslate = isMobile ? -260 : -120; // Need to scroll more vw on mobile to see all cards
  const hTranslate = hScrollProgress * maxTranslate;

  let hOpacity = 1;
  if (progress < 0.1) hOpacity = progress * 10;
  else if (progress > 0.6) hOpacity = Math.max(0, 1 - (progress - 0.6) * 10);

  // Pipeline Diagram: 0.6 to 1.0
  const pipeProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));
  let pipeOpacity = 1;
  if (pipeProgress < 0.15) pipeOpacity = pipeProgress * (1 / 0.15);

  const pipeScale = 0.85 + pipeProgress * 0.15;
  const pipeY = 100 - pipeProgress * 100;

  // Pipeline Connectors (Draw lines): 0.75 to 0.95
  const lineProgress = Math.max(0, Math.min(1, (progress - 0.75) / 0.2));

  return (
    <section ref={containerRef} id="llm" className="relative h-[400vh] bg-[#030303] border-b border-white/10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[2000px]">
        {/* Ambient Backgrounds */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none transition-transform duration-75 ease-out will-change-transform"
          style={{ transform: `translateY(${progress * 200}px)` }}
        />

        {/* Header */}
        <div
          className="absolute top-[12vh] w-full max-w-[90rem] px-6 md:px-10 z-10 transition-opacity duration-75 ease-out will-change-transform"
          style={{ opacity: introOpacity }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-glow">Mandelbrot LLM</h2>
              <h3 className="text-xl md:text-3xl font-light text-white/50 max-w-2xl leading-snug">
                Most platforms rent their intelligence. <br className="hidden md:block" />
                <span className="text-white">We built our own.</span>
              </h3>
            </div>
            <p className="text-base text-white/40 border-l border-white/20 pl-6 max-w-xs leading-relaxed">
              Hosted and fine-tuned entirely on our private cloud. Your data never leaves our walls.
            </p>
          </div>
        </div>

        {/* Horizontal Swiping Giant Cards */}
        <div
          className="absolute top-[35vh] left-[10vw] flex gap-8 z-20 transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `translateX(${hTranslate}vw)`,
            opacity: hOpacity,
            pointerEvents: hOpacity > 0.5 ? 'auto' : 'none',
          }}
        >
          {[
            {
              icon: <Icons.Lock className="w-8 h-8" />,
              title: 'Data Privacy',
              desc: 'Zero third-party APIs. Total architectural isolation. Data never sent out.',
            },
            {
              icon: <Icons.Brain className="w-8 h-8" />,
              title: 'Business Tuned',
              desc: 'Hyper-optimized for specialized enterprise operations and customer service.',
            },
            {
              icon: <Icons.Code className="w-8 h-8" />,
              title: 'Deep Competency',
              desc: 'Generates, debugs, and refactors production code entirely in-house.',
            },
            {
              icon: <Icons.Lightning className="w-8 h-8" />,
              title: 'Cost Efficiency',
              desc: 'Predictable, transparent enterprise pricing that scales flawlessly.',
            },
          ].map((prop, i) => (
            <div
              key={i}
              className="w-[85vw] sm:w-[80vw] md:w-[400px] shrink-0 border border-white/10 bg-black/80 backdrop-blur-md p-6 md:p-10 h-[380px] md:h-[400px] flex flex-col justify-between hover:bg-white/5 hover:border-white/30 transition-all duration-300 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="flex justify-between items-start">
                <div className="text-white/20 font-mono text-xl">0{i + 1} //</div>
                <div className="text-white/40">{prop.icon}</div>
              </div>
              <div>
                <h4 className="text-2xl font-medium mb-4 text-white tracking-tight">{prop.title}</h4>
                <p className="text-white/50 text-base leading-relaxed">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Glowing Pipeline Diagram */}
        <div
          className="absolute top-[35vh] w-full max-w-[90rem] px-6 md:px-10 z-30 flex flex-col transition-all duration-75 ease-out will-change-transform"
          style={{
            opacity: pipeOpacity,
            transform: `translateY(${pipeY}px) scale(${pipeScale})`,
            pointerEvents: pipeOpacity > 0.5 ? 'auto' : 'none',
          }}
        >
          <div className="relative pt-12 border-t border-white/10">
            <h4 className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#030303] px-6 text-xs font-mono text-white/30 tracking-widest uppercase">
              Request Pipeline
            </h4>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative mt-8">
              {/* Background Track Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 z-0" />

              {/* The Drawing Line Desktop */}
              <div
                className="hidden lg:block absolute top-1/2 left-0 h-[2px] bg-white shadow-[0_0_20px_#fff] -translate-y-1/2 z-0"
                style={{ width: `${lineProgress * 100}%` }}
              />

              {/* Background Track Mobile */}
              <div className="lg:hidden absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2 z-0" />

              {/* The Drawing Line Mobile */}
              <div
                className="lg:hidden absolute top-0 left-1/2 w-[2px] bg-white shadow-[0_0_20px_#fff] -translate-x-1/2 z-0"
                style={{ height: `${lineProgress * 100}%` }}
              />

              {[
                { step: 'Client Request', sub: 'Your system or user' },
                { step: 'MCP Server', sub: 'Context & orchestration' },
                { step: 'Mandelbrot LLM', sub: 'In-house model' },
                { step: 'Delivered Output', sub: 'To your application' },
              ].map((node, i) => {
                const nodeActiveThreshold = i * 0.33;
                const isActive = lineProgress >= nodeActiveThreshold;
                return (
                  <div
                    key={i}
                    className={`glass-panel p-8 w-full lg:w-[22%] text-center z-10 group transition-all duration-500 ${
                      isActive
                        ? 'border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-white/10 scale-105'
                        : 'border-white/10 bg-black scale-100'
                    }`}
                  >
                    <div
                      className={`text-xl font-medium mb-3 tracking-tight transition-colors duration-500 ${
                        isActive ? 'text-white text-glow' : 'text-white/40'
                      }`}
                    >
                      {node.step}
                    </div>
                    <div
                      className={`text-xs font-mono tracking-wide transition-colors duration-500 ${
                        isActive ? 'text-white/70' : 'text-white/20'
                      }`}
                    >
                      {node.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
