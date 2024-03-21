<template>
  <q-dialog
    class="no-shadow"
    :position="position"
    :persistent="persistent"
    :maximized="maximized"
    :square="square"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue')"
  >
    <q-card
      :style="`max-width: ${width}; min-height: ${height}; height: ${heightPercent}; ${
        position === 'right'
          ? 'border-radius: 10px 0 0 10px'
          : position === 'bottom'
            ? 'border-radius: 25px 25px 0 0'
            : 'border-radius: 40px;'
      }`"
      style="
        width: 100%;
        display: flex;

        box-shadow: 0px 0px 13px rgba(65, 39, 130, 0.2) !important;
      "
      class="relative-position no-overflow no-shadow"
    >
      <div
        :class="[!noPadding ? 'pa-15' : dialogClass, withOverflow ? '' : '']"
        style="
          overflow: auto;
          width: 100%;
          max-height: inherit;
          border-radius: 0;
        "
      >
        <div
          v-if="$slots.header"
          style="font-size: 16px"
          class="text-primary mb-10 bold"
        >
          <slot name="header"> </slot>
        </div>

        <slot></slot>
        <q-card-actions
          :align="alignActions"
          v-if="!hideActions && $slots['card-actions']"
        >
          <slot name="card-actions"></slot>
        </q-card-actions>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { QCardActionsProps, QDialogProps } from 'quasar';

withDefaults(
  defineProps<{
    hideActions?: boolean;
    alignActions?: QCardActionsProps['align'];
    modelValue: boolean;
    square?: boolean;
    width?: string;
    height?: string;
    position?: QDialogProps['position'];
    noClose?: boolean;
    persistent?: boolean;
    noPadding?: boolean;
    dialogClass?: string;
    image?: string;
    imageClass?: string;
    imageWidth?: string;
    noOverflow?: boolean;
    heightPercent?: string;
    withOverflow?: boolean;
    maximized?: boolean;
  }>(),
  {
    position: 'standard',
    alignActions: 'center',
    width: '654px',
  },
);

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.no-overflow {
  overflow: unset !important;
}
</style>
