'use client';

import React, { useState, useCallback } from 'react';

interface FloatingLettersProps {
  text: string;
  className?: string;
}

export default function FloatingLetters({ text, className = '' }: FloatingLettersProps) {
  const [floatingIndices, setFloatingIndices] = useState<Set<number>>(new Set());

  const handleMouseEnter = useCallback((index: number) => {
    setFloatingIndices((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const handleAnimationEnd = useCallback((index: number) => {
    setFloatingIndices((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  }, []);

  return (
    <span className={`inline-flex ${className}`} aria-label={text} style={{ flexWrap: 'wrap' }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`floating-letter ${floatingIndices.has(i) ? 'is-floating' : ''}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onTouchStart={() => handleMouseEnter(i)}
          onAnimationEnd={() => handleAnimationEnd(i)}
          style={{
            display: 'inline-block',
            cursor: 'default',
            minWidth: char === ' ' ? '0.35em' : undefined,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
