// import path from 'path';
// import fs from 'fs';

import Image from 'next/image';

// const directory = path.join(process.cwd(), '')

export default function Qualifications() {
  return (
    <Image
      alt='資格証明書'
      src='/qualifications/SF-Certified_Administrator.png'
      width={200}
      height={200}
    />
  );
}
