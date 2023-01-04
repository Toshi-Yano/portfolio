import axios from 'axios';

import { QiitaItem } from '@/types';

export default async function fetchQiitaPosts() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const res = await axios.get<readonly QiitaItem[]>(process.env.QIITA_API_URL!, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_ACCESS_TOKEN}`,
    },
  });
  return res.data;
}
