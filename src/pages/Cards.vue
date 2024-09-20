<template>
  <div class="c-container py-lg-50 py-md-40 py-sm-30">
    <div :class="$q.screen.lt.lg ? 'column gap-10' : 'row'" class="full-width">
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
    <div class="row full-width mt-lg-25 mt-md-20 mt-sm-15">
      <GridContainer
        :items="$q.screen.lt.lg ? cards.filter((el) => !el.blank) : cards"
        :lg="3"
        :xl="3"
        :md="2"
        :sm="1"
        :xs="1"
        :gap="$q.screen.lt.md ? '20px' : '12px'"
      >
        <template v-slot:item="{ item }">
          <div
            v-if="!item.blank"
            @mouseover="item.hover = true"
            @mouseleave="item.hover = false"
            :style="
              item.hover
                ? 'background-image:unset; '
                : `background-image:url('assets/${item.image}')`
            "
            :class="[
              item.hover
                ? 'card-block-hovered'
                : item.number == '04'
                  ? 'big-block'
                  : 'card-block-unhovered',
            ]"
            class="card-block pa-lg-15 pa-sm-10"
          >
            <div class="row justify-between items-center">
              <div
                :class="item.hover ? 'text-black2' : 'text-secondary'"
                class="subtitle-text3"
              >
                [ {{ item.number }} ]
              </div>
              <div
                :style="`background-color: ${!item.hover ? '#595C5E' : '#f5f5f5'}`"
                class="row rounded-100 items-center justify-center"
                style="height: 42px; width: 42px"
              >
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 29 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0976557 12.4999C0.0976557 12.2062 0.212591 11.9244 0.417177 11.7167C0.621763 11.509 0.899242 11.3923 1.18857 11.3923L24.3415 11.3923L15.3327 2.39817C15.2305 2.29615 15.1491 2.1747 15.0931 2.04074C15.0372 1.90679 15.0077 1.76295 15.0065 1.61744C15.0053 1.47194 15.0323 1.32761 15.086 1.19271C15.1397 1.05781 15.2191 0.934973 15.3196 0.831213C15.4201 0.727452 15.5397 0.644801 15.6716 0.587978C15.8035 0.531155 15.9452 0.501274 16.0885 0.500039C16.3779 0.497547 16.6565 0.611892 16.8629 0.817921L27.7699 11.7083C27.7748 11.7132 27.7797 11.7181 27.7844 11.7231C27.8863 11.8283 27.9665 11.9532 28.0203 12.0903C28.0741 12.2274 28.1003 12.3741 28.0974 12.5216C28.0946 12.6692 28.0627 12.8147 28.0037 12.9495C27.9447 13.0844 27.8598 13.206 27.7539 13.3071L16.8629 24.182C16.7607 24.284 16.6398 24.3646 16.507 24.4191C16.3741 24.4737 16.232 24.5012 16.0888 24.5C15.9455 24.4988 15.8039 24.4689 15.6719 24.4121C15.54 24.3554 15.4204 24.2728 15.3199 24.169C15.2195 24.0653 15.1401 23.9425 15.0864 23.8077C15.0326 23.6728 15.0056 23.5285 15.0068 23.3831C15.0079 23.2376 15.0373 23.0938 15.0933 22.9599C15.1492 22.8259 15.2305 22.7045 15.3327 22.6025L24.3415 13.6076L1.18857 13.6076C0.899242 13.6076 0.621763 13.4909 0.417177 13.2832C0.212591 13.0754 0.0976557 12.7937 0.0976557 12.4999Z"
                    :fill="item.hover ? 'black' : 'white'"
                    style="
                      transition: all 0.5s;
                      transform-origin: center;
                      transform: rotate(-40deg);
                    "
                  />
                </svg>
              </div>
            </div>
            <div class="column full-width gap-6 mt-md-15 mt-sm-10">
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
    text: 'Легкая интеграция с нашим платежным партнером позволит вам принимать платежи через мобильное приложение с помощью СБП, онлайн оплаты и сохраненных карт',
    image: 'card4.png',
    hover: false,
  },
  {
    number: '05',
    title: 'Сервис уведомлений',
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

body.screen--sm {
  .card-block {
    height: 400px;
  }
}

.card-block-unhovered {
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  background-position: bottom right !important;
  background-color: $black1 !important;
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
  background: url('/assets/pluses.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

.big-block {
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  background-position: bottom -40px right !important;
  background-color: $black1 !important;
  transition: all 0.5s ease-in;
  transition: background 0.5s ease;
}
</style>
