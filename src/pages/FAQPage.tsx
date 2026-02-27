import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { faqItems } from '../data/faq';
import Footer from '../components/Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16" style={{ background: '#ffffff' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
              Help Center
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5"
              style={{ color: '#1d1d1f' }}
            >
              Frequently asked
              <br />
              <span style={{ color: '#86868b' }}>questions.</span>
            </h1>
            <p className="text-base md:text-lg max-w-[520px] mx-auto" style={{ color: '#6e6e73' }}>
              Everything you need to know about our products, services, and
              support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Full FAQ */}
      <section className="py-12 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container max-w-3xl">
          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  background: '#f5f5f7',
                  border: '1px solid #e8e8ed',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: '#1d1d1f' }}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={16} style={{ color: '#86868b' }} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
              style={{ color: '#1d1d1f' }}
            >
              Still have questions?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6e6e73' }}>
              Our team is happy to help with anything not covered here.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
              style={{ background: '#0071e3' }}
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
