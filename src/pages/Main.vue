<template>
  <div class="parent relative-position pt-8" style="overflow-x: hidden">
    <Header />
    <div class="c-container column">
      <div class="row full-width mt-15 gap-10">
        <div
          ref="leftBlock"
          class="col column gap-10"
          style="height: fit-content"
        >
          <div
            class="column no-wrap full-width px-25 py-18 bg-secondary1 rounded-30 justify-evenly relative-position"
            style="height: 60dvh; max-height: 600px !important"
          >
            <q-img
              src="assets/mainVector.svg"
              style="position: absolute; bottom: 0; left: 0"
            />
            <div class="column" style="z-index: 1">
              <div class="row no-wrap items-center text-accent2">
                <q-img src="assets/iikoLogo.png" width="80px" />
                <CButton
                  class="secondary"
                  icon-right="fa-solid fa-arrow-up-right"
                  icon-size="20px"
                  label="Официальный партнер iiko"
                  text-button
                  text-color="accent2"
                />
              </div>
              <div class="mt-8 mega-header1 bold">
                Ваши гости,<br />
                Ваш бренд
              </div>
              <div class="body mt-7 text-secondary3">
                Сайт, приложение, QR-меню и другие решения в одном продукте.
                Повышайте доход, развивайте бренд и улучшайте клиентский опыт с
                Loyalhub – просто и без лишних затрат
              </div>
            </div>
            <div class="row full-width gap-10 mt-14">
              <CButton
                class="col secondary"
                color="accent1"
                height="48px"
                label="Начать бесплатно"
                text-color="black1"
              />
              <CButton
                class="col secondary"
                height="48px"
                label="Подобрать решение"
              />
            </div>
          </div>
          <div class="row gap-10">
            <div
              v-for="(item, index) in features"
              :key="index"
              class="col px-10 py-8 rounded-20 bg-secondary1 column gap-2"
            >
              <div class="header2 bold">{{ item.title }}</div>
              <div class="caption text-primary">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="col rounded-30 self-stretch" style="overflow: hidden">
          <SwiperContainer
            :items="products"
            :slides-per-view="1"
            :space-between="0.01"
            auto-play
            loop
            no-navigation
            style="width: 100%"
            use-bullets
          >
            <template v-slot:item="{ item }">
              <div class="column items-center">
                <div
                  :class="`text-${item.textColor}`"
                  class="header1 bold"
                  style="position: absolute; top: 5%; z-index: 1"
                >
                  {{ item.title }}
                </div>
                <q-img
                  :src="`assets/${item.image}`"
                  :style="`height: ${height.value}px`"
                  fit="cover"
                />
              </div>
            </template>
          </SwiperContainer>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './Header.vue';
import CButton from 'components/templates/buttons/CButton.vue';
import SwiperContainer from 'components/containers/SwiperContainer.vue';
import { computed, ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const leftBlock = ref<HTMLDivElement | null>(null);

const height = computed(() => {
  return useElementSize(leftBlock).height;
});

const features = [
  {
    title: '1500+',
    text: 'Заказов проходят через платформу ежедневно',
  },
  {
    title: '35%',
    text: 'Выше средний чек при заказе через Loyalhub',
  },
  {
    title: '200+',
    text: 'Настроек продукта для вашего бизнеса',
  },
];

const products = [
  {
    image: 'program1.png',
    title: 'Приложение',
    textColor: 'black1',
  },
  {
    image: 'program2.png',
    title: 'Тейбл тент',
    textColor: 'white',
  },
  {
    image: 'program3.png',
    title: 'Веб-сайт',
    textColor: 'black1',
  },
  {
    image: 'program4.png',
    title: 'QR-меню',
    textColor: 'white',
  },
  {
    image: 'program5.png',
    title: 'Crm – система',
    textColor: 'black1',
  },
];
</script>

<style lang="scss" scoped>
.parent {
  min-height: 100dvh;
  background-position: bottom;
  background-clip: content;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
