import SectionHeader from '@/components/SectionHeader';
import PostCard from '@/features/posts/components/PostCard';
import { useDisplayArray } from '@/hooks/useDisplayArray';
import { PostType } from '@/types';

type Props = {
  posts: PostType[];
};

const displayUnit = 4;

export default function Post({ posts }: Props) {
  const [displayArray, addDisplayArray] = useDisplayArray<PostType>(posts, displayUnit);
  const isHiddenAny = () => displayArray.length < posts.length;

  return (
    <SectionHeader title='Qiita'>
      <div className='mx-auto max-w-screen-md'>
        <div className='flex flex-wrap gap-y-4 px-8 md:px-0'>
          {displayArray.map((post, i) => {
            return <PostCard key={post.id} isLeft={i % 2 === 0} post={post} />;
          })}
        </div>
        {isHiddenAny() && (
          <button
            className='px-6 py-2 my-2 mx-auto block base-text-gray rounded-full hover:text-white hover:border-gray-400'
            onClick={addDisplayArray}
          >
            Show More
          </button>
        )}
      </div>
    </SectionHeader>
  );
}
