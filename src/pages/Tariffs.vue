<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="text-center mega-header2 bold">
        <span class="bold text-underline">Единый тариф</span>
        для всего продукта
      </div>
      <div class="mt-23 row full-width gap-10">
        <div
          class="rounded-30 bg-secondary1 col px-25 py-20 column relative-position"
        >
          <q-img
            src="assets/tariffLeftVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <q-img
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
          <div class="mt-30 row items-center gap-4" style="z-index: 1">
            <div class="mega-header2 bold text-accent2">от 6 000 ₽</div>
            <div class="secondary text-secondary3">/в месяц</div>
          </div>
        </div>
        <div
          class="rounded-30 bg-primary col column justify-between relative-position px-25 py-20 text-white"
        >
          <q-img
            src="assets/tariffRightVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <div class="column full-width">
            <div class="header1 bold">Рассчитать количество торговых точек</div>
            <div class="secondary mt-6" style="max-width: 450px">
              Выберите число торговых точек, чем больше точек – тем ниже цена
            </div>
            <div class="mt-12 column gap-10 no-wrap full-width">
              <div
                class="row items-center gap-5 px-8 py-6 rounded-12"
                style="
                  background-color: rgba(255, 255, 255, 0.2);
                  width: fit-content;
                "
              >
                <q-icon color="accent1" name="fa-solid fa-shop" size="22px" />
                <div class="secondary">
                  1 торговая точка = {{ currentPrice }} ₽
                </div>
              </div>
              <div class="row items-center gap-6">
                <CIconButton
                  :disabled="pointsCount === 0"
                  color="white"
                  icon="fa-regular fa-minus"
                  icon-color="black"
                  icon-size="22px"
                  size="48px"
                  @click="pointsCount--"
                />
                <CInput
                  v-model="pointsCount"
                  class="quantity-input"
                  height="48px"
                  type="number"
                  width="120px"
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
          <div class="column full-width gap-6">
            <div class="header2">Итого: {{ totalPrice }} ₽</div>
            <CButton
              color="accent1"
              height="56px"
              label="Оставить заявку"
              width="290px"
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
