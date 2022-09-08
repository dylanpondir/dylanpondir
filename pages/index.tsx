import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Journey from '../components/Journey';
import Layout from '../components/app/Layout';
import dylanPic from '../public/DylanPondir.jpg';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ItemAnimation,
  ListAnimation,
  ChildAnimation,
} from '../lib/animations';
import Section from '../components/app/AnimatedSection';
import AnimatedSection from '../components/app/AnimatedSection';
import AnimatedParent from '../components/app/AnimatedParent';
import AnimatedChild from '../components/app/AnimatedChild';
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowDownOnSquareStackIcon,
  ArrowDownRightIcon,
  ArrowUturnDownIcon,
  BeakerIcon,
} from '@heroicons/react/24/solid';
import Social from '../components/Social';

const ActionButtons = {
  SOCIALS: {
    label: 'Socials',
    icon: null,
  },
  ABOUT: {
    label: 'About',
    icon: null,
  },
  CONTACT: {
    label: 'Contact',
    icon: null,
  },
  RANDOM: {
    label: 'Random',
    icon: null,
  },
};

function getActiveComponent(activeComponent: string): JSX.Element {
  switch (activeComponent) {
    case ActionButtons.ABOUT.label:
      return <Journey />;
    case ActionButtons.CONTACT.label:
      return <>Contact</>;
    case ActionButtons.RANDOM.label:
      return <>Random</>;
    default:
      return <></>;
  }
}

export default function Home() {
  const section_one_ref = useRef<HTMLDivElement>(null);
  const section_two_ref = useRef<HTMLDivElement>(null);

  // Section one animation
  const { scrollYProgress: scrollSectionOne } = useScroll({
    container: section_one_ref,
  });
  const yRotateYSectionOne = useTransform(
    scrollSectionOne,
    [0, 0.2, 0.3, 1],
    [0, 75, 100, 0]
  );
  const yHeaderPosAnim = useTransform(
    scrollSectionOne,
    [0, 0.5, 0.7, 1],
    [0, 50, 100, 0]
  );
  const yPosOpacity = useTransform(
    scrollSectionOne,
    [0, 0.2, 0.3],
    [1, 0.6, 0]
  );
  const yPosScale = useTransform(scrollSectionOne, [0, 0.5, 1], [1, 2, 0]);

  // Section two animation
  const { scrollYProgress: scrollSectionTwo } = useScroll({
    container: section_two_ref,
  });

  const yScaleAnimationTwo = useTransform(
    scrollSectionTwo,
    [0, 0.95, 1],
    [0, 1, 1]
  );

  const yOpacityAnimationTwo = useTransform(
    scrollSectionTwo,
    [0, 0.5, 0.95, 1],
    [0, 0.15, 1, 1]
  );

  const yRotateXAnimationTwo = useTransform(
    scrollSectionTwo,
    [0, 0.9, 1],
    [-100, -100, 100]
  );

  return (
    <>
      <Head>
        <title>Dylan Pondir - Advertiser, Developer, and Entrepreneur</title>
        <meta name='description' content='Who is Dylan Pondir?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <>
          <AnimatedSection ref={section_one_ref}>
            <motion.div
              style={{
                opacity: yPosOpacity,
                rotateY: yHeaderPosAnim,
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
              className='flex w-full fixed bottom-8 justify-center items-center'
            >
              <div className='font-bold text-gray-200'>
                <ArrowDownIcon
                  className='animate-pulse'
                  color='saffron'
                  width={25}
                />
              </div>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection ref={section_two_ref}>
            <motion.div
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
          </AnimatedSection>
        </>
      </Layout>
    </>
  );
}
