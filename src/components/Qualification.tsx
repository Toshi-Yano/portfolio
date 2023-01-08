import Image from 'next/image';

import { QualificationType } from '@/types';

type Props = {
  qualifications: QualificationType[];
};

export default function Qualification({ qualifications }: Props) {
  return (
    <div className='flex flex-wrap gap-y-4 justify-center mx-auto max-w-screen-md'>
      {qualifications.map((qualification) => (
        <Image
          key={qualification.pathName}
          alt={qualification.fileName}
          src={qualification.pathName}
          width={100}
          height={100}
          className='mx-1'
        />
      ))}
    </div>
  );
}
