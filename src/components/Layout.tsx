import Head from 'next/head';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  );
}
