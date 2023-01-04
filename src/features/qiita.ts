import axios from 'axios';

import { Post, QiitaItem } from '@/types';

export default async function fetchQiitaPosts() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { data } = await axios.get<readonly QiitaItem[]>(process.env.QIITA_API_URL!, {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_ACCESS_TOKEN}`,
      },
    });

    return data.map(pickPropertyForDisplay);
  } catch (error) {
    console.error(error);
    throw new Error('Qiitaの記事取得処理に失敗しました。');
  }
}

function pickPropertyForDisplay(item: QiitaItem) {
  const displayItem = (({ title, created_at, url }) => ({ created_at, title, url }))(item);
  return displayItem as Post;
}
