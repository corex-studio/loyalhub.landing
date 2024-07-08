<template>
  <div style="border-top: 1px white solid">
    <div class="c-container py-lg-50 py-md-40 py-sm-30 body">
      <div class="row full-width justify-between items-center gap-10">
        <div
          :class="{ 'no-wrap': $q.screen.gt.md }"
          class="row col-lg-shrink col-sm-12 items-center gap-10"
        >
          <q-img
            v-if="$q.screen.gt.sm"
            width="65px"
            style="min-width: 65px"
            height="46px"
            src="assets/loyalhubHeart.svg"
          />
          <q-img
            v-else
            height="58px"
            width="165px"
            style="min-width: 165px"
            src="assets/loyalhubLogo.svg"
          />

          <div class="column col-sm-12 col-md-shrink gap-2">
            <div>ООО "Корекс" © 2024 Corex</div>
            <div class="row gap-5">
              <div>ИНН: 3917055493</div>
              <div>ОГРН: 1213900011445</div>
            </div>
          </div>
        </div>

        <div
          class="row gap-md-12 gap-sm-10 col-sm-12 col-md-shrink "
        >
          <div class="column col-sm-12 col-md-shrink gap-2">
            <div class="body">Калининград</div>

            <div
              @click="openLink('tel:+79003519050')"
              class="subtitle-text2 hover-block cursor-pointer"
            >
              +7 (900) 351-90-50
            </div>
          </div>
          <div class="column col-sm-12 col-md-shrink gap-2">
            <div class="body">e-mail</div>
            <div
              @click="openLink('mailto:support@loyalhub.ru')"
              class="subtitle-text2 hover-block cursor-pointer"
            >
              support@loyalhub.ru
            </div>
          </div>

          <div class="column gap-2 col-sm-12 col-md-shrink">
            <div class="body">telegram</div>
            <div
              @click="openLink('https://t.me/loyalhub_news')"
              class="subtitle-text2 hover-block cursor-pointer"
            >
              @loyalhub_news
            </div>
          </div>
          <div
            @click="
                        $router.push({
                          name: 'docsPage',
                        })
                      "
            class="body hover-block cursor-pointer"
          >

            Документы
          </div>
          <!--          <q-btn-->
          <!--            @click="-->
          <!--              $router.push({-->
          <!--                name: 'docsPage',-->
          <!--              })-->
          <!--            "-->
          <!--            class="body"-->
          <!--            style="height: 40px"-->
          <!--            outline-->
          <!--            label="Документы" />-->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const openLink = (link: string) => {
  window.open(link, '_blank');
};
</script>

<style lang="scss" scoped>
.hover-block:hover {
  color: $primary;
  transition: all 0.4s ease;
}

.hover-block {
  color: white;
  transition: all 0.4s ease;
}
</style>
