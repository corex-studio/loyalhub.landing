<template>
  <section class="default-parent-block">
    <div :class="{ 'c-container': $q.screen.gt.md }">
      <div
        :class="$q.screen.gt.md ? 'rounded-30' : 'rounded-20'"
        :style="$q.screen.lt.lg ? '' : 'height: 79dvh; max-height: 620px'"
        class="bg-secondary1 px-lg-25 px-sm-0 py-lg-20 py-sm-15 relative-position"
      >
        <div class="full-height">
          <q-img
            v-if="$q.screen.gt.md"
            alt="vector"
            src="assets/integrationVector.svg"
            style="position: absolute; left: 0; bottom: 0; z-index: 0"
          />
          <div
            :class="{ 'items-center': $q.screen.lt.lg }"
            :style="`max-width: ${$q.screen.lt.lg ? '100%' : '700px'}`"
            class="column full-width no-wrap justify-between full-height"
          >
            <div :class="{ 'c-container': $q.screen.lt.lg }" style="z-index: 2">
              <div class="row no-wrap items-center text-accent2">
                <q-img alt="iiko logo" src="assets/iikoLogo.png" width="80px" />
                <CButton
                  class="secondary"
                  icon-right="fa-solid fa-arrow-up-right"
                  icon-size="20px"
                  label="Официальный партнер iiko"
                  text-button
                  text-color="accent2"
                  @click="openLink('https://store.iiko.ru/loyalhub')"
                />
              </div>
              <h2 class="bold mt-lg-5 mt-sm-4">
                Интеграция <span class="text-accent2 bold">с iiko</span>
              </h2>
              <div
                :class="$q.screen.lt.lg ? 'subtitle' : 'body'"
                class="mt-lg-8 mt-sm-9"
                style="max-width: 600px"
              >
                Мы полностью интегрированы, расширия возможности ваших
                заведений. Используйте все возможности вашей учетной системы
              </div>
              <div class="mt-lg-15 mt-sm-9 column full-width gap-10">
                <div
                  v-for="(el, index) in advantages"
                  :key="index"
                  :class="$q.screen.lt.lg ? 'body' : 'secondary'"
                  class="row gap-lg-6 gap-sm-4 items-center no-wrap"
                >
                  <CIcon
                    color="success"
                    name="fa-regular fa-check"
                    size="22px"
                  />
                  <div>
                    {{ el }}
                  </div>
                </div>
              </div>
            </div>
            <q-img
              v-if="$q.screen.lt.lg"
              alt="picture"
              class="mt-10"
              src="assets/smIntegrationMoc.png"
              width="420px"
            />
            <div :class="{ 'c-container': $q.screen.lt.lg }">
              <CButton
                :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
                :height="$q.screen.lt.lg ? '48px' : '52px'"
                :label="
                  $q.screen.lt.lg ? 'Подобрать решение' : 'Начать интеграцию'
                "
                :width="$q.screen.lt.lg ? '100%' : '235px'"
                color="accent1"
                @click="store.requestModal = true"
              />
            </div>
          </div>
          <q-img
            v-if="$q.screen.gt.md"
            alt="picture"
            src="assets/integrationMoc.png"
            style="
              z-index: 1;
              position: absolute;
              bottom: -40px;
              right: -50px;
              max-width: 880px;
              min-width: 650px;
            "
            width="65%"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import CIcon from 'components/templates/buttons/CIcon.vue';
import { openLink, store } from 'src/models/store';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';

const advantages = [
  'Мгновенная отправка заказов на терминал',
  'Интеграция системы лояльности iiko',
  'Автоматическое обновление стоп-листов',
  'Оцифровка данных о гостях в iiko',
];
</script>

<style lang="scss" scoped></style>
