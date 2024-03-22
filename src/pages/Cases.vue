<template>
  <div
    :class="{ 'rounded-40': $q.screen.lt.lg }"
    class="bg-white1 py-lg-50 py-md-40 py-sm-30"
  >
    <div class="c-container text-black2">
      <SwiperContainer
        style="width: 100%"
        :slides-per-view="$q.screen.gt.md ? 2 : $q.screen.md ? 1.35 : 1"
        :space-between="12"
        loop
        :items="blocks"
        no-navigation
        auto-play
      >
        <template v-slot:title>
          <div class="mega-text bold col-lg-8 col-md-10">
            <template v-if="$q.screen.gt.sm">
              Кейсы, которые реализовала
              <span class="text-primary bold"> команда Loyalhub:</span>
            </template>
            <template v-else>Кейсы команды Loyalhub</template>
          </div>
        </template>
        <template v-slot:item="{ item }">
          <div
            style="overflow: hidden; height: inherit"
            class="column no-wrap bg-white rounded-40"
          >
            <q-img
              :height="
                $q.screen.gt.md ? '454px' : $q.screen.md ? '400px' : '249px'
              "
              fit="cover"
              class="rounded-40"
              :src="`src/assets/${item.image}`"
            />
            <div
              class="column full-width gap-md-6 gap-sm-4 pa-lg-15 pa-md-10 pa-sm-6"
            >
              <div class="header-text bold">
                {{ item.title }}
              </div>
              <div
                :class="$q.screen.lt.md ? 'column' : 'row'"
                class="full-width gap-md-4 gap-sm-1"
              >
                <div
                  v-for="(el, index) in item.types"
                  class="body px-md-8 py-md-5 row gap-3 pl-sm-3 pl-md-0"
                  :class="{ 'type-block': $q.screen.gt.sm }"
                  :key="index"
                >
                  <div v-if="$q.screen.lt.md">•</div>
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
