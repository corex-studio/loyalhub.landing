<template>
  <div class="c-container">
    <div class="text-center header2">
      Более <span class="bold text-accent2"> 150 заведений </span>выбрали
      Loyalhub для управление клиентским опытом – <br />
      от онлайн заказов до лояльности
    </div>
    <div class="mt-25">
      <div class="row full-width gap-6 text-black2 slide-block-top no-wrap">
        <div
          v-for="(el, index) in companies"
          :key="index"
          class="px-lg-20 px-md-12 px-sm-9 slider-item subtitle-text type-block py-lg-7 py-sm-5"
        >
          {{ el }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const companies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
</script>

<style lang="scss" scoped>
@keyframes slide-left {
  to {
    transform: translate(calc(-40%));
  }
}

.slide-block-top {
  animation: 45s slide-left linear infinite;
  width: fit-content !important;
  // animation-duration: alternate;
}

.type-block {
  white-space: nowrap;
  border-radius: 100px;
  border: 2px $black1 solid;
}
</style>
