<template>
  <section class="default-parent-block">
    <div class="c-container">
      <div class="column full-width items-center">
        <h2 class="bold text-center" style="max-width: 730px">
          Реальные примеры наших решений
        </h2>
        <div
          class="mt-lg-10 mt-sm-6 subtitle text-center"
          style="max-width: 600px"
        >
          Ознакомьтесь с примерами сайтов и мобильных приложений, которые мы
          запустили для наших клиентов
        </div>
        <div class="row gap-8 items-center mt-lg-13 mt-sm-10 no-wrap">
          <CButton
            :color="currentType == 'Приложение' ? 'accent1' : 'secondary2'"
            :width="$q.screen.gt.sm ? '190px' : undefined"
            label="Приложение"
            round
            text-color="black"
            @click="currentType = 'Приложение'"
          />
          <CButton
            :color="currentType == 'Сайт' ? 'accent1' : 'secondary2'"
            :width="$q.screen.gt.sm ? '190px' : undefined"
            label="Сайт"
            round
            text-color="black"
            @click="currentType = 'Сайт'"
          />
        </div>
      </div>
      <div
        v-if="$q.screen.gt.md"
        class="mt-20"
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          align-content: start;
          grid-auto-rows: 1fr;
          gap: 20px;
        "
      >
        <div
          v-for="(item, index) in currentType == 'Сайт' ? webs : apps"
          :key="index"
          class="bg-secondary2 column no-wrap rounded-30"
        >
          <div
            class="bg-accent1 rounded-30 relative-position row justify-center"
            style="overflow: hidden; max-height: 400px"
          >
            <q-img
              :alt="`image ${item.title}`"
              :src="`assets/examples/${(currentType == 'Сайт' ? 'webs/' : 'apps/') + item.image}`"
              style="z-index: 1"
            />
          </div>
          <div
            :class="currentType == 'Сайт' ? 'pb-20' : 'pb-12'"
            class="px-16 col-grow pt-10 column justify-between full-width"
          >
            <div>
              <h4 class="bold">
                {{ item.title }}
              </h4>
              <div class="mt-6 secondary text-primary">{{ item.text }}</div>
            </div>
            <div
              v-if="currentType == 'Приложение'"
              class="row body items-center mt-10 gap-4"
            >
              <div class="bg-white rounded-100 py-2 px-6">Android</div>
              <div class="bg-white rounded-100 py-2 px-6">IOS</div>
            </div>
          </div>
        </div>
      </div>
      <SwiperContainer
        v-else
        :items="currentType == 'Сайт' ? webs : apps"
        :slides-per-view="1"
        :space-between="10"
        auto-play
        class="mt-5 swiper"
        loop
        no-navigation
        style="width: 100%"
        use-bullets
      >
        <template v-slot:item="{ item }">
          <div class="mt-15">
            <div class="bg-secondary2 column no-wrap rounded-30">
              <div
                class="bg-accent1 rounded-30 relative-position row justify-center"
                style="overflow: hidden; max-height: 400px"
              >
                <q-img
                  :alt="`image ${item.title}`"
                  :src="`assets/examples/${(currentType == 'Сайт' ? 'webs/' : 'apps/') + item.image}`"
                  style="z-index: 1; min-height: 260px"
                />
              </div>
              <div
                :class="currentType == 'Сайт' ? 'pb-16' : 'pb-10'"
                class="px-8 col-grow pt-8 column justify-between full-width"
              >
                <div>
                  <h4 class="bold">
                    {{ item.title }}
                  </h4>
                  <div class="mt-2 secondary text-primary">{{ item.text }}</div>
                </div>
                <div
                  v-if="currentType == 'Приложение'"
                  class="row body items-center mt-10 gap-4"
                >
                  <div class="bg-white rounded-100 py-2 px-6">Android</div>
                  <div class="bg-white rounded-100 py-2 px-6">IOS</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </SwiperContainer>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import { ref } from 'vue';
import SwiperContainer from 'components/containers/SwiperContainer.vue';

const currentType = ref('Приложение');

const apps = [
  {
    title: 'Kirin',
    image: 'kirin.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Фьюжн экспресс',
    image: 'fusion.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Рыба агонь',
    image: 'ryba.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Биг босс бургер',
    image: 'boss.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Fishdealers',
    image: 'fishdealers.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Гусь и панда',
    image: 'panda.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'DoubleU',
    image: 'doubleU.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
];

const webs = [
  {
    title: 'Точка вкуса',
    image: 'tochka.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Биг босс бургер',
    image: 'boss.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Пилот еда',
    image: 'pilot.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Три пиццы',
    image: 'threePizzas.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
  {
    title: 'Kirin',
    image: 'kirin.png',
    text: 'Cайт про оборудование для цифровой радиографии, которое позволяет быстро находить производственные дефекты',
  },
];
</script>

<style lang="scss" scoped>
.swiper :deep(.swiper-pagination) {
  padding: 0 !important;
}

.swiper :deep(.swiper-pagination-bullet):not(.swiper-pagination-bullet-active) {
  background-color: #e7e8f1 !important;
  opacity: 1;
}

.swiper :deep(.swiper-pagination-bullet-active) {
  background-color: $primary !important;
  opacity: 1;
}
</style>
