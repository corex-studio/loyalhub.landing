<template>
  <section class="default-parent-block">
    <div :class="{ 'c-container': $q.screen.gt.md }" class="row justify-center">
      <div class="row full-width justify-center">
        <h2 class="bold text-center" style="max-width: 880px">
          Получите бесплатный анализ
          <br v-if="$q.screen.lt.lg && $q.screen.width > 550" />
          для вашего заведения
        </h2>
      </div>
      <div
        :class="$q.screen.lt.lg ? 'column reverse c-container' : 'row'"
        class="mt-lg-20 mt-sm-15 main-block no-wrap full-width"
      >
        <div
          :style="
            $q.screen.lt.lg ? '' : $q.screen.lg ? 'width: 60%' : 'width: 68%'
          "
          class="column"
        >
          <div class="column px-lg-25 pt-lg-16">
            <div
              :class="$q.screen.lt.lg ? 'rounded-12' : 'rounded-5'"
              class="px-lg-5 px-sm-8 py-lg-2 py-sm-5 caption bg-secondary1 text-primary"
              style="width: fit-content"
            >
              Вопрос {{ previewStep }} из
              {{ questions.length + 1 }}
            </div>
            <h5 v-if="currentStep" class="mt-lg-5 mt-sm-6 bold">
              {{ currentStep.question }}
            </h5>
            <div class="mt-lg-15 mt-sm-10">
              <transition mode="out-in" name="slide-fade">
                <div v-bind:key="step" class="row gap-7">
                  <template v-if="currentStep">
                    <div
                      v-for="(item, index) in currentStep.variants"
                      :key="index"
                      :class="
                        currentStep.selected === item
                          ? 'active-variant'
                          : ' inactive-variant'
                      "
                      :style="`height: ${$q.screen.lt.lg ? '' : '65px'} `"
                      class="col-lg-5 py-sm-6 py-lg-0 col-sm-12 px-6 rounded-14 cursor-pointer items-center row"
                      style="min-width: 220px"
                      @click="selectVariant(item)"
                    >
                      <div
                        :class="$q.screen.lt.lg ? 'body' : 'secondary'"
                        class="row items-center gap-6 no-wrap"
                      >
                        <q-radio
                          :model-value="currentStep.selected"
                          :val="item"
                          color="accent1"
                          dense
                          @click="selectVariant(item)"
                        />
                        {{ item }}
                      </div>
                    </div>
                  </template>
                  <RequestForm v-else />
                </div>
              </transition>
            </div>
          </div>
          <div class="column gap-6 px-lg-25 pb-lg-16 pb-sm-10 mt-15">
            <div class="secondary text-secondary3">До бесплатного анализа:</div>
            <div class="row full-width progress-block">
              <div
                :style="`width: ${getProgress()}%`"
                class="progress-bar row items-center justify-center"
                style="transition: width 0.45s ease-in-out"
              >
                <div v-if="getProgress()" class="secondary">
                  {{ getProgress().toFixed() }}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <Manager :text="currentManagerText" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Manager from './Manager.vue';
import RequestForm from 'components/RequestForm.vue';

const step = ref(1);

const questions = ref<
  {
    question: string;
    variants: string[];
    selected: string | null;
    managerText: string;
  }[]
>([
  {
    question: 'Какое у вас заведение?',
    variants: ['Ресторан', 'Кафе', 'Бар', 'Кофейня', 'Фудкорт', 'Другое'],
    selected: null,
    managerText:
      'Здравствуйте 👋, на связи Елена- ваш личный менеджер. Чтобы я могла сформировать индивидуальное решение, которое будет полностью соответствовать вашему бизнесу. Пожалуйста, выберите тип вашего заведения.',
  },
  {
    question: 'Где хотите усилиться?',
    variants: [
      'Система онлайн-заказов',
      'QR меню и самообслуживание',
      'Система лояльности и бонусов',
      'Интерактивные тейбл тенты ',
      'Оптимизация работы с клиентами (CRM)',
    ],
    selected: null,
    managerText:
      'А в чем вы хотели бы усилиться, чтобы ваше заведение стало еще лучше?',
  },
  {
    question: 'Какие основные цели вы хотите достичь?',
    variants: [
      'Увеличение среднего чека ',
      'Увеличение числа повторных визитов',
      'Повышение удовлетворенности гостей',
      'Снижение времени ожидания заказов',
      'Оптимизация работы персонала',
      'Хочу все',
    ],
    selected: null,
    managerText:
      '🤔У меня уже складывается представление, но не хватает еще одной детали- это ваша цель. Выберите чего вы хотели бы достичь.',
  },
]);

const previewStep = computed(() => {
  return step.value > questions.value.length + 1
    ? questions.value.length
    : step.value;
});

const currentManagerText = computed(() => {
  return (
    currentStep.value?.managerText ||
    'Супер 🔥 ! Вижу, что у вас хороший настрой. Мне нужно немного времени ⏳, чтобы сформировать для вас индивидуальные рекомендации по улучшению работы вашего заведения. Оставьте свои контактные данные и я свяжусь с вами в ближайшее время 🥰.'
  );
});

const currentStep = computed(() => {
  if (step.value > questions.value.length) return;
  return questions.value[step.value - 1];
});

const getProgress = () => {
  return (previewStep.value / (questions.value.length + 1)) * 100;
};

const selectVariant = (val: string) => {
  if (!currentStep.value) return;
  currentStep.value.selected = val;
  setTimeout(() => {
    if (step.value < questions.value.length + 1) {
      step.value++;
    }
  }, 400);
};
</script>

<style lang="scss" scoped>
.main-block {
  border-radius: 30px;
  border: 2px solid #f7f7f8;
  box-shadow: 0px 2px 6px 0px #b1b1b41a;
  overflow: hidden;
}

.active-variant {
  outline: 2px solid $accent1;
  transition: outline-color 0.2s ease-in;
}

.inactive-variant {
  outline: 1px solid #f0f0f0;
  transition: outline-color 0.2s ease-out;
}

.progress-block {
  height: 22px;
  background-color: $secondary2;
  border-radius: 30px;
  overflow: hidden;
}

.progress-bar {
  background-color: $accent1;
  border-radius: 30px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
