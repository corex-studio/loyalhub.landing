<template>
  <q-drawer
    v-model="store.rightDrawer"
    show-if-above
    overlay
    side="right"
    :width="$q.screen.width > 378 ? 378 : $q.screen.width"
    behavior="mobile"
    bordered
    :breakpoint="0"
    class="column gap-15 full-width pl-15 pr-10 pt-25 relative-position"
  >
    <svg
      @click="store.rightDrawer = false"
      class="close-button"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8L8 24M8 8L24 24"
        stroke="#2F3336"
        stroke-width="2.91667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <div class="column full-width gap-10">
      <CButton
        @click="el.click()"
        v-for="(el, index) in tabs"
        :key="index"
        style="width: min-content"
        text-button
        text-color="black7"
      >
        <div class="subtitle-text2">
          {{ el.title }}
        </div></CButton
      >
    </div>
    <CButton
      @click="(store.rightDrawer = false), (store.requestModal = true)"
      class="rounded-100"
      color="black6"
      width="213px"
      height="44px"
    >
      <div class="row gap-2 items-center">
        Оставить заявку
        <svg
          :width="$q.screen.lt.lg ? 24 : 29"
          height="15"
          viewBox="0 0 29 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0976557 12.4999C0.0976557 12.2062 0.212591 11.9244 0.417177 11.7167C0.621763 11.509 0.899242 11.3923 1.18857 11.3923L24.3415 11.3923L15.3327 2.39817C15.2305 2.29615 15.1491 2.1747 15.0931 2.04074C15.0372 1.90679 15.0077 1.76295 15.0065 1.61744C15.0053 1.47194 15.0323 1.32761 15.086 1.19271C15.1397 1.05781 15.2191 0.934973 15.3196 0.831213C15.4201 0.727452 15.5397 0.644801 15.6716 0.587978C15.8035 0.531155 15.9452 0.501274 16.0885 0.500039C16.3779 0.497547 16.6565 0.611892 16.8629 0.817921L27.7699 11.7083C27.7748 11.7132 27.7797 11.7181 27.7844 11.7231C27.8863 11.8283 27.9665 11.9532 28.0203 12.0903C28.0741 12.2274 28.1003 12.3741 28.0974 12.5216C28.0946 12.6692 28.0627 12.8147 28.0037 12.9495C27.9447 13.0844 27.8598 13.206 27.7539 13.3071L16.8629 24.182C16.7607 24.284 16.6398 24.3646 16.507 24.4191C16.3741 24.4737 16.232 24.5012 16.0888 24.5C15.9455 24.4988 15.8039 24.4689 15.6719 24.4121C15.54 24.3554 15.4204 24.2728 15.3199 24.169C15.2195 24.0653 15.1401 23.9425 15.0864 23.8077C15.0326 23.6728 15.0056 23.5285 15.0068 23.3831C15.0079 23.2376 15.0373 23.0938 15.0933 22.9599C15.1492 22.8259 15.2305 22.7045 15.3327 22.6025L24.3415 13.6076L1.18857 13.6076C0.899242 13.6076 0.621763 13.4909 0.417177 13.2832C0.212591 13.0754 0.0976557 12.7937 0.0976557 12.4999Z"
            :fill="'white'"
            :style="'transform:rotate(-30deg)'"
            style="transition: all 0.5s; transform-origin: center"
          />
        </svg></div
    ></CButton>
  </q-drawer>
</template>
<script lang="ts" setup>
import { store } from 'src/models/store';
import CButton from '../templates/buttons/CButton.vue';

import { scroll } from 'quasar';
const { setVerticalScrollPosition, getScrollTarget } = scroll;

const tabs = [
  {
    title: 'Наши продукты',
    click: () => {
      scrollHandler('cards');
    },
  },
  {
    title: 'Преимущества',
    click: () => {
      scrollHandler('benefits');
    },
  },
  {
    title: 'Контакты',
    click: () => {
      scrollHandler('footer');
    },
  },
];

const scrollHandler = (spot: string) => {
  store.rightDrawer = false;
  const targetSpot = document.getElementById(spot);
  if (!targetSpot) return;
  const target = getScrollTarget(targetSpot);
  const offset = targetSpot.offsetTop;
  const duration = 800;
  if (spot !== 'top')
    setTimeout(() => {
      setVerticalScrollPosition(target, offset, duration);
    }, 200);
  else setVerticalScrollPosition(target, offset, duration);
};
</script>

<style lang="scss" scoped>
.hover-block:hover {
  color: $primary;
  transition: all 0.4s ease;
}

.hover-block {
  color: white;
  transition: all 0.4s ease;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.close-button:hover {
}
</style>
