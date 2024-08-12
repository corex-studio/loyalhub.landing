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
            class="body doc-block cursor-pointer row items-center gap-3 px-10"
          >
            <div class="row items-center justify-center gap-4">
              Документы
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0003 13.3335L16.5337 14.6552C17.1778 15.211 17.5003 15.4885 17.5003 15.8335C17.5003 16.1785 17.1778 16.456 16.5337 17.0118L15.0003 18.3335M11.667 13.3335L10.1337 14.6552C9.48949 15.211 9.16699 15.4885 9.16699 15.8335C9.16699 16.1785 9.48949 16.456 10.1337 17.0118L11.667 18.3335" stroke="white" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.6667 10.8359V6.51675C16.6667 5.10508 16.6667 4.40008 16.4433 3.83591C16.085 2.93008 15.325 2.21508 14.3625 1.87758C13.7642 1.66675 13.0142 1.66675 11.515 1.66675C8.89167 1.66675 7.58 1.66675 6.53167 2.03425C4.84833 2.62591 3.51917 3.87675 2.89 5.46258C2.5 6.45008 2.5 7.68425 2.5 10.1542V12.2759C2.5 14.8342 2.5 16.1134 3.20667 17.0026C3.40917 17.2567 3.64833 17.4826 3.91917 17.6734C4.67917 18.2092 5.70833 18.3134 7.5 18.3334" stroke="white" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 10.0001C2.5 9.26344 2.79263 8.55697 3.31351 8.03609C3.83439 7.51521 4.54086 7.22258 5.2775 7.22258C5.8325 7.22258 6.48667 7.31925 7.02583 7.17508C7.26142 7.11168 7.47621 6.98746 7.64865 6.81487C7.82109 6.64228 7.94513 6.42739 8.00833 6.19175C8.1525 5.65258 8.05583 4.99841 8.05583 4.44341C8.05605 3.70692 8.34878 3.00067 8.86964 2.47996C9.3905 1.95926 10.0968 1.66675 10.8333 1.66675" stroke="white" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
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

.doc-block {
  height: 44px;
  border-radius: 100px;
  background-color: #2f3336;
}

</style>
