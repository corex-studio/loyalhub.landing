<template>
  <div
    :style="
      $q.screen.lt.lg
        ? 'background-image: url(assets/mainBGmd.png); background-position-y: 200px'
        : 'background-image: url(assets/mainBG.png)'
    "
    style="overflow-x: hidden"
    class="parent relative-position pt-15"
  >
    <Header />
    <div class="c-container column items-center">
      <div
        style="text-align: center"
        class="huge-text bold mt-lg-48 mt-md-30 mt-sm-17"
      >
        Loyalhub: бесплатный запуск брендированных решений
      </div>
      <div
        style="text-align: center; max-width: 900px"
        :style="$q.screen.lt.lg ? 'max-width: 500px' : ''"
        class="mt-md-10 mt-sm-8 header-text"
        :class="{ bold: $q.screen.gt.md }"
      >
        Омниканальная платформа для совершенствования опыта между гостем и
        рестораном
        <!-- PUSH и СМС • Сайт • Мобильное приложение • СRM • Тейбл-тэнты
        • Оплаты • Отзывы •Wallet • QR-меню • Telegram бот -->

      </div>
      <div class="info-block mt-10 px-md-20 px-sm-8 py-7 text-center">
        <div class="subtitle-text2 row no-wrap gap-5">
          <svg v-if="$q.screen.gt.sm" style="min-width: 26px" width="26" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
          С 1 октября стоимость лицензий увеличится на 10 рублей. </div>
        <div class="subtitle-text3 mt-3 ">Изменение связано с удобством в расчетах.</div>
      </div>
      <FunButton
        @click="store.requestModal = true"
        label="Подобрать решение"
        class="mt-md-20 mt-sm-15"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { store } from 'src/models/store';
import Header from './Header.vue';
import FunButton from 'src/components/templates/buttons/FunButton.vue';
</script>

<style lang="scss" scoped>
.parent {
  height: 100vh;
  background-position: bottom;
  background-clip: content;
  background-size: cover;
  background-repeat: no-repeat;
}

.info-block {
background-color: rgba(47, 51, 54, 0.82);
  border-radius: 15px;
}
</style>
