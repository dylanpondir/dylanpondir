import { motion } from 'framer-motion';
import { SectionAnimation } from '../../lib/animations';

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className='min-h-screen w-full flex justify-center items-center'
      variants={SectionAnimation}
    >
      {children}
    </motion.div>
  );
}
