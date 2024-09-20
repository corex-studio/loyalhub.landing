<template>
  <div style="overflow-x: hidden" class="parent relative-position pt-15">
    <Header />
    <div class="c-container column items-center">
      <div class="row full-width mt-25 gap-10">
        <div class="col px-25 pt-37 pb-47 bg-secondary1 rounded-30">123</div>
        <div class="col">123123</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './Header.vue';
</script>

<style lang="scss" scoped>
.parent {
  height: 100vh;
  background-position: bottom;
  background-clip: content;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
