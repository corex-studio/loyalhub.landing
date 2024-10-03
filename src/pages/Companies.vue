<template>
  <div class="default-parent-block" style="overflow-x: hidden">
    <div class="c-container">
      <div class="text-center header2">
        Более <span class="bold text-accent2"> 150 заведений </span>выбрали
        Loyalhub для управление клиентским опытом – <br />
        от онлайн заказов до лояльности
      </div>
      <div class="mt-lg-25 mt-sm-15">
        <div
          class="row full-width gap-md-10 gap-sm-6 text-black2 slide-block-top no-wrap"
        >
          <div
            v-for="(el, index) in companies"
            :key="index"
            class="subtitle-text"
          >
            <q-img
              :src="`assets/companiesLogo/${$q.screen.lt.md ? 'sm' + el[0].toLocaleUpperCase() + el.slice(1) : el}.png`"
              :width="
                $q.screen.lt.lg ? ($q.screen.md ? '300px' : '150px') : '325px'
              "
              class="rounded-20"
              height="150px"
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
</style>
