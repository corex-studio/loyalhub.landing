<template>
  <div class="py-lg-50 py-md-40 py-sm-30 bg-black1">
    <div :class="{ 'c-container': $q.screen.gt.sm }">
      <div
        class="bg-white1 rounded-40 pa-lg-20 px-md-10 px-sm-8 py-sm-15 py-md-20 text-black4 column full-width"
      >
        <div class="mega-text bold mb-6">Тарифы</div>
        <div
          class="row full-width justify-between items-center gap-sm-8 gap-md-0"
        >
          <div
            :class="{ 'full-width': $q.screen.lt.md }"
            class="subtitle-text2"
          >
            Выберите число торговых точек
          </div>
          <div class="row items-center gap-5">
            <template v-if="pointsCount <= 20">
              <div class="subtitle-text2">
                {{ $q.screen.lt.md ? 'Итого' : 'Итоговая стоимость' }}:
              </div>
              <div class="mega-text3 bold">
                {{ beautifyNumber(totalPrice, true) }} ₽
              </div>
            </template>
            <template v-else>
              <div class="subtitle-text2">Число ваших точек</div>
              <div class="mega-text3 bold">
                x {{ beautifyNumber(currentPrice, true) }} ₽
              </div>
            </template>
          </div>
        </div>

        <q-slider
          track-size="15px"
          thumb-size="42px"
          class="mt-12 mb-12"
          v-model="pointsCount"
          track-color="white"
          :min="1"
          :max="21"
        />
        <div
          :class="{ 'no-wrap': $q.screen.gt.sm }"
          class="row items-center gap-md-8 gap-sm-6"
        >
          <div class="mega-text bold text-uppercase">
            {{ pointsCount > 20 ? '20+' : pointsCount }} торговых точек
          </div>
          <q-chip
            class="rounded-100 bg-primary row items-center text-white"
            :style="$q.screen.lt.md ? 'height: 44px' : 'height: 48px'"
          >
            <div
              style="height: 27px; width: 27px"
              class="bg-white rounded-100 row items-center justify-center"
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07812 6.125H17.6719C18.2666 6.125 18.75 5.6416 18.75 5.04688C18.75 4.83301 18.6855 4.625 18.5684 4.44922L16.3535 1.12695C16.0928 0.734375 15.6562 0.5 15.1846 0.5H3.56543C3.09668 0.5 2.65723 0.734375 2.39648 1.12695L0.181641 4.44629C0.0644531 4.625 0 4.83301 0 5.04395C0 5.6416 0.483398 6.125 1.07812 6.125ZM1.875 7.0625V11.75V14.0938C1.875 14.8701 2.50488 15.5 3.28125 15.5H9.84375C10.6201 15.5 11.25 14.8701 11.25 14.0938V11.75V7.0625H9.375V11.75H3.75V7.0625H1.875ZM15 7.0625V14.5625C15 15.0811 15.4189 15.5 15.9375 15.5C16.4561 15.5 16.875 15.0811 16.875 14.5625V7.0625H15Z"
                  fill="#6138D3"
                />
              </svg>
            </div>
            <div class="subtitle-text2 pl-3">
              1 = {{ beautifyNumber(currentPrice, true) }}₽
            </div>
          </q-chip>
        </div>
        <div
          class="row full-width justify-between items-center mt-lg-20 mt-md-16 mt-sm-10"
        >
          <FunButton
            v-if="$q.screen.gt.sm"
            @click="store.requestModal = true"
            label="Подобрать решение"
          />
          <div
            :class="$q.screen.lt.md ? 'row' : 'column  items-end'"
            class="gap-1"
          >
            <div class="body text-black2">Сроки запуска:</div>
            <div class="body text-black2">от 2 недель</div>
          </div>
        </div>
        <div v-if="$q.screen.lt.md" class="row full-width justify-center mt-15">
          <FunButton
            @click="store.requestModal = true"
            label="Подобрать решение"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import FunButton from 'src/components/templates/buttons/FunButton.vue';
import { computed, ref } from 'vue';
import { beautifyNumber, store } from 'src/models/store';

const pointsCount = ref(1);

const totalPrice = computed(() => {
  return pointsCount.value * currentPrice.value;
});

const currentPrice = computed(() => {
  return pointsCount.value <= 2
    ? 6000
    : pointsCount.value <= 4
      ? 5000
      : pointsCount.value < 20
        ? 4000
        : 3000;
});
</script>
