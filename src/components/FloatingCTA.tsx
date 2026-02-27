import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating CTA that appears after the user scrolls past the hero.
 * Subtle, non-intrusive — appears in bottom-right corner.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);

      const footer = document.getElementById('site-footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setNearFooter(footerTop <= window.innerHeight - 24);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && !nearFooter && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-40"
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))', right: '1rem' }}
        >
          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-apple-gray-900 text-white text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-apple-gray-600 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
            Get a Quote
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
