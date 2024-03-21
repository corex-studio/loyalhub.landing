<template>
  <div class="parent relative-position pt-15">
    <Header />
    <div class="c-container column items-center">
      <div style="text-align: center" class="huge-text bold mt-48">
        Loyalhub: бесплатный запуск брендированных решений
      </div>
      <div
        style="text-align: center; max-width: 900px"
        class="mt-10 header-text bold"
      >
        Омниканальная платформа для совершенствования опыта между гостем и
        рестораном
      </div>
      <FunButton label="Подобрать решение" class="mt-20" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './Header.vue';
import FunButton from 'src/components/templates/buttons/FunButton.vue';
</script>

<style lsng="scss" scoped>
.parent {
  height: 100vh;
  background: url('src/assets/mainBG.png');
  background-position: bottom;
  background-clip: content;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
