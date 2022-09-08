import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';

const PONDIR_LINK = {
  href: 'https://www.pondir.com',
  label: 'Pondir',
  description: 'The ultimate toolkit for advertisers',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <main className='bg-black font-sans mx-auto w-full'>
        <div className=' h-screen w-full p-0 fixed' />

        <motion.div
          className='fixed top-0 left-0 right-0 h-2 bg-saffron'
          style={{ scaleX }}
        />
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
        >
          {children}
        </motion.div>
      </main>
      {/* <footer className='flex bg-black justify-center items-center w-full h-24 border-t border-saffron text-white font-sans font-thin'>
        {`© ${new Date().getFullYear()} Dylan Pondir`}
      </footer> */}
    </>
  );
}
