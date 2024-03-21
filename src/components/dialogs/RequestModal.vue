<template>
  <CDialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    width="463px"
  >
    <div class="column full-width text-black4 items-center">
      <div class="mega-text3 bold text-center">
        Оставьте заявку на запуск решений
      </div>
      <div class="text-center body mt-6" style="width: 70%">
        Наши менеджеры свяжутся с вами в ближайшее время.
      </div>
      <q-form
        @submit="sendRequest()"
        @validation-error="validationError = true"
      >
        <CInput
          :rules="[rules.required]"
          placeholder="Ваше имя"
          v-model="data.name"
          class="full-width mt-12"
        />
        <CInput
          :rules="[rules.required]"
          v-model="data.phone"
          mask="+# (###) ###-##-##"
          placeholder="+7 (999) 99 99-99"
          unmasked-value
          class="full-width"
          :class="validationState === 1 ? 'mt-14' : 'mt-6'"
        />
        <q-checkbox
          class="full-width secondary-text text-secondary2"
          :class="validationState === 2 ? 'mt-14' : 'mt-10'"
          dense
          size="40px"
          v-model="data.confirmation"
          label="Я соглашаюсь с политикой конфиденциальности"
        />
        <CButton
          label="Оставить заявку"
          type="submit"
          height="50px"
          class="rounded-100 mt-12"
          width="100%"
        />
      </q-form>
    </div>
  </CDialog>
</template>
<script lang="ts" setup>
import CDialog from 'src/components/templates/dialogs/CDialog.vue';
import CInput from '../templates/inputs/CInput.vue';
import { computed, ref } from 'vue';
import CButton from '../templates/buttons/CButton.vue';
import rules from 'src/corexModels/rules';

defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (evt: 'update:modelValue', value: boolean): void;
}>();

const validationError = ref(false);

const data = ref<{
  phone: string | null;
  name: string | null;
  confirmation: boolean;
}>({
  phone: null,
  name: null,
  confirmation: false,
});

const validationState = computed(() => {
  return validationError.value
    ? data.value.name
      ? data.value.phone
        ? false
        : 2
      : 1
    : false;
});

const sendRequest = () => {
  return;
};
</script>
