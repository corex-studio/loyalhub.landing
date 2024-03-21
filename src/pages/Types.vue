<template>
  <div>
    <div style="overflow: hidden" class="bg-white1 px-20 pt-20 pb-43">
      <div class="text-black2 c-container bold mega-text">
        Мы создали продукт для крупных сетей и сделали его
        <span class="text-primary bold"> доступным для всех</span>
      </div>
      <div class="column gap-12 mt-25 full-width">
        <div
          :class="{ 'slide-block-top no-wrap': !$q.screen.xs }"
          class="row full-width gap-6 text-black2"
        >
          <div
            v-for="(el, index) in firstRow"
            :key="index"
            class="px-20 slider-item subtitle-text type-block py-7"
          >
            {{ el }}
          </div>
        </div>
        <!-- <div
          :class="{ 'slide-block-bottom no-wrap': !$q.screen.xs }"
          class="row full-width gap-6 text-black2"
        >
          <div
            v-for="(el, index) in secondRow"
            :key="index"
            class="px-20 subtitle-text type-block py-7"
          >
            {{ el }}
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const firstRow = ref<Array<string>>([]);
const secondRow = ref<Array<string>>([]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (const _ in Array.from({ length: 5 }, (x, i) => i)) {
  const els = [
    'Брендированный сайт',
    'Сервис уведомлений',
    'Тейбл тенты',
    'Мобильное приложение',
    'QR-меню',
    'Телеграм бот',
    'Wallet',
    'Отзывы',
    'Оплаты',
    'Crm система',
  ];
  for (const el of els) {
    firstRow.value.push(el);
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (const _ in Array.from({ length: 5 }, (x, i) => i)) {
  const els = [
    'QR-меню',
    'Телеграм бот',
    'Wallet',
    'Отзывы',
    'Оплаты',
    'Crm система',
  ];
  for (const el of els) {
    secondRow.value.push(el);
  }
}
</script>

<style lang="scss" scoped>
@keyframes slide-left {
  to {
    transform: translate(calc(-40%));
  }
}

// @keyframes slide-right {
//   to {
//     transform: translate(0%);
//   }
//   from {
//     transform: translate(-40%);
//   }
// }

.slide-block-top {
  animation: 35s slide-left linear infinite;
  width: fit-content !important;
  // animation-duration: alternate;
}

// .slide-block-bottom {
//   animation: 40s slide-right linear infinite;
//   width: fit-content !important;
//   // animation-duration: alternate;
// }

.type-block {
  white-space: nowrap;
  border-radius: 100px;
  border: 2px $black2 solid;
}
</style>
