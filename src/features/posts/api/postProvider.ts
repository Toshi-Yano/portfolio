import { generateOGP } from '@/libs/ogpGenerator';

import fetchQiitaPosts from '@/features/posts/api/qiita';

export default async function fetchPosts() {
  const posts = await fetchQiitaPosts();

  return await Promise.all(
    posts.map(async (post) => {
      const ogpUrl = await generateOGP(post.url);
      post['ogpUrl'] = ogpUrl;
      return post;
    }),
  );
}
