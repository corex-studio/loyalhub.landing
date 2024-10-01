<template>
  <div
    :class="{ 'bg-secondary1': $q.screen.lt.lg }"
    class="parent relative-position pt-8"
    style="overflow-x: hidden"
  >
    <Header />
    <div class="c-container column">
      <div class="row full-width mt-lg-15 gap-10">
        <div
          ref="leftBlock"
          :class="$q.screen.gt.md ? 'col' : ' full-width'"
          class="column gap-xl-10 gap-md-8 gap-sm-6"
          style="height: fit-content"
        >
          <div
            :class="$q.screen.gt.md ? 'bg-secondary1' : ''"
            :style="
              $q.screen.gt.md
                ? 'height: 60dvh; max-height: 600px !important'
                : ''
            "
            class="column no-wrap full-width px-xl-25 px-lg-18 py-lg-16 py-sm-10 rounded-30 justify-evenly relative-position"
          >
            <q-img
              v-if="$q.screen.gt.md"
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
              <div class="mt-md-8 mt-sm-4 mega-header1 bold">
                Ваши гости,<br />
                Ваш бренд
              </div>
              <div
                :class="{ 'text-secondary3': $q.screen.gt.md }"
                class="body mt-7"
              >
                Сайт, приложение, QR-меню и другие решения в одном продукте.
                Повышайте доход, развивайте бренд и улучшайте клиентский опыт с
                Loyalhub – просто и без лишних затрат
              </div>
            </div>
            <div
              v-if="$q.screen.gt.md"
              class="row full-width gap-xl-10 gap-lg-8 gap-sm-6 mt-14"
            >
              <CButton
                class="col secondary"
                color="accent1"
                height="48px"
                label="Начать бесплатно"
                text-color="black1"
                @click="store.requestModal = true"
              />
              <CButton
                class="col secondary"
                height="48px"
                label="Подобрать решение"
                @click="store.requestModal = true"
              />
            </div>
          </div>
          <teleport
            :disabled="!featuresSmSpot || $q.screen.gt.md"
            :to="featuresSmSpot"
          >
            <div
              :class="$q.screen.gt.md ? 'row ' : 'column'"
              class="gap-xl-10 gap-md-8 gap-sm-6"
            >
              <div
                v-for="(item, index) in features"
                :key="index"
                :class="{ 'text-center items-center': $q.screen.lt.lg }"
                class="col px-xl-10 px-lg-8 px-sm-6 py-xl-8 py-lg-7 py-sm-10 rounded-20 bg-secondary1 column gap-2"
              >
                <div class="header2 bold">{{ item.title }}</div>
                <div
                  :class="{ 'text-center': $q.screen.lt.lg }"
                  :style="$q.screen.lt.lg ? 'max-width: 240px' : ''"
                  class="caption text-primary"
                >
                  {{ item.text }}
                </div>
              </div>
            </div>
          </teleport>
        </div>
        <!--        style="overflow: hidden"-->

        <div
          :class="$q.screen.gt.md ? 'col rounded-30' : ' full-width rounded-30'"
          class="self-stretch"
        >
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
                  v-if="$q.screen.gt.md"
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
  <div v-if="$q.screen.lt.lg" class="c-container">
    <div ref="featuresSmSpot" class="mt-15"></div>
  </div>
</template>
<script lang="ts" setup>
import Header from './Header.vue';
import CButton from 'components/templates/buttons/CButton.vue';
import SwiperContainer from 'components/containers/SwiperContainer.vue';
import { computed, ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import { store } from 'src/models/store';

const featuresSmSpot = ref<HTMLDivElement | null>(null);

const leftBlock = ref<HTMLDivElement>();

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
