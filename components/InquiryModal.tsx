'use client';

import { useEffect } from 'react';

const LABEL_CLASS =
  'font-sans font-bold text-[10px] leading-[15px] tracking-[1px] uppercase text-arterra-muted';
const INPUT_CLASS =
  'w-full bg-transparent border-0 border-b border-arterra-border py-[10px] font-work text-base text-arterra-ink placeholder:text-arterra-placeholder focus:outline-none focus:border-arterra-forest';

const INQUIRY_CATEGORIES = [
  'General',
  'Matcha Sourcing',
  'Bottled Tea',
  'Media',
  'Partnership',
] as const;

export default function InquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[rgba(28,27,22,0.85)] backdrop-blur-[4px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div
        className="relative w-full max-w-[600px] max-h-[90vh] flex flex-col bg-arterra-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-col gap-2 pt-10 px-8 pb-6 shrink-0">
          <h2 id="inquiry-title" className="font-shippori text-[36px] leading-[40px] text-arterra-ink">
            Inquiry
          </h2>
          <p className="font-sans text-sm leading-5 text-arterra-muted">
            We&apos;ll respond within 1-2 business days.
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 w-[14px] h-[14px] flex items-center justify-center text-arterra-muted hover:text-arterra-ink transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8">
          <form className="flex flex-col gap-8 pb-8" onSubmit={(e) => e.preventDefault()}>
            {/* Row 1: Company Name | Contact Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label className={LABEL_CLASS}>Company Name</label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className={INPUT_CLASS}
                  aria-label="Company Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className={LABEL_CLASS}>Contact Person</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className={INPUT_CLASS}
                  aria-label="Contact Person"
                />
              </div>
            </div>

            {/* Row 2: Phone | Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label className={LABEL_CLASS}>Phone</label>
                <input
                  type="tel"
                  placeholder="+1..."
                  className={INPUT_CLASS}
                  aria-label="Phone"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className={LABEL_CLASS}>Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className={INPUT_CLASS}
                  aria-label="Email"
                />
              </div>
            </div>

            {/* Preferred Contact */}
            <div className="flex flex-col gap-3">
              <label className={LABEL_CLASS}>Preferred Contact Method</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    defaultChecked
                    className="w-4 h-4 rounded-full border border-arterra-border bg-white text-arterra-forest focus:ring-arterra-forest"
                  />
                  <span className="font-sans text-sm text-arterra-slate">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    className="w-4 h-4 rounded-full border border-arterra-border bg-white text-arterra-forest focus:ring-arterra-forest"
                  />
                  <span className="font-sans text-sm text-arterra-slate">Phone</span>
                </label>
              </div>
            </div>

            {/* Inquiry Category */}
            <div className="flex flex-col gap-1">
              <label className={LABEL_CLASS}>Inquiry Category</label>
              <select
                className={`${INPUT_CLASS} cursor-pointer appearance-none bg-no-repeat bg-[length:24px] pr-8`}
                style={{ backgroundPosition: 'right 0 top 50%' }}
                aria-label="Inquiry Category"
              >
                {INQUIRY_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Conditional Notice (Matcha Sourcing) */}
            <div className="flex flex-col gap-1 p-4 bg-arterra-forest/5 border-l-4 border-arterra-forest">
              <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[1px] uppercase text-arterra-forest">
                Matcha Sourcing Requirements
              </span>
              <p className="font-sans text-sm leading-[23px] text-[#475569]">
                Please include your desired grade (Ceremonial, Premium, or Culinary) and estimated
                monthly volume (kg) in the message below for a faster quote.
              </p>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label className={LABEL_CLASS}>Subject</label>
              <input
                type="text"
                placeholder="Brief summary"
                className={INPUT_CLASS}
                aria-label="Subject"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className={LABEL_CLASS}>Message</label>
              <textarea
                placeholder="How can we assist your brand?"
                rows={4}
                className={`${INPUT_CLASS} min-h-[113px] resize-y`}
                aria-label="Message"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-5 bg-arterra-forest font-sans font-bold text-xs leading-4 tracking-[3.2px] uppercase text-white hover:opacity-90 transition-opacity"
            >
              Send inquiry
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                <path
                  d="M1 4h7.5M6 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Footer bar */}
        <div
          className="h-[14px] shrink-0 bg-arterra-forest/10"
          aria-hidden
        />
      </div>
    </div>
  );
}
