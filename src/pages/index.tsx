import Head from 'next/head';

import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Post from '@/components/Post';
import Qualification from '@/components/Qualification';
import fetchPosts from '@/features/posts/postProvider';
import getQualifications from '@/features/qualifications/qualificationProvider';
import { PostType, QualificationType } from '@/types';

type Props = {
  posts: PostType[];
  qualifications: QualificationType[];
};

export async function getStaticProps() {
  const posts = await fetchPosts();
  const qualifications = getQualifications();
  return { props: { posts, qualifications } };
}

const Home: NextPage<Props> = ({ posts, qualifications }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Toshi-Yano</title>
      </Head>
      <Post posts={posts}></Post>
      <Qualification qualifications={qualifications}></Qualification>
    </Layout>
  );
};

export default Home;
