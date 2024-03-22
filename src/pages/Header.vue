<template>
  <div class="c-container">
    <div
      class="px-10 header-block bg-black4 row no-wrap gap-10 items-center full-width justify-between"
    >
      <img
        v-if="$q.screen.gt.sm"
        :height="$q.screen.lt.lg ? 62 : 72"
        src="~assets/loyalhubLogo.svg"
      />
      <img v-else height="29" src="~assets/loyalhubHeart.svg" />

      <div v-if="$q.screen.gt.md" class="row items-center no-wrap gap-24">
        <CButton
          @click="scrollHandler('cards')"
          label="Наши продукты"
          hover-text-color="white"
          text-button
        />
        <CButton
          @click="scrollHandler('benefits')"
          label="Преимущества"
          hover-text-color="white"
          text-button
        />
        <CButton
          @click="scrollHandler('footer')"
          label="Контакты"
          hover-text-color="white"
          text-button
        />
      </div>
      <CButton
        v-if="$q.screen.gt.md"
        @click="store.requestModal = true"
        label="Оставить заявку"
        color="black5"
        width="210px"
        height="44px"
        class="rounded-100"
      />
      <svg
        v-else
        @click="store.rightDrawer = !store.rightDrawer"
        :width="$q.screen.lt.md ? 21 : 28"
        height="22"
        viewBox="0 0 28 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
      >
        <path
          d="M2.00012 2H26.0001M2.00012 11H26.0001M2.00012 20H26.0001"
          stroke="white"
          stroke-width="3.1875"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CButton from 'src/components/templates/buttons/CButton.vue';
import { store } from 'src/models/store';

import { scroll } from 'quasar';
const { setVerticalScrollPosition, getScrollTarget } = scroll;

const scrollHandler = (spot: string) => {
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
.header-block {
  height: 72px;
  z-index: 1;
  border-radius: 100px;
}

body.screen--md {
  .header-block {
    height: 62px;
  }
}

body.screen--sm {
  .header-block {
    height: 44px;
  }
}
</style>
