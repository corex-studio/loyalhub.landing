<template>
  <section class="c-container default-parent-block">
    <div class="column full-width no-wrap items-center pb-5">
      <h2 class="bold text-center">Почему выбирают Loyalhub?</h2>
      <div
        class="row full-width justify-center gap-lg-8 gap-sm-4 mt-lg-15 mt-sm-10"
      >
        <div
          v-for="(item, index) in reasons"
          :key="index"
          :class="
            selectedReason.title === item.title
              ? 'bg-primary text-white'
              : 'bg-secondary1'
          "
          class="chip-block pr-lg-8 pr-sm-6 pl-lg-5 pl-sm-4 py-lg-4 py-sm-3 items-center gap-lg-6 gap-sm-3 cursor-pointer row no-wrap"
          style="transition: background 0.35s"
          @click="selectedReason = item"
        >
          <div class="icon-block row items-center justify-center">
            <CIcon
              :color="
                selectedReason.title === item.title ? 'primary' : 'accent2'
              "
              :name="item.icon"
              :size="$q.screen.lt.lg ? '18px' : '22px'"
            />
          </div>
          <div
            class="secondary"
            v-html="$q.screen.lt.md ? item.smTitle : item.title"
          ></div>
        </div>
      </div>
      <div
        :class="[
          `bg-${selectedReason.block.color}`,
          $q.screen.lt.lg ? 'column' : 'row ',
        ]"
        class="content-block full-width no-wrap relative-position mt-lg-20 mt-sm-15"
        style="overflow: hidden"
      >
        <q-img
          v-if="selectedReason.block.color === 'accent1'"
          alt="vector"
          height="100%"
          src="assets/whyVectorYellow.svg"
          style="position: absolute; bottom: 0; right: 0; z-index: 0"
        />
        <q-img
          v-else
          alt="vector"
          height="100%"
          src="assets/whyVector.svg"
          style="position: absolute; bottom: 0; right: 0; z-index: 0"
        />
        <div
          :style="`width: ${$q.screen.lt.lg ? '100%' : '55%'}`"
          class="column gap-lg-10 gap-sm-4 pl-lg-25 pr-lg-0 px-sm-8 pt-lg-20 pt-sm-10"
        >
          <h3 class="bold" style="z-index: 1">
            {{ selectedReason.block.title }}
          </h3>
          <div style="z-index: 1">
            {{ selectedReason.block.text }}
          </div>
        </div>
        <div
          :class="
            selectedReason.title === 'Своя разработка слишком дорого'
              ? 'items-end'
              : 'items-center'
          "
          class="col-grow justify-center row"
        >
          <q-img
            :position="
              selectedReason.title === 'Своя разработка слишком дорого'
                ? 'bottom'
                : $q.screen.lt.lg
                  ? selectedReason.block.smPosition || 'bottom'
                  : 'center'
            "
            :src="`assets/${$q.screen.lt.lg ? 'sm' + selectedReason.block.image[0].toLocaleUpperCase() + selectedReason.block.image.slice(1) : selectedReason.block.image}`"
            :style="`min-height: ${$q.screen.lt.lg ? '230' : '300'}px; max-height: ${$q.screen.lt.lg ? '290px' : '320px'} `"
            alt="picture"
            fit="contain"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <CButton
        :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
        class="mt-15 underlined"
        icon-right="fa-solid fa-arrow-up-right"
        icon-size="22px"
        label="Узнать больше"
        text-button
        @click="store.requestModal = true"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import CIcon from 'src/components/templates/buttons/CIcon.vue';
import { ref } from 'vue';
import CButton from 'components/templates/buttons/CButton.vue';
import { store } from 'src/models/store';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';

type Reason = {
  title: string;
  smTitle: string;
  icon: string;
  block: {
    title: string;
    text: string;
    color: string;
    image: string;
    smPosition?: string;
  };
};

const reasons: Reason[] = [
  {
    title: 'Своя разработка слишком дорого',
    smTitle: 'Дорогая <br/>разработка',
    icon: 'fa-solid fa-handshake',
    block: {
      title: 'Разработка собственного решения – это большие затраты',
      text:
        'С Loyalhub вы получаете все необходимые инструменты за фиксированную ежемесячную плату. Продукт постоянно обновляется \n' +
        'и развивается, учитывая тренды и пожелания наших клиентов.',
      color: 'accent1',
      image: 'reason1.png',
    },
  },
  {
    title: 'Хотят лучше узнать своего гостя',
    smTitle: 'Хотят узнать <br/> своего гостя',
    icon: 'fa-solid fa-heart',
    block: {
      title: 'Хотят лучше узнать своего гостя',
      text: 'Loyalhub вы сможете оцифровать до 80% своей клиентской базы, чтобы лучше понимать потребности и предпочтения гостей.',
      color: 'secondary1',
      image: 'reason2.png',
    },
  },
  {
    title: 'Нет подходящих решений',
    smTitle: 'Нет подходящих <br/>  решений',
    icon: 'fa-solid fa-question',
    block: {
      title: 'Нет подходящего решения',
      text:
        'Настроим каждый аспект вашего бизнеса\n' +
        'От дизайна приложения до автоматических уведомлений и условий программы лояльности – чтобы создать идеальное решение для ваших заведений.',
      color: 'secondary1',
      image: 'reason3.png',
      smPosition: 'right',
    },
  },
  {
    title: 'Гибкое масштабирование бизнеса',
    smTitle: 'Масштабирование <br/>  бизнеса',
    icon: 'fa-solid fa-badge-check',
    block: {
      title: 'Loyalhub легко адаптируется к вашим потребностям ',
      text: 'Подключайте новые заведения, включая франчайзинговые сети с разным меню и условиями, без сложностей и затрат на интеграцию.',
      color: 'secondary1',
      image: 'reason4.png',
    },
  },
  {
    title: 'Нужен экспертный анализ и поддержка',
    smTitle: 'Экспертный анализ <br/>  и поддержка',
    icon: 'fa-solid fa-sack',
    block: {
      title: 'Мы консультируем вас на каждом этапе работы',
      text: 'Получайте персонализированные рекомендации от наших экспертов по увеличению среднего чека, оптимизации заказов и повышению лояльности клиентов.',
      color: 'secondary1',
      image: 'reason5.png',
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
  height: 320px;
  border-radius: 30px;
}

body.screen--md,
body.screen--sm {
  .icon-block {
    border-radius: 100px;
    height: 32px;
    width: 32px;
    background-color: white;
  }

  .content-block {
    height: auto;
    border-radius: 30px;
  }
}

.underlined:after {
  height: 2px;
  width: 100%;
  cursor: pointer;
  background-color: $accent2;
}
</style>
