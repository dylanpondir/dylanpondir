import Head from 'next/head';
import { useRef } from 'react';
import Layout from '../components/app/Layout';

import SectionOne from '../components/app/SectionOne';
import SectionTwo from '../components/app/SectionTwo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylan Pondir - Entrepreneur, Advertiser, and Developer</title>
        <meta name='description' content='Who is Dylan Pondir?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
          <SectionOne />
          <SectionTwo />
      </Layout>
      <footer
        className='flex bottom-0 left-0 right-0 w-full h-16 bg-black text-white text-center text-xs md:text-sm'
      >
        <div className='flex justify-center items-center w-full'>
          Copyright © {new Date().getFullYear()} Dylan Pondir. All rights reserved.
        </div>
      </footer>
    </>
  );
}
