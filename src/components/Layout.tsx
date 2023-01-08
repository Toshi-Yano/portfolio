import Head from 'next/head';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto flex min-h-screen max-w-4xl flex-col gap-5 px-1 sm:px-3'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  );
}
