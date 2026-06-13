interface DiagonalDividerProps {
  className?: string;
}

export default function DiagonalDivider({ className = '' }: DiagonalDividerProps) {
  return (
    <div
      className={`relative h-px w-16 md:w-24 bg-white/20 overflow-hidden rotate-[20deg] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[scanline_2.5s_linear_infinite]" />
    </div>
  );
}
