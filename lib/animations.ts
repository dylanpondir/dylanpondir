import { Variants } from 'framer-motion';

export const ListAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const ChildAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const ItemAnimation: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 0 },
  transition: { type: 'spring' },
};

export const SectionAnimation: Variants = {
  offscreen: {
    y: '0',
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      repeat: Infinity,
    },
  },
};
