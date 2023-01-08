/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image';
import { useState } from 'react';

import { PostDetail } from '@/types';

type Props = {
  posts: PostDetail[];
};

const displayUnit = 4;

export default function Post({ posts }: Props) {
  const [displayNumber, setDisplayNumber] = useState(displayUnit);
  const displayPosts = posts.slice(0, displayNumber);

  const addDisplayNumber = () => {
    setDisplayNumber(displayNumber + displayUnit);
  };

  const isHiddenAny = () => displayPosts.length < posts.length;

  return (
    <div className='mx-auto max-w-screen-md'>
      <div className='flex flex-wrap gap-y-12'>
        {displayPosts.map(({ id, ogpUrl, title, url }, i) => {
          return (
            <div className={`w-full p-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-2' : 'sm:pl-2'}`} key={id}>
              <a
                className='block overflow-hidden rounded-lg border-2 border-gray-300 hover:opacity-50'
                href={url}
                rel='noreferrer'
                target='_blank'
              >
                <Image alt={`【画像】${title}`} height={630} src={ogpUrl!} width={1200} />
              </a>
            </div>
          );
        })}
      </div>
      {isHiddenAny() && (
        <button
          className='px-6 py-2 my-2 mx-auto block text-gray-400 rounded-full hover:text-white hover:border-gray-400'
          onClick={addDisplayNumber}
        >
          さらに表示
        </button>
      )}
    </div>
  );
}
