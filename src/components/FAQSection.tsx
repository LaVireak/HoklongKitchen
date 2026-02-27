import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { faqItems } from '../data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  // Show first 5 items as a preview on homepage
  const items = faqItems.slice(0, 5);

  return (
    <section className="py-24 md:py-32" style={{ background: '#f5f5f7' }}>
      <div className="page-container max-w-3xl">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-medium tracking-wide mb-3"
            style={{ color: '#0071e3' }}
          >
            Frequently Asked
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight"
            style={{ color: '#1d1d1f' }}
          >
            Questions & Answers
          </h2>
        </ScrollReveal>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-colors duration-200"
              style={{
                background: openIndex === i ? '#ffffff' : '#ffffff',
                border: '1px solid #e8e8ed',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span
                  className="text-sm font-semibold pr-4"
                  style={{ color: '#1d1d1f' }}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={16}
                    style={{ color: '#86868b' }}
                  />
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
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#6e6e73' }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href="/faq"
            className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4"
            style={{ color: '#0071e3' }}
          >
            View all questions &rsaquo;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
