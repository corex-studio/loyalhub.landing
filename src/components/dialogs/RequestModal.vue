<template>
  <CDialog
    :maximized="$q.screen.sm"
    :model-value="model || false"
    :position="$q.screen.sm ? 'bottom' : undefined"
    width="520px"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <RequestForm :model="model" />
  </CDialog>
</template>
<script lang="ts" setup>
import CDialog from 'src/components/templates/dialogs/CDialog.vue';
import RequestForm from 'components/RequestForm.vue';

const model = defineModel<boolean>();
</script>
