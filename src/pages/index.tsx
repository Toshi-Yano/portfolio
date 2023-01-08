import Head from 'next/head';

import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Post from '@/components/Post';
import Qualifications from '@/components/Qualification';
import fetchPosts from '@/features/posts/postProvider';
import { PostDetail } from '@/types';

type Props = {
  posts: PostDetail[];
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
      <Post posts={posts}></Post>
      <Qualifications />
    </Layout>
  );
};

export default Home;
