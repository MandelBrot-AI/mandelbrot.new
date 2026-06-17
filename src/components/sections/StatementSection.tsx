'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScroll = rect.height - viewportHeight;
      let progress = 0;

      if (totalScroll > 0) {
        progress = -rect.top / totalScroll;
        progress = Math.max(0, Math.min(1, progress));
      }

      setScrollY(isNaN(progress) ? 0 : progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text1Scale = 1 + scrollY * 0.8;
  const text1Opacity = Math.min(1, Math.max(0, 1 - scrollY * 2.5));
  const text1Blur = scrollY > 0.1 ? (scrollY - 0.1) * 30 : 0;

  const text2Scale = 1 + Math.max(0, scrollY - 0.15) * 0.8;
  const text2Opacity = Math.min(1, Math.max(0, scrollY * 4 - 0.5)) * Math.max(0, 1 - (scrollY - 0.15) * 3);
  const text2Blur = scrollY > 0.3 ? (scrollY - 0.3) * 30 : 0;

  const text3Scale = 1 + Math.max(0, scrollY - 0.4) * 0.5;
  const text3Opacity = Math.min(1, Math.max(0, (scrollY - 0.3) * 3));

  const bgScale = 1 + scrollY * 2;
  const bgOpacity = Math.min(0.8, scrollY * 2);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black z-20 border-b border-white/5 -mt-[1px]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
        {/* Glow Background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-white/10 blur-[120px] pointer-events-none transition-transform duration-75 ease-out"
          style={{ transform: `translate(-50%, -50%) scale(${bgScale})`, opacity: bgOpacity }}
        />

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10 w-full -mt-[35vh]">
          {/* Phase 1: We move fast. */}
          <div
            className="absolute w-full flex flex-col items-center justify-center"
            style={{
              opacity: text1Opacity,
              transform: `scale(${text1Scale}) translateZ(${scrollY * 200}px)`,
              filter: `blur(${text1Blur}px)`,
              transition: 'opacity 0.1s ease-out, transform 0.1s ease-out, filter 0.1s ease-out',
            }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white leading-tight">
              We move fast.
            </h2>
          </div>

          {/* Phase 2: We ship quality. */}
          <div
            className="absolute w-full flex flex-col items-center justify-center"
            style={{
              opacity: text2Opacity,
              transform: `scale(${text2Scale}) translateZ(${Math.max(0, scrollY - 0.15) * 200}px)`,
              filter: `blur(${text2Blur}px)`,
              transition: 'opacity 0.1s ease-out, transform 0.1s ease-out, filter 0.1s ease-out',
              pointerEvents: text2Opacity > 0 ? 'auto' : 'none',
            }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white/90 leading-tight">
              We ship quality.
            </h2>
          </div>

          {/* Phase 3: The belief statement */}
          <div
            className="absolute w-full flex flex-col items-center justify-center mt-32"
            style={{
              opacity: text3Opacity,
              transform: `scale(${text3Scale})`,
              transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
              pointerEvents: text3Opacity > 0 ? 'auto' : 'none',
            }}
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white/60 max-w-5xl leading-tight">
              And we believe companies that adopt AI intelligently today <br />
              <span className="text-white text-glow font-medium mt-6 inline-block">
                will define their industries tomorrow.
              </span>
            </p>
          </div>
        </div>

        {/* Scroll Unveil Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollY * 8) }}
        >
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
            Scroll to unveil
          </span>
          <div className="w-px h-16 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-white/60 animate-[flowDown_1.5s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
