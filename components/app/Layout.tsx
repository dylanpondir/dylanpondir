import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <main className='bg-black font-sans mx-auto w-full px-4'>
        <motion.div
          className='fixed top-0 left-0 right-0 h-2 bg-saffron z-30 '
          style={{ scaleX }}
        />

        {children}
      </main>
    </>
  );
}
