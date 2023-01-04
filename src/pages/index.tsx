import Head from 'next/head';

import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import fetchPosts from '@/features/posts/postProvider';
import { Post } from '@/types';

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts } };
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Toshi-Yano</title>
      </Head>
      <h1>Hello World!</h1>
      <div>{posts[0].title}</div>
    </Layout>
  );
};

export default Home;
