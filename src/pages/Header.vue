<template>
  <div class="c-container">
    <div
      class="header-block row no-wrap gap-5 items-center full-width justify-between"
    >
      <img
        v-if="$q.screen.gt.sm"
        :height="$q.screen.gt.lg ? 56 : 52"
        src="assets/loyalhubLogo.png"
      />
      <img v-else src="assets/loyalhubLogoSmall.svg" width="165px" />
      <div
        v-if="$q.screen.gt.md"
        class="row items-center no-wrap gap-xl-16 gap-sm-10"
      >
        <CButton
          label="Преимущества"
          text-button
          text-color="black"
          @click="scrollHandler('benefits')"
        />
        <CButton
          label="Наши продукты"
          text-button
          text-color="black"
          @click="scrollHandler('cards')"
        />
        <CButton label="Отзывы" text-button text-color="black" />
        <CButton label="Кейсы" text-button text-color="black" />
      </div>
      <div class="row items-center no-wrap gap-xl-10 gap-lg-6 gap-sm-4">
        <div v-if="$q.screen.gt.lg" style="text-wrap: nowrap">
          +7 900 351 90 50
        </div>
        <CIconButton
          v-else
          :size="$q.screen.gt.md ? '45px' : '40px'"
          icon="fa-solid fa-phone"
          @click="openLink('tel:+79003519050')"
        />
        <CIconButton
          :size="$q.screen.gt.md ? '45px' : '40px'"
          icon="fa-solid fa-paper-plane"
          @click="openLink('https://t.me/loyalhub_news')"
        />
        <CIcon
          v-if="$q.screen.lt.lg"
          class="cursor-pointer ml-6"
          hover-color="accent2"
          name="fa-solid fa-bars"
          size="24px"
          @click="store.rightDrawer = true"
        />
        <CButton
          v-if="$q.screen.gt.md"
          :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
          :width="$q.screen.gt.lg ? '210px' : 'auto'"
          class="secondary"
          height="44px"
          label="Начать бесплатно"
          @click="store.requestModal = true"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CButton from 'src/components/templates/buttons/CButton.vue';
import { openLink, store } from 'src/models/store';
import CIcon from 'src/components/templates/buttons/CIcon.vue';
import { scroll } from 'quasar';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';
import CIconButton from 'components/templates/buttons/CIconButton.vue';

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
  height: 56px;
  z-index: 1;
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

.tg-block {
  height: 45px;
  min-width: 45px;
  border-radius: 12px;
  background: $primary;
}
</style>
