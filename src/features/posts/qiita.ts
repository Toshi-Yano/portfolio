import axios from 'axios';

import { PostDetail, QiitaItem } from '@/types';

export default async function fetchQiitaPosts() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { data } = await axios.get<readonly QiitaItem[]>(process.env.QIITA_API_URL!, {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_ACCESS_TOKEN}`,
      },
    });
    return data.map(pickDisplayProperties);
  } catch (error) {
    console.error(error);
    throw new Error('Qiitaの記事取得処理に失敗しました。');
  }
}

function pickDisplayProperties(item: QiitaItem) {
  const displayItem = (({ id, title, url }) => ({ id, title, url }))(item);
  return displayItem as PostDetail;
}
