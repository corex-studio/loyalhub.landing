<template>
  <header class="c-container">
    <div
      class="header-block row no-wrap gap-5 items-center full-width justify-between"
    >
      <img
        v-if="$q.screen.gt.sm"
        height="48px"
        alt="logo"
        src="assets/loyalhubLogo.png"
      />
      <img v-else alt="logo" src="assets/loyalhubLogoSmall.svg" width="165px" />
      <div class="row items-center no-wrap gap-lg-6 gap-sm-4">
        <CIconButton
          :color="$q.screen.lt.lg ? 'primary' : 'secondary1'"
          :icon-color="$q.screen.lt.lg ? 'white' : 'black'"
          :icon-size="$q.screen.lt.lg ? '16px' : '18px'"
          :size="$q.screen.gt.md ? '44px' : '40px'"
          icon="fa-solid fa-phone"
          @click="openLink('tel:+79003519050')"
        />
        <CIconButton
          :color="$q.screen.lt.lg ? 'primary' : 'secondary1'"
          :icon-color="$q.screen.lt.lg ? 'white' : 'black'"
          :icon-size="$q.screen.lt.lg ? '16px' : '18px'"
          :size="$q.screen.gt.md ? '44px' : '40px'"
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
          :width="$q.screen.gt.lg ? '195px' : 'auto'"
          class="secondary"
          height="44px"
          label="Начать бесплатно"
          @click="store.requestModal = true"
        />
      </div>
    </div>
    <nav
      v-if="$q.screen.gt.md"
      class="row full-width no-wrap mt-6 gap-12 pb-2"
      style="overflow: auto"
    >
      <CButton
        v-for="(el, index) in tabs"
        :key="index"
        :label="el.title"
        class="secondary"
        text-button
        text-color="black"
        @click="el.click()"
      />
    </nav>
  </header>
</template>
<script lang="ts" setup>
import CButton from 'src/components/templates/buttons/CButton.vue';
import { openLink, scrollHandler, store } from 'src/models/store';
import CIcon from 'src/components/templates/buttons/CIcon.vue';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';
import CIconButton from 'components/templates/buttons/CIconButton.vue';

const tabs = [
  {
    title: 'Преимущества',
    click: () => {
      scrollHandler('why');
    },
  },

  {
    title: 'Продукты',
    click: () => {
      scrollHandler('products');
    },
  },
  {
    title: 'Интегарция с айко',
    click: () => {
      scrollHandler('integration');
    },
  },
  {
    title: 'Crm система',
    click: () => {
      scrollHandler('crm');
    },
  },
  {
    title: 'Этапы работы',
    click: () => {
      scrollHandler('steps');
    },
  },
  {
    title: 'Кейсы',
    click: () => {
      scrollHandler('examples');
    },
  },
  {
    title: 'Отзывы',
    click: () => {
      scrollHandler('reviews');
    },
  },
  {
    title: 'Тарифы',
    click: () => {
      scrollHandler('tariffs');
    },
  },
  {
    title: 'FAQ',
    click: () => {
      scrollHandler('faq');
    },
  },
];
</script>

<style lang="scss" scoped>
.header-block {
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
