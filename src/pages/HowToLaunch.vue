<template>
  <div class="default-parent-block pb-30">
    <div class="c-container">
      <div class="column full-width items-center">
        <div class="px-5 py-2 secondary bg-secondary1 rounded-5">
          Внедрение за 14 дней
        </div>
        <div class="mega-header2 bold">Как происходит запуск?</div>
        <div class="mt-20 gap-10 row full-width">
          <div
            v-for="(item, index) in steps"
            :key="index"
            class="item-block col row no-wrap"
          >
            <div class="left-part col-7"></div>
            <div class="col column relative-position pt-20">
              <div class="overflow-part">
                <div class="full-height rounded-24">1</div>
              </div>
              <div class="right-part col-grow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const steps = [
  {
    title: 'Создание чата в Telegram',
  },
  {
    title: 'Настройка и интеграция',
  },
  {
    title: 'Обучение и тестирование',
  },
  {
    title: 'Запуск и поддержка',
  },
];
</script>

<style lang="scss" scoped>
.left-part {
  background-color: red;
  height: 340px;
  border-radius: 24px 24px 0 24px;
}

.right-part {
  z-index: 10;
}

.overflow-part {
  z-index: 1;
  background-color: white;
  margin-top: -40px;
  height: 70px;
  border-radius: 24px 24px 0 24px;
  width: 100%;
}

.item-block {
  //clip-path: polygon(0% 0%, 60% 0%, 60% 20%, 100% 20%, 100% 100%, 0% 100%);
  //background-color: red;
  height: 340px;
}
</style>
