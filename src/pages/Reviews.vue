<template>
  <div class="default-parent-block">
    <div class="c-container">
      <div class="mega-header2 bold text-center">Отзывы</div>
      <div class="row gap-10 full-width no-wrap mt-20">
        <div
          v-for="(item, index) in reviews"
          :key="index"
          class="relative-position"
        >
          <div
            class="review-icon row items-center justify-center"
            style="position: absolute; top: -10px; right: -10px"
          >
            <q-icon name="fa-solid fa-quote-left" style="color: #c7a51f" />
          </div>
          <div
            class="bg-secondary2 rounded-30 px-13 py-13 column relative-position"
            style="overflow: hidden"
          >
            <q-img
              fit="cover"
              src="assets/reviewVector.svg"
              style="position: absolute; left: 0; bottom: 0; z-index: 0"
            />
            <div class="row full-width gap-4 items-center no-wrap">
              <q-avatar size="64px">
                <q-img height="64px" src="assets/director.jpg" width="64px" />
              </q-avatar>
              <div class="column gap-2" style="z-index: 1">
                <div class="body">{{ item.from.name }}</div>
                <div class="caption text-secondary3">
                  {{ item.from.position }}
                </div>
              </div>
            </div>

            <div class="mt-12 secondary" style="z-index: 1">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const reviews = [
  {
    from: {
      name: 'Целищев Кирилл',
      position: 'Руководитель отдела разработки',
      image: '',
    },
    text: 'Очень удобный и простой сайт, а сотрудники помогают оперативно все настроить и поправить в любых ситуациях! Поддержка 24/7. Отличная интеграция с Iiko и системой лояльности, что очень радует. Спасибо большое',
  },
  {
    from: {
      name: 'Целищев Кирилл',
      position: 'Руководитель отдела разработки',
      image: '',
    },
    text: 'Очень удобный и простой сайт, а сотрудники помогают оперативно все настроить и поправить в любых ситуациях! Поддержка 24/7. Отличная интеграция с Iiko и системой лояльности, что очень радует. Спасибо большое',
  },
  {
    from: {
      name: 'Целищев Кирилл',
      position: 'Руководитель отдела разработки',
      image: '',
    },
    text: 'Очень удобный и простой сайт, а сотрудники помогают оперативно все настроить и поправить в любых ситуациях! Поддержка 24/7. Отличная интеграция с Iiko и системой лояльности, что очень радует. Спасибо большое',
  },
  {
    from: {
      name: 'Целищев Кирилл',
      position: 'Руководитель отдела разработки',
      image: '',
    },
    text: 'Очень удобный и простой сайт, а сотрудники помогают оперативно все настроить и поправить в любых ситуациях! Поддержка 24/7. Отличная интеграция с Iiko и системой лояльности, что очень радует. Спасибо большое',
  },
];
</script>

<style lang="scss" scoped>
.review-icon {
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-color: $accent1;
  z-index: 1;
  border-radius: 100px;
}
</style>
