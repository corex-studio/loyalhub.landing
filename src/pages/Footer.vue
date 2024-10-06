<template>
  <div class="bg-primary parent-block text-white">
    <div class="c-container py-lg-33 pt-sm-15 pt-md-20 pb-sm-35 body">
      <div class="row full-width justify-between gap-10">
        <q-img
          :width="$q.screen.lt.lg ? '155px' : '190px'"
          alt="loyalhub logo"
          fit="contain"
          height="fit-content"
          src="assets/loyalhubLogo.svg"
        />
        <div class="column col-sm-12 col-md-shrink gap-2">
          <div>ООО "Корекс" © 2024 Corex</div>
          <template v-if="$q.screen.gt.md">
            <div>ИНН: 3917055493</div>
            <div>ОГРН: 1213900011445</div>
          </template>
          <div v-else class="row items-center gap-4">
            <div>ИНН: 3917055493</div>
            <div>ОГРН: 1213900011445</div>
          </div>
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
            :width="$q.screen.lt.lg ? '125px' : '170px'"
            color="white"
            height="44px"
            label="Документы"
            round
            text-color="black"
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

body.screen--sm,
body.screen--md {
  .parent-block {
    border-radius: 20px 20px 0 0;
  }
}
</style>
