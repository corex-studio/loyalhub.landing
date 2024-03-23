<template>
  <div
    style="overflow: hidden"
    class="bg-black3 rounded-40 pt-lg-50 pt-md-40 pt-sm-25 pb-md-0 pb-sm-25 pl-md-10 pl-sm-8 relative-position"
  >
    <img
      src="assets/plusesBenefits.svg"
      style="position: absolute; bottom: 0"
      :style="`left: ${$q.screen.lt.lg ? '0%' : '17%'} `"
    />
    <div
      :style="$q.screen.lt.lg ? '' : 'height: 625px'"
      :class="{ 'c-container': $q.screen.gt.md }"
    >
      <div
        style="overflow: hidden; height: inherit"
        class="full-width no-wrap relative-position"
        :class="$q.screen.gt.md ? 'row' : 'column gap-md-23 gap-sm-15'"
      >
        <div class="col column gap-lg-25 gap-md-15 pr-20 pl-md-10">
          <div class="mega-text bold">
            Что вы получите, используя решения от Loyalhub?
          </div>
          <FunButton
            v-if="!$q.screen.lt.md"
            @click="store.requestModal = true"
            label="Подобрать решение"
          />
        </div>

        <div
          ref="scrollBlock"
          style="overflow: auto"
          class="gap-6 no-wrap pb-md-20"
          :class="$q.screen.lt.lg ? 'row full-width' : 'column col-6'"
        >
          <div
            v-for="(el, index) in blocks"
            :key="index"
            :style="$q.screen.lt.lg ? 'min-width: 80% !important' : ''"
            class="rounded-40 bg-white text-black py-10 px-lg-15 px-sm-10 column no-wrap gap-2"
          >
            <div class="row full-width gap-6 no-wrap">
              <div class="mega-text2 bold">{{ el.number }}</div>
              <div class="header-text bold mt-lg-4 mt-sm-2">
                {{ el.title }}
              </div>
            </div>
            <div
              class="body"
              v-html="$q.screen.lt.md ? el.xsText || el.text : el.text"
            ></div>
          </div>
        </div>
        <div v-if="$q.screen.lt.md" class="row justify-center">
          <FunButton
            @click="store.requestModal = true"
            label="Подобрать решение"
          />
        </div>
        <transition v-if="$q.screen.gt.md" name="fade">
          <div v-if="showArrows" id="arrowAnim">
            <div class="arrowSliding">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay1">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay2">
              <div class="arrow"></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import FunButton from 'src/components/templates/buttons/FunButton.vue';
import { store } from 'src/models/store';
import { onMounted, ref } from 'vue';

const blocks = [
  {
    number: '01',
    title: 'Бесплатный запуск',
    text: 'Благодаря нашему удобному приложению, вы сможете:<ul><li>изучать меню, оформлять доставку или самовывоз</li><li>получать уведомления</li><li>пользоваться бонусной системой</li><li>оставлять отзывы о работе заведения.</li></ul>',
    xsText:
      'Анализируйте продажи, стройте отчеты, изучайте эффективность PUSH-мероприятий, взаимодействуйте с гостями и координируйте бизнес-процессы. Все данные, собранные благодаря инструментам Loyalhub, будут агрегироваться в одном месте. Изучайте их, чтобы открыть новые точки роста для вашего бизнеса.',
  },
  {
    number: '02',
    title: 'Полная интеграция с iiko',
    text: 'Получайте заказы сразу, собирайте данные о гостях, настраивайте систему лояльности и копите статистику, собранную через доступные вам инструменты сразу в своей учетной системе.',
  },
  {
    number: '03',
    title: 'Удобная работа с заказами',
    text: 'Ваши гости смогут самостоятельно формировать и оплачивать заказы через СБП.<br/>Подключение к системе онлайн-оплаты позволит гостям не только формировать, но и оплачивать выбранные позиции.',
  },
  {
    number: '04',
    title: 'Экономию на эквайринге',
    text: 'При подключении линейки Loyalhub 80% платежей будет проходить через СБП. Быстрое подключение без открытия дополнительных расчетных счетов.',
  },
  {
    number: '05',
    title: 'Оцифрованные данные',
    text: 'Получайте все данные о ваших гостях сразу в iiko, формируйте olap-отчеты , анализируйте продажи и изучайте свою целевую аудиторию.',
  },
  {
    number: '06',
    title: 'Инструменты для увеличения среднего чека',
    text: 'Встроенные конфигураторы позволяют гостю модифицировать блюдо, добавляя различные начинки.<br/>Кроме этого, на увеличение среднего чека будут совместно работать система рекомендаций и допродажи в корзине.',
  },
  {
    number: '07',
    title: 'Бонусы, скидки, уведомления, новости',
    text: 'Встроенные конфигураторы позволяют гостю модифицировать блюдо, добавляя различные начинки.<br/>Кроме этого, на увеличение среднего чека будут совместно работать система рекомендаций и допродажи в корзине.',
  },
  {
    number: '08',
    title: 'CRM-систему',
    text: 'Анализируйте продажи, стройте отчеты, изучайте эффективность PUSH-мероприятий, взаимодействуйте с гостями и координируйте бизнес-процессы. Все данные, собранные благодаря инструментам Loyalhub, будут агрегироваться в одном месте. Изучайте их, чтобы открыть новые точки роста для вашего бизнеса.',
  },
  {
    number: '09',
    title: 'Управление репутацией',
    text: 'Собирайте отзывы на работу заведения в собственном канале, контролируйте отзывы, улучшайте работу заведения и управляйте репутацией на рынке. Обрабатывайте негатив на собственной площадке и минимизируйте риски появления негативных отзывов на сторонних площадках.',
  },
  {
    number: '10',
    title: 'Регулярные обновления',
    text: 'В рамках ежемесячной абонентской платы вы будете получать предложения по внедрению лучших техник и инструментов для увеличения продаж. Мы сами отследим тренды и предложим вам то, что сделает работу вашего приложения эффективнее, а ваш бизнес прибыльнее',
  },
  {
    number: '11',
    title: 'Объединение заведений в одной системе лояльности',
    text: 'Обменивайтесь гостями между точками от одного собственника: общие бонусы, новостные рассылки и предложения – все это замотивирует гостей совершать покупки внутри вашей сети заведений',
  },
];

const scrollBlock = ref<HTMLDivElement | null>(null);

const showArrows = ref(true);

onMounted(() => {
  scrollBlock.value?.addEventListener('scroll', (v: any) => {
    if (v.target.scrollTop > 200) {
      showArrows.value = false;
    } else {
      showArrows.value = true;
    }
  });
});
</script>

<style lang="scss" scoped>
#arrowAnim {
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 1%;
  width: 100px;
  height: 100px;
}

.arrow {
  width: 25px;
  height: 25px;
  border: 4px solid;
  border-color: black transparent transparent black;
  transform: rotate(-135deg);
}

.arrowSliding {
  position: absolute;
  -webkit-animation: slide 8s linear infinite;
  animation: slide 2s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}
.delay2 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.delay3 {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  20% {
    opacity: 1;
    transform: translateY(-50px);
  }
  80% {
    opacity: 1;
    transform: translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(80px);
  }
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.25s ease;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.25s ease;
}
</style>
