<template>
  <div class="c-container py-50">
    <div class="row full-width">
      <div class="col-4 mega-text bold">Продукты</div>
      <div class="column col gap-12">
        <div class="col subtitle-text2">
          Позвольте своим гостям формировать онлайн заказы, оформлять доставку,
          получать уведомления об интересных акциях, копить бонусы и оставлять
          отзывы с помощью продуктов Loyalhub,
        </div>
        <div class="col subtitle-text2">
          и вы заметите рост количества постоянных гостей вашего заведения уже
          через 2 месяца после запуска.
        </div>
      </div>
    </div>
    <div class="row full-width mt-25">
      <GridContainer
        :items="cards"
        :lg="3"
        :xl="3"
        :md="4"
        :sm="3"
        :xs="2"
        :gap="$q.screen.gt.md ? '20px' : $q.screen.md ? '16px' : '8px'"
      >
        <template v-slot:item="{ item }">
          <div
            v-if="!item.blank"
            @mouseover="item.hover = true"
            @mouseleave="item.hover = false"
            :style="
              item.hover
                ? 'background-image:unset; '
                : `background-image:url('src/assets/${item.image}')`
            "
            :class="item.hover ? 'card-block-hovered' : 'card-block-unhovered'"
            class="card-block pa-15"
          >
            <div class="row justify-between">
              <div
                :class="item.hover ? 'text-black2' : 'text-secondary'"
                class="subtitle-text3"
              >
                [ {{ item.number }} ]
              </div>
              <i class="fa-solid fa-magnifying-glass" style="width: 30px"></i>
            </div>
            <div class="column full-width gap-6 mt-15">
              <div
                :class="item.hover ? 'text-black4' : 'text-white'"
                class="header-text bold"
              >
                {{ item.title }}
              </div>
              <div
                :class="item.hover ? 'text-black2' : 'text-secondary'"
                class="body"
              >
                {{ item.text }}
              </div>
            </div>
          </div>
          <div v-else class="blank-block card-block"></div>
        </template>
      </GridContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import GridContainer from 'src/components/containers/GridContainer.vue';

const cards = ref<
  {
    number?: string;
    title?: string;
    text?: string;
    blank?: boolean;
    image?: string;
    hover?: boolean;
  }[]
>([
  {
    number: '01',
    title: 'Мобильное приложение',
    text: 'Собственное удобное мобильное приложение, полностью интегрированное с iiko',
    image: 'card1.png',
    hover: false,
  },
  {
    number: '02',
    title: 'Брендированный сайт',
    text: 'Брендированный сайт полностью повторяет функционал мобильного приложения и расширит ваше онлайн присутствие',
    image: 'card2.png',
    hover: false,
  },
  {
    blank: true,
  },
  {
    number: '03',
    title: 'Crm система',
    text: 'Единый инструмент для работы с вашими гостями и управления вашим продуктом',
    image: 'card3.png',
    hover: false,
  },
  {
    number: '04',
    title: 'Платежный сервис',
    text: 'Единый инструмент для работы с вашими гостями и управления вашим продуктом.',
    image: 'card4.png',
    hover: false,
  },
  {
    number: '05',
    title: 'Сервис уведомелний',
    text: 'Собственный сервис для отправки СМС-сообщений ',
    image: 'card5.png',
    hover: false,
  },
  {
    number: '06',
    title: 'Тейбл-тенты',
    text: 'Интерактивные решения для гостей заведения',
    image: 'card6.png',
    hover: false,
  },
  {
    number: '07',
    title: 'Wallet ',
    text: 'Сервис для создания карты лояльности вашего заведения',
    image: 'card7.png',
    hover: false,
  },
  {
    number: '08',
    title: 'QR-меню',
    text: 'Упрощенный способ формирования заказов',
    image: 'card8.png',
    hover: false,
  },
  {
    blank: true,
  },
  {
    number: '09',
    title: 'Телеграм бот',
    text: 'Решение, которой подойдет для активных пользователей Telegram',
    image: 'card9.png',
    hover: false,
  },
  {
    number: '10',
    title: 'Отзывы',
    text: 'Улучшите опыт взаимодействия с гостями и формируйте рейтинг ваших точек ',
    image: 'card10.png',
    hover: false,
  },
]);
</script>

<style lang="scss" scoped>
.card-block {
  height: 420px;
  border-radius: 40px;
}

.card-block-unhovered {
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  background-position: bottom right !important;
  background-color: $black3 !important;
  transition: all 0.5s ease-in;
  transition: background 0.5s ease;
}

.card-block-hovered {
  background-color: white !important;
  background-image: unset;
  transition: all 0.5s ease-out;
  background-position: bottom right !important;
  background-position-y: 200px !important;
}

.blank-block {
  background: url('src/assets/pluses.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
