<template>
  <section class="default-parent-block">
    <div class="c-container">
      <h2 v-if="$q.screen.lt.lg" class="row full-width justify-center bold">
        Продукты
      </h2>
      <div
        :class="{ 'column full-width gap-6': $q.screen.lt.lg }"
        :style="
          $q.screen.gt.md
            ? 'display: grid;\n' +
              '          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n' +
              '          align-content: start;\n' +
              '          grid-auto-rows: 1fr;\n' +
              '          gap: 20px;'
            : ''
        "
        class="mt-sm-15 mt-lg-0"
      >
        <div
          v-for="(el, index) in products"
          :key="index"
          :class="el.text ? 'bg-accent1' : 'bg-secondary1'"
          :style="`max-height: ${$q.screen.lt.lg ? '450' : '580'}px`"
          class="relative-position column no-wrap gap-lg-10 gap-sm-5 justify-between items-center pa-lg-15 px-sm-5 py-sm-12 rounded-30"
          style="overflow: hidden"
        >
          <div class="column full-width items-center">
            <h3 class="bold text-center" style="z-index: 1">
              {{ el.title }}
            </h3>
            <template v-if="el.tabs">
              <div
                class="row gap-lg-6 gap-sm-4 full-width justify-center mt-lg-9 mt-sm-6"
                style="z-index: 1"
              >
                <div
                  v-for="(tab, index) in el.tabs"
                  :key="index"
                  :class="[
                    el.selectedTab === index
                      ? 'bg-primary text-white bold'
                      : 'bg-white',
                    { secondary: $q.screen.lt.lg },
                  ]"
                  class="cursor-pointer px-lg-10 px-sm-7 py-lg-5 py-sm-4 rounded-100"
                  style="transition: background-color 0.35s ease-in-out"
                  @click="el.selectedTab = index"
                >
                  {{ tab.name }}
                </div>
              </div>
              <div class="mt-lg-8 mt-sm-6 text-center" style="z-index: 1">
                {{ el.tabs[el.selectedTab].text }}
              </div>
            </template>
            <template v-else>
              <div class="text-center mt-lg-8 mt-sm-4" style="z-index: 1">
                {{ el.text }}
              </div>
              <CButton
                :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
                :height="$q.screen.lt.lg ? '40px' : '52px'"
                class="mt-lg-24 mt-sm-9"
                label="Подключить сейчас"
                style="z-index: 1"
                width="235px"
                @click="store.requestModal = true"
              />
            </template>
          </div>
          <q-img
            v-if="$q.screen.gt.md || el.tabs"
            alt="vector"
            src="assets/productVector.svg"
            style="position: absolute; bottom: 0; z-index: 0"
          />
          <q-img
            v-else
            alt="vector"
            src="assets/smPriceProductVector.svg"
            style="position: absolute; bottom: 0; z-index: 0"
          />
          <q-img
            v-if="$q.screen.gt.md || el.tabs"
            :alt="`product ${index}`"
            :src="`assets/${el.image}`"
            fit="contain"
            style="margin-bottom: -30px"
          />
          <template v-else>
            <q-img
              :src="`assets/smPriceProductLeft.png`"
              alt="arrow"
              style="
                position: absolute;
                top: -10px;
                left: -40px;
                min-width: 220px;
              "
              width="40%"
            />
            <q-img
              :src="`assets/smPriceProductRight.png`"
              alt="flame"
              style="
                position: absolute;
                bottom: 10px;
                right: -35px;
                min-width: 100px;
              "
              width="20%"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CButton from 'components/templates/buttons/CButton.vue';
import { store } from 'src/models/store';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';

const products = ref([
  {
    title: 'Мобильное приложение',
    image: 'mobileProduct.png',
    tabs: [
      {
        name: 'Дизайн',
        text: 'Брендированное приложение для вашего заведения, доступное под IOS и Android',
      },
      {
        name: 'Уведомления',
        text: 'Быстрая и удобная связь с гостями, отправка акций и новостей напрямую в смартфоны гостей.',
      },
      {
        name: 'Лояльность',
        text: 'Бонусы, скидки и карта лояльности всегда под рукой, что увеличит вовлечённость и повторные визиты гостей.',
      },
    ],
    selectedTab: 0,
  },

  {
    title: 'Сайт',
    image: 'webProduct.png',
    tabs: [
      {
        name: 'SEO',
        text: 'Повысит шансы быть замеченным новыми гостями через оптимизированные поисковые запросы.',
      },
      {
        name: 'Возможности',
        text: 'Ваши гости смогут заказывать через сайт с теми же возможностями, что и в приложении, без необходимости скачивания',
      },
      {
        name: 'Гибкость',
        text: 'Идеально подстроится под любое устройство, от смартфонов до компьютеров',
      },
    ],
    selectedTab: 0,
  },
  {
    title: 'QR-меню',
    image: 'qrProduct.png',
    tabs: [
      {
        name: 'Скорость',
        text: 'Разгрузите персонал и уменьшите очереди, давая клиентам возможность заказывать напрямую со своих телефонов.',
      },
      {
        name: 'Гибкость',
        text: 'Используйте QR-коды для каждого стола или общего зала, подходящие как для ресторанов, так и для кафе.',
      },
    ],
    selectedTab: 0,
  },
  {
    title: 'Тейбл-тент',
    image: 'tentProduct.png',
    tabs: [
      {
        name: 'Автономность',
        text: 'Гости могут самостоятельно оформлять заказы и вызывать официанта без необходимости ждать персонал.',
      },
      {
        name: 'Реклама',
        text: 'В простое время планшет демонстрирует актуальные предложения, подталкивая гостей на дополнительный заказ',
      },
      {
        name: 'Персонализация',
        text: 'Контент на экране меняется в зависимости от заказа гостя, предлагая подходящие блюда или акции, что поможет увеличить средний чек.',
      },
    ],
    selectedTab: 0,
  },
  {
    title: 'Telegram-бот',
    image: 'tgProduct.png',
    tabs: [
      {
        name: 'Тренд',
        text: 'Telegram-бот отражает актуальные тенденции в общении и заказах, делая ваше заведение ближе к гостям, которые ценят инновации.',
      },
      {
        name: 'Оповещения',
        text: 'Все уведомления о заказах, акциях и событиях придул сразу в Telegram, обеспечивая мгновенную реакцию от гостей.',
      },
    ],
    selectedTab: 0,
  },
  {
    title: 'Одна цена за все!',
    image: 'priceProduct.png',
    text: 'Платите только за количество точек, получая полный набор продуктов без дополнительных затрат',
  },
]);
</script>

<style lang="scss" scoped></style>
