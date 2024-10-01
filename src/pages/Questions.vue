<template>
  <div class="default-parent-block">
    <div class="c-container column items-center">
      <div class="secondary bg-secondary1 rounded-5 py-2 px-5">FAQ</div>
      <div class="mega-header2 bold">Остались вопросы?</div>
      <div class="row full-width gap-10 mt-20">
        <div
          class="col column justify-between relative-position rounded-30 py-20 px-25 bg-accent1"
          style="height: fit-content"
        >
          <q-img
            src="assets/questionsVector.svg"
            style="position: absolute; left: 0; bottom: 0; z-index: 0"
          />
          <q-img
            src="assets/questionsMoc.png"
            style="position: absolute; right: 0; bottom: 0; max-width: 330px"
          />
          <div class="column full-width" style="z-index: 1">
            <div class="header1 bold">
              Loyalhub поможет в решении ваших вопросов
            </div>
            <div class="subtitle mt-20">
              Вот ответы на самые частые из них. <br />
              Или можно просто написать нам в телеграм и спросить
            </div>
          </div>
          <CButton
            height="58px"
            label="Задать вопрос"
            style="margin-top: 30%"
            width="235px"
            @click="store.requestModal = true"
          />
        </div>
        <div class="col column gap-5">
          <q-expansion-item
            v-for="(el, index) in questions"
            :key="index"
            v-model="el.expanded"
            class="bg-secondary2 rounded-15 px-11 py-10 cursor-pointer full-width"
          >
            <template v-slot:header>
              <div
                class="row full-width justify-between gap-5 items-center no-wrap"
              >
                <div class="col subtitle">{{ el.question || '-' }}</div>
                <div
                  class="expanded-icon-block row items-center justify-center"
                >
                  <q-icon
                    :style="el.expanded ? 'transform: rotate(135deg)' : ''"
                    color="white"
                    name="fa-regular fa-plus"
                    size="20px"
                    style="transition: 0.25s"
                  />
                </div>
              </div>
            </template>
            <div class="mt-8 secondary">{{ el.answer }}</div>
          </q-expansion-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import { ref } from 'vue';
import { store } from 'src/models/store';

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
