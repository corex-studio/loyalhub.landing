<template>
  <div v-if="!completed" class="column full-width text-black4 items-center">
    <div class="column items-center">
      <h3 v-if="model" class="bold text-center">Оставьте заявку</h3>
      <h5 v-else class="bold text-center">Оставьте заявку</h5>
      <div
        :class="model ? 'mt-10 body' : 'mt-3 secondary'"
        :style="$q.screen.sm ? '' : 'width: 75%'"
        class="text-center"
      >
        Наши менеджеры свяжутся с вами в ближайшее время.
      </div>
      <q-form
        :class="model ? 'mt-12' : 'mt-10'"
        class="full-width"
        @submit="send()"
      >
        <CInput
          v-model="data.phone"
          :rules="[
            rules.required,
            (v: string) => (v.length < 10 ? 'Телефон некорректный' : true),
          ]"
          class="full-width"
          height="50px"
          label="Телефон"
          mask="+7 (###) ###-##-##"
          placeholder="+7 (####) ## ##-##"
          unmasked-value
          width="100%"
          @blur="phoneError = !data.phone || data.phone.length < 10"
          @update:model-value="phoneError = !$event || $event.length < 10"
        />
        <CInput
          v-model="data.name"
          :class="phoneError ? 'mt-12' : 'mt-8'"
          :rules="[rules.required]"
          class="full-width"
          height="50px"
          label="Ваше имя"
          @blur="nameError = !data.name"
          @update:model-value="nameError = !$event"
        />
        <CButton
          :class="nameError ? 'mt-16' : model ? 'mt-12' : 'mt-8'"
          :disabled="!isActionAvailable"
          :loading="loading"
          color="accent1"
          height="50px"
          label="Оставить заявку"
          type="submit"
          width="100%"
        />
        <div class="row full-width justify-center mt-7">
          <div
            :class="model ? 'body' : 'secondary'"
            class="text-center"
            style="max-width: 370px"
          >
            Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
          </div>
        </div>
      </q-form>
    </div>
  </div>
  <div v-else class="column full-width text-black4 items-center">
    <h4 class="bold text-center">Спасибо за вашу заявку!</h4>
    <div class="text-center body mt-10">
      Наши менеджеры свяжутся с вами в ближайшее время для уточнения деталей.
    </div>
    <q-separator class="my-10 full-width"></q-separator>
    <div :style="$q.screen.sm ? '' : 'width: 80%'" class="text-center body">
      Следите за нашими новостями в
    </div>
    <div
      class="subtitle mt-3 text-accent2 cursor-pointer"
      style="text-decoration: underline"
      @click="goToTelegram"
    >
      Telegram
    </div>
  </div>
</template>

<script lang="ts" setup>
import rules from 'src/corexModels/rules';
import CButton from 'components/templates/buttons/CButton.vue';
import CInput from 'components/templates/inputs/CInput.vue';
import { METRIKA_GOAL_EVENT, useMetrikaTick } from 'boot/metrika';
import { computed, onMounted, ref } from 'vue';
import { sendRequest } from 'src/models/sendRequest';

defineProps<{
  model?: boolean;
}>();

const { metrikaTick } = useMetrikaTick();

const loading = ref(false);
const completed = ref(false);

const phoneError = ref(false);
const nameError = ref(false);

onMounted(() => {
  phoneError.value = false;
  nameError.value = false;
  completed.value = false;
  loading.value = false;
  data.value = getEmptyData();
});

const getEmptyData = () => {
  return {
    phone: null,
    name: null,
    // description: null,
    // email: null,
  };
};

const data = ref<{
  phone: string | null;
  name: string | null;
  // description: string | null;
  // email: string | null;
}>(getEmptyData());

const isActionAvailable = computed(() => {
  return (
    data.value.phone && data.value.phone.length >= 10 && data.value.name?.length
  );
});

const goToTelegram = () => {
  metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.TELEGRAM_AFTER_SUBMIT_REQUEST });
  window.open('https://t.me/loyalhub_news', '_self');
};

const send = async () => {
  loading.value = true;
  const success = await sendRequest(
    data.value.phone,
    data.value.name,
    // data.value.description,
    // data.value.email,
  );
  if (success) {
    metrikaTick({ goalEvent: METRIKA_GOAL_EVENT.SUBMIT_REQUEST });
    completed.value = true;
  }
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
