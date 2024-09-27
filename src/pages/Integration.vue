<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div
        class="bg-secondary1 rounded-30 px-25 py-20 relative-position"
        style="height: 79dvh; max-height: 620px"
      >
        <q-img
          src="assets/integrationVector.svg"
          style="position: absolute; left: 0; bottom: 0; z-index: 0"
        />
        <div
          class="column full-width no-wrap gap-10 justify-between full-height"
          style="max-width: 700px"
        >
          <div style="z-index: 2">
            <div class="row no-wrap items-center text-accent2">
              <q-img src="assets/iikoLogo.png" width="80px" />
              <CButton
                class="secondary"
                icon-right="fa-solid fa-arrow-up-right"
                icon-size="20px"
                label="Официальный партнер iiko"
                text-button
                text-color="accent2"
              />
            </div>
            <div class="mega-header2 bold mt-5">
              Интеграция <span class="text-accent2 bold">с iiko</span>
            </div>
            <div class="body mt-8" style="max-width: 600px">
              Мы полностью интегрированы, расширия возможности ваших заведений.
              Используйте все возможности вашей учетной системы
            </div>
            <div class="mt-15 column full-width gap-10">
              <div
                v-for="(el, index) in advantages"
                :key="index"
                class="secondary row gap-6 items-center no-wrap"
              >
                <CIcon color="success" name="fa-regular fa-check" size="22px" />
                <div>
                  {{ el }}
                </div>
              </div>
            </div>
          </div>
          <CButton
            color="accent1"
            height="52px"
            label="Начать интеграцию"
            width="235px"
          />
        </div>
        <q-img
          src="assets/integrationMoc.png"
          style="
            z-index: 1;
            position: absolute;
            bottom: 0;
            right: -50px;
            max-width: 880px;
          "
          width="65%"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import CIcon from 'components/templates/buttons/CIcon.vue';

const advantages = [
  'Мгновенная отправка заказов на терминал',
  'Интеграция системы лояльности iiko',
  'Автоматическое обновление стоп-листов',
  'Оцифровка данных о гостях в iiko',
];
</script>

<style lang="scss" scoped></style>
