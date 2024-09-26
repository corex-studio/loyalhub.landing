<template>
  <div class="parent-block">
    <div class="c-container">
      <div
        class="main-block relative-position rounded-30 px-25 py-20 text-white"
      >
        <q-img
          src="assets/requestVector.svg"
          style="position: absolute; bottom: 0"
        />
        <q-img
          src="assets/requestMoc.png"
          style="position: absolute; bottom: -32px; right: 0; max-width: 616px"
        />
        <div style="max-width: 560px">
          <div class="mega-header2 bold">Давайте покажем, как все работает</div>
          <div class="mt-14 body">
            Оставьте контакты - мы напишем вам в течение 2 дней, чтобы обсудить
            проект
          </div>
          <div class="column gap-7 full-width mt-25">
            <CInput
              v-model="data.phone"
              class="col"
              height="50px"
              mask="+7 (###) ###-##-##"
              placeholder="+7 (999) 99 99-99"
              unmasked-value
            />
            <CInput
              v-model="data.name"
              class="col"
              height="50px"
              placeholder="Ваше имя"
            />
            <CButton
              :loading="loading"
              color="accent1"
              height="50px"
              label="Оставить заявку"
              @click="send()"
            />
            <div class="secondary row full-width justify-center">
              <div class="text-center" style="max-width: 370px">
                Нажимая на кнопку, вы соглашаетесь на обработку персональных
                данных
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CInput from 'components/templates/inputs/CInput.vue';
import { ref } from 'vue';
import CButton from 'components/templates/buttons/CButton.vue';
import { sendRequest } from 'src/models/sendRequest';
import { METRIKA_GOAL_EVENT, useMetrikaTick } from 'boot/metrika';

const loading = ref(false);

const { metrikaTick } = useMetrikaTick();

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

const send = async () => {
  loading.value = true;
  const success = await sendRequest(data.value.phone, data.value.name);
  if (success) {
    metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.SUBMIT_REQUEST });
  }
  loading.value = false;
};
</script>

<style lang="scss" scoped>
.parent-block {
  padding: 100px 0;
}

.main-block {
  background-color: $primary;
}
</style>
