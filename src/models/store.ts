import { reactive } from 'vue';
import { scroll } from 'quasar';

const { setVerticalScrollPosition, getScrollTarget } = scroll;

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

export const scrollHandler = (spot: string) => {
  const targetSpot = document.getElementById(spot);
  if (!targetSpot) return;
  const target = getScrollTarget(targetSpot);
  const offset = targetSpot.offsetTop;
  const duration = 1000;
  if (spot !== 'top')
    setTimeout(() => {
      setVerticalScrollPosition(target, offset, duration);
    }, 200);
  else setVerticalScrollPosition(target, offset, duration);
};

export const openLink = (link: string) => {
  window.open(link, '_blank');
};

export const store = reactive(new Store());
