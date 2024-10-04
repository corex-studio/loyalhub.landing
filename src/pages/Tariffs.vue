<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="text-center">
        <div v-if="$q.screen.gt.sm" class="mega-header2">
          <span class="bold text-underline">Единый тариф</span>
          для всего продукта
        </div>
        <div v-else class="column items-center gap-2 full-width mega-header2">
          <div class="bold text-underline" style="width: fit-content">
            Единый тариф
          </div>
          <div>для всего продукта</div>
        </div>
      </div>
      <div
        :class="$q.screen.lt.lg ? 'column' : 'row'"
        class="mt-lg-20 mt-sm-15 full-width gap-lg-10 gap-sm-6"
      >
        <div
          :class="$q.screen.lt.lg ? 'rounded-20' : 'rounded-30'"
          class="bg-secondary1 col px-lg-25 px-sm-8 py-lg-20 py-sm-12 column relative-position"
          style="overflow: hidden"
        >
          <q-img
            src="assets/tariffLeftVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <q-img
            v-if="$q.screen.gt.md"
            src="assets/tariffLeftMoc.png"
            style="
              position: absolute;
              top: 18px;
              right: 0;
              z-index: 0;
              max-width: 200px;
            "
            width="100%"
          />
          <div class="header1 bold text-primary" style="z-index: 1">
            Тариф «единый»
          </div>
          <div
            class="mt-10 column gap-8 full-width secondary"
            style="z-index: 1"
          >
            <div
              v-for="(item, index) in features"
              :key="index"
              class="row gap-6 items-center"
            >
              <q-icon color="success" name="fa-regular fa-check" size="24px" />
              <div>
                {{ item }}
              </div>
            </div>
          </div>
          <div
            class="mt-lg-30 mt-sm-20 row items-center gap-4"
            style="z-index: 1"
          >
            <div class="mega-header2 bold text-accent2">от 6 000 ₽</div>
            <div
              :class="$q.screen.lt.lg ? 'body' : 'secondary'"
              class="text-secondary3"
            >
              /в месяц
            </div>
          </div>
        </div>
        <div
          :class="$q.screen.lt.lg ? 'rounded-20' : 'rounded-30'"
          class="bg-primary col column gap-5 justify-between relative-position px-lg-25 px-sm-8 py-lg-20 py-sm-12 text-white"
        >
          <q-img
            v-if="$q.screen.gt.md"
            src="assets/tariffRightVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <q-img
            v-else
            src="assets/smTariffRightVector.svg"
            style="position: absolute; top: 0; left: 0; z-index: 0"
          />
          <div class="column full-width">
            <div class="header1 bold">
              {{
                $q.screen.lt.lg
                  ? 'Рассчитать тариф'
                  : 'Рассчитать количество торговых точек'
              }}
            </div>
            <div class="secondary mt-6" style="max-width: 450px">
              Выберите число торговых точек, чем больше точек – тем ниже цена
            </div>
            <div class="mt-lg-12 mt-sm-15 column gap-10 no-wrap full-width">
              <div
                class="row items-center gap-5 px-8 py-6 rounded-12"
                style="
                  background-color: rgba(255, 255, 255, 0.2);
                  width: fit-content;
                "
              >
                <q-icon
                  :size="$q.screen.lt.lg ? '20px' : '22px'"
                  color="accent1"
                  name="fa-solid fa-shop"
                />
                <div :class="$q.screen.lt.lg ? 'body' : 'secondary'">
                  1 торговая точка = {{ currentPrice }} ₽
                </div>
              </div>
              <div class="row items-center gap-6">
                <CIconButton
                  :disabled="pointsCount == 1"
                  color="white"
                  icon="fa-regular fa-minus"
                  icon-color="black"
                  icon-size="22px"
                  size="48px"
                  @click="pointsCount--"
                />
                <CInput
                  :model-value="pointsCount"
                  class="quantity-input"
                  height="48px"
                  type="number"
                  width="120px"
                  @update:model-value="
                    $event > 0 ? (pointsCount = $event) : void 0
                  "
                />
                <CIconButton
                  color="white"
                  icon="fa-regular fa-plus"
                  icon-color="black"
                  icon-size="22px"
                  size="48px"
                  @click="pointsCount++"
                />
              </div>
            </div>
          </div>
          <div class="column mt-sm-19 mt-lg-0 full-width gap-6">
            <div :class="{ bold: $q.screen.lt.lg }" class="header2">
              Итого: {{ totalPrice }} ₽
            </div>
            <CButton
              :height="$q.screen.lt.lg ? '48px' : '56px'"
              color="accent1"
              label="Оставить заявку"
              style="max-width: 290px"
              width="100%"
              @click="store.requestModal = true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CInput from 'components/templates/inputs/CInput.vue';
import { computed, ref } from 'vue';
import CIconButton from 'components/templates/buttons/CIconButton.vue';
import CButton from 'components/templates/buttons/CButton.vue';
import { store } from 'src/models/store';

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

const features = [
  'Описание тарифа  единый',
  'Описание тарифа  единый',
  'Описание тарифа  единый',
  'Описание тарифа  единый',
  'Описание тарифа  единый',
  'Описание тарифа  единый',
];
</script>

<style lang="scss" scoped>
.quantity-input :deep(input) {
  text-align: center !important;
}
</style>
