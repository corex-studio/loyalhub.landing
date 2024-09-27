<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="column full-width items-center">
        <div class="px-5 py-2 secondary bg-secondary1 rounded-5">
          Внедрение за 14 дней
        </div>
        <div class="mega-header2 bold">Как происходит запуск?</div>
        <div class="mt-20 gap-10 row full-width">
          <div
            v-for="(item, index) in steps"
            :key="index"
            class="item-block justify-center col row no-wrap relative-position"
          >
            <div
              class="header3 bold px-16"
              style="position: absolute; top: 70px; z-index: 2"
            >
              {{ item.title }}
            </div>
            <q-img
              :src="`assets/${item.image}`"
              style="position: absolute; z-index: 1; bottom: 0"
              width="80%"
            />
            <div class="left-part"></div>
            <div class="col column relative-position">
              <div class="right-top-part">
                <div
                  class="row full-width justify-end rounded-24 bg-white full-height"
                >
                  <div
                    class="bg-accent1 py-3 rounded-100 row justify-center header3"
                    style="height: fit-content; width: 105px"
                  >
                    0{{ index + 1 }}
                  </div>
                </div>
              </div>
              <div class="right-bottom-part col-grow bg-secondary1"></div>
            </div>
          </div>
        </div>
        <div
          class="mt-10 row full-width bg-secondary1 justify-between gap-10 items-center rounded-24 px-15 py-22 relative-position"
          style="overflow: hidden"
        >
          <q-img
            src="assets/howToVector.svg"
            style="position: absolute; z-index: 0"
          />
          <div class="row items-center gap-20 col-8 no-wrap" style="z-index: 1">
            <div>ФОТО</div>
            <div class="subtitle">
              Наши специалисты всегда на связи и готовы помочь вам на каждом
              этапе запуска
            </div>
          </div>
          <CButton
            height="58px"
            icon="fa-solid fa-paper-plane"
            icon-size="22px"
            label="Хочу знать больше"
            width="280px"
            @click="openLink('https://t.me/loyalhub_news')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import { openLink } from 'src/models/store';

const steps = [
  {
    title: 'Создание чата в Telegram',
    image: 'step1.png',
  },
  {
    title: 'Настройка и интеграция',
    image: 'step2.png',
  },
  {
    title: 'Обучение и тестирование',
    image: 'step3.png',
  },
  {
    title: 'Запуск и поддержка',
    image: 'step4.png',
  },
];
</script>

<style lang="scss" scoped>
.left-part {
  background-color: $secondary1;
  height: 340px;
  border-radius: 24px 24px 0 24px;
  width: 61%;
}

.right-bottom-part {
  border-radius: 0 24px 24px 0;
}

.right-top-part {
  height: 55px;
  background: linear-gradient(
    30deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(244, 244, 244) 0%,
    rgba(0, 236, 255, 0) 50%
  );
}

.item-block {
  height: 340px;
}
</style>
