import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, appleEaseOut } from '../lib/animations';

const trustItems = [
  'Michelin-Starred Restaurants',
  'ISO 9001 Certified',
  '5-Year Commercial Warranty',
  '500+ Kitchens Equipped',
];

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100svh] min-h-[560px] sm:min-h-[620px] md:min-h-[700px] flex items-end overflow-hidden bg-[#0a0a0a]"
    >

      {/* ── Full-screen kitchen image bg ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: appleEaseOut }}
      >
        <img
          src="/images/kitchen-full.jpg"
          alt="Professional kitchen"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />
      </motion.div>

      {/* ── Multi-layer cinematic overlay ── */}
      <div className="absolute inset-0 z-[1] bg-black/40" />
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 70%)' }} />

      {/* ── Content pinned to bottom-left (Apple product page style) ── */}
      <div className="page-container relative z-10 pb-24 sm:pb-24 md:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[800px]"
        >
          {/* Eyebrow */}
          <motion.p
            variants={staggerItem}
            className="text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase mb-5 sm:mb-6 text-white/50"
          >
            Professional Kitchen Equipment
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-semibold tracking-tight leading-[1.02] text-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 5.5rem)' }}
          >
            Precision built.
            <br />
            <span className="text-white/40">
              Beautifully engineered.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 max-w-[600px] text-white/60"
          >
            Premium commercial appliances for restaurants,
            hotels, and modern culinary spaces — backed by
            a five-year commercial warranty.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              to="/products"
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-500/20"
              style={{ background: '#0071e3' }}
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 bg-white/5 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Trust strip at the very bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(12px)' }}
      >
        <div className="page-container py-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1"
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-5">
              {i > 0 && (
                <span
                  className="hidden sm:block w-[3px] h-[3px] rounded-full"
                  style={{ background: 'rgba(255,255,255,0.25)' }}
                  aria-hidden="true"
                />
              )}
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
