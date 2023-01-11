/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image';

import { PostType } from '@/types';

type Props = {
  isLeft: boolean;
  post: PostType;
};

export default function PostCard({ isLeft, post }: Props) {
  return (
    <div className={`w-full p-0 sm:w-1/2 ${isLeft ? 'sm:pr-2' : 'sm:pl-2'}`}>
      <a
        className='block overflow-hidden rounded-lg border-2 border-gray-300 hover:opacity-50'
        href={post.url}
        rel='noreferrer'
        target='_blank'
      >
        <Image alt={post.title} src={post.ogpUrl!} height={200} width={400} />
      </a>
    </div>
  );
}
