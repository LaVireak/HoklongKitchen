import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const hotspots = [
  {
    id: 1,
    x: 14, y: 42,
    side: 'right' as const,
    title: 'Built-In Refrigerator',
    desc: 'Dual-zone stainless steel unit with smart temperature control and commercial-grade insulation.',
  },
  {
    id: 2,
    x: 51, y: 37,
    side: 'center' as const,
    title: 'Wall Oven & Microwave',
    desc: 'Convection + microwave combo with precision humidity sensors for restaurant-quality results.',
  },
  {
    id: 3,
    x: 62, y: 20,
    side: 'center' as const,
    title: 'Ventilation Hood',
    desc: '1,200 CFM stainless steel range hood with whisper-quiet motor and auto-clean filters.',
  },
  {
    id: 4,
    x: 67, y: 55,
    side: 'center' as const,
    title: 'Professional Gas Range',
    desc: '6-burner pro-style gas range with 25,000 BTU power burners and dual convection oven.',
  },
  {
    id: 5,
    x: 88, y: 58,
    side: 'left' as const,
    title: 'Undermount Sink',
    desc: 'Commercial-depth stainless steel sink with high-arc pull-down sprayer and filtration.',
  },
];

function getTooltipPosition(side: 'left' | 'right' | 'center', x: number) {
  // Prevent tooltip overflow by adjusting position based on hotspot location
  if (side === 'right' || x < 25) return 'left-0';
  if (side === 'left' || x > 75) return 'right-0';
  return 'left-1/2 -translate-x-1/2';
}

export default function HotspotSection() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  return (
    <section id="studio" className="py-24 md:py-32 overflow-hidden" style={{background:'#ffffff'}}>
      <div className="page-container">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-apple-blue text-sm font-medium tracking-wide mb-3">
            Kitchen Studio
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-apple-gray-900 mb-4">
            Explore every detail.
          </h2>
          <p className="text-base md:text-lg max-w-[500px] mx-auto" style={{color:'#6e6e73'}}>
            Hover or tap the hotspots to discover the anatomy of a
            high-performance culinary workspace.
          </p>
        </ScrollReveal>

        {/* Interactive Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-video rounded-2xl lg:rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          style={{background:'#f5f5f7', border:'1px solid #e8e8ed'}}
        >
          {/* Image + overlay — overflow-hidden scoped here for rounded corners */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
            <img
              src="/images/kitchen-full.jpg"
              alt="Full kitchen setup"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0" style={{background:'rgba(0,0,0,0.12)'}} />
          </div>

          {/* Hotspots — hidden on very small screens where they'd be unusable */}
          <div className="hidden sm:block">
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-10"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onMouseEnter={() => setActiveSpot(spot.id)}
                onMouseLeave={() => setActiveSpot(null)}
              >
                <button
                  type="button"
                  aria-label={`View details for ${spot.title}`}
                  onClick={() =>
                    setActiveSpot((prev) => (prev === spot.id ? null : spot.id))
                  }
                  className="relative flex items-center justify-center w-11 h-11 cursor-pointer group touch-manipulation"
                >
                  {/* Pulse ring */}
                  <span className="absolute w-full h-full rounded-full bg-white/30 animate-ping" aria-hidden="true" />
                  {/* Button */}
                  <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-apple-gray-900 group-hover:bg-apple-blue group-hover:text-white transition-colors duration-300">
                    <Plus size={12} strokeWidth={2.5} />
                  </span>
                </button>

                {/* Tooltip */}
                <AnimatePresence>
                  {activeSpot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute mt-2 w-[200px] sm:w-60 p-4 rounded-xl shadow-lg pointer-events-none z-20 ${getTooltipPosition(spot.side, spot.x)}`}
                      style={{background:'rgba(255,255,255,0.95)', backdropFilter:'blur(20px)', border:'1px solid rgba(0,0,0,0.08)'}}
                    >
                      <h4 className="text-sm font-semibold text-apple-gray-900 mb-1">
                        {spot.title}
                      </h4>
                      <p className="text-xs text-apple-gray-500 leading-relaxed">
                        {spot.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile: list view of hotspot data for small screens */}
        </motion.div>

        {/* Mobile hotspot list — shown only on small screens */}
        <div className="sm:hidden mt-6 space-y-3">
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="rounded-xl p-4"
              style={{ background: '#f5f5f7', border: '1px solid #e8e8ed' }}
            >
              <h4 className="text-sm font-semibold text-apple-gray-900 mb-1">
                {spot.title}
              </h4>
              <p className="text-xs text-apple-gray-500 leading-relaxed">
                {spot.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-apple-gray-900 text-white text-sm font-medium hover:bg-apple-gray-600 transition-colors duration-300"
          >
            Book a Kitchen Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
