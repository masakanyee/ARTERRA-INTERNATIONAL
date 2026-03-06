'use client';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-[20vmin] bg-arterra-charcoal overflow-hidden">
      {/* Background image placeholder - opacity 0.6 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1920&q=80)' }}
        aria-hidden
      />
      {/* Stats left */}
      <div className="absolute left-24 top-32 z-10 flex flex-col">
        <span className="font-shippori font-light text-[30px] leading-9 text-white">20+</span>
        <span className="font-sans text-[10px] leading-[15px] tracking-[3px] uppercase text-white/70">
          Years
        </span>
      </div>
      {/* Stats right */}
      <div className="absolute right-24 top-32 z-10 flex flex-col items-end">
        <span className="font-shippori font-light text-[30px] leading-9 text-white">50+</span>
        <span className="font-sans text-[10px] leading-[15px] tracking-[3px] uppercase text-white/70 text-right">
          Countries
        </span>
      </div>
      {/* Hero title */}
      <h1 className="relative z-10 font-shippori font-bold text-[clamp(48px,12vw,166px)] leading-[1] tracking-[-0.05em] text-white text-center max-w-[860px]">
        ARTERRA
      </h1>
      {/* Floating product card */}
      <div className="absolute right-12 bottom-12 z-10 w-64 border border-arterra-olive/10 bg-white p-6 shadow-lg hidden lg:block">
        <div className="h-[206px] bg-arterra-paper mb-4 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-arterra-olive/20" aria-hidden />
        </div>
        <p className="font-sans font-bold text-[10px] leading-[15px] tracking-[1px] uppercase text-arterra-olive mb-1">
          Featured
        </p>
        <p className="font-shippori font-bold text-sm leading-5 text-arterra-ink mb-3">
          Ceremonial Grade
        </p>
        <div className="flex items-center justify-between text-xs text-arterra-ink/60">
          <span>View product</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M1 5h7M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
