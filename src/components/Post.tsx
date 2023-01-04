import Image from 'next/image';

import { PostDetail } from '@/types';

type Props = {
  posts: PostDetail[];
};

export default function Post({ posts }: Props) {
  return (
    <div className='mx-auto max-w-screen-md'>
      <div className='flex flex-wrap gap-y-12'>
        {posts.map(({ id, ogpUrl, title, url }, i) => {
          return (
            <div className={`w-full p-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-2' : 'sm:pl-2'}`} key={id}>
              <a
                className='block overflow-hidden rounded-lg border-2 border-gray-300 hover:opacity-50'
                href={url}
                rel='noreferrer'
                target='_blank'
              >
                <Image
                  alt={`【画像】${title}`}
                  height={630}
                  layout='responsive'
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  src={ogpUrl!}
                  width={1200}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
