<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
          align-content: start;
          grid-auto-rows: 1fr;
          gap: 20px;
        "
      >
        <div
          v-for="(el, index) in products"
          :key="index"
          :class="el.text ? 'bg-accent1' : 'bg-secondary1'"
          class="relative-position column no-wrap gap-10 justify-between items-center pa-15 rounded-30"
          style="overflow: hidden; max-height: 580px"
        >
          <div class="column full-width items-center">
            <div class="header1 bold text-center" style="z-index: 1">
              {{ el.title }}
            </div>
            <template v-if="el.tabs">
              <div
                class="row gap-6 full-width justify-center mt-9"
                style="z-index: 1"
              >
                <div
                  v-for="(tab, index) in el.tabs"
                  :key="index"
                  :class="
                    el.selectedTab === index
                      ? 'bg-primary text-white bold'
                      : 'bg-white'
                  "
                  class="cursor-pointer px-10 py-5 rounded-100"
                  style="transition: background-color 0.35s ease-in-out"
                  @click="el.selectedTab = index"
                >
                  {{ tab.name }}
                </div>
              </div>
              <div class="mt-8 text-center" style="z-index: 1">
                {{ el.tabs[el.selectedTab].text }}
              </div>
            </template>
            <template v-else>
              <div class="text-center mt-8" style="z-index: 1">
                {{ el.text }}
              </div>
              <CButton
                class="mt-24"
                height="52px"
                label="Подключить сейчас"
                style="z-index: 1"
                width="235px"
              />
            </template>
          </div>
          <q-img
            src="assets/productVector.svg"
            style="position: absolute; bottom: 0; z-index: 0"
          />
          <q-img
            :src="`assets/${el.image}`"
            fit="contain"
            style="margin-bottom: -30px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CButton from 'components/templates/buttons/CButton.vue';

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
        text: 'Разгрузите персонал и уменьшите очереди, давая клиентам возможность заказывать напрямую со своих телефонов',
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
