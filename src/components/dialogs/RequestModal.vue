<template>
  <CDialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    width="463px"
  >
    <div class="column full-width text-black4 items-center">
      <div class="mega-text3 bold text-center">Оставьте заявку</div>
      <div class="text-center body mt-6" style="width: 75%">
        Наши менеджеры свяжутся с вами в ближайшее время.
      </div>
      <q-form @submit="send()" @validation-error="validationError = true">
        <CInput
          :rules="[rules.required]"
          placeholder="Ваше имя"
          v-model="data.name"
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
          unmasked-value
          class="full-width"
          :class="'mt-10'"
        />
        <CInput
          placeholder="Email"
          :rules="[rules.email]"
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
          height="50px"
          class="rounded-100 mt-12"
          :disabled="!confirmation"
          width="100%"
        />
      </q-form>
    </div>
  </CDialog>
</template>
<script lang="ts" setup>
import CDialog from 'src/components/templates/dialogs/CDialog.vue';
import CInput from '../templates/inputs/CInput.vue';
import { ref } from 'vue';
import CButton from '../templates/buttons/CButton.vue';
import rules from 'src/corexModels/rules';
import { sendRequest } from 'src/models/sendRequest';

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (evt: 'update:modelValue', value: boolean): void;
}>();

const loading = ref(false);

const validationError = ref(false);

const confirmation = ref(false);

const data = ref<{
  phone: string | null;
  name: string | null;
  description: string | null;
  email: string | null;
}>({
  phone: null,
  name: null,
  description: null,
  email: null,
});

// const validationState = computed(() => {
//   return validationError.value
//     ? data.value.name
//       ? data.value.phone && data.value.phone.length >= 11
//         ? false
//         : 2
//       : 1
//     : false;
// });

const send = async () => {
  loading.value = true;
  const success = await sendRequest(
    data.value.phone,
    data.value.name,
    data.value.description,
    data.value.email,
  );
  if (success) {
    emit('update:modelValue', false);
  }
  loading.value = false;
};
</script>
