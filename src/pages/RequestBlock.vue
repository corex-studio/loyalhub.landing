<template>
  <div
    :class="{ 'c-container': $q.screen.gt.sm }"
    class="py-lg-50 py-md-40 py-sm-30"
  >
    <div
      :style="
        $q.screen.lt.md
          ? 'background-image: url(assets/requestBgsm.png);'
          : 'background-image: url(assets/requestBg.png);'
      "
      class="content-block py-lg-25 py-md-20 py-sm-15 column items-center"
    >
      <div
        :style="$q.screen.gt.sm ? 'width: 80%' : 'width: 90%'"
        class="mega-text bold text-center"
      >
        Оставьте заявку и получите привилегии с решениями Loyalhub
      </div>
      <div
        :style="$q.screen.lt.md ? 'width: 80%' : ''"
        class="text-center subtitle-text2 mt-md-10 mt-sm-8"
      >
        Мы свяжемся с вами в ближашее время
      </div>
      <FunButton
        @click="store.requestModal = true"
        class="mt-lg-15 mt-md-25 mt-sm-15"
        label="Оставить заявку"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import FunButton from 'src/components/templates/buttons/FunButton.vue';
import { store } from 'src/models/store';
</script>

<style lang="scss" scoped>
.content-block {
  border-radius: 40px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
</style>
