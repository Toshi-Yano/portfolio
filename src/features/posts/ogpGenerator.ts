import axios from 'axios';
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM();

export async function generateOGP(url: string) {
  const { data } = await axios.get(url);
  const element = new jsdom.window.DOMParser().parseFromString(data, 'text/html');
  const htmlCollection = element.head.children;
  for (const el of htmlCollection) {
    if (el.getAttribute('property') === 'og:image') {
      return el.getAttribute('content') ?? '';
    }
  }
  return '';
}
