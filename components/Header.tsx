'use client';

export default function Header({ onInquiryClick }: { onInquiryClick: () => void }) {
  return (
    <header className="sticky top-0 z-[100] flex items-center justify-between h-[72px] px-12 py-4 bg-arterra-cream/90 border-b border-arterra-olive/10 backdrop-blur-[6px]">
      <a href="/" className="flex items-center gap-2">
        <span className="w-[18px] h-[18px] rounded-full bg-arterra-olive" aria-hidden />
        <span className="font-shippori font-bold text-xl leading-7 tracking-[-1px] text-arterra-ink">
          ARTERRA
        </span>
      </a>
      <nav className="flex items-center gap-12">
        <a
          href="#about"
          className="font-sans font-medium text-xs leading-4 tracking-[2.4px] uppercase text-arterra-ink hover:opacity-70 transition-opacity"
        >
          About
        </a>
        <a
          href="#sourcing"
          className="font-sans font-medium text-xs leading-4 tracking-[2.4px] uppercase text-arterra-ink hover:opacity-70 transition-opacity"
        >
          Sourcing
        </a>
        <a
          href="#bulk"
          className="font-sans font-medium text-xs leading-4 tracking-[2.4px] uppercase text-arterra-ink hover:opacity-70 transition-opacity"
        >
          Bulk
        </a>
        <a
          href="#cases"
          className="font-sans font-medium text-xs leading-4 tracking-[2.4px] uppercase text-arterra-ink hover:opacity-70 transition-opacity"
        >
          Case Studies
        </a>
      </nav>
      <button
        type="button"
        onClick={onInquiryClick}
        className="flex items-center justify-center px-6 py-3 bg-arterra-olive font-sans font-bold text-[10px] leading-[15px] tracking-[2px] uppercase text-white hover:opacity-90 transition-opacity"
      >
        Inquiry
      </button>
    </header>
  );
}
