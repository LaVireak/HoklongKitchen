/**
 * Apple-style animation variants for Framer Motion
 * Calm, intentional, smooth — 400–700ms with cubic-bezier easing
 */

// Apple's signature ease curve
export const appleEase = [0.25, 0.46, 0.45, 0.94] as const;
export const appleEaseOut = [0.22, 1, 0.36, 1] as const;

// ── Fade + Slide Up ──────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: appleEaseOut },
  },
};

// ── Fade + Slide Down ────────────────────────────────────────────
export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: appleEaseOut },
  },
};

// ── Fade In (opacity only) ──────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: appleEase },
  },
};

// ── Blur Fade ────────────────────────────────────────────────────
export const blurFade = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: appleEaseOut },
  },
};

// ── Scale In ─────────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: appleEaseOut },
  },
};

// ── Stagger Container ────────────────────────────────────────────
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ── Stagger Item ─────────────────────────────────────────────────
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: appleEaseOut },
  },
};

// ── Slide In from Left ───────────────────────────────────────────
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: appleEaseOut },
  },
};

// ── Slide In from Right ──────────────────────────────────────────
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: appleEaseOut },
  },
};

// ── Number Counter Spring ────────────────────────────────────────
export const counterSpring = {
  type: 'spring',
  stiffness: 50,
  damping: 20,
  duration: 2,
};
