<template>
  <q-drawer
    v-model="store.rightDrawer"
    :breakpoint="0"
    :width="$q.screen.width > 400 ? 400 : $q.screen.width"
    behavior="mobile"
    class="column no-wrap full-width pt-10 relative-position"
    overlay
    show-if-above
    side="right"
  >
    <div class="column full-width px-8 no-wrap">
      <div class="row full-width justify-between">
        <img src="assets/loyalhubLogo.png" height="48px" />
        <CIcon
          class="mt-3 cursor-pointer"
          hover-color="accent2"
          name="fa-regular fa-xmark"
          size="30px"
          @click="store.rightDrawer = false"
        />
      </div>
      <div
        class="mt-15 bg-secondary1 relative-position rounded-20 px-10 py-12 column full-width"
      >
        <q-img
          height="100%"
          src="assets/drawerVector.svg"
          style="position: absolute; left: 0; top: 0; z-index: 0"
        />
        <h3 class="bold" style="z-index: 1">Готовы обсудить проект?</h3>
        <div class="mt-6 body" style="z-index: 1">
          Наши менеджеры свяжутся с вами в ближайшее время
        </div>
        <CButton
          :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
          class="mt-10"
          color="accent1"
          height="48px"
          label="Оставить заявку"
          style="z-index: 1"
          width="205px"
          @click="(store.rightDrawer = false), (store.requestModal = true)"
        />
      </div>
    </div>
    <div class="mt-20 bg-primary col-grow bottom-block px-8 py-16 text-white">
      <nav class="row full-width">
        <div class="column col gap-15">
          <CButton
            v-for="(el, index) in tabs.filter((e, i) => i % 2 == 0)"
            :key="index"
            class="col-10"
            style="width: min-content"
            text-button
            text-color="white"
            @click="el.click()"
          >
            <div class="subtitle-text2">
              {{ el.title }}
            </div>
          </CButton>
        </div>
        <div class="column col gap-15">
          <CButton
            v-for="(el, index) in tabs.filter((e, i) => i % 2 == 1)"
            :key="index"
            class="col-10"
            style="width: min-content"
            text-button
            text-color="white"
            @click="el.click()"
          >
            <div class="subtitle-text2">
              {{ el.title }}
            </div>
          </CButton>
        </div>
      </nav>
      <div class="mt-20">
        <div class="secondary">Связаться с нами</div>
        <CButton
          class="mt-4"
          text-button
          text-color="white"
          @click="openLink('tel:+79003519050')"
        >
          <h4>+7 900 351 90 50</h4>
        </CButton>
        <CIconButton
          class="mt-13"
          color="white"
          icon="fa-solid fa-paper-plane"
          icon-color="primary"
          icon-size="18px"
          size="40px"
          @click="openLink('https://t.me/loyalhub_news')"
        />
      </div>
    </div>
  </q-drawer>
</template>
<script lang="ts" setup>
import { openLink, store } from 'src/models/store';
import CButton from '../templates/buttons/CButton.vue';

import { scroll } from 'quasar';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';
import CIcon from 'components/templates/buttons/CIcon.vue';
import CIconButton from 'components/templates/buttons/CIconButton.vue';

const { setVerticalScrollPosition, getScrollTarget } = scroll;

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
.bottom-block {
  border-radius: 20px 20px 0 0;
}
</style>
