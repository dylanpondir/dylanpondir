import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import AnimatedParent from './AnimatedParent';
import AnimatedChild from './AnimatedChild';
import Social from '../Social';
import Bubble from '../effects/Bubble';

export default function SectionTwo() {
  const section_two_ref = useRef<HTMLDivElement>(null);

  // Section two animation
  const { scrollYProgress: scrollSectionTwo } = useScroll({
    container: section_two_ref,
  });

  const yScaleAnimationTwo = useTransform(
    scrollSectionTwo,
    [0, 0.95, 1],
    [0, 0.95, 1]
  );

  const yOpacityAnimationTwo = useTransform(
    scrollSectionTwo,
    [0, 0.5, 0.95],
    [0, 0.15, 1]
  );

  const yRotateXAnimationTwo = useTransform(
    scrollSectionTwo,
    [0, 0.9, 1],
    [-75, -20, 0]
  );

  const moveBubbleY = useTransform(
    scrollSectionTwo,
    [0, 0.1, 0.4, 1],
    [1, 1, 1, 1]
  );

  return (
    <AnimatedSection>
      <motion.div
        className='z-20'
        style={{
          opacity: yOpacityAnimationTwo,
          scale: yScaleAnimationTwo,
          rotateZ: yRotateXAnimationTwo,
        }}
      >
        <AnimatedParent>
          <AnimatedChild classNames='mb-2'>
            <Social />
          </AnimatedChild>
        </AnimatedParent>
      </motion.div>
      <motion.div
        className='absolute h-96 flex w-full z-10 items-center'
        style={{
          x: moveBubbleY,
        }}
      >
        <div className='ml-20 h-screen grid grid-flow-row grid-cols-3 gap-y-24'>
          <Bubble scale={0.1} color={'silver'} distort={5} speed={3} />
          <div className='col-span-3'>
            <Bubble scale={0.1} distort={6} speed={3} />
          </div>
          <Bubble scale={0.1} color={'silver'} distort={5} speed={3} />
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
