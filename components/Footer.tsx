'use client';

export default function Footer() {
  return (
    <footer className="bg-arterra-charcoal border-t border-white/5 pt-20 pb-12 px-6 md:px-24">
      <div className="max-w-[1152px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col md:flex-row justify-center gap-16">
          <div className="flex-1 max-w-[320px] flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-arterra-olive" aria-hidden />
              <span className="font-shippori font-bold text-xl leading-7 tracking-[-1px] text-white">
                ARTERRA
              </span>
            </div>
            <p className="font-sans text-sm leading-[23px] text-white/40">
              Tokyo / New York / London Global Luxury Matcha Solutions.
            </p>
          </div>
          <div className="flex-1 max-w-[320px]">
            <p className="font-sans font-bold text-[10px] leading-[15px] tracking-[3px] uppercase text-white/40 mb-8">
              Navigation
            </p>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Sourcing Standards', 'Bulk Procurement', 'Case Studies'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm leading-5 text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 max-w-[320px]">
            <p className="font-sans font-bold text-[10px] leading-[15px] tracking-[3px] uppercase text-white/40 mb-8">
              Connect
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:hello@arterra-matcha.com" className="font-sans text-sm leading-5 text-white/70 hover:text-white transition-colors">
                  hello@arterra-matcha.com
                </a>
              </li>
              <li>
                <a href="tel:+81355550123" className="font-sans text-sm leading-5 text-white/70 hover:text-white transition-colors">
                  +81 3-5555-0123
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm leading-5 text-white/70 hover:text-white transition-colors">
                  Instagram — @arterra
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="font-sans text-[10px] leading-[15px] tracking-[1px] uppercase text-white/20">
            © ARTERRA International. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-sans text-[10px] leading-[15px] tracking-[1px] uppercase text-white/20 hover:text-white/40">
              Privacy
            </a>
            <a href="#" className="font-sans text-[10px] leading-[15px] tracking-[1px] uppercase text-white/20 hover:text-white/40">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
