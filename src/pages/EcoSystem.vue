<template>
  <div class="mt-lg-15" style="overflow: hidden">
    <div class="parent-block relative-position">
      <q-img
        v-if="$q.screen.gt.md"
        src="assets/ecoVector.svg"
        style="position: absolute; bottom: 0; left: 0"
      />
      <q-img
        v-else
        height="400px"
        src="assets/smEcoVector.svg"
        style="position: absolute; top: 0; left: 0"
      />
      <div :style="`margin-top: ${$q.screen.lt.lg ? '' : '8dvh'}`" class="">
        <div class="row c-container">
          <div
            :style="`max-width: ${$q.screen.gt.md ? '815px' : ''} `"
            class="column no-wrap"
            style="z-index: 1"
          >
            <div
              class="top-chip px-lg-12 px-sm-9 py-lg-6 py-sm-5 rounded-12 secondary"
            >
              Постройте свою экосистему
            </div>
            <div class="header1 bold mt-lg-12 mt-sm-6">
              От концепции до реализации – все инструменты
              <span class="text-accent2 bold"> в одной платформе</span>
            </div>
            <div class="body mt-lg-8 mt-sm-6">
              Получите полный функционал – доставка, бронирование, уведомления и
              аналитика – всего за несколько дней и бесплатно на старте
            </div>
            <CButton
              :height="$q.screen.lt.lg ? '48px' : '58px'"
              :width="$q.screen.lt.lg ? '100%' : '235px'"
              class="mt-lg-17 mt-sm-10"
              color="accent1"
              label="Подобрать решение"
              @click="store.requestModal = true"
            />
          </div>
          <q-img
            v-if="$q.screen.gt.md"
            fit="contain"
            src="assets/ecoRightPic.png"
            style="position: absolute; right: 0%; top: 50px"
            width="55%"
          />
          <q-img
            v-else
            class="mt-15"
            fit="contain"
            src="assets/smEcoRightPic.png"
            style="max-width: 410px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import { store } from 'src/models/store';
</script>

<style lang="scss" scoped>
.parent-block {
  padding: 100px 0 0 0;
  min-height: 100dvh;
  height: 100%;
  position: relative;
}

.top-chip {
  background-color: $secondary1;
  width: fit-content;
}

body.screen--sm,
body.screen--md {
  .parent-block {
    padding: 80px 0 0 0;
    position: relative;
    min-height: unset;
  }
}
</style>
