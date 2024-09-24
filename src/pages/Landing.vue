<template>
  <div class="body">
    <Main />
    <Companies />
    <WhyLoyalhub />
    <EcoSystem />
    <Products />
    <Integration />
    <CRM />
    <HowToLaunch />
    <!--    <Types />-->
    <!--    <Cards id="cards" />-->
    <!--    <Benefits id="benefits" />-->
    <!--    <Tarifs />-->
    <!--    <Cases />-->
    <!--    <RequestBlock />-->
    <!--    <Footer id="footer" />-->
    <!--    <RightDrawer v-if="$q.screen.lt.lg" />-->
  </div>
</template>
<script lang="ts" setup>
import Main from './Main.vue';
// import Types from './Types.vue';
// import Cards from './Cards.vue';
// import Benefits from './Benefits.vue';
// import Tarifs from './Tarifs.vue';
// import Cases from './Cases.vue';
// import Footer from './Footer.vue';
// import RequestBlock from './RequestBlock.vue';
// import RightDrawer from 'src/components/drawers/RightDrawer.vue';
import Companies from 'pages/Companies.vue';
import WhyLoyalhub from 'pages/WhyLoyalhub.vue';
import EcoSystem from 'pages/EcoSystem.vue';
import Products from 'pages/Products.vue';
import Integration from 'pages/Integration.vue';
import CRM from 'pages/CRM.vue';
import HowToLaunch from 'pages/HowToLaunch.vue';
</script>
