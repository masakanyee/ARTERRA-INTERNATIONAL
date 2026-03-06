'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhoWeAre from '@/components/WhoWeAre';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <Header onInquiryClick={() => setInquiryOpen(true)} />
      <main>
        <Hero />
        <AboutUs />
        <WhoWeAre />
        <CTABand onInquiryClick={() => setInquiryOpen(true)} />
        <Footer />
      </main>
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
