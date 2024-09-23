<template>
  <div class="parent-block" style="overflow-x: hidden">
    <div class="c-container">
      <div class="text-center header2">
        Более <span class="bold text-accent2"> 150 заведений </span>выбрали
        Loyalhub для управление клиентским опытом – <br />
        от онлайн заказов до лояльности
      </div>
      <div class="mt-25">
        <div class="row full-width gap-10 text-black2 slide-block-top no-wrap">
          <div
            v-for="(el, index) in companies"
            :key="index"
            class="subtitle-text"
          >
            <q-img
              :src="`assets/companiesLogo/${el}.png`"
              height="150px"
              width="325px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const companies = ref<string[]>([]);

const getCompanies = () => {
  let i = 0;
  const els = [
    'fusion',
    'pilot',
    'ryba',
    'boss',
    'panda',
    'residence',
    'kirin',
    'tochka',
    'tabago',
    'fishka',
  ];
  while (i < 10) {
    i++;
    companies.value.push(...els);
  }
};

getCompanies();
</script>

<style lang="scss" scoped>
@keyframes slide-left {
  to {
    transform: translate(calc(-20%));
  }
}

.slide-block-top {
  animation: 50s slide-left linear infinite;
  width: fit-content !important;
}

.parent-block {
  padding: 100px 0 0 0;
}
</style>
