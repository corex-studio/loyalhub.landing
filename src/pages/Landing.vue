<template>
  <div class="body">
    <Main />
    <Companies />
    <WhyLoyalhub id="why" />
    <EcoSystem />
    <Products id="products" />
    <Integration id="integration" />
    <CRM id="crm" />
    <HowToLaunch id="steps" />
    <Examples id="examples" />
    <Reviews id="reviews" />
    <Analysis />
    <Tarifs id="tariffs" />
    <Questions id="faq" />
    <RequestBlock />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Main from './Main.vue';
import Tarifs from './Tariffs.vue';
import Examples from 'pages/Examples.vue';
import Companies from 'pages/Companies.vue';
import WhyLoyalhub from 'pages/WhyLoyalhub.vue';
import EcoSystem from 'pages/EcoSystem.vue';
import Products from 'pages/Products.vue';
import Integration from 'pages/Integration.vue';
import CRM from 'pages/CRM.vue';
import HowToLaunch from 'pages/HowToLaunch.vue';
import Reviews from 'pages/Reviews.vue';
import Analysis from 'pages/Analysis.vue';
import Questions from 'pages/Questions.vue';
import RequestBlock from 'pages/RequestBlock.vue';
import Footer from 'pages/Footer.vue';
</script>
