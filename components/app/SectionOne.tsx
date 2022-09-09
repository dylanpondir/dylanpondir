import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedParent from './AnimatedParent';
import AnimatedChild from './AnimatedChild';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import Bubble from '../effects/Bubble';

export default function SectionOne() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const moveBubbleY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5],
    [-300, -80, 25, 0]
  );

  const yRotateYSectionOne = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0, 0.7, -50]
  );

  const yPosOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5],
    [0, 0.2, 0.5, 1]
  );

  const yPosScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <div className='fixed h-96 flex w-full justify-center z-20'>
        <motion.div
          initial={{ opacity: 0, y: '-100vh' }}
          animate={{opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            damping: 10,
            stiffness: 100,
            delay: 1,
          }}
          style={{
            y: moveBubbleY,
          }}
        >
          <Bubble />
        </motion.div>
      </div>
      <div className='min-h-screen w-full flex justify-center items-center'>
        <motion.div
          ref={ref}
          className='z-10'
          style={{
            opacity: yPosOpacity,
            scale: yPosScale,
          }}
        >
          <AnimatedParent>
            <AnimatedChild classNames='mb-2'>
              <span className='text-white text-5xl md:text-7xl'>
                Dylan Pondir
              </span>
            </AnimatedChild>
            <AnimatedChild>
              <span className='text-xl md:text-2xl font-thin text-white '>
                Entrepreneur,{' '}
                <span className='text-saffron'>
                  <a
                    href='https://pondir.com'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:border-b'
                  >
                    Advertiser
                  </a>
                </span>
                , and Developer
              </span>
            </AnimatedChild>
          </AnimatedParent>
        </motion.div>
        <motion.div
          style={{ rotateY: yRotateYSectionOne, opacity: yPosOpacity }}
          className='flex w-full fixed bottom-8 justify-center items-center z-10'
        >
          <div className='font-bold text-gray-200'>
            <ArrowDownIcon
              className='animate-pulse'
              color='saffron'
              width={25}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
