'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
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
      { rootMargin: '0px 0px -10% 0px' }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-up ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
