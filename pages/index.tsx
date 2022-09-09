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
    </>
  );
}
