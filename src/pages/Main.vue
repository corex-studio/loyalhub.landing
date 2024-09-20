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
          <div class="column full-width px-25 py-18 bg-secondary1 rounded-30">
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
            <div class="mt-8 mega-header2 bold">
              Ваши гости,<br />
              Ваш бренд
            </div>
            <div class="body mt-7 text-secondary3">
              Сайт, приложение, QR-меню и другие решения в одном продукте.
              Повышайте доход, развивайте бренд и улучшайте клиентский опыт с
              Loyalhub – просто и без лишних затрат
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
        {{ leftBlockSize.height }}
        <!--        auto-play-->
        <div class="col rounded-30 self-stretch" style="overflow: hidden">
          <SwiperContainer
            :items="products"
            :slides-per-view="1"
            :space-between="0.01"
            :use-bullets="$q.screen.lt.md"
            loop
            no-navigation
            style="width: 100%"
          >
            <!--            <template v-slot:title>-->
            <!--              <div class="mega-text bold col-lg-8 col-md-10">-->
            <!--                <template v-if="$q.screen.gt.sm">-->
            <!--                  Кейсы, которые реализовала-->
            <!--                  <span class="text-primary bold"> команда Loyalhub:</span>-->
            <!--                </template>-->
            <!--                <template v-else>Кейсы команды Loyalhub</template>-->
            <!--              </div>-->
            <!--            </template>-->
            <template v-slot:item="{ item }">
              <q-img
                :src="`assets/${item}`"
                :style="{
                  height: leftBlock?.clientHeight
                    ? `${leftBlock?.clientHeight}px`
                    : 'auto',
                }"
                fit="cover"
              />
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
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const leftBlock = ref<HTMLDivElement | null>(null);

const leftBlockSize = useElementSize(leftBlock);

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
  'program1.png',
  'program2.png',
  'program3.png',
  'program4.png',
  'program5.png',
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
