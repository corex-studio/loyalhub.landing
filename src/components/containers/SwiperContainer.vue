<template>
  <div class="relative-position">
    <div class="row full-width justify-between items-end">
      <slot name="title"></slot>
      <div
        v-if="$q.screen.gt.md && topNavigation"
        class="row gap-12 items-center no-wrap"
      >
        <div
          class="rounded-100 nav-button justify-center items-center row cursor-pointer"
          @click="prevPage"
        >
          <svg
            fill="none"
            height="23"
            viewBox="0 0 29 25"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon"
              d="M0.0976557 12.4999C0.0976557 12.2062 0.212591 11.9244 0.417177 11.7167C0.621763 11.509 0.899242 11.3923 1.18857 11.3923L24.3415 11.3923L15.3327 2.39817C15.2305 2.29615 15.1491 2.1747 15.0931 2.04074C15.0372 1.90679 15.0077 1.76295 15.0065 1.61744C15.0053 1.47194 15.0323 1.32761 15.086 1.19271C15.1397 1.05781 15.2191 0.934973 15.3196 0.831213C15.4201 0.727452 15.5397 0.644801 15.6716 0.587978C15.8035 0.531155 15.9452 0.501274 16.0885 0.500039C16.3779 0.497547 16.6565 0.611892 16.8629 0.817921L27.7699 11.7083C27.7748 11.7132 27.7797 11.7181 27.7844 11.7231C27.8863 11.8283 27.9665 11.9532 28.0203 12.0903C28.0741 12.2274 28.1003 12.3741 28.0974 12.5216C28.0946 12.6692 28.0627 12.8147 28.0037 12.9495C27.9447 13.0844 27.8598 13.206 27.7539 13.3071L16.8629 24.182C16.7607 24.284 16.6398 24.3646 16.507 24.4191C16.3741 24.4737 16.232 24.5012 16.0888 24.5C15.9455 24.4988 15.8039 24.4689 15.6719 24.4121C15.54 24.3554 15.4204 24.2728 15.3199 24.169C15.2195 24.0653 15.1401 23.9425 15.0864 23.8077C15.0326 23.6728 15.0056 23.5285 15.0068 23.3831C15.0079 23.2376 15.0373 23.0938 15.0933 22.9599C15.1492 22.8259 15.2305 22.7045 15.3327 22.6025L24.3415 13.6076L1.18857 13.6076C0.899242 13.6076 0.621763 13.4909 0.417177 13.2832C0.212591 13.0754 0.0976557 12.7937 0.0976557 12.4999Z"
              fill="black"
              style="
                transition: all 0.5s;
                transform-origin: center;
                transform: rotate(180deg);
              "
            />
          </svg>
        </div>
        <div
          class="rounded-100 nav-button row justify-center items-center cursor-pointer"
          @click="nextPage"
        >
          <svg
            fill="none"
            height="23"
            viewBox="0 0 29 25"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon"
              d="M0.0976557 12.4999C0.0976557 12.2062 0.212591 11.9244 0.417177 11.7167C0.621763 11.509 0.899242 11.3923 1.18857 11.3923L24.3415 11.3923L15.3327 2.39817C15.2305 2.29615 15.1491 2.1747 15.0931 2.04074C15.0372 1.90679 15.0077 1.76295 15.0065 1.61744C15.0053 1.47194 15.0323 1.32761 15.086 1.19271C15.1397 1.05781 15.2191 0.934973 15.3196 0.831213C15.4201 0.727452 15.5397 0.644801 15.6716 0.587978C15.8035 0.531155 15.9452 0.501274 16.0885 0.500039C16.3779 0.497547 16.6565 0.611892 16.8629 0.817921L27.7699 11.7083C27.7748 11.7132 27.7797 11.7181 27.7844 11.7231C27.8863 11.8283 27.9665 11.9532 28.0203 12.0903C28.0741 12.2274 28.1003 12.3741 28.0974 12.5216C28.0946 12.6692 28.0627 12.8147 28.0037 12.9495C27.9447 13.0844 27.8598 13.206 27.7539 13.3071L16.8629 24.182C16.7607 24.284 16.6398 24.3646 16.507 24.4191C16.3741 24.4737 16.232 24.5012 16.0888 24.5C15.9455 24.4988 15.8039 24.4689 15.6719 24.4121C15.54 24.3554 15.4204 24.2728 15.3199 24.169C15.2195 24.0653 15.1401 23.9425 15.0864 23.8077C15.0326 23.6728 15.0056 23.5285 15.0068 23.3831C15.0079 23.2376 15.0373 23.0938 15.0933 22.9599C15.1492 22.8259 15.2305 22.7045 15.3327 22.6025L24.3415 13.6076L1.18857 13.6076C0.899242 13.6076 0.621763 13.4909 0.417177 13.2832C0.212591 13.0754 0.0976557 12.7937 0.0976557 12.4999Z"
              fill="black"
              style="transition: all 0.5s; transform-origin: center"
            />
          </svg>
        </div>
      </div>
    </div>
    <swiper
      :autoplay="autoPlay"
      :class="noNavigation ? 'no-navigation' : 'navigation'"
      :initial-slide="initialSlide"
      :loop="loop"
      :modules="modules"
      :mousewheel="{
        releaseOnEdges: true,
        sensitivity: 0.5,
        forceToAxis: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :slides-per-view="slidesPerView || 3"
      :space-between="spaceBetween === undefined ? 20 : spaceBetween"
      navigation
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot name="item" v-bind:item="item"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper as SwiperClass } from 'swiper';
import { Mousewheel, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { computed } from 'vue';

let swiperInstance: SwiperClass | null = null;

const props = defineProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Array<any>;
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
  useBullets?: boolean;
  noNavigation?: boolean;
  autoPlay?: boolean;
  topNavigation?: boolean;
  initialSlide?: number;
}>();

const modules = computed(() => {
  const res = [];

  if (props.autoPlay) {
    res.push(Autoplay);
  }
  if (props.useBullets) {
    res.push(Pagination);
  }
  res.push(Mousewheel);

  return res;
});

const nextPage = () => {
  swiperInstance?.slideNext();
};

const prevPage = () => {
  swiperInstance?.slidePrev();
};

const onSwiper = (swiper: SwiperClass) => {
  swiperInstance = swiper;
};
</script>

<style lang="scss" scoped>
.no-navigation :deep(.swiper-button-next) {
  display: none;
}

.no-navigation :deep(.swiper-button-prev) {
  display: none;
}

.nav-button {
  height: 66px;
  width: 66px;
  background-color: white;
  transition: background-color 0.35s;
}

.nav-button:hover {
  background-color: $primary;

  &:deep(.icon) {
    fill: white;
  }
}

.swiper :deep(.swiper-pagination-bullet-active) {
  background-color: white;
}

.swiper :deep(.swiper-pagination-bullet) {
  border-radius: 50px;
  width: 8%;
  height: 6px;
}

body.screen--md,
body.screen--sm {
  .swiper :deep(.swiper-pagination) {
  }

  .swiper
    :deep(.swiper-pagination-bullet):not(.swiper-pagination-bullet-active) {
    background-color: white;
    opacity: 1;
  }

  .swiper :deep(.swiper-pagination-bullet-active) {
    background-color: #e7e8f1;
  }

  .swiper :deep(.swiper-pagination) {
    position: absolute;
    top: -10 px;
    height: fit-content;
  }
}

.swiper :deep(.swiper-pagination-bullet):not(.swiper-pagination-bullet-active) {
  background-color: rgba(254, 254, 254, 0.24);
  opacity: 1;
}

.swiper :deep(.swiper-pagination) {
  position: absolute;
  top: 5px;
  height: fit-content;
}
</style>
