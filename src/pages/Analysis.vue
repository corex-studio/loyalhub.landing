<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="row full-width justify-center">
        <div class="mega-header2 bold text-center" style="max-width: 880px">
          Получите бесплатный анализ для вашего заведения
        </div>
      </div>
      <div class="mt-20 main-block row no-wrap full-width">
        <div class="column" style="width: 68%">
          <div class="column px-25 pt-20">
            <div
              class="px-10 py-4 secondary bg-secondary2 rounded-12"
              style="width: fit-content"
            >
              Вопрос {{ previewStep }} из
              {{ questions.length }}
            </div>
            <div class="mt-7 header3 bold">{{ currentStep.question }}</div>
            <div class="mt-17">
              <transition mode="out-in" name="slide-fade">
                <div v-bind:key="step" class="row gap-7">
                  <div
                    v-for="(item, index) in currentStep.variants"
                    :key="index"
                    :class="
                      currentStep.selected === item
                        ? 'active-variant'
                        : ' inactive-variant'
                    "
                    class="col-5 px-6 rounded-14 cursor-pointer secondary items-center row"
                    style="height: 65px"
                    @click="selectVariant(item)"
                  >
                    <q-radio
                      :label="item"
                      :model-value="currentStep.selected"
                      :val="item"
                      color="accent1"
                      dense
                      @click="selectVariant(item)"
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <q-separator class="mt-25 mb-14 mr-10" color="secondary1" />
          <div class="column gap-6 px-25 pb-20">
            <div class="secondary">До бесплатного анализа:</div>
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
        <div class="column col px-16 py-20 rounded-30 bg-secondary1 gap-12">
          <div class="row gap-10 items-center no-wrap">
            <q-avatar size="84px">
              <q-img height="84px" src="assets/director.jpg" width="84px" />
            </q-avatar>
            <div class="column gap-2">
              <div class="subtitle bold">Елена</div>
              <div class="secondary">Ведущий менеджер компании Loyalhub</div>
            </div>
          </div>
          <div
            class="bg-white rounded-15 px-8 py-14 top-arrow relative-position secondary"
          >
            Пройдите наш короткий опрос и получите персонализированный отчет по
            улучшению обслуживания и увеличению среднего чека для вашего
            заведения. Это поможет вам увидеть, как наши решения могут сделать
            ваш бизнес более эффективным!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const step = ref(1);

const questions = ref<
  {
    question: string;
    variants: string[];
    selected: string | null;
  }[]
>([
  {
    question: 'Какое у вас заведение?',
    variants: ['Ресторан', 'Кафе', 'Бар', 'Кофейня', 'Фудкорт', 'Другое'],
    selected: null,
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
  },
]);

const previewStep = computed(() => {
  return step.value > questions.value.length
    ? questions.value.length
    : step.value;
});

const currentStep = computed(() => {
  if (step.value > questions.value.length)
    return questions.value[questions.value.length - 1];
  return questions.value[step.value - 1];
});

const getProgress = () => {
  return (previewStep.value / questions.value.length) * 100;
};

const selectVariant = (val: string) => {
  currentStep.value.selected = val;
  setTimeout(() => {
    if (step.value < questions.value.length) {
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

.top-arrow:before {
  content: ' ';
  height: 0;
  position: absolute;
  width: 0;
  top: -20px;
  left: 10%;
  border: 10px solid transparent;
  border-bottom-color: white;
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
