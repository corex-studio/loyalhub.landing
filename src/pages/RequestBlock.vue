<template>
  <section class="parent-block">
    <div class="c-container">
      <div
        class="main-block relative-position rounded-30 px-lg-25 px-sm-6 py-lg-20 py-sm-15 text-white"
      >
        <q-img
          alt="vector"
          src="assets/requestVector.svg"
          style="position: absolute; bottom: 0"
        />
        <q-img
          v-if="$q.screen.gt.md"
          :width="$q.screen.lt.xl ? '50%' : '100%'"
          alt="mockup"
          src="assets/requestMoc.png"
          style="
            position: absolute;
            bottom: 0px;
            right: -40px;
            max-width: 646px;
            z-index: 0;
          "
        />
        <div
          v-if="!completed"
          :class="{ 'text-center': $q.screen.lt.lg }"
          :style="`max-width: ${$q.screen.lt.lg ? '' : $q.screen.lg ? '500px' : '560px'}`"
          class="column full-width relative-position"
          style="z-index: 2 !important"
        >
          <h2 class="bold">
            Давайте покажем, <br />
            как все работает
          </h2>
          <div class="mt-lg-14 mt-sm-6 body">
            Оставьте контакты - мы напишем вам в течение 2 дней, чтобы обсудить
            проект
          </div>
          <div class="column gap-8 full-width mt-lg-25 mt-sm-15">
            <CInput
              v-model="data.phone"
              :height="$q.screen.lt.lg ? '48px' : '50px'"
              class="col subtitle"
              label="Телефон"
              mask="+7 (###) ###-##-##"
              placeholder="+7 (###) ## ##-##"
              unmasked-value
            />
            <CInput
              v-model="data.name"
              :height="$q.screen.lt.lg ? '48px' : '50px'"
              class="col subtitle"
              label="Ваше имя"
            />
            <CButton
              :disabled="!isActionAvailable"
              :height="$q.screen.lt.lg ? '48px' : '50px'"
              :loading="loading"
              color="accent1"
              label="Оставить заявку"
              @click="send()"
            />
            <div class="secondary row mt-lg-0 full-width justify-center">
              <div class="text-center" style="max-width: 370px">
                Нажимая на кнопку, вы соглашаетесь на обработку персональных
                данных
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          :class="{ 'text-center': $q.screen.lt.lg }"
          :style="`max-width: ${$q.screen.lt.lg ? '' : $q.screen.lg ? '500px' : '560px'}; min-height: ${$q.screen.lt.lg ? '' : '476px'} `"
          class="column text-black4 items-center justify-center"
          style="z-index: 2 !important"
        >
          <h3 class="bold text-center">Спасибо за вашу заявку!</h3>
          <div class="text-center subtitle mt-15" style="z-index: 2">
            Наши менеджеры свяжутся с вами в ближайшее время для уточнения
            деталей.
          </div>
          <q-separator
            class="my-10 full-width"
            color="secondary3"
          ></q-separator>
          <div
            :style="$q.screen.sm ? '' : 'width: 80%'"
            class="text-center body"
          >
            Следите за нашими новостями в
          </div>
          <div
            class="subtitle mt-3 text-accent2 cursor-pointer"
            style="text-decoration: underline; z-index: 2"
            @click="goToTelegram"
          >
            Telegram
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CInput from 'components/templates/inputs/CInput.vue';
import { computed, ref } from 'vue';
import CButton from 'components/templates/buttons/CButton.vue';
import { sendRequest } from 'src/models/sendRequest';
import { METRIKA_GOAL_EVENT, useMetrikaTick } from 'boot/metrika';

const loading = ref(false);

const { metrikaTick } = useMetrikaTick();

const completed = ref(false);

const getEmptyData = () => {
  return {
    phone: null,
    name: null,
    description: null,
    email: null,
  };
};

const data = ref<{
  phone: string | null;
  name: string | null;
  description: string | null;
  email: string | null;
}>(getEmptyData());

const isActionAvailable = computed(() => {
  return (
    data.value.phone && data.value.phone.length >= 10 && data.value.name?.length
  );
});

const send = async () => {
  loading.value = true;
  const success = await sendRequest(data.value.phone, data.value.name);
  if (success) {
    metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.SUBMIT_REQUEST });
    completed.value = true;
  }
  loading.value = false;
};

const goToTelegram = () => {
  metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.TELEGRAM_AFTER_SUBMIT_REQUEST });
  window.open('https://t.me/loyalhub_news', '_self');
};
</script>

<style lang="scss" scoped>
.parent-block {
  padding: 100px 0;
}

.main-block {
  background-color: $primary;
}

body.screen--md,
body.screen--sm {
  .parent-block {
    padding: 80px 0;
  }
}
</style>
