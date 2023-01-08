import fs from 'fs';

import { QualificationType } from '@/types';

const path = '/qualifications';
const directory = `./public${path}`;

export default function getQualifications() {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map(
    (fileName) => ({ fileName: fileName, pathName: `${path}/${fileName}` } as QualificationType),
  );
}
