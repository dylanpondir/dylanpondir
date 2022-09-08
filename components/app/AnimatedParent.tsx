import { motion } from 'framer-motion';
import { ChildAnimation } from '../../lib/animations';

export default function AnimatedParent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={ChildAnimation}
    >
      {children}
    </motion.div>
  );
}
