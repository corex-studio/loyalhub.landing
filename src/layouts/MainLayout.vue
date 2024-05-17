<template>
  <q-layout view="lHh Lpr lFf" class="relative-position">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <RequestModal v-model="store.requestModal" />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import RequestModal from 'src/components/dialogs/RequestModal.vue';
import { store } from 'src/models/store';
import { onMounted } from 'vue';

const q = useQuasar();

const setBodyScrollClass = () => {
  if (q.platform.is.win) {
    const body = document.getElementsByTagName('body');
    if (body.length) body[0].classList.add('no-scroll-bar');
  }
};

onMounted(() => {
  setBodyScrollClass();
});
</script>
