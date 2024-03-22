<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="row cursor-pointer relative-position no-wrap"
    style="width: fit-content"
  >
    <q-btn
      :color="hover ? 'white' : color"
      :style="`height: ${_height}`"
      :textColor="hover ? 'black' : 'white'"
      class="subtitle-text2 rounded-100 button-block"
      :class="[{ 'button-block-hovered': hover }]"
      >{{ label }}
    </q-btn>
    <div
      class="circle-block row items-center justify-center"
      :class="{ 'circle-block-hovered': hover }"
    >
      <svg
        :width="$q.screen.lt.lg ? 24 : 29"
        height="25"
        viewBox="0 0 29 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0976557 12.4999C0.0976557 12.2062 0.212591 11.9244 0.417177 11.7167C0.621763 11.509 0.899242 11.3923 1.18857 11.3923L24.3415 11.3923L15.3327 2.39817C15.2305 2.29615 15.1491 2.1747 15.0931 2.04074C15.0372 1.90679 15.0077 1.76295 15.0065 1.61744C15.0053 1.47194 15.0323 1.32761 15.086 1.19271C15.1397 1.05781 15.2191 0.934973 15.3196 0.831213C15.4201 0.727452 15.5397 0.644801 15.6716 0.587978C15.8035 0.531155 15.9452 0.501274 16.0885 0.500039C16.3779 0.497547 16.6565 0.611892 16.8629 0.817921L27.7699 11.7083C27.7748 11.7132 27.7797 11.7181 27.7844 11.7231C27.8863 11.8283 27.9665 11.9532 28.0203 12.0903C28.0741 12.2274 28.1003 12.3741 28.0974 12.5216C28.0946 12.6692 28.0627 12.8147 28.0037 12.9495C27.9447 13.0844 27.8598 13.206 27.7539 13.3071L16.8629 24.182C16.7607 24.284 16.6398 24.3646 16.507 24.4191C16.3741 24.4737 16.232 24.5012 16.0888 24.5C15.9455 24.4988 15.8039 24.4689 15.6719 24.4121C15.54 24.3554 15.4204 24.2728 15.3199 24.169C15.2195 24.0653 15.1401 23.9425 15.0864 23.8077C15.0326 23.6728 15.0056 23.5285 15.0068 23.3831C15.0079 23.2376 15.0373 23.0938 15.0933 22.9599C15.1492 22.8259 15.2305 22.7045 15.3327 22.6025L24.3415 13.6076L1.18857 13.6076C0.899242 13.6076 0.621763 13.4909 0.417177 13.2832C0.212591 13.0754 0.0976557 12.7937 0.0976557 12.4999Z"
          :fill="hover ? 'black' : 'white'"
          :style="hover ? 'transform:rotate(-45deg)' : ''"
          style="transition: all 0.5s; transform-origin: center"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    color?: string;
    height?: string;
  }>(),
  {
    color: 'primary',
  },
);

const hover = ref(false);

const q = useQuasar();

const _height = computed(() => {
  return props.height
    ? props.height
    : q.screen.gt.md
      ? '66px'
      : q.screen.md
        ? '58px'
        : '48px';
});
</script>

<style lang="scss">
.circle-block {
  width: 66px;
  transition: all 0.5s !important;
  height: 100%;
  background-color: $primary;
  border-radius: 100px;
  height: inherit;
  z-index: 1;
}

body.screen--md {
  .circle-block {
    width: 58px;
  }
  .button-block-hovered {
    padding-right: 80px;
  }

  .circle-block-hovered {
    margin-left: -56px;
  }
}

body.screen--sm {
  .circle-block {
    width: 48px;
  }
  .button-block-hovered {
    padding-right: 70px;
  }

  .circle-block-hovered {
    margin-left: -46px;
  }
}

.circle-block-hovered {
  margin-left: -66px;
  background-color: white;
  z-index: 1;
}

.button-block {
  border: none;
  padding: 0 24px;
  position: relative;
  transition: all 0.2s ease-in;
  white-space: nowrap;
}

.button-block-hovered {
  padding-right: 90px;
  transition: all 0.5s !important;
}

.q-btn:before {
  box-shadow: unset;
}

.button-block .q-focus-helper {
  display: none;
}
</style>
