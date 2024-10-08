<template>
  <div :class="{ 'menu-mode': menuMode }">
    <div
      v-if="externalLabel"
      :class="externalLabelClass ? externalLabelClass : 'mb-4 helper-text bold'"
      class="row gap-3 items-end"
    >
      <slot name="externalLabelPrepend"></slot>
      {{ externalLabel }}
    </div>
    <q-input
      ref="inputRef"
      :autocomplete="autocomplete"
      :autogrow="autoGrow"
      :bg-color="_bgColor"
      :borderless="borderless"
      :class="{
        'label-top': _labelTop,
        'no-icon': _noIcon,
        default: $props.default,
      }"
      :clearable="clearable"
      :color="color"
      :dark="white"
      :dense="dense"
      :disable="_disabled"
      :disabled="_disabled"
      :fill-mask="fillMask"
      :filled="filled"
      :hint="hint"
      :input-class="inputClass"
      :input-style="inputStyle"
      :label="label"
      :label-color="labelColor"
      :loading="loading"
      :mask="mask"
      :modelValue="
        props.customFormattedValue !== undefined && !focused && mounted
          ? customFormattedValue
          : formattedValue
      "
      :outlined="true"
      :placeholder="placeholder"
      :readonly="_readonly"
      :rules="rules"
      :square="square ? true : false"
      :standout="standout"
      :style="`width:${width || 'unset'}; height:${_height};`"
      :type="_type"
      :unmasked-value="unmaskedValue"
      class="body"
      @blur="_blurInput"
      @focus="_focusInput"
      @update:model-value="updateModelValue"
      @keyup.enter.prevent="$emit('enter')"
      @keydown.right="emitDirectionKeys('right', $event)"
      @keydown.left="emitDirectionKeys('left', $event)"
      @keydown.up.prevent="$emit('up')"
      @keydown.down.prevent="$emit('down')"
    >
      <template v-if="$slots.prepend" v-slot:prepend>
        <slot name="prepend"></slot>
        <q-icon
          v-if="leftIcon"
          :name="leftIcon"
          :style="`font-size:${iconSize || '16px'} !important; color:${
            iconColor || 'white'
          }; opacity:${iconOpacity}; `"
          @click="$emit('iconClick')"
        />
      </template>
      <template v-slot:append>
        <slot name="append"></slot>
        <q-icon
          v-if="icon"
          :class="`${iconClass}`"
          :name="icon"
          :style="`font-size:${iconSize || '16px'} !important; color:${
            iconColor || 'white'
          }; opacity:${iconOpacity}; `"
          @click="$emit('iconClick')"
        />
      </template>
      <template v-slot:loading>
        <q-spinner :color="loadingColor" :thickness="3" />
      </template>
      <template v-slot:error> 1234</template>
      <slot></slot>
    </q-input>
  </div>
</template>

<script lang="ts" setup>
import { QInput, ValidationRule } from 'quasar';
import { computed, ref, watchEffect, onMounted } from 'vue';
import { QInputProps } from 'quasar';
import {
  useCurrencyInput,
  CurrencyInputOptions,
  CurrencyDisplay,
} from 'vue-currency-input';

const emit = defineEmits([
  'update:modelValue',
  'enter',
  'iconClick',
  'focus',
  'blur',
  'right',
  'left',
  'up',
  'down',
]);

const props = defineProps<{
  modelValue: string | number | null | undefined;
  customFormattedValue?: string | number;
  icon?: string;
  leftIcon?: string;
  label?: string;
  disabled?: boolean;
  disable?: boolean;
  borderless?: boolean;
  filled?: boolean;
  outlined?: boolean;
  labelColor?: string;
  height?: string;
  width?: string;
  dense?: boolean;
  clearable?: boolean;
  standout?: string | boolean;
  color?: string;
  iconSize?: string;
  type?: QInputProps['type'];
  inputStyle?: object | [] | string;
  iconColor?: string;
  bgColor?: string;
  inputClass?: string;
  iconOpacity?: string;
  labelTop?: boolean;
  noIcon?: boolean;
  placeholder?: string;
  default?: boolean;
  textArea?: boolean;
  hint?: string;
  readonly?: boolean;
  mask?: string;
  fillMask?: boolean;
  loading?: boolean;
  loadingColor?: string;
  rules?: ValidationRule[];
  unmaskedValue?: boolean;
  currency?: boolean;
  currencyOptions?: CurrencyInputOptions;
  precision?: number;
  preventEmitDirection?: boolean;
  square?: boolean;
  autoGrow?: boolean;
  autocomplete?: string;
  iconClass?: string;
  white?: boolean;
  externalLabel?: string;
  externalLabelClass?: string;
  menuMode?: boolean;
}>();

const emitDirectionKeys = (
  direction: 'up' | 'down' | 'left' | 'right',
  event: KeyboardEvent,
) => {
  if (props.preventEmitDirection) event.preventDefault();
  emit(direction);
};

const focused = ref(false);
const mounted = ref(false);
const _focusInput = () => {
  focused.value = true;
  emit('focus');
};

const _blurInput = () => {
  focused.value = false;
  emit('blur');
};

const _readonly = computed(() => {
  if (props.readonly || props.menuMode) return true;
  return props.readonly;
});

const _bgColor = computed(() => {
  if (!props.bgColor && (props.default || props.textArea)) {
    return 'white';
  } else if (!props.bgColor && !props.default) {
    return 'white';
  }
  return props.bgColor;
});

const _noIcon = computed(() => {
  if (!props.noIcon && props.textArea) {
    return true;
  }
  return props.noIcon;
});

const _labelTop = computed(() => {
  if (!props.labelTop && props.textArea) {
    return true;
  }
  return props.labelTop;
});

const _height = computed(() => {
  if (!props.height && props.textArea) {
    return 'unset';
  } else if (!props.height && !props.textArea) {
    return '50px';
  }
  return props.height;
});

const _type = computed(() => {
  if (props.textArea) {
    return 'textarea';
  }
  return props.type;
});

const _disabled = computed(() => props.disabled || props.disable);

const currencyOptions = computed(
  () =>
    props.currencyOptions || {
      currency: 'USD',
      currencyDisplay: CurrencyDisplay.hidden,
      precision: props.precision
        ? {
            min: 0,
            max: props.precision,
          }
        : undefined,
    },
);

let { formattedValue, inputRef, setValue } = props.currency
  ? useCurrencyInput(currencyOptions.value)
  : {
      setValue: undefined,
      formattedValue: computed(() => props.modelValue),
      inputRef: ref<QInput>(),
    };

const updateModelValue = (value: string | number | null) => {
  if (!props.currency) emit('update:modelValue', value || null);
};

onMounted(() => {
  mounted.value = true;
});

watchEffect(() => {
  if (setValue && typeof props.modelValue == 'number')
    setValue(props.modelValue);
});
</script>

<style lang="scss" scoped>
.q-input :deep(.q-field__control) {
  border-radius: 12px !important;
  padding: 0 16px;
}

body.screen--xs {
  .q-input :deep(.q-field__control) {
    border-radius: 12px;
    padding: 0 10px;
  }
}

.menu-mode
  :deep(.q-field--outlined.q-field--readonly .q-field__control:before) {
  border-style: solid;
}

:deep(.q-field__inner) {
  height: inherit;
}
</style>
