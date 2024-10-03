<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="column full-width items-center">
        <div
          :class="$q.screen.lt.lg ? 'rounded-12' : 'rounded-5'"
          class="px-lg-5 px-sm-8 py-lg-2 py-sm-5 secondary bg-secondary1 text-primary"
        >
          Внедрение за 14 дней
        </div>
        <div class="mega-header2 bold mt-sm-4 mt-lg-0">
          Как происходит запуск?
        </div>
        <div
          :class="$q.screen.lt.lg ? 'column' : 'row'"
          class="mt-lg-20 mt-sm-15 gap-lg-10 gap-sm-6 full-width"
        >
          <div
            v-for="(item, index) in steps"
            :key="index"
            class="item-block justify-center col row no-wrap relative-position"
            style="overflow: hidden"
          >
            <div
              :class="{ 'bold ': $q.screen.gt.md }"
              :style="`top: ${$q.screen.lt.lg ? '20px' : '70px'};left: ${$q.screen.lt.lg ? '0' : undefined}`"
              class="header3 px-lg-16 px-sm-10"
              style="position: absolute; z-index: 2"
              v-html="$q.screen.lt.lg ? item.smTitle : item.title"
            ></div>
            <q-img
              :src="`assets/${$q.screen.lt.lg ? 'sm' + item.image[0].toLocaleUpperCase() + item.image.slice(1) : item.image}`"
              :style="`right: ${$q.screen.lt.lg ? '8%' : ''}`"
              :width="$q.screen.lt.lg ? '170px' : '80%'"
              style="position: absolute; z-index: 1; bottom: 0"
            />
            <div class="left-part"></div>
            <div class="col column relative-position" style="min-width: 100px">
              <div class="right-top-part">
                <div
                  class="row full-width pl-lg-3 pl-sm-4 rounded-24 bg-white full-height"
                >
                  <div
                    class="bg-accent1 py-lg-3 py-sm-4 rounded-100 full-width row justify-center header3"
                    style="height: fit-content"
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
          :class="$q.screen.lt.lg ? 'column' : 'row items-center'"
          class="mt-10 full-width no-wrap bg-secondary1 justify-between gap-lg-10 gap-sm-8 rounded-24 px-lg-15 px-sm-10 py-lg-22 py-sm-18 relative-position"
          style="overflow: hidden"
        >
          <q-img
            :src="`assets/${$q.screen.lt.lg ? 'smHowToVector.svg' : 'howToVector.svg'}`"
            style="
              position: absolute;
              z-index: 0;
              bottom: 0;
              left: 0;
              height: 100%;
            "
          />
          <div class="row items-center gap-20 col-9 no-wrap" style="z-index: 1">
            <div v-if="$q.screen.gt.md" class="row items-center no-wrap">
              <q-avatar
                v-for="el in 5"
                :key="el"
                :style="`margin-left: ${el === 1 ? '' : '-20px'}`"
                size="88px"
              >
                <q-img src="assets/director.jpg" width="88px" />
              </q-avatar>
            </div>
            <div class="subtitle">
              Наши специалисты всегда на связи и готовы помочь вам на каждом
              этапе запуска
            </div>
          </div>
          <CButton
            :height="$q.screen.lt.lg ? '40px' : '58px'"
            :icon-size="$q.screen.lt.lg ? '18px' : '22px'"
            :width="$q.screen.lt.lg ? '220px' : '280px'"
            icon="fa-solid fa-paper-plane"
            icon-gap="7"
            label="Хочу знать больше"
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
    smTitle: 'Создание чата <br/> в Telegram',
    image: 'step1.png',
  },
  {
    title: 'Настройка и интеграция',
    smTitle: 'Настройка <br/> и интеграция',
    image: 'step2.png',
  },
  {
    title: 'Обучение и тестирование',
    smTitle: 'Обучение <br/> и тестирование',
    image: 'step3.png',
  },
  {
    title: 'Запуск и поддержка',
    smTitle: 'Запуск <br/> и поддержка',
    image: 'step4.png',
  },
];
</script>

<style lang="scss" scoped>
.left-part {
  background-color: $secondary1;
  height: 340px;
  border-radius: 24px 24px 0 24px;
  width: 100%;
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

body.screen--sm,
body.screen--md {
  .left-part {
    background-color: $secondary1;
    height: 125px;
    border-radius: 24px 24px 0 24px;
  }

  .item-block {
    height: 125px;
  }

  .right-top-part {
    height: 51px;
    background: linear-gradient(
      30deg,
      rgba(0, 0, 0, 0) 0%,
      rgb(244, 244, 244) 0%,
      rgba(0, 236, 255, 0) 50%
    );
  }
}
</style>
