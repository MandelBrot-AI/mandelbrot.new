'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseOffset: number;
}

export default function WebCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const sizeRef = useRef({ w: 0, h: 0 });

  const initParticles = useCallback((w: number, h: number) => {
    const count = Math.min(Math.floor((w * h) / 12000), 80);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      pulseOffset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      if (particlesRef.current.length === 0) initParticles(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const animate = () => {
      time += 0.01;
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const connectionDist = 150;
      const mouseDist = 200;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));

        // Mouse repulsion
        const dmx = p.x - mx;
        const dmy = p.y - my;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < mouseDist && distMouse > 0) {
          const force = (1 - distMouse / mouseDist) * 0.8;
          p.x += (dmx / distMouse) * force;
          p.y += (dmy / distMouse) * force;
        }

        // Pulsing glow
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.3 + 0.7;
        const glowOpacity = p.opacity * pulse;

        // Draw particle with glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        grad.addColorStop(0, `rgba(255, 255, 255, ${glowOpacity})`);
        grad.addColorStop(0.4, `rgba(255, 255, 255, ${glowOpacity * 0.3})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Solid center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${glowOpacity * 0.8})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Mouse connection lines
      if (mx > 0 && my > 0) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mx;
          const dy = particles[i].y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDist) {
            const alpha = (1 - dist / mouseDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'auto' }}
    />
  );
}
