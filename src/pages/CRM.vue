<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="column full-width items-center">
        <h2 class="bold">CRM система</h2>
        <div class="mt-lg-10 mt-sm-6 subtitle text-center">
          Минимизируйте ручную работу с отчетами <br />
          и получайте данные в один клик
        </div>
        <div class="row justify-center gap-lg-8 gap-sm-4 mt-lg-20 mt-sm-10">
          <div
            v-for="(item, index) in abilities"
            :key="index"
            :class="
              item.title === selectedAbility.title
                ? $q.screen.lt.lg
                  ? 'bg-primary text-white'
                  : 'bg-primary text-white bold'
                : 'bg-secondary1'
            "
            class="px-lg-20 px-sm-7 py-lg-6 py-sm-4 rounded-100 cursor-pointer"
            style="transition: background-color 0.35s ease-in-out"
            @click="selectedAbility = item"
          >
            {{ item.title }}
          </div>
        </div>
        <div
          :style="`min-height: ${$q.screen.lt.lg ? 'auto' : '405px'}; max-width: ${$q.screen.lt.lg ? '470px' : 'unset'}`"
          class="mt-lg-25 mt-sm-15 bg-secondary1 rounded-30 px-lg-25 py-lg-20 row full-width relative-position"
          style="overflow: hidden"
        >
          <q-img
            v-if="$q.screen.gt.md"
            alt="vector"
            src="assets/CRMVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <q-img
            v-else
            alt="vector"
            src="assets/SmCRMVector.svg"
            style="position: absolute; bottom: 0; left: 0; z-index: 0"
          />
          <div
            :style="$q.screen.lt.lg ? '' : 'width: 50%'"
            class="column px-sm-8 px-lg-0 pt-sm-10 pt-lg-0"
          >
            <h2 class="bold" style="z-index: 1">
              {{ selectedAbility.title }}
            </h2>
            <div class="subtitle bold mt-lg-10 mt-sm-4" style="z-index: 1">
              {{ selectedAbility.subtitle }}
            </div>
            <div class="mt-lg-8 mt-sm-4" style="z-index: 1">
              {{
                $q.screen.lt.lg ? selectedAbility.smText : selectedAbility.text
              }}
            </div>
          </div>
          <q-img
            v-if="$q.screen.gt.md"
            :src="`assets/${selectedAbility.image}`"
            :style="selectedAbility.imageStyle"
            :width="selectedAbility.imageWidth"
            alt="picture"
            style="position: absolute"
          />
          <div v-else class="row full-width justify-center mt-6">
            <q-img
              :src="`assets/${'sm' + selectedAbility.image[0].toLocaleUpperCase() + selectedAbility.image.slice(1)}`"
              :style="`max-width: ${selectedAbility.smMaxWidth || 'unset'}`"
              alt="picture"
              position="top"
              style="max-height: 320px"
              width="100%"
            />
          </div>
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
    imageStyle: 'right: 3%; max-width: 500px; min-width: 450px',
    text: 'Получите четкую картину своих гостей! CRM позволяет глубоко сегментировать клиентов по возрасту, полу, уровню активности и проводить RMF-анализ. Это открывает возможности для создания персонализированных предложений, которые точно сработают. Маркетологи могут эффективно настраивать акционные кампании, а собственники — видеть, как именно увеличивается прибыль.',
    smText:
      'Получите четкую картину своих гостей! CRM позволяет глубоко сегментировать клиентов по возрасту, полу, уровню активности и проводить RMF-анализ. Это открывает возможности для создания персонализированных предложений, которые точно сработают',
    smMaxWidth: '380px',
  },
  {
    title: 'Поведение',
    subtitle: 'Реальные данные для роста продаж',
    image: 'crm2.png',
    imageWidth: '45%',
    imageStyle: 'right: 1%; max-width: 550px; min-width: 450px',
    text:
      'Что заказывают, когда посещают, что популярно?\n' +
      'Теперь вы точно знаете, что заказывают ваши гости, как часто и в какое время они заходят на сайт или в приложение. Анализ активности позволяет улучшать меню, оптимизировать акции и внедрять популярные блюда на выгодные позиции. Это даёт возможность управлять ассортиментом и подстраиваться под спрос, что ведет к увеличению продаж.',
    smText:
      'Что заказывают, когда посещают, что популярно?\n' +
      'Теперь вы точно знаете, что заказывают ваши гости, как часто и в какое время они заходят на сайт или в приложение.',
  },
  {
    title: 'Взаимодействие',
    subtitle: 'CRM берет рутину на себя',
    image: 'crm3.png',
    imageWidth: '38%',
    imageStyle: 'bottom: 0; right: 0; max-width: 450px; min-width: 450px',
    text: 'Забудьте о ручных рассылках и ответах на отзывы! CRM сама отправляет поздравления с днем рождения, собирает отзывы после посещений. Запускайте целевые PUSH-уведомления по вашим гостям. Это освободит время для вашей команды и повысит вовлеченность гостей. А главное — вы всегда на связи с гостем, не перегружая их лишними действиями.',
    smText:
      'Забудьте о ручных рассылках и ответах на отзывы! CRM сама отправляет поздравления с днем рождения, собирает отзывы после посещений. Запускайте целевые PUSH-уведомления по вашим гостям. ',
    smMaxWidth: '420px',
  },
  {
    title: 'Рекомендации',
    subtitle:
      'Умные рекомендации и кастомизация блюд для повышения среднего чека',
    image: 'crm4.png',
    imageWidth: '42%',
    imageStyle: 'top: 0; right: 1%; min-width: 450px',
    text: 'Встроенные механизмы допродаж — система анализирует заказы гостей и предлагает дополнительные позиции. Рекомендации помогут продавать больше десертов, напитков или блюд. Вариативность кастомизации заказов стимулирует клиентов добавлять ингредиенты, что естественным образом увеличивает средний чек.',
    smText:
      'Встроенные механизмы допродаж — система анализирует заказы гостей \n' +
      'и предлагает дополнительные позиции. Рекомендации помогут продавать больше десертов, напитков или блюд.',
    smMaxWidth: '420px',
  },
  {
    title: 'Контроль',
    subtitle: 'Единый интерфейс управления всеми заведениями сети',
    image: 'crm5.png',
    imageWidth: '45%',
    imageStyle: 'right: 0; max-width: 580px; min-width: 500px',
    text: 'Владельцы франшиз и сетевых заведений могут управлять всей сетью из одного интерфейса. Независимо от количества ресторанов, у вас всегда есть полная прозрачность по каждому заведению — от заказов до отзывов гостей. Это инструмент, который помогает быстро реагировать на проблемы, контролировать качество и видеть результаты работы каждого заведения в режиме реального времени.',
    smText:
      'Владельцы франшиз и сетевых заведений могут управлять всей сетью из одного интерфейса. Независимо от количества ресторанов, у вас всегда есть полная прозрачность по каждому заведению.',
    smMaxWidth: '430px',
  },
];

const selectedAbility = ref(abilities[0]);
</script>

<style lang="scss" scoped></style>
