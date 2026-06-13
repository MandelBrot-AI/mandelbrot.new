'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Reveal, Icons, FloatingLetters } from '@/components/ui';

/* Tiny floating particle for form background ambiance */
interface FloatParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', scope: 'llm', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [particles, setParticles] = useState<FloatParticle[]>([]);
  const formRef = useRef<HTMLDivElement>(null);

  // Generate floating particles
  useEffect(() => {
    const pts: FloatParticle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
    }));
    setParticles(pts);
  }, []);

  // Mouse-tracking gradient for the form card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    formRef.current.style.setProperty('--mouse-x', `${x}%`);
    formRef.current.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden border-b border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating particles in background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white/20 contact-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[50rem] mx-auto px-6 relative z-10">
        <Reveal type="down">
          <div className="text-center mb-16">
            {/* Floating letters on "Initialize Sequence" */}
            <FloatingLetters
              text="Initialize Sequence"
              className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4"
            />
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-glow">
              Get in Touch
            </h2>
            <p className="text-white/50 font-light text-base md:text-lg max-w-lg mx-auto">
              Ready to automate your operations or deploy sovereign AI? Initiate the sequence.
            </p>
          </div>
        </Reveal>

        <Reveal type="scale" delay={150}>
          <div
            ref={formRef}
            onMouseMove={handleMouseMove}
            className="contact-form-card glass-panel p-8 md:p-12 border border-white/10 bg-black/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Animated border glow that follows mouse */}
            <div className="contact-mouse-glow" />

            {/* Spinning corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/30 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-white/30 to-transparent" />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/30 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-white/30 to-transparent" />
            </div>

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center relative z-10">
                {/* Success animation */}
                <div className="contact-success-ring w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 relative">
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30" />
                  <Icons.Check className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-medium text-white tracking-tight mb-4 text-glow">
                  Sequence Initiated
                </h3>
                <p className="text-white/50 font-light text-base max-w-sm">
                  Our systems have received your request. An architect will reach out within 12 standard operating hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-mono text-white/40 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1 cursor-pointer"
                >
                  Restart sequence
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className={`text-xs font-mono uppercase tracking-wider pl-1 transition-all duration-300 ${focusedField === 'name' ? 'text-white/70' : 'text-white/40'}`}>
                      Identity
                    </label>
                    <div className={`contact-input-wrapper ${focusedField === 'name' ? 'is-focused' : ''}`}>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300 w-full"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className={`text-xs font-mono uppercase tracking-wider pl-1 transition-all duration-300 ${focusedField === 'email' ? 'text-white/70' : 'text-white/40'}`}>
                      Signal Destination
                    </label>
                    <div className={`contact-input-wrapper ${focusedField === 'email' ? 'is-focused' : ''}`}>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300 w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Scope */}
                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-mono uppercase tracking-wider pl-1 transition-all duration-300 ${focusedField === 'scope' ? 'text-white/70' : 'text-white/40'}`}>
                    Module Interest
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: 'llm', label: 'Custom LLM', icon: '◆' },
                      { id: 'agents', label: 'AI Agents', icon: '◈' },
                      { id: 'web', label: 'Web Apps', icon: '◇' },
                      { id: 'other', label: 'Other', icon: '○' },
                    ].map((opt, i) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setForm({ ...form, scope: opt.id })}
                        onFocus={() => setFocusedField('scope')}
                        onBlur={() => setFocusedField(null)}
                        className={`contact-scope-btn border rounded-xl py-3 text-sm font-light transition-all duration-300 cursor-pointer relative overflow-hidden ${
                          form.scope === opt.id
                            ? 'border-white bg-white text-black font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                            : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/[0.08] hover:border-white/20'
                        }`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <span className={`text-xs transition-transform duration-300 ${form.scope === opt.id ? 'scale-125' : ''}`}>{opt.icon}</span>
                          {opt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-mono uppercase tracking-wider pl-1 transition-all duration-300 ${focusedField === 'message' ? 'text-white/70' : 'text-white/40'}`}>
                    Scope Details
                  </label>
                  <div className={`contact-input-wrapper ${focusedField === 'message' ? 'is-focused' : ''}`}>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your operational bottleneck or project goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300 resize-none w-full"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="contact-submit-btn bg-white text-black font-medium rounded-2xl py-4 hover:bg-neutral-200 transition-colors btn-glow flex items-center justify-center gap-3 text-base mt-4 cursor-pointer disabled:opacity-50 relative overflow-hidden group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Initializing...</span>
                    </>
                  ) : (
                    <>
                      {/* Sweep effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative z-10">Initialize Sequence</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
