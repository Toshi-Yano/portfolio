/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image';

import SectionHeader from '@/components/SectionHeader';
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
        <div className='flex flex-wrap gap-y-4'>
          {displayArray.map(({ id, ogpUrl, title, url }, i) => {
            return (
              <div
                className={`w-full p-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-2' : 'sm:pl-2'}`}
                key={id}
              >
                <a
                  className='block overflow-hidden rounded-lg border-2 border-gray-300 hover:opacity-50'
                  href={url}
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image alt={title} height={200} src={ogpUrl!} width={400} />
                </a>
              </div>
            );
          })}
        </div>
        {isHiddenAny() && (
          <button
            className='px-6 py-2 my-2 mx-auto block text-gray-400 rounded-full hover:text-white hover:border-gray-400'
            onClick={addDisplayArray}
          >
            さらに表示
          </button>
        )}
      </div>
    </SectionHeader>
  );
}
