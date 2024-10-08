<template>
  <section class="default-parent-block">
    <div class="c-container column items-center">
      <div
        class="secondary text-primary bg-secondary1 rounded-5 py-lg-2 py-sm-5 px-lg-5 px-sm-8"
      >
        FAQ
      </div>
      <h2 class="bold mt-sm-4 mt-lg-0">Остались вопросы?</h2>
      <div
        :class="$q.screen.lt.lg ? 'column' : 'row'"
        class="no-wrap full-width gap-lg-10 gap-sm-6 mt-lg-20 mt-sm-15"
      >
        <div
          :class="$q.screen.lt.lg ? 'rounded-20' : 'rounded-30'"
          class="col column justify-between relative-position py-lg-20 py-sm-12 px-lg-25 px-sm-8 bg-accent1"
          style="height: fit-content"
        >
          <template v-if="$q.screen.gt.md">
            <q-img
              alt="vector"
              src="assets/questionsVector.svg"
              style="position: absolute; left: 0; bottom: 0; z-index: 0"
            />
            <q-img
              alt="mockup"
              src="assets/questionsMoc.png"
              style="position: absolute; right: 0; bottom: 0; max-width: 330px"
            />
          </template>
          <template v-else>
            <q-img
              alt="vector"
              height="100%"
              src="assets/smQuestionsVector.svg"
              style="position: absolute; left: 0; top: 0; z-index: 0"
            />
            <q-img
              alt="mockup"
              src="assets/smQuestionsMoc.png"
              style="position: absolute; right: 0; bottom: 0"
              width="180px"
            />
          </template>

          <div class="column full-width" style="z-index: 1">
            <h3 class="bold">Loyalhub поможет в решении ваших вопросов</h3>
            <div
              :class="$q.screen.lt.lg ? 'body' : 'subtitle'"
              class="mt-lg-10 mt-sm-4"
            >
              Вот ответы на самые частые из них. <br v-if="$q.screen.gt.md" />
              Или можно просто написать нам в телеграм и спросить
            </div>
          </div>
          <CButton
            :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
            :height="$q.screen.lt.lg ? '40px' : '58px'"
            :style="$q.screen.lt.lg ? 'margin-top: 12px' : 'margin-top: 30%'"
            :width="$q.screen.lt.lg ? '160px' : '235px'"
            label="Задать вопрос"
            @click="store.requestModal = true"
          />
        </div>
        <div class="col column gap-lg-5 gap-sm-6">
          <q-expansion-item
            v-for="(el, index) in questions"
            :key="index"
            :model-value="el.expanded"
            @update:model-value="changeExpandedState(index)"
            :class="$q.screen.lt.lg ? 'rounded-12' : 'rounded-15'"
            class="bg-secondary2 px-lg-11 px-sm-6 py-lg-10 py-sm-6 cursor-pointer full-width"
          >
            <template v-slot:header>
              <div
                class="row full-width justify-between gap-5 items-center no-wrap"
              >
                <div :class="{ bold: $q.screen.lt.lg }" class="col subtitle">
                  {{ el.question || '-' }}
                </div>
                <div
                  class="expanded-icon-block row items-center justify-center"
                >
                  <q-icon
                    :size="$q.screen.lt.lg ? '18px' : '20px'"
                    :style="el.expanded ? 'transform: rotate(135deg)' : ''"
                    color="white"
                    name="fa-regular fa-plus"
                    style="transition: 0.25s"
                  />
                </div>
              </div>
            </template>
            <div class="mt-lg-8 mt-sm-5 secondary">{{ el.answer }}</div>
          </q-expansion-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import { ref } from 'vue';
import { store } from 'src/models/store';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';

const questions = ref([
  {
    question: 'Сколько времени займет запуск?',
    answer:
      'Мы запустим ваш продукт за 2 недели после всех необходимых проверок и настроек.',
    expanded: true,
  },
  {
    question: 'Ваши решения подходят для всех видов заведений?',
    answer:
      'Да, наши решения легко адаптируются и подходят для любых заведений в сфере HoReCa.',
    expanded: false,
  },
  {
    question: 'Можно ли подключить вашу систему к iiko?',
    answer:
      'Да, наша система полностью совместима с iiko, вы сможете использовать все функции учетной системы.',
    expanded: false,
  },
  {
    question: 'Будет ли поддержка после запуска?',
    answer:
      'Конечно! Мы создадим для вас чат в Telegram, где всегда будем на связи и поможем с любыми вопросами.',
    expanded: false,
  },
  {
    question: 'Могу ли я протестировать ваши продукты?',
    answer:
      'Да, мы предоставляем демо-доступ на 2 недели, чтобы вы могли попробовать наши решения в действии.',
    expanded: false,
  },
]);

const changeExpandedState = (index: number) => {
  questions.value[index].expanded = !questions.value[index].expanded;
  questions.value
    .filter((_, _index) => _index !== index)
    .forEach((el) => (el.expanded = false));
};
</script>

<style lang="scss" scoped>
.q-expansion-item :deep(.q-focus-helper) {
  display: none;
}

.q-expansion-item :deep(.q-item__section) {
  display: none;
}

.expanded-icon-block {
  height: 32px;
  width: 32px;
  min-width: 32px;
  background-color: $primary;
  border-radius: 100px;
}

.q-expansion-item :deep(.q-item) {
  padding: 0 !important;
  min-height: unset;
}
</style>
