'use client';

import React, { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  type?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'flip';
  blur?: number;
  className?: string;
  threshold?: number;
}

export default function Reveal({
  children,
  delay = 0,
  type = 'up',
  blur = 12,
  className = '',
  threshold = 0.15,
}: RevealProps) {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [threshold]);

  const baseStyle = {
    '--rb': `${blur}px`,
    transitionDelay: `${delay}ms`,
  } as React.CSSProperties;

  return (
    <div
      ref={domRef}
      className={`reveal-base reveal-${type} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={baseStyle}
    >
      {children}
    </div>
  );
}
