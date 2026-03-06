'use client';

export default function CTABand({ onInquiryClick }: { onInquiryClick: () => void }) {
  return (
    <section className="bg-arterra-charcoal py-24 px-6 flex flex-col items-center gap-10">
      <h2 className="font-shippori font-normal text-[clamp(28px,4vw,48px)] leading-[1] tracking-[-0.025em] text-white text-center max-w-[793px]">
        Ready to elevate your matcha offering?
      </h2>
      <button
        type="button"
        onClick={onInquiryClick}
        className="flex items-center justify-center px-12 py-5 border border-white/30 font-sans font-bold text-xs leading-4 tracking-[4.8px] uppercase text-white hover:bg-white/10 transition-colors"
      >
        Get in touch
      </button>
    </section>
  );
}
