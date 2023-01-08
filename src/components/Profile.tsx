import Image from 'next/image';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

const profile = {
  URL: {
    git: 'https://github.com/Toshi-Yano',
    twitter: 'https://twitter.com/ToshiomashE',
  },
  name: 'Toshi-Yano',
};

export default function Profile() {
  return (
    <div className='pt-4'>
      <div className='mb-4 text-center opacity-90'>
        <a href='#' className='relative block'>
          <Image
            alt='avetor'
            src='/avetor.jpg'
            width={800}
            height={800}
            className='mx-auto object-cover rounded-full h-40 w-40 '
          />
        </a>
      </div>
      <div className='text-center'>
        <p className='text-2xl text-white'>{profile.name}</p>
      </div>
      <div className='flex justify-center pt-2 mx-auto text-gray-500'>
        <a target='_blank' className='mx-1' href={profile.URL.git}>
          <FaGithubSquare size={30} color={'#ccc'} />
        </a>
        <a target='_blank' className='mx-1' href={profile.URL.twitter}>
          <FaTwitterSquare size={30} color={'#ccc'} />
        </a>
      </div>
    </div>
  );
}
