<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { METRIKA_GOAL_EVENT, useMetrikaTick } from 'boot/metrika';

const route = useRoute();
let interval: NodeJS.Timeout | null = null;
const { metrika, metrikaTick } = useMetrikaTick();


onMounted(() => {
  interval = setInterval(() => {
    if (window.Ya) {
      if (interval) clearInterval(interval);
      metrika.hit(route.fullPath);
      metrikaTick({
        goalEvent: METRIKA_GOAL_EVENT.LOAD
      });
    }
  }, 100);
});
</script>
