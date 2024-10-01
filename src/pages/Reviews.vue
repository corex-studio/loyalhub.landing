<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="mega-header2 bold text-center">Отзывы</div>

      <div class="full-width">
        <SwiperContainer
          :items="reviews"
          :slides-per-view="2"
          :space-between="20"
          auto-play
          class="mt-10"
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
            <div class="pt-10">
              <div class="relative-position">
                <div
                  class="review-icon row items-center justify-center"
                  style="position: absolute; top: -10px; right: 0px"
                >
                  <q-icon
                    name="fa-solid fa-quote-left"
                    style="color: #c7a51f"
                  />
                </div>
                <div
                  class="bg-secondary2 review-block no-wrap rounded-30 px-13 py-13 column relative-position"
                  style="overflow: hidden"
                >
                  <q-img
                    fit="cover"
                    src="assets/reviewVector.svg"
                    style="position: absolute; left: 0; bottom: 0; z-index: 0"
                  />
                  <div class="row full-width gap-4 items-center no-wrap">
                    <q-avatar size="64px">
                      <q-img
                        height="64px"
                        src="assets/director.jpg"
                        width="64px"
                      />
                    </q-avatar>
                    <div class="column gap-2" style="z-index: 1">
                      <div class="body">{{ item.from.name }}</div>
                      <div class="caption text-secondary3">
                        {{ item.from.position }}
                      </div>
                    </div>
                  </div>
                  <div class="mt-12 secondary" style="z-index: 1">
                    {{ item.text }}
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
import { ref } from 'vue';

const reviews = ref([
  {
    from: {
      name: 'Kirin',
      position: '',
      image: '',
    },
    text: 'Работа с Loyalhub — это отличный опыт. Мы подключили сайт и приложение для доставки, самовывоза и бронирования, что сильно упростило управление процессами. Теперь все в одном месте, от заказов до взаимодействия с клиентами. Удобно, быстро и эффективно!',
  },
  {
    from: {
      name: 'Рыба Агонь',
      position: '',
      image: '',
    },
    text: 'Мы довольны сотрудничеством с Loyalhub — сайт и приложение для доставки и самовывоза работают как часы. Кроме того, команда Loyalhub всегда на связи и готова оперативно помочь с решением любых вопросов или внедрить новую идею. Теперь процесс заказов стал более удобным, а клиенты чаще возвращаются. Сама панель администратора тоже становиться только лучше - появляются всё новые возможности для оперативной аналитики доставки и сбора данных! Интуитивно понятный и визуально приятный интерфейс позволяет легко обучить любого сотрудника работе в системе',
  },
  {
    from: {
      name: 'Фьюжн Экспресс',
      position: '',
      image: '',
    },
    text: 'Мы начали работать с Loyalhub, чтобы внедрить мобильное приложение для самовывоза. Результаты не заставили себя ждать — процесс заказа стал значительно проще, а количество возвращающихся клиентов заметно увеличилось. Удобство использования приложения и поддержка от команды Loyalhub действительно делают работу более эффективной.',
  },
  {
    from: {
      name: 'Gurman de Gusto',
      position: '',
      image: '',
    },
    text:
      'Loyalhub помог нам внедрить мобильное приложение с системой лояльности, меню и бронированием. Это решение значительно упростило управление клиентской базой и улучшило взаимодействие с нашими гостями. Количество постоянных клиентов выросло, а удобство бронирования стало большим плюсом для наших гостей.\n' +
      'Что отмечу: профессионализм сотрудников, современный подход к решению задач, оперативное решение многих вопросов',
  },
  {
    from: {
      name: 'Точка вкуса',
      position: '',
      image: '',
    },
    text: 'Сайт для доставки и самовывоза, который нам предложил Loyalhub, изменил наш бизнес в лучшую сторону. Процессы стали быстрее, а клиенты довольны удобством заказа. Особенно радует интеграция с CRM — мы теперь лучше понимаем потребности наших гостей и можем предлагать им актуальные предложения.',
  },
]);
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
</style>
