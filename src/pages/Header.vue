<template>
  <div class="c-container">
    <div
      class="px-10 header-block bg-black4 row no-wrap gap-10 items-center full-width justify-between"
    >
      <img height="72" src="~assets/loyalhubLogo.svg" />
      <div class="row items-center no-wrap gap-24">
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
        @click="store.requestModal = true"
        label="Оставить заявку"
        color="black5"
        width="210px"
        height="44px"
        class="rounded-100"
      />
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
</style>
