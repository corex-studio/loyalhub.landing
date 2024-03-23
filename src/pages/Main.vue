<template>
  <div
    :style="
      $q.screen.lt.lg
        ? 'background-image: url(assets/mainBGmd.png); background-position-y: 200px'
        : 'background-image: url(assets/mainBG.png)'
    "
    style="overflow-x: hidden"
    class="parent relative-position pt-15"
  >
    <Header />
    <div class="c-container column items-center">
      <div
        style="text-align: center"
        class="huge-text bold mt-lg-48 mt-md-30 mt-sm-17"
      >
        Loyalhub: бесплатный запуск брендированных решений
      </div>
      <div
        style="text-align: center; max-width: 900px"
        :style="$q.screen.lt.lg ? 'max-width: 500px' : ''"
        class="mt-md-10 mt-sm-8 header-text"
        :class="{ bold: $q.screen.gt.md }"
      >
        Омниканальная платформа для совершенствования опыта между гостем и
        рестораном
      </div>
      <FunButton
        @click="store.requestModal = true"
        label="Подобрать решение"
        class="mt-md-20 mt-sm-15"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { store } from 'src/models/store';
import Header from './Header.vue';
import FunButton from 'src/components/templates/buttons/FunButton.vue';
</script>

<style lsng="scss" scoped>
.parent {
  height: 100vh;
  background-position: bottom;
  background-clip: content;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
