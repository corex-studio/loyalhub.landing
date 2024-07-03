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


onMounted(() => {
  metrika.hit(route.fullPath);
  metrika.reachGoal(METRIKA_GOAL_EVENT.LOAD);
});
</script>
