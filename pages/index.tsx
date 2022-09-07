import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Journey from '../components/Journey';
import Layout from '../components/Layout';
import dylanPic from '../public/DylanPondir.jpg';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = {
  INSTAGRAM: {
    href: 'https://www.instagram.com/dylanpondir/',
    label: 'Instagram',
    description: 'Daily life, travel, and photography.',
  },
  YOUTUBE: {
    href: 'https://www.youtube.com/c/dylanpondir',
    label: 'YouTube',
    description: 'Advertising courses and tutorials',
  },
  TIKTOK: {
    href: 'https://www.tiktok.com/@dylanbusiness',
    label: 'TikTok',
    description: 'Bite-sized advertising tips and tricks',
  },
  LINKEDIN: {
    href: 'https://www.linkedin.com/in/dylanpondir/',
    label: 'LinkedIn',
    description: 'To be honest, I need to remember my password',
  },
  TWITTER: {
    href: 'https://twitter.com/dylanpondir',
    label: 'Twitter',
    description: "Tweeting about blockchain, NFT's, and artifical intelligence",
  },
};

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

const name = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
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
  const [activeComponent, setActiveComponent] = useState<
    JSX.Element | undefined
  >();

  function handleActionClick(action: string) {
    setActiveComponent(getActiveComponent(action));
  }

  return (
    <>
      <Head>
        <title>Dylan Pondir - Advertiser, Developer, and Entrepreneur</title>
        <meta name='description' content='Who is Dylan Pondir?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <div className='flex flex-col md:flex-row md:space-x-20'>
            <motion.div
              className='w-52 -z-10 md:z-0 md:w-auto flex shadow-2xl rounded-3xl shadow-gray-600 '
              initial={{ rotateY: 5, rotateX: -5, scale: 1.1 }}
              animate={{ rotateY: 15, rotateX: -10, scale: 1.2 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Image
                className='rounded-3xl transition transition-duration-700'
                placeholder='blur'
                loading='lazy'
                objectFit='cover'
                objectPosition='center'
                src={dylanPic}
                alt='Dylan Pondir'
                width={1134 / 3}
                height={1512 / 3}
              />
            </motion.div>
            <div className='basis-full md:basis-3/4 flex flex-col'>
              <motion.div initial='hidden' animate='visible' variants={name}>
                <motion.div variants={item}>
                  <span className='text-black text-5xl font-black'>
                    Dylan Pondir
                  </span>
                </motion.div>
                <motion.div variants={item}>
                  <span className='font-bold'>
                    Entrepreneur, Advertiser, and Developer
                  </span>
                </motion.div>
              </motion.div>
              <motion.ul
                initial='hidden'
                animate='visible'
                variants={list}
                className='grid grid-cols-1 '
              >
                {Object.values(SOCIAL_LINKS).map((link) => (
                  <motion.li
                    variants={item}
                    key={link.href}
                    className='col-span-1 md:col-span-2 space-y-2'
                  >
                    <Link href={link.href} target='_blank'>
                      <a className=' hover:animate text-blue-500 hover:text-blue-600 font-semibold underline underline-offset-4'>
                        {link.label}
                      </a>
                    </Link>
                    <p className='text-gray-500 text-'>{link.description}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
