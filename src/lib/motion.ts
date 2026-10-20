import type { Transition, Variants } from "framer-motion";

/** Shared "Apple" easing curve used across every section. */
export const easeApple: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Default spring used for card hover lifts. */
export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/** Parent container that staggers child reveals. */
export const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/** Standard child reveal used by card/section grids. */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeApple },
  },
};

/** Fade-and-rise used for section headers. */
export const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeApple },
  },
};

/** Shared viewport config so every `whileInView` triggers consistently. */
export const viewportOnce = { once: true, margin: "-100px" } as const;
