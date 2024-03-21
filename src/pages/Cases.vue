<template>
  <div class="bg-white1 py-50">
    <div class="c-container text-black2">
      <SwiperContainer
        style="width: 100%"
        :slides-per-view="$q.screen.xs ? 1.1 : 2"
        :space-between="12"
        loop
        :items="blocks"
        no-navigation
        auto-play
      >
        <template v-slot:title>
          <div class="mega-text bold col-8">
            Кейсы, которые реализовала
            <span class="text-primary bold"> команда Loyalhub:</span>
          </div>
        </template>
        <template v-slot:item="{ item }">
          <div
            style="overflow: hidden; height: inherit"
            class="column no-wrap bg-white rounded-40"
          >
            <q-img
              height="454px"
              fit="cover"
              class="rounded-40"
              :src="`src/assets/${item.image}`"
            />
            <div class="column full-width gap-6 pa-15">
              <div class="header-text bold">
                {{ item.title }}
              </div>
              <div class="row full-width gap-4">
                <div
                  v-for="(el, index) in item.types"
                  class="body type-block px-8 py-5"
                  :key="index"
                >
                  {{ el }}
                </div>
              </div>
            </div>
          </div>
        </template></SwiperContainer
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import SwiperContainer from 'src/components/containers/SwiperContainer.vue';

const blocks = [
  {
    title: 'Kirin',
    types: [
      '3 формата заведения от одного собственника',
      '3 юридических лица',
      '1 система лояльности',
    ],
    image: 'kirin.png',
  },
  {
    title: 'Ростех арена',
    types: [
      'Навигация на стадионе',
      'Выдача заказов по QR-кодам',
      'Распределение заказов',
      'Онлайн оплата',
      'Push',
    ],
    image: 'baltica.png',
  },
  {
    title: 'Double U',
    types: [
      'Оцифрованная клиентская база',
      'Уведомления',
      'Гибкий функционал бронирования',
    ],
    image: 'doubleU.png',
  },

  {
    title: 'Фьюжн экспресс',
    types: [
      'Много юридических лиц',
      'Уведомления',
      'Гибкий функционал бронирования',
    ],
    image: 'fusion.png',
  },
  {
    title: 'Планета',
    types: [
      'Интерактивный тейбл-тент',
      'Заказ в стол',
      'Оплата',
      'Просмотр рекламных материалов',
      'Допродажи ',
    ],
    image: 'planeta.png',
  },
];
</script>

<style lang="scss" scoped>
.type-block {
  border-radius: 100px;
  border: 2px $black4 solid;
}
</style>
