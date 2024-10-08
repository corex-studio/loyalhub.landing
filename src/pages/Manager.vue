<template>
  <div
    v-if="$q.screen.gt.md"
    class="column col px-16 py-20 rounded-30 bg-secondary1 gap-12"
  >
    <div class="row gap-10 items-center no-wrap">
      <q-avatar size="94px">
        <q-img
          alt="manager photo"
          height="94px"
          src="assets/elena.png"
          style="scale: 1.3"
          width="94px"
        />
      </q-avatar>
      <div class="column gap-2">
        <div class="subtitle bold">Елена</div>
        <div class="secondary text-secondary3">
          Ведущий менеджер компании Loyalhub
        </div>
      </div>
    </div>
    <div
      class="bg-white rounded-15 px-8 py-14 top-arrow relative-position secondary"
    >
      Пройдите наш короткий опрос и получите персонализированный отчет по
      улучшению обслуживания и увеличению среднего чека для вашего заведения.
      Это поможет вам увидеть, как наши решения могут сделать ваш бизнес более
      эффективным!
    </div>
  </div>
  <div v-else class="py-10">
    <q-expansion-item
      v-model="expanded"
      class="bg-secondary1 rounded-20 pa-6 cursor-pointer full-width"
    >
      <template v-slot:header>
        <div class="row full-width justify-between gap-5 items-center no-wrap">
          <div class="row gap-10 items-center no-wrap">
            <q-avatar size="50px">
              <q-img
                alt="manager photo"
                height="50px"
                src="assets/elena.png"
                style="scale: 1.4"
                width="50px"
              />
            </q-avatar>
            <div class="column gap-2">
              <h4 class="bold">Елена</h4>
              <div class="row items-center gap-4 no-wrap">
                <div class="secondary text-primary">Менеджер Loyalhub</div>
                <div class="online-icon-block row items-center justify-center">
                  <q-icon
                    color="success"
                    name="fa-solid fa-circle"
                    size="14px"
                  />
                </div>
              </div>
            </div>
          </div>
          <CIcon
            :style="expanded ? 'transform: rotate(180deg)' : ''"
            hover-color="accent2"
            name="fa-solid fa-chevron-down"
            size="20px"
            style="transition: 0.25s"
          />
        </div>
      </template>
      <div class="mt-8 secondary bg-white rounded-12 px-6 py-3 top-arrow body">
        Пройдите наш короткий опрос и получите персонализированный отчет по
        улучшению обслуживания и увеличению среднего чека для вашего заведения.
        Это поможет вам увидеть, как наши решения могут сделать ваш бизнес более
        эффективным!
      </div>
    </q-expansion-item>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CIcon from 'src/components/templates/buttons/CIcon.vue';

const expanded = ref(false);
</script>

<style lang="scss" scoped>
.q-expansion-item :deep(.q-item) {
  padding: 0 !important;
  min-height: unset;
}

.q-expansion-item :deep(.q-focus-helper) {
  display: none;
}

.q-expansion-item :deep(.q-item__section) {
  display: none;
}

.online-icon-block {
  height: 18px;
  width: 18px;
  min-width: 18px;
  background-color: white;
  border-radius: 100px;
}

.top-arrow:before {
  content: ' ';
  height: 0;
  position: absolute;
  width: 0;
  top: -18px;
  left: 10%;
  border: 10px solid transparent;
  border-bottom-color: white;
}

body.screen--md,
body.screen--sm {
  .top-arrow:before {
    left: 50%;
  }
}
</style>
