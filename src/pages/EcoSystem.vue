<template>
  <div class="mt-15">
    <div class="parent-block relative-position">
      <q-img
        src="assets/ecoVector.svg"
        style="position: absolute; bottom: 0; left: 0"
      />
      <div class="c-container" style="margin-top: 8dvh">
        <div class="row full-width">
          <div
            class="column full-width no-wrap"
            style="max-width: 815px; z-index: 1"
          >
            <div class="top-chip px-12 py-6 rounded-12 secondary">
              Постройте свою экосистему
            </div>
            <div class="header1 bold mt-12">
              От концепции до реализации – все инструменты
              <span class="text-accent2 bold"> в одной платформе</span>
            </div>
            <div class="body mt-8">
              Получите полный функционал – доставка, бронирование, уведомления и
              аналитика – всего за несколько дней и бесплатно на старте
            </div>
            <CButton
              class="mt-17"
              color="accent1"
              height="58px"
              label="Подобрать решение"
              width="235px"
            />
          </div>
          <q-img
            fit="contain"
            src="assets/ecoRightPic.png"
            style="position: absolute; right: 0%; top: 50px"
            width="55%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
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
</style>
