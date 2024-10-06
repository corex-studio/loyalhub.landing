<template>
  <div
    :class="{ 'bg-secondary1 rounded-bottom': $q.screen.lt.lg }"
    class="parent relative-position pt-8"
    style="overflow: hidden"
  >
    <Header />
    <section :class="{ 'c-container': $q.screen.gt.md }" class="column">
      <div class="row full-width mt-lg-12 gap-lg-10 gap-sm-8 justify-center">
        <div
          ref="leftBlock"
          :class="$q.screen.gt.md ? 'col' : ' full-width c-container'"
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
            class="column no-wrap full-width px-xl-25 px-lg-18 py-lg-16 pt-sm-10 rounded-30 justify-evenly relative-position"
          >
            <q-img
              v-if="$q.screen.gt.md"
              alt="vector"
              src="assets/mainVector.svg"
              style="position: absolute; bottom: 0; left: 0"
            />
            <div class="column" style="z-index: 1">
              <div class="row no-wrap items-center text-accent2">
                <q-img alt="iiko logo" src="assets/iikoLogo.png" width="80px" />
                <CButton
                  class="secondary"
                  icon-right="fa-solid fa-arrow-up-right"
                  icon-size="20px"
                  label="Официальный партнер iiko"
                  text-button
                  text-color="accent2"
                  @click="openLink('https://store.iiko.ru/loyalhub')"
                />
              </div>
              <h1 class="mt-md-8 mt-sm-4 bold">
                Ваши гости,<br />
                Ваш бренд
              </h1>
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
                :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
                class="col secondary"
                color="accent1"
                height="48px"
                label="Начать бесплатно"
                text-color="black1"
                @click="store.requestModal = true"
              />
              <CButton
                :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
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
                <h1 v-if="$q.screen.lt.lg" class="bold">
                  {{ item.title }}
                </h1>
                <h3 v-else class="bold">{{ item.title }}</h3>
                <div
                  :class="$q.screen.lt.lg ? 'text-center body' : 'caption'"
                  :style="$q.screen.lt.lg ? 'max-width: 240px' : ''"
                  class="text-primary"
                >
                  {{ item.text }}
                </div>
              </div>
            </div>
          </teleport>
        </div>
        <div
          :class="$q.screen.gt.md ? 'col rounded-30' : ' full-width rounded-30'"
          class="self-stretch"
        >
          <SwiperContainer
            :class="{ swiper: $q.screen.gt.md }"
            :items="products"
            :slides-per-view="1"
            :space-between="0.01"
            :style="$q.screen.lt.lg ? 'max-height: 450px' : ''"
            auto-play
            loop
            no-navigation
            style="width: 100%"
            use-bullets
          >
            <template v-slot:item="{ item }">
              <div
                class="column items-center full-height"
                style="overflow: hidden; z-index: 2 !important"
              >
                <h3
                  v-if="$q.screen.gt.md"
                  :class="`text-${item.textColor}`"
                  class="bold"
                  style="position: absolute; top: 5%; z-index: 1"
                >
                  {{ item.title }}
                </h3>
                <q-img
                  :class="{ 'mt-14': $q.screen.lt.lg }"
                  :position="
                    $q.screen.lt.lg ? item.smPosition || 'center' : undefined
                  "
                  :src="`assets/${$q.screen.lt.lg ? item.smImage : item.image}`"
                  :style="`height: ${$q.screen.lt.lg ? '' : height.value + 'px'}; max-width: ${$q.screen.lt.lg ? item.smMaxWidth : ''};`"
                  :width="$q.screen.lt.lg ? item.smWidth : undefined"
                  alt="product"
                  fit="cover"
                />
              </div>
            </template>
          </SwiperContainer>
        </div>
      </div>
    </section>
    <div
      v-if="$q.screen.lt.lg"
      class="c-container"
      style="position: sticky; bottom: 20px; z-index: 2"
    >
      <CButton
        height="48px"
        label="Подобрать решение"
        width="100%"
        @click="store.requestModal = true"
      />
    </div>
    <div v-if="$q.screen.lt.lg" class="full-width dimmed-block"></div>
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
import { openLink, store } from 'src/models/store';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';

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
    smImage: 'smProgram1.png',
    title: 'Приложение',
    textColor: 'black1',
    smWidth: '105%',
    smMaxWidth: '470px',
  },
  {
    image: 'program2.png',
    smImage: 'smProgram2.png',
    title: 'Тейбл тент',
    textColor: 'white',
    smWidth: '110%',
    smMaxWidth: '470px',
  },
  {
    image: 'program3.png',
    smImage: 'smProgram3.png',
    title: 'Веб-сайт',
    textColor: 'black1',
    smWidth: '200%',
    smMaxWidth: '610px',
  },
  {
    image: 'program4.png',
    smImage: 'smProgram4.png',
    title: 'QR-меню',
    textColor: 'white',
    smWidth: '100%',
    smMaxWidth: '470px',
  },
  {
    image: 'program5.png',
    smImage: 'smProgram5.png',
    title: 'Crm – система',
    textColor: 'black1',
    smWidth: '200%',
    smMaxWidth: '610px',
  },
];
</script>

<style lang="scss" scoped>
.parent {
  min-height: 100dvh;
}

body.screen--md,
body.screen--sm {
  .parent {
    min-height: fit-content;
  }
}

.swiper {
  border-radius: 30px;
}

.rounded-bottom {
  border-radius: 0 0 20px 20px;
}

.dimmed-block {
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(244, 244, 244, 0) 0,
    rgb(244, 244, 244) 100%
  );
  z-index: 1;
  height: 40px;
}
</style>
