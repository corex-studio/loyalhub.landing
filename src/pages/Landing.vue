<template>
  <div class="bg-black1 text-white">
    <Main />
    <Types />
    <Cards id="cards" />
    <Benefits id="benefits" />
    <Tarifs />
    <Cases />
    <RequestBlock />
    <Footer id="footer" />
    <RightDrawer v-if="$q.screen.lt.lg" />
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
import RequestBlock from './RequestBlock.vue';
import RightDrawer from 'src/components/drawers/RightDrawer.vue';
</script>
