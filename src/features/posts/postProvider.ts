import fetchQiitaPosts from '@/features/posts/qiita';

export default async function fetchPosts() {
  return await fetchQiitaPosts();
}
