'use client';

import React from 'react';
import { Icons, Reveal, StackedCard, DiagonalDivider } from '@/components/ui';

export default function CustomIntelligenceSection() {
  const services = [
    {
      icon: <Icons.Chat />,
      title: 'Custom AI Chatbot',
      features: [
        'Trained on your documentation, product catalogue, and knowledge base',
        'Multi-turn conversations with context retention across the session',
        'Seamlessly escalates complex queries to a human agent',
        'Available 24/7, supporting thousands of concurrent conversations',
      ],
    },
    {
      icon: <Icons.Users />,
      title: 'AI Customer Support',
      features: [
        'Handles tier-1 support: order status, FAQs, troubleshooting, refunds',
        'Understands intent even when customers phrase questions poorly',
        'Integrates with your existing CRM, helpdesk, or ticketing system',
        'Full conversation logs, analytics, and resolution rate dashboards',
      ],
    },
    {
      icon: <Icons.Document />,
      title: 'AI Document Intelligence',
      features: [
        'Resume parsing and candidate scoring for HR and recruitment',
        'Contract analysis — key clause extraction, risk flagging, renewal dates',
        'Invoice and receipt processing with structured data output',
        'Bulk processing of hundreds of documents in minutes',
      ],
    },
    {
      icon: <Icons.Refresh />,
      title: 'AI File Conversion',
      features: [
        'PDF ↔ Word ↔ Excel ↔ PNG ↔ CSV ↔ plain text — and more',
        'Batch conversion of hundreds of files via API or dashboard',
        'OCR for scanned documents — images to searchable, editable text',
        'Retains formatting, tables, and hierarchical structure',
      ],
    },
    {
      icon: <Icons.Target />,
      title: 'Lead Gen & Outreach',
      features: [
        'AI-powered lead scoring based on custom criteria and signals',
        'Auto-generate personalised cold email and LinkedIn outreach drafts',
        'Segment audiences and recommend the right message per segment',
        'Integrates with your CRM and marketing automation tools',
      ],
    },
    {
      icon: <Icons.Workflow />,
      title: 'Workflow Agents',
      features: [
        'Data retrieval, transformation, and reporting — fully automated',
        'Schedule-based or trigger-based execution (webhooks, API events)',
        'Connects to databases, APIs, cloud storage, third-party tools',
        'Full audit trail and error handling built-in',
      ],
    },
  ];

  return (
    <section id="ai-services" className="py-32 bg-black relative z-20 overflow-visible border-b border-white/10">
      {/* Deep Ambient Space Glows */}
      <div className="absolute top-[10%] left-0 w-[50vw] h-[50vw] bg-white/5 blur-[150px] rounded-full pointer-events-none animate-[ambientBreathe_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 items-start">
        {/* Sticky Left Control Panel */}
        <div className="lg:w-4/12 lg:sticky lg:top-32 flex flex-col">
          <Reveal type="down">
            <div className="flex items-center gap-4 mb-8">
              <DiagonalDivider />
              <span className="text-white/40 text-sm tracking-widest uppercase font-mono">Platform Pillars</span>
            </div>
            <h2 className="text-[10vw] lg:text-[5vw] font-medium tracking-tight mb-8 leading-[0.9] text-glow">
              Custom <br />
              Intelligence
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-12 max-w-sm">
              Purpose-built AI workflows. Zero ML expertise required. Tailored entirely to your operational context.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-12" />

            {/* Visual Data Tracker */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest">Systems Online</div>
              <div className="flex gap-2 w-full max-w-[200px]">
                {[0.2, 0.4, 0.6, 0.8, 1.0, 1.2].map((delay, idx) => (
                  <div key={idx} className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden relative">
                    <div
                      className="absolute top-0 left-0 h-full w-full bg-white animate-[scanline_2s_linear_infinite]"
                      style={{ animationDelay: `${delay}s`, opacity: 0.6 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cinematic 3D Stacked Cards Column */}
        <div className="lg:w-8/12 flex flex-col w-full relative perspective-[2000px]">
          {services.map((service, i, arr) => (
            <StackedCard key={i} index={i} total={arr.length}>
              <div className="bg-gradient-to-br from-[#161616] to-[#050505] border-t-2 border-t-white/10 border-x border-x-white/5 border-b border-b-black p-8 md:p-12 flex flex-col h-full rounded-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,1)] group relative overflow-hidden">
                {/* Inner Ambient Glow */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-colors duration-700 pointer-events-none" />

                {/* Giant Faint Watermark Number */}
                <div className="absolute -bottom-10 -right-4 text-[14rem] font-bold text-white/[0.015] leading-none pointer-events-none group-hover:scale-110 transition-transform duration-[1.5s] ease-out">
                  0{i + 1}
                </div>

                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:-translate-y-1">
                    {service.icon}
                  </div>

                  {/* Technical Status Pill */}
                  <div className="font-mono text-[10px] md:text-xs text-white/40 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest bg-white/5 flex items-center gap-2 group-hover:border-white/30 group-hover:text-white/80 transition-colors duration-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    Module Active
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8 relative z-10 group-hover:text-glow transition-all duration-300">
                  {service.title}
                </h3>

                {/* High-Tech Feature Blocks */}
                <div className="flex flex-col gap-3 flex-grow relative z-10">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.02] group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500"
                    >
                      <div className="font-mono text-[10px] text-white/20 pt-1 shrink-0 group-hover:text-white/50 transition-colors">
                        {(idx + 1).toString().padStart(2, '0')}
                      </div>
                      <p className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </StackedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
