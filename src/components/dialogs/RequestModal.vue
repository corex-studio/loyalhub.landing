<template>
  <CDialog
    :model-value="model || false"
    @update:model-value="$emit('update:modelValue', $event)"
    width="463px"
    :position="$q.screen.sm ? 'bottom' : undefined"
    :maximized="$q.screen.sm"
  >
    <div v-if="!completed" class="column full-width text-black4 items-center">
      <div class="mega-text3 bold text-center">Оставьте заявку</div>
      <div
        class="text-center body mt-6"
        :style="$q.screen.sm ? '' : 'width: 75%'"
      >
        Наши менеджеры свяжутся с вами в ближайшее время.
      </div>
      <q-form @submit="send()" @validation-error="validationError = true">
        <CInput
          :rules="[rules.required]"
          placeholder="Ваше имя"
          v-model="data.name"
          :height="$q.screen.sm ? '44px' : undefined"
          @blur="rules.required(data.name) ? (validationError = true) : ''"
          class="full-width mt-12"
        />
        <CInput
          :rules="[
            rules.required,
            (v: string) => (v.length < 11 ? 'Телефон некорректный' : true),
          ]"
          @blur="rules.required(data.name) ? (validationError = true) : ''"
          v-model="data.phone"
          mask="+# (###) ###-##-##"
          placeholder="+7 (999) 99 99-99"
          :height="$q.screen.sm ? '44px' : undefined"
          unmasked-value
          class="full-width"
          :class="'mt-10'"
        />
        <CInput
          placeholder="Email"
          :rules="[rules.email]"
          :height="$q.screen.sm ? '44px' : undefined"
          v-model="data.email"
          class="full-width mt-10"
        />
        <CInput
          placeholder="Описание"
          v-model="data.description"
          dense
          text-area
          @blur="rules.required(data.name) ? (validationError = true) : ''"
          class="full-width mt-10"
        />
        <q-checkbox
          class="full-width secondary-text text-secondary2"
          :class="'mt-8'"
          dense
          size="40px"
          v-model="confirmation"
          label="Я соглашаюсь с политикой конфиденциальности"
        />
        <CButton
          :loading="loading"
          label="Оставить заявку"
          type="submit"
          :height="$q.screen.sm ? '44px' : '50px'"
          class="rounded-100 mt-12"
          :disabled="!confirmation"
          width="100%"
        />
      </q-form>
    </div>

    <div v-else class="column full-width text-black4 items-center">
      <div class="mega-text3 bold text-center">Спасибо за вашу заявку!</div>
      <div
        class="text-center body mt-10"
        :style="$q.screen.sm ? '' : 'width: 85%'"
      >
        Наши менеджеры свяжутся с вами в ближайшее время для уточнения деталей.
      </div>
      <q-separator class="bg-secondary my-10" style="width: 70%; opacity: 0.3"></q-separator>
      <div
        class="text-center body"
        :style="$q.screen.sm ? '' : 'width: 80%'"
      >
        Следите за нашими новостями в
      </div>
      <div @click="goToTelegram" class="subtitle-text2 mt-3 text-primary cursor-pointer"
           style="text-decoration: underline">
        Telegram
      </div>
    </div>
  </CDialog>
</template>
<script lang="ts" setup>
import CDialog from 'src/components/templates/dialogs/CDialog.vue';
import CInput from '../templates/inputs/CInput.vue';
import { ref, watch } from 'vue';
import CButton from '../templates/buttons/CButton.vue';
import rules from 'src/corexModels/rules';
import { sendRequest } from 'src/models/sendRequest';
import { METRIKA_GOAL_EVENT, useMetrikaTick } from 'boot/metrika';

const model = defineModel<boolean>();

const { metrikaTick } = useMetrikaTick();
const loading = ref(false);
const completed = ref(false);

const validationError = ref(false);
const confirmation = ref(false);

const getEmptyData = () => {
  return {
    phone: null,
    name: null,
    description: null,
    email: null
  };
};


const data = ref<{
  phone: string | null;
  name: string | null;
  description: string | null;
  email: string | null;
}>(getEmptyData());


const goToTelegram = () => {
  metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.TELEGRAM_AFTER_SUBMIT_REQUEST });
  window.open('https://t.me/loyalhub_news', '_self');
};

const send = async () => {
  loading.value = true;
  const success = await sendRequest(
    data.value.phone,
    data.value.name,
    data.value.description,
    data.value.email
  );
  if (success) {
    metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.SUBMIT_REQUEST });
    completed.value = true;
  }
  loading.value = false;
};

watch(model, (v) => {
  if (v) {
    completed.value = false;
    loading.value = false;
    confirmation.value = false;
    data.value = getEmptyData();
  }
});
</script>
