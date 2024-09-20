<template>
  <div class="c-container">
    <div
      class="header-block row no-wrap gap-5 items-center full-width justify-between"
    >
      <img height="56" src="assets/loyalhubLogo.png" />
      <div v-if="$q.screen.gt.md" class="row items-center no-wrap gap-16">
        <CButton
          @click="scrollHandler('cards')"
          label="Наши продукты"
          text-button
          text-color="black"
        />
        <CButton
          @click="scrollHandler('benefits')"
          label="Преимущества"
          text-color="black"
          text-button
        />
        <CButton label="Блог" text-color="black" text-button />
        <CButton label="Кейсы" text-color="black" text-button />
        <CButton
          @click="scrollHandler('footer')"
          label="Контакты"
          text-color="black"
          text-button
        />
      </div>
      <div class="row items-center gap-10">
        <div>+7 900 351 90 50</div>
        <CIconButton icon="fa-solid fa-paper-plane" size="45px" />

        <CButton
          v-if="$q.screen.gt.md"
          @click="store.requestModal = true"
          label="Начать бесплатно"
          :goal-event="METRIKA_GOAL_EVENT.REQUEST_FORM_OPENED"
          width="210px"
          class="secondary"
          height="44px"
        />
      </div>

      <!--      <svg-->
      <!--        v-else-->
      <!--        @click="store.rightDrawer = !store.rightDrawer"-->
      <!--        :width="$q.screen.lt.md ? 21 : 28"-->
      <!--        height="22"-->
      <!--        viewBox="0 0 28 22"-->
      <!--        fill="none"-->
      <!--        xmlns="http://www.w3.org/2000/svg"-->
      <!--        class="cursor-pointer"-->
      <!--      >-->
      <!--        <path-->
      <!--          d="M2.00012 2H26.0001M2.00012 11H26.0001M2.00012 20H26.0001"-->
      <!--          stroke="white"-->
      <!--          stroke-width="3.1875"-->
      <!--          stroke-linecap="round"-->
      <!--          stroke-linejoin="round"-->
      <!--        />-->
      <!--      </svg>-->
    </div>
  </div>
</template>
<script lang="ts" setup>
import CButton from 'src/components/templates/buttons/CButton.vue';
import { store } from 'src/models/store';
import { scroll } from 'quasar';
import { METRIKA_GOAL_EVENT } from 'boot/metrika';
import CIconButton from 'components/templates/buttons/CIconButton.vue';

const { setVerticalScrollPosition, getScrollTarget } = scroll;

const scrollHandler = (spot: string) => {
  const targetSpot = document.getElementById(spot);
  if (!targetSpot) return;
  const target = getScrollTarget(targetSpot);
  const offset = targetSpot.offsetTop;
  const duration = 800;
  if (spot !== 'top')
    setTimeout(() => {
      setVerticalScrollPosition(target, offset, duration);
    }, 200);
  else setVerticalScrollPosition(target, offset, duration);
};
</script>

<style lang="scss" scoped>
.header-block {
  height: 56px;
  z-index: 1;
}

body.screen--md {
  .header-block {
    height: 62px;
  }
}

body.screen--sm {
  .header-block {
    height: 44px;
  }
}

.tg-block {
  height: 45px;
  min-width: 45px;
  border-radius: 12px;
  background: $primary;
}
</style>
