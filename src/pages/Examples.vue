<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="column full-width items-center">
        <div class="mega-header2 bold text-center" style="max-width: 730px">
          Реальные примеры наших решений
        </div>
        <div class="mt-10 subtitle text-center" style="max-width: 600px">
          Ознакомьтесь с примерами сайтов и мобильных приложений, которые мы
          запустили для наших клиентов
        </div>
      </div>
      <div
        class="mt-20"
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
          align-content: start;
          grid-auto-rows: 1fr;
          gap: 20px;
        "
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-secondary2 column no-wrap rounded-30"
        >
          <div
            class="bg-accent1 rounded-30 relative-position row justify-center"
            style="overflow: hidden"
          >
            <q-img
              :src="`assets/${item.image}`"
              style="position: absolute; z-index: 1; bottom: 0"
              width="70%"
            />
            <q-img src="assets/exampleVector.svg" />
          </div>
          <div
            class="px-16 col-grow pt-12 pb-14 column justify-between full-width"
          >
            <div>
              <div class="header2 bold">
                {{ item.title }}
              </div>
              <div class="mt-10 body text-primary">{{ item.text }}</div>
            </div>
            <div class="row body items-center mt-12 gap-4">
              <div class="bg-white rounded-100 py-2 px-6">Android</div>
              <div class="bg-white rounded-100 py-2 px-6">IOS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: 'Кирин',
    image: 'kirin.png',
    text: 'Приложение для ресторана "Кирин" с функцией самовывоза и доставки. Программа лояльности встроена прямо в приложение, что позволяет клиентам получать бонусы за заказы, использовать скидки и получать персонализированные предложения. Это помогает увеличить возврат клиентов и повысить их лояльность.',
  },
  {
    title: 'DoubleU',
    image: 'doubleU.png',
    text: 'Приложение для ресторана "DoubleU", которое объединяет в себе бронирование столов и меню. Благодаря программе лояльности, гости могут накапливать баллы за каждое посещение и получать эксклюзивные предложения. CRM-система помогает ресторану лучше понимать потребности гостей и предлагать персонализированные акции.',
  },
];
</script>

<style lang="scss" scoped></style>
