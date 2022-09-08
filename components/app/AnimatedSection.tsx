import { motion } from 'framer-motion';
import { SectionAnimation } from '../../lib/animations';

export default function AnimatedSection({
  children,
  forwardRef,
}: {
  children: React.ReactNode;
  forwardRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={forwardRef}
      className='min-h-screen w-full flex justify-center items-center'
      variants={SectionAnimation}
    >
      {children}
    </motion.div>
  );
}
