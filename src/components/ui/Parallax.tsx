'use client';

import React, { useEffect, useRef, type ReactNode } from 'react';

interface ParallaxProps {
  children?: ReactNode;
  speed?: number;
  className?: string;
}

export default function Parallax({ children, speed = 0.15, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const centerOffset = window.innerHeight / 2 - (rect.top + rect.height / 2);
            ref.current.style.transform = `translateY(${centerOffset * speed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div className={className} ref={ref} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
