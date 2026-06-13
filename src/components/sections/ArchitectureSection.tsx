import FadeUp from '@/components/ui/FadeUp';
import DiagonalDivider from '@/components/ui/DiagonalDivider';
import { CORE_SYSTEMS } from '@/lib/constants';

export default function ArchitectureSection() {
  return (
    <section
      id="platform"
      className="pt-32 pb-20 px-6 md:px-10 bg-black relative z-20 min-h-screen flex flex-col justify-center"
    >
      {/* Staggered Section Header */}
      <div className="relative mb-32 md:mb-48 h-[20vh]">
        <FadeUp>
          <h2 className="hero-title absolute text-white font-medium text-[12vw] left-0 md:left-[5%] top-0">
            core
          </h2>
        </FadeUp>
        <FadeUp delay={150}>
          <h2 className="hero-title absolute text-white/40 font-medium text-[12vw] right-0 md:right-[15%] top-[80%] md:top-[100%]">
            systems
          </h2>
        </FadeUp>
        <FadeUp delay={300}>
          <p className="absolute right-0 md:right-[5%] top-[180%] md:top-[220%] max-w-[280px] text-[15px] leading-snug text-white/70 text-right">
            we engineer foundational automation structures designed to scale infinitely. no
            wrappers. no bloat.
          </p>
        </FadeUp>
      </div>

      {/* Core Systems Cards */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-24 md:gap-32">
        {CORE_SYSTEMS.map((system, index) => {
          const isRight = system.layout === 'right';

          return (
            <FadeUp
              key={system.number}
              delay={index * 100}
              className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-start justify-between gap-8 md:gap-20`}
            >
              {/* Number + Divider */}
              <div
                className={`flex items-center gap-6 ${isRight ? 'justify-end' : ''} md:w-1/3`}
              >
                {isRight && (
                  <DiagonalDivider className="hidden md:block w-32 rotate-[-20deg]" />
                )}
                <span className="text-6xl md:text-8xl font-light text-white/20 tracking-tighter">
                  {system.number}
                </span>
                {!isRight && (
                  <DiagonalDivider className="hidden md:block w-32" />
                )}
              </div>

              {/* Card */}
              <div className="md:w-2/3 bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-12 hover:bg-neutral-900/80 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                  {system.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  {system.description}
                </p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
