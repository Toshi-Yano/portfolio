import Head from 'next/head';

import type { NextPage } from 'next';

import Layout from '@/components/Layout';
// import Post from '@/components/Post';
import Profile from '@/components/Profile';
import fetchPosts from '@/features/posts/api/postProvider';
import Post from '@/features/posts/components/Post';
import getQualifications from '@/features/qualifications/api/qualificationProvider';
import Qualification from '@/features/qualifications/components/Qualification';
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
      <Profile />
      <Post posts={posts}></Post>
      <Qualification qualifications={qualifications}></Qualification>
    </Layout>
  );
};

export default Home;
