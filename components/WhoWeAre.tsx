'use client';

export default function WhoWeAre() {
  return (
    <section className="bg-arterra-warm py-32 px-6 md:px-24">
      <div className="max-w-[1152px] mx-auto flex flex-col md:flex-row justify-center gap-20">
        <h2 className="font-shippori font-normal text-[36px] leading-[45px] text-arterra-olive flex-1 max-w-[504px]">
          We are curators of tradition, technical experts, and strategic partners to the world&apos;s
          most discerning palates.
        </h2>
        <div className="flex-1 max-w-[504px] flex flex-col gap-6">
          <p className="font-sans text-lg leading-[29px] text-[#1E293B]">
            From Tokyo to New York and London, we bridge Japanese tea culture with global demand.
            Our team includes master blenders, quality assurance specialists, and logistics experts
            dedicated to delivering excellence at scale.
          </p>
          <div className="flex flex-wrap gap-3 opacity-60">
            <a href="#about" className="font-sans font-bold text-[10px] leading-[15px] tracking-[3px] uppercase text-arterra-ink">
              About Us
            </a>
            <span className="font-sans font-bold text-[10px] text-arterra-ink">/</span>
            <a href="#sourcing" className="font-sans font-bold text-[10px] leading-[15px] tracking-[3px] uppercase text-arterra-ink">
              Sourcing
            </a>
            <span className="font-sans font-bold text-[10px] text-arterra-ink">/</span>
            <a href="#bulk" className="font-sans font-bold text-[10px] leading-[15px] tracking-[3px] uppercase text-arterra-ink">
              Bulk
            </a>
            <span className="font-sans font-bold text-[10px] text-arterra-ink">/</span>
            <a href="#cases" className="font-sans font-bold text-[10px] leading-[15px] tracking-[3px] uppercase text-arterra-ink">
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
