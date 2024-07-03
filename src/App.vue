<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  useYandexMetrika
} from 'yandex-metrika-vue3';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';

const metrika = useYandexMetrika();
const route = useRoute();
let interval: NodeJS.Timeout | null = null;


onMounted(() => {
  interval = setInterval(() => {
    if (window.Ya) {
      if (interval) clearInterval(interval);
      metrika.hit(route.fullPath);
      metrika.reachGoal(METRIKA_GOAL_EVENT.LOAD);
    }
  }, 100);
});
</script>
