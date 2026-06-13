'use client';

import React, { useEffect, useRef, useState, type ReactNode } from 'react';

interface StackedCardProps {
  children: ReactNode;
  index: number;
  total: number;
}

export default function StackedCard({ children, index, total }: StackedCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ scale: 1, opacity: 1, filter: 'blur(0px)', rotateX: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();

      const stickyPoint = 120 + index * 24;

      if (rect.top < stickyPoint) {
        const overScroll = stickyPoint - rect.top;
        const progress = Math.min(1, overScroll / 450);

        setStyle({
          scale: 1 - progress * 0.06,
          opacity: 1 - progress * 0.7,
          filter: `blur(${progress * 16}px)`,
          rotateX: progress * -15,
          y: progress * -40,
        });
      } else {
        setStyle({ scale: 1, opacity: 1, filter: 'blur(0px)', rotateX: 0, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  return (
    <div ref={wrapperRef} className="w-full relative h-[90vh] md:h-[75vh]" style={{ zIndex: index }}>
      <div
        className="sticky w-full origin-top transition-transform duration-75 ease-out will-change-transform"
        style={{
          top: `${120 + index * 24}px`,
          transform: `translateY(${style.y}px) scale(${style.scale}) perspective(1500px) rotateX(${style.rotateX}deg)`,
          opacity: style.opacity,
          filter: style.filter,
        }}
      >
        {children}
      </div>
    </div>
  );
}
