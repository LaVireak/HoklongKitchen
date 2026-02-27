import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '../lib/animations';

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Reusable scroll-reveal animation wrapper.
 * Wraps children in a Framer Motion div that animates on viewport entry.
 */
export default function ScrollReveal({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
