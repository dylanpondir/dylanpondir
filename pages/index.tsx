import Head from 'next/head';
import { useRef } from 'react';
import Layout from '../components/app/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '../components/app/AnimatedSection';
import AnimatedParent from '../components/app/AnimatedParent';
import AnimatedChild from '../components/app/AnimatedChild';
import Social from '../components/Social';
import Bubble from '../components/effects/Bubble';
import SectionOne from '../components/app/SectionOne';

export default function Home() {
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
    <>
      <Head>
        <title>Dylan Pondir - Entrepreneur, Advertiser, and Developer</title>
        <meta name='description' content='Who is Dylan Pondir?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <>
          <SectionOne />
          <section>
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
              <div className='absolute h-96 flex w-full z-10 items-center'>
                <motion.div
                  style={{
                    x: moveBubbleY,
                  }}
                >
                  <div className='w-full grid grid-flow-row grid-cols-3 gap-y-24'>
                    <Bubble
                      scale={0.1}
                      color={'silver'}
                      distort={5}
                      speed={3}
                    />
                    <div className='col-span-3'>
                      <Bubble scale={0.1} distort={6} speed={3} />
                    </div>
                    <Bubble
                      scale={0.1}
                      color={'silver'}
                      distort={5}
                      speed={3}
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </section>
        </>
      </Layout>
    </>
  );
}
