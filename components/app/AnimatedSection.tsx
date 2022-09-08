import { motion } from 'framer-motion';
import { SectionAnimation } from '../../lib/animations';

export default function AnimatedSection({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={ref}
      className='min-h-screen w-full flex justify-center items-center'
      variants={SectionAnimation}
    >
      {children}
    </motion.div>
  );
}
