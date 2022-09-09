import Link from 'next/link';
import { motion } from 'framer-motion';
import { ItemAnimation, ListAnimation } from '../lib/animations';

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
  TWITTER: {
    href: 'https://twitter.com/dylanpondir',
    label: 'Twitter',
    description: "Tweeting about blockchain, NFT's, and artifical intelligence",
  },
  LINKEDIN: {
    href: 'https://www.linkedin.com/in/dylanpondir/',
    label: 'LinkedIn',
    description: `A brief timeline of my "professional" career`,
  },
};

export default function Social() {
  return (
    <>
      <h2 className='text-white text-5xl mb-4'>Socials</h2>
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={ListAnimation}
        className='grid grid-cols-1 '
      >
        {Object.values(SOCIAL_LINKS).map((link) => (
          <motion.li
            variants={ItemAnimation}
            key={link.href}
            className='col-span-1 space-y-2 mb-4'
          >
            <Link href={link.href} target='_blank'>
              <a className='hover:animate text-saffron hover:text-blue-600 underline underline-offset-4'>
                {link.label}
              </a>
            </Link>
            <p className='text-gray-300'>{link.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}
