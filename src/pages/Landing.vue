<template>
  <div class="bg-black1 text-white">
    <Main />
    <Types />
    <Cards id="cards" />
    <Benefits id="benefits" />
    <Tarifs />
    <Cases />
    <Footer id="footer" />
  </div>
</template>
<script lang="ts" setup>
import Main from './Main.vue';
import Types from './Types.vue';
import Cards from './Cards.vue';
import Benefits from './Benefits.vue';
import Tarifs from './Tarifs.vue';
import Cases from './Cases.vue';
import Footer from './Footer.vue';
</script>
