<template>
  <CHover v-slot="{ hover }">
    <q-icon
      ref="icon"
      :color="hover && hoverColor ? hoverColor : color"
      :name="name"
      :style="`font-size: ${_size}; ${styles}`"
      style="transition: all 0.2s linear"
    >
      <slot></slot>
    </q-icon>
  </CHover>
</template>

<script lang="ts" setup>
import CHover from 'src/components/templates/helpers/CHover.vue';
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: [String, Number],
    default: '17px',
  },
  color: {
    type: String,
    default: 'black',
  },
  hoverColor: String,
  name: String,
  styles: String,
});

const _size = computed(() => {
  if (Number.isNaN(Number(props.size))) return props.size;
  return `${props.size}px`;
});
</script>
