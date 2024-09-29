<template>
  <div class="bg-primary text-white">
    <div class="c-container py-lg-33 py-md-24 py-sm-22 body">
      <div class="row full-width justify-between gap-10">
        <q-img height="56px" src="assets/loyalhubLogo.svg" width="190px" />

        <div class="column col-sm-12 col-md-shrink gap-2">
          <div>ООО "Корекс" © 2024 Corex</div>
          <div>ИНН: 3917055493</div>
          <div>ОГРН: 1213900011445</div>
        </div>
        <div class="column col-sm-12 col-md-shrink gap-2">
          <div>e-mail</div>
          <div
            class="hover-block"
            @click="openLink('mailto:support@loyalhub.ru')"
          >
            support@loyalhub.ru
          </div>
        </div>
        <div class="column col-sm-12 col-md-shrink gap-2">
          <div>telegram</div>
          <div
            class="hover-block"
            @click="openLink('https://t.me/loyalhub_news')"
          >
            @loyalhub_news
          </div>
        </div>
        <div class="row items-center">
          <CButton
            color="white"
            height="44px"
            label="Документы"
            round
            text-color="black"
            width="170px"
            @click="
              $router.push({
                name: 'docsPage',
              })
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CButton from 'components/templates/buttons/CButton.vue';
import { openLink } from 'src/models/store';
</script>

<style lang="scss" scoped>
.hover-block:hover {
  color: $accent2;
  transition: all 0.4s ease;
}

.hover-block {
  color: white;
  transition: all 0.4s ease;
  cursor: pointer;
}

.doc-block {
  height: 44px;
  border-radius: 100px;
  background-color: #2f3336;
}
</style>
