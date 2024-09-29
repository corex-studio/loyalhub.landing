<template>
  <div class="c-container default-parent-block">
    <div class="column full-width no-wrap items-center pb-5">
      <div class="mega-header2 bold text-center">Почему выбирают Loyalhub?</div>
      <div class="row full-width justify-center gap-8 mt-20">
        <div
          v-for="(item, index) in reasons"
          :key="index"
          :class="
            selectedReason.title === item.title
              ? 'bg-primary text-white'
              : 'bg-secondary1'
          "
          class="chip-block pr-8 pl-5 py-4 items-center gap-6 cursor-pointer row no-wrap"
          style="transition: background 0.35s"
          @click="selectedReason = item"
        >
          <div class="icon-block row items-center justify-center">
            <CIcon
              :color="
                selectedReason.title === item.title ? 'primary' : 'accent2'
              "
              :name="item.icon"
              size="22px"
            />
          </div>
          <div>
            {{ item.title }}
          </div>
        </div>
      </div>
      <div
        :class="`bg-${selectedReason.block.color}`"
        class="content-block row full-width relative-position mt-20"
        style="overflow: hidden"
      >
        <q-img
          v-if="selectedReason.block.color === 'accent1'"
          height="100%"
          src="assets/whyVectorYellow.svg"
          style="position: absolute; bottom: 0; right: 0; z-index: 0"
        />
        <q-img
          v-else
          height="100%"
          src="assets/whyVector.svg"
          style="position: absolute; bottom: 0; right: 0; z-index: 0"
        />

        <div class="column gap-10 pl-25 pt-20" style="width: 55%">
          <div class="header1 bold" style="z-index: 1">
            {{ selectedReason.block.title }}
          </div>
          <div style="z-index: 1">
            {{ selectedReason.block.text }}
          </div>
        </div>
        <div
          :class="{
            'items-end':
              selectedReason.title === 'Своя разработка слишком дорого',
          }"
          class="col-grow justify-center row"
        >
          <q-img
            :src="`assets/${selectedReason.block.image}`"
            :width="selectedReason.block.imageWidth"
            fit="contain"
          />
        </div>
      </div>
      <CButton
        class="mt-15 underlined"
        icon-right="fa-solid fa-arrow-up-right"
        icon-size="22px"
        label="Узнать больше"
        text-button
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CIcon from 'src/components/templates/buttons/CIcon.vue';
import { ref } from 'vue';
import CButton from 'components/templates/buttons/CButton.vue';

type Reason = {
  title: string;
  icon: string;
  block: {
    title: string;
    text: string;
    color: string;
    image: string;
    imageWidth: string;
  };
};

const reasons: Reason[] = [
  {
    title: 'Своя разработка слишком дорого',
    icon: 'fa-solid fa-handshake',
    block: {
      title: 'Разработка собственного решения – это большие затраты',
      text:
        'С Loyalhub вы получаете все необходимые инструменты за фиксированную ежемесячную плату. Продукт постоянно обновляется \n' +
        'и развивается, учитывая тренды и пожелания наших клиентов.',
      color: 'accent1',
      image: 'reason1.png',
      imageWidth: '63%',
    },
  },
  {
    title: 'Хотят лучше узнать своего гостя',
    icon: 'fa-solid fa-heart',
    block: {
      title: 'Хотят лучше узнать своего гостя',
      text: 'Loyalhub вы сможете оцифровать до 80% своей клиентской базы, чтобы лучше понимать потребности и предпочтения гостей.',
      color: 'secondary1',
      image: 'reason2.png',
      imageWidth: '88%',
    },
  },
  {
    title: 'Нет подходящих решений',
    icon: 'fa-solid fa-question',
    block: {
      title: 'Нет подходящего решения',
      text:
        'Настроим каждый аспект вашего бизнеса\n' +
        'От дизайна приложения до автоматических уведомлений и условий программы лояльности – чтобы создать идеальное решение для ваших заведений.',
      color: 'secondary1',
      image: 'reason3.png',
      imageWidth: '76%',
    },
  },
  {
    title: 'Гибкое масштабирование бизнеса',
    icon: 'fa-solid fa-badge-check',
    block: {
      title: 'Loyalhub легко адаптируется к вашим потребностям ',
      text: 'Подключайте новые заведения, включая франчайзинговые сети с разным меню и условиями, без сложностей и затрат на интеграцию.',
      color: 'secondary1',
      image: 'reason4.png',
      imageWidth: '70%',
    },
  },
  {
    title: 'Нужен экспертный анализ и поддержка',
    icon: 'fa-solid fa-sack',
    block: {
      title: 'Мы консультируем вас на каждом этапе работы',
      text: 'Получайте персонализированные рекомендации от наших экспертов по увеличению среднего чека, оптимизации заказов и повышению лояльности клиентов.',
      color: 'secondary1',
      image: 'reason5.png',
      imageWidth: '85%',
    },
  },
];

const selectedReason = ref<Reason>(reasons[0]);
</script>

<style lang="scss" scoped>
.chip-block {
  border-radius: 100px;
}

.icon-block {
  border-radius: 100px;
  height: 40px;
  width: 40px;
  background-color: white;
}

.content-block {
  height: 310px;
  border-radius: 30px;
}

.underlined:after {
  height: 2px;
  width: 100%;
  cursor: pointer;

  background-color: $accent2;
}
</style>
