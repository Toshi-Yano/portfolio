import axios from 'axios';

import { PostType, QiitaItem } from '@/types';

const QIITA_API_URL = 'https://qiita.com/api/v2/authenticated_user/items';

export default async function fetchQiitaPosts() {
  try {
    const { data } = await axios.get<QiitaItem[]>(QIITA_API_URL, {
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
  return displayItem as PostType;
}
