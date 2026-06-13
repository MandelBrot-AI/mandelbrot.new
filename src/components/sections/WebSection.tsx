'use client';

import React from 'react';
import { Icons, Reveal, WebCanvas } from '@/components/ui';

export default function WebSection() {
  return (
    <section id="web-solutions" className="py-32 bg-black relative border-b border-white/10 overflow-hidden">
      {/* Interactive particle network background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <WebCanvas />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent blur-[120px] rounded-full pointer-events-none animate-web-orb-1" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-gradient-to-tr from-white/[0.03] via-white/[0.01] to-transparent blur-[100px] rounded-full pointer-events-none animate-web-orb-2" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <Reveal type="down">
          <h2 className="text-[10vw] lg:text-[6vw] font-medium tracking-tight leading-[0.9] text-glow mb-6">
            Mandelbrot Web
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mb-16">
            Your web presence, supercharged. From high-converting narratives to full-stack enterprise platforms.
          </p>
        </Reveal>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wide Feature - Storytelling Landing Pages */}
          <Reveal delay={0} type="scale" className="lg:col-span-2">
            <div className="web-card glass-panel p-10 md:p-12 h-full flex flex-col justify-between group min-h-[350px] relative">
              {/* Animated border glow */}
              <div className="web-card-border" />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-[2rem] pointer-events-none">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                <div className="absolute top-2 right-8 w-12 h-[1px] bg-gradient-to-l from-white/30 to-transparent" />
                <div className="absolute top-8 right-2 h-12 w-[1px] bg-gradient-to-t from-white/30 to-transparent" />
              </div>
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight group-hover:text-glow transition-all">
                  Storytelling <br /> Landing Pages
                </h3>
                <Icons.Layout className="w-10 h-10 text-white/20 group-hover:text-white group-hover:rotate-12 transition-all duration-500 hidden md:block" />
              </div>
              <p className="text-white/50 text-base md:text-lg max-w-lg mb-8">
                Conversion-optimized, narrative-first design. Integrated with analytics, CRMs, and advanced AI A/B testing.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {['Core Web Vitals', 'Responsive', 'A/B Ready'].map((tag, i) => (
                  <span
                    key={tag}
                    className="web-tag text-xs font-mono text-white/40 border border-white/10 rounded-full px-3 py-1 bg-white/5"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Square Feature 1 - Custom Web Apps */}
          <Reveal delay={100} type="left">
            <div className="web-card bg-neutral-900/50 border border-white/10 p-10 h-full rounded-[2rem] flex flex-col hover:bg-neutral-900/80 transition-all duration-300 min-h-[350px] relative group">
              <div className="web-card-border" />
              {/* Animated icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Custom Web Apps</h3>
              <p className="text-white/50 text-base leading-relaxed mb-8 flex-grow">
                Production-grade architecture built on React and Next.js, flawlessly integrated with our AI microservices.
              </p>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/30 group-hover:border-white/50 group-hover:text-white/70 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <Icons.Code className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Square Feature 2 - API Integrations */}
          <Reveal delay={200} type="right">
            <div className="web-card bg-neutral-900/50 border border-white/10 p-10 h-full rounded-[2rem] flex flex-col hover:bg-neutral-900/80 transition-all duration-300 min-h-[350px] relative group">
              <div className="web-card-border" />
              {/* Animated data flow lines */}
              <div className="absolute top-6 right-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-[2px] h-6 bg-gradient-to-b from-white/40 to-transparent rounded-full" style={{ animationDelay: '0s' }} />
                <div className="w-[2px] h-4 bg-gradient-to-b from-white/30 to-transparent rounded-full" style={{ animationDelay: '0.2s' }} />
                <div className="w-[2px] h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full" style={{ animationDelay: '0.4s' }} />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">API Integrations</h3>
              <p className="text-white/50 text-base leading-relaxed mb-8 flex-grow">
                Real-time BI pipelines, robust REST APIs, and automated outbound syncing to Slack and Email.
              </p>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/30 group-hover:border-white/50 group-hover:text-white/70 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <Icons.Link className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Wide Feature 2 - Pre-Built Library */}
          <Reveal delay={300} type="flip" className="lg:col-span-2">
            <div className="web-card glass-panel p-10 h-full flex flex-col md:flex-row justify-between items-center gap-8 group min-h-[350px] relative">
              <div className="web-card-border" />
              <div className="md:w-1/2">
                <h3 className="text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-glow transition-all">
                  Pre-Built Library
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
                  Rapid deployment of auth, payment gateways, notifications, and secure file pipelines.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-3 w-full">
                {['Auth Mgmt', 'Stripe Pay', 'File Uploads', 'Slack Sync'].map((tag, i) => (
                  <div
                    key={tag}
                    className="web-library-card border border-white/10 rounded-[1rem] px-4 py-4 text-center text-sm text-white/60 bg-black/50 hover:bg-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:scale-105"
                    style={{ animationDelay: `${i * 100 + 400}ms` }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
