<template>
  <div class="c-container">
    <div
      class="px-10 header-block bg-black4 row no-wrap gap-10 items-center full-width justify-between"
    >
      <img height="72" src="~assets/loyalhubLogo.svg" />
      <div class="row items-center no-wrap gap-24">
        <CButton label="Наши продукты" hover-text-color="white" text-button />
        <CButton label="Преимущества" hover-text-color="white" text-button />
        <CButton label="Контакты" hover-text-color="white" text-button />
      </div>
      <CButton
        label="Оставить заявку"
        color="black5"
        width="210px"
        height="44px"
        class="rounded-100"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import CButton from 'src/components/templates/buttons/CButton.vue';
</script>

<style lang="scss" scoped>
.header-block {
  height: 72px;
  z-index: 1;
  border-radius: 100px;
}
</style>
