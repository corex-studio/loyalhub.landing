<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="mega-header2 bold text-center">Отзывы</div>

      <div class="full-width mt-lg-20 mt-sm-15">
        <SwiperContainer
          :initial-slide="1"
          :items="reviews"
          :slides-per-view="
            $q.screen.xl ? 3 : $q.screen.lg ? 2 : $q.screen.md ? 1.4 : 1.1
          "
          :space-between="20"
          auto-play
          class="swiper-block"
          loop
          no-navigation
          style="width: 100%"
        >
          <template
            v-slot:item="{
              item,
            }: {
              item: {
                from: {
                  name: string;
                  position: string;
                  image: string;
                };
                text: string;
              };
            }"
          >
            <div
              :style="`height: ${$q.screen.lt.lg ? '320' : '400'}px`"
              class="rounded-30 px-lg-15 px-sm-8 px-md-12 pt-10 pb-lg-15 pb-sm-10 bg-secondary1 relative-position column no-wrap justify-between"
              style="overflow: hidden; cursor: default"
            >
              <div
                :style="`height: ${$q.screen.lt.lg ? '76%' : '81%'}`"
                class="column"
              >
                <q-img
                  fit="cover"
                  src="assets/reviewVector.svg"
                  style="position: absolute; left: 0; bottom: 0; z-index: 0"
                />
                <CIcon
                  color="accent1"
                  name="fa-solid fa-quote-left"
                  size="40px"
                />
                <div
                  class="mt-4 secondary col custom-scroll-bar"
                  style="z-index: 1; overflow: auto"
                >
                  {{ item.text }}
                </div>
              </div>
              <div class="row no-wrap full-width gap-6 items-center">
                <q-avatar size="64px">
                  <q-img
                    :src="`assets/companiesLogo/${item.from.image}`"
                    height="64px"
                    width="64px"
                  />
                </q-avatar>
                <div class="column gap-1" style="z-index: 1">
                  <div class="subtitle bold">
                    {{ item.from.name }}
                  </div>
                  <div class="text-secondary3 caption">
                    {{ item.from.position }}
                  </div>
                </div>
              </div>
            </div>
          </template>
        </SwiperContainer>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SwiperContainer from 'components/containers/SwiperContainer.vue';
import CIcon from 'components/templates/buttons/CIcon.vue';

const reviews = [
  {
    from: {
      name: 'Рыба Агонь',
      position: 'Моисеева Дарья, управляющий',
      image: 'smRyba.png',
    },
    text: 'Мы довольны сотрудничеством с Loyalhub — сайт и приложение для доставки и самовывоза работают как часы. Кроме того, команда Loyalhub всегда на связи и готова оперативно помочь с решением любых вопросов или внедрить новую идею. Теперь процесс заказов стал более удобным, а клиенты чаще возвращаются. Сама панель администратора тоже становиться только лучше - появляются всё новые возможности для оперативной аналитики доставки и сбора данных! Интуитивно понятный и визуально приятный интерфейс позволяет легко обучить любого сотрудника работе в системе',
  },
  {
    from: {
      name: 'Kirin',
      position: 'Варанкина Анна, маркетолог',
      image: 'smKirin.png',
    },
    text: 'Работа с Loyalhub — это отличный опыт. Мы подключили сайт и приложение для доставки, самовывоза и бронирования, что сильно упростило управление процессами. Теперь все в одном месте, от заказов до взаимодействия с клиентами. Удобно, быстро и эффективно!',
  },

  {
    from: {
      name: 'Фьюжн Экспресс',
      position: 'Романенко Татьяна,  менеджер',
      image: 'smFusionLogo.png',
    },
    text: 'Мы начали работать с Loyalhub, чтобы внедрить мобильное приложение для самовывоза. Результаты не заставили себя ждать — процесс заказа стал значительно проще, а количество возвращающихся клиентов заметно увеличилось. Удобство использования приложения и поддержка от команды Loyalhub действительно делают работу более эффективной.',
  },
  {
    from: {
      name: 'Gurman de Gusto',
      position: 'Фомина Алина, маркетолог',
      image: 'smGurman.png',
    },
    text:
      'Loyalhub помог нам внедрить мобильное приложение с системой лояльности, меню и бронированием. Это решение значительно упростило управление клиентской базой и улучшило взаимодействие с нашими гостями. Количество постоянных клиентов выросло, а удобство бронирования стало большим плюсом для наших гостей.\n' +
      'Что отмечу: профессионализм сотрудников, современный подход к решению задач, оперативное решение многих вопросов',
  },
  {
    from: {
      name: 'Точка вкуса',
      position: 'Безверхий Евгений , совладелец',
      image: 'smTochkaLogo.png',
    },
    text: 'Сайт для доставки и самовывоза, который нам предложил Loyalhub, изменил наш бизнес в лучшую сторону. Процессы стали быстрее, а клиенты довольны удобством заказа. Особенно радует интеграция с CRM — мы теперь лучше понимаем потребности наших гостей и можем предлагать им актуальные предложения.',
  },
];
</script>

<style lang="scss" scoped>
.review-icon {
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-color: $accent1;
  z-index: 1;
  border-radius: 100px;
}

.review-block {
  transition: height 0.35s ease;
}

body.screen--md,
body.screen--sm {
  .swiper-block :deep(.swiper) {
    overflow: visible !important;
  }
}
</style>
