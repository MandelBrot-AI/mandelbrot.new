import DiagonalDivider from '@/components/ui/DiagonalDivider';
import Navbar from '@/components/ui/Navbar';
import { HERO_STATS, HERO_VIDEO_SRC } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={HERO_VIDEO_SRC}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative h-full w-full pointer-events-none">
        {/* Floating Title Words */}
        <h1 className="hero-title absolute text-white font-medium text-[16vw] md:text-[13vw] left-4 md:left-10 top-[20%] md:top-[18%] pointer-events-auto animate-float-0 text-glow">
          automate
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[16vw] md:text-[13vw] right-4 md:right-10 top-[35%] md:top-[38%] pointer-events-auto animate-float-1 text-glow">
          every
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[16vw] md:text-[13vw] left-[10%] md:left-[28%] top-[50%] md:top-[58%] pointer-events-auto animate-float-2 text-glow">
          thing
        </h1>

        {/* Tagline */}
        <p className="absolute left-6 md:left-10 top-[68%] md:top-[46%] max-w-[240px] text-[14px] md:text-[15px] leading-snug text-white/90 pointer-events-auto">
          we build hyper-intelligent, agentic workflows that replace manual bottlenecks with
          flawless machine precision
        </p>

        {/* Stat: Agents Deployed */}
        <div className="absolute right-4 md:right-24 top-[8%] md:top-[14%] flex flex-col items-end pointer-events-auto scale-75 origin-top-right md:scale-100">
          <div className="flex items-center gap-3 justify-end">
            <DiagonalDivider />
            <span className="text-4xl md:text-5xl font-medium tracking-tight">
              {HERO_STATS.agentsDeployed}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/70 mt-1 text-right">services live</span>
        </div>

        {/* Stat: System Latency */}
        <div className="absolute left-4 md:left-20 bottom-36 md:bottom-24 flex flex-col items-start pointer-events-auto scale-75 origin-bottom-left md:scale-100">
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight">
              {HERO_STATS.systemLatency}
            </span>
            <DiagonalDivider className="rotate-[-20deg]" />
          </div>
          <span className="text-xs md:text-sm text-white/70 mt-1">always online</span>
        </div>

        {/* Stat: Hours Saved */}
        <div className="absolute right-4 md:right-20 bottom-16 md:bottom-20 flex flex-col items-end pointer-events-auto scale-75 origin-bottom-right md:scale-100">
          <div className="flex items-center gap-3 justify-end">
            <DiagonalDivider className="rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight">
              {HERO_STATS.hoursSaved}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/70 mt-1 text-right">tiers available</span>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black z-10" />
    </section>
  );
}
