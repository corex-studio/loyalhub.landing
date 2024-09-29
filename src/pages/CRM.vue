<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="column full-width items-center">
        <div class="mega-header2 bold">CRM система</div>
        <div class="mt-10 subtitle text-center">
          Минимизируйте ручную работу с отчетами <br />
          и получайте данные в один клик
        </div>
        <div class="row gap-8 mt-20">
          <div
            v-for="(item, index) in abilities"
            :key="index"
            :class="
              item.title === selectedAbility.title
                ? 'bg-primary text-white bold'
                : 'bg-secondary1'
            "
            class="px-20 py-6 rounded-100 cursor-pointer"
            style="transition: background-color 0.35s ease-in-out"
            @click="selectedAbility = item"
          >
            {{ item.title }}
          </div>
        </div>
        <div
          class="mt-25 bg-secondary1 rounded-30 px-25 py-20 row full-width relative-position"
          style="overflow: hidden; min-height: 395px"
        >
          <q-img
            src="assets/CRMVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <div class="column" style="width: 50%">
            <div class="mega-header2 bold" style="z-index: 1">
              {{ selectedAbility.title }}
            </div>
            <div class="subtitle bold mt-10" style="z-index: 1">
              {{ selectedAbility.subtitle }}
            </div>
            <div class="mt-8" style="z-index: 1">
              {{ selectedAbility.text }}
            </div>
          </div>
          <q-img
            :src="`assets/${selectedAbility.image}`"
            :style="selectedAbility.imageStyle"
            :width="selectedAbility.imageWidth"
            style="position: absolute"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const abilities = [
  {
    title: 'Сегментация',
    subtitle: 'Полное понимание гостей для точных решений',
    image: 'crm1.png',
    imageWidth: '40%',
    imageStyle: 'right: 3%; max-width: 500px',
    text: 'Получите четкую картину своих гостей! CRM позволяет глубоко сегментировать клиентов по возрасту, полу, уровню активности и проводить RMF-анализ. Это открывает возможности для создания персонализированных предложений, которые точно сработают. Маркетологи могут эффективно настраивать акционные кампании, а собственники — видеть, как именно увеличивается прибыль.',
  },
  {
    title: 'Поведение',
    subtitle: 'Реальные данные для роста продаж',
    image: 'crm2.png',
    imageWidth: '45%',
    imageStyle: 'right: 1%; max-width: 550px',
    text:
      'Что заказывают, когда посещают, что популярно?\n' +
      'Теперь вы точно знаете, что заказывают ваши гости, как часто и в какое время они заходят на сайт или в приложение. Анализ активности позволяет улучшать меню, оптимизировать акции и внедрять популярные блюда на выгодные позиции. Это даёт возможность управлять ассортиментом и подстраиваться под спрос, что ведет к увеличению продаж.',
  },
  {
    title: 'Взаимодействие',
    subtitle: 'CRM берет рутину на себя',
    image: 'crm3.png',
    imageWidth: '38%',
    imageStyle: 'bottom: 0; right: 0; max-width: 450px',
    text: 'Забудьте о ручных рассылках и ответах на отзывы! CRM сама отправляет поздравления с днем рождения, собирает отзывы после посещений. Запускайте целевые PUSH-уведомления по вашим гостям. Это освободит время для вашей команды и повысит вовлеченность гостей. А главное — вы всегда на связи с гостем, не перегружая их лишними действиями.',
  },
  {
    title: 'Рекомендации',
    subtitle:
      'Умные рекомендации и кастомизация блюд для повышения среднего чека',
    image: 'crm4.png',
    imageWidth: '42%',
    imageStyle: 'top: 0; right: 1%',
    text: 'Встроенные механизмы допродаж — система анализирует заказы гостей и предлагает дополнительные позиции. Рекомендации помогут продавать больше десертов, напитков или блюд. Вариативность кастомизации заказов стимулирует клиентов добавлять ингредиенты, что естественным образом увеличивает средний чек.',
  },
  {
    title: 'Контроль',
    subtitle: 'Единый интерфейс управления всеми заведениями сети',
    image: 'crm5.png',
    imageWidth: '45%',
    imageStyle: 'right: 0; max-width: 580px',
    text: 'Владельцы франшиз и сетевых заведений могут управлять всей сетью из одного интерфейса. Независимо от количества ресторанов, у вас всегда есть полная прозрачность по каждому заведению — от заказов до отзывов гостей. Это инструмент, который помогает быстро реагировать на проблемы, контролировать качество и видеть результаты работы каждого заведения в режиме реального времени.',
  },
];

const selectedAbility = ref(abilities[0]);
</script>

<style lang="scss" scoped></style>
