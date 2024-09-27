import { reactive } from 'vue';

export class Store {
  images = {
    empty: 'https://mtraktor.ru/images/no-image.png',
  };
  requestModal = false;
  rightDrawer = false;
}

export const beautifyNumber = (x: number, toFixed = false) => {
  if (toFixed) x = Number(x.toFixed(2));
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

export const openLink = (link: string) => {
  window.open(link, '_blank');
};

export const store = reactive(new Store());
