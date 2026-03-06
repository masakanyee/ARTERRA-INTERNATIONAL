'use client';

export default function AboutUs() {
  const rows = [
    {
      title: 'Matcha Sourcing',
      body: 'We source the finest ceremonial and culinary grade matcha from Japan’s most respected growers. From farm to your formulation, we ensure traceability and consistency.',
      cta: 'Learn more',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=520&q=80',
      imageLeft: false,
    },
    {
      title: 'Bottled Tea',
      body: '"Preserving the essence of the ceremony in every pour."',
      bodyItalic: true,
      sub: 'Ready-to-drink formulations that meet the standards of premium brands. Custom blends, NDAs, and scalable production.',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=520&q=80',
      imageLeft: true,
    },
    {
      title: 'Media',
      body: 'Editorial, film, and brand partnerships. We connect storytellers with authentic sources and on-the-ground expertise.',
      tags: ['Editorial', 'Film'],
      image: 'https://images.unsplash.com/photo-1556679343-c7306c6916cf?w=520&q=80',
      imageLeft: false,
    },
    {
      title: 'Private Label',
      badge: 'New',
      body: 'White-label matcha products for retailers and hospitality. From concept to packaging, we deliver turnkey solutions.',
      image: 'https://images.unsplash.com/photo-1544785349-c4a5301826fd?w=520&q=80',
      imageLeft: true,
    },
  ];

  return (
    <section id="about" className="bg-arterra-paper py-24 px-6 md:px-24">
      <div className="max-w-[1152px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <p className="font-sans font-bold text-sm leading-5 tracking-[5.6px] uppercase text-arterra-olive">
            001
          </p>
          <h2 className="font-shippori font-bold text-[clamp(36px,5vw,72px)] leading-[1] tracking-[-0.02em] text-arterra-charcoal">
            WHAT WE DO
          </h2>
        </div>

        <div className="flex flex-col">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className="flex flex-col md:flex-row md:items-center gap-12 py-16 border-t border-arterra-olive/20 first:border-t-0"
            >
              <div
                className={`flex flex-col gap-6 flex-1 order-2 ${row.imageLeft ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="flex items-center gap-4">
                  <h3 className="font-shippori font-normal text-[30px] leading-9 text-arterra-ink">
                    {row.title}
                  </h3>
                  {row.badge && (
                    <span className="px-2 py-1 bg-arterra-charcoal font-sans font-bold text-[9px] leading-[14px] tracking-[0.9px] uppercase text-white">
                      {row.badge}
                    </span>
                  )}
                </div>
                {row.bodyItalic ? (
                  <p className="font-shippori font-normal text-xl leading-7 text-arterra-olive">
                    {row.body}
                  </p>
                ) : null}
                <p className="font-sans text-base leading-[26px] text-arterra-slate max-w-[448px]">
                  {row.bodyItalic ? row.sub : row.body}
                </p>
                {row.cta && (
                  <a
                    href="#inquiry"
                    className="inline-flex items-end pb-1 border-b-2 border-arterra-olive font-sans font-bold text-xs leading-4 tracking-[1.2px] uppercase text-arterra-ink w-fit"
                  >
                    {row.cta}
                  </a>
                )}
                {row.tags && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {row.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-arterra-olive/5 font-sans font-bold text-[10px] leading-[15px] tracking-[1px] uppercase text-arterra-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={`flex-1 min-h-[400px] bg-arterra-paper bg-cover bg-center order-1 ${row.imageLeft ? 'md:order-1' : 'md:order-2'}`}
                style={{ backgroundImage: `url(${row.image})` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
