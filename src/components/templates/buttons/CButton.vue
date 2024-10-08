<template>
  <q-btn
    :class="{
      borderedButton: outline,
      block: textButton && !to,
      underline: underline,
      'underline-fixed': underlined,
      'text-button': textButton,
    }"
    :color="_color"
    :disabled="_disabled"
    :loading="iconLoading ? false : loading"
    :outline="outline"
    :ripple="ripple"
    :style="`width:${_width}; height:${_height};font-size:${textSize}; padding:${
      textButton || noPadding ? '0px;' : '4px 16px;'
    } ${absolute ? 'position: absolute !important;' : ''}; cursor: ${iconLoading && loading ? 'not-allowed' : ''}; border-radius: ${round ? '100px' : '12px'}`"
    :text-color="_textColor"
    :to="to"
    :unelevated="unelevated"
    class="c-btn body"
    @click="clickHandler"
    @mouseleave="_hover = false"
    @mouseover="_hover = true"
  >
    <slot name="append"></slot>
    <div
      :class="`${contentClass ? contentClass : ''} ${
        contentFullWidth ? 'full-width' : ''
      }`"
      :style="
        contentColumn
          ? `display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; ${
              breakSpaces ? 'white-space: break-spaces;' : ''
            }`
          : `display: flex; align-items: center; ${
              breakSpaces ? 'white-space: break-spaces;' : ''
            }`
      "
      class="button-label"
    >
      <q-icon
        v-if="icon && !loading"
        :class="`mr-${iconGap_}`"
        :color="iconColor"
        :name="icon"
        :style="`font-size:${iconSize} !important;`"
        class="transition-1"
        loading="true"
      />

      <q-spinner
        v-if="iconLoading && loading"
        :class="`mr-${iconGap_}`"
        size="17px"
      ></q-spinner>
      <span
        v-if="label"
        :class="
          ellipsis
            ? ellipsis > 1
              ? `ellipsis-${ellipsis}-lines`
              : 'ellipsis'
            : ''
        "
        :style="{
          'line-height': labelLineHeight ? labelLineHeight : 'inherit',
        }"
        style="width: 100%"
        >{{ label }}</span
      >
      <slot></slot>
      <q-icon
        v-if="iconRight"
        :class="`ml-${iconGap_}`"
        :color="iconColor"
        :name="iconRight"
        :style="`font-size:${iconSize} !important;`"
      />
    </div>
    <slot name="custom-icons"></slot>
  </q-btn>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { METRIKA_GOAL_EVENT, useMetrikaTick } from 'boot/metrika';

const emit = defineEmits(['click']);

const props = defineProps({
  ripple: {
    default: false,
    type: Boolean,
  },
  flat: Boolean,
  round: Boolean,
  unelevated: {
    default: true,
    type: Boolean,
  },
  outline: Boolean,
  color: {
    default: 'primary',
    type: String,
  },
  icon: String,
  iconRight: String,
  textColor: String,
  to: [String, Object],
  loading: Boolean,
  iconLoading: Boolean,
  hoverColor: {
    type: String,
  },
  iconColor: String,
  hoverTextColor: String,
  disabled: Boolean,
  height: String,
  width: {
    default: 'unset',
    type: String,
  },
  textSize: String,
  iconSize: {
    default: '16px',
    type: String,
  },
  label: [Number, String],
  textButton: Boolean,
  iconNoGutters: Boolean,
  contentColumn: Boolean,
  noPadding: Boolean,
  block: Boolean,
  underline: Boolean,
  underlined: Boolean,
  absolute: Boolean,
  contentFullWidth: Boolean,
  contentClass: String,
  breakSpaces: Boolean,
  ellipsis: Number,
  iconGap: [Number, String],
  labelLineHeight: String,
  goalEvent: String, // METRIKA_GOAL_EVENT
});

const _hover = ref(false);
const { metrikaTick } = useMetrikaTick();

const iconGap_ = computed(() => {
  if (props.iconNoGutters) return '0';
  if (!props.iconGap) return '3';
  if (Number.isNaN(Number(props.iconGap)))
    console.warn(
      'Icon gap prop expected number or numerical string, got string',
    );
  return props.iconGap;
});

const _color = computed(() => {
  if (_hover.value && props.hoverColor) {
    return props.hoverColor;
  } else if (props.textButton) {
    return 'transparent';
  } else return props.color;
});

const _textColor = computed(() => {
  if (props.textButton) {
    if (!props.textColor) return 'black';
    else return props.textColor;
  }
  if (_hover.value && props.hoverTextColor) {
    return props.hoverTextColor;
  } else if (_hover.value && props.color === 'secondary1') {
    return 'primary';
  } else if (props.color === 'accent1') {
    return 'black';
  } else return props.textColor;
});

const _height = computed(() => {
  let height;
  if (props.textButton && !props.height) {
    height = 'unset';
  } else if (!props.height) {
    height = '42px';
  } else {
    height = props.height;
  }
  if (
    height !== 'unset' &&
    height.slice(height.length - 2, height.length) !== 'px'
  ) {
    return (height += 'px');
  } else {
    return height;
  }
});

const _width = computed(() => {
  let width = props.textButton ? 'unset' : props.width;
  if (props.block) {
    return '100%';
  }
  if (width === 'inherit') return width;
  if (
    width !== 'unset' &&
    width !== 'auto' &&
    width.slice(width.length - 2, width.length) !== 'px' &&
    width.slice(width.length - 1) !== '%'
  ) {
    return (width += 'px');
  } else {
    return width;
  }
});

const _disabled = computed(() => {
  if (props.disabled) return true;
  else return null;
});

const clickHandler = (e: Event) => {
  if (props.loading && props.iconLoading) return;
  metrikaTick({
    goalEvent: props.goalEvent as METRIKA_GOAL_EVENT,
  });
  emit('click', e);
};
</script>

<style lang="scss">
.q-btn {
  text-transform: unset !important;
}

.c-btn {
  max-width: unset;
  min-height: unset;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  white-space: pre;
  position: relative;
}

.c-btn span {
  height: 100%;
}

.c-btn .left-icon {
  margin-right: 6px !important;
}

.c-btn .right-icon {
  margin-left: 6px !important;
}

.borderedButton:hover {
  color: $primary !important;
}

.borderedButton:hover:before {
  border: 1px solid $primary;
  transition: 0.3s;
}

.q-btn--outline:before {
  border: 1px solid #eaeaea !important;
}

.c-btn--outline:before:not(.underline) {
  border: 1px solid $secondary !important;
}

.c-btn:disabled:not(.block):not(.bg-secondary2) {
  // background-color: $disableColor !important;
  opacity: 1 !important;
}

.c-btn.underline:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 0%;
  height: 1px;
  transition: 0.3s;
}

.c-btn.underline:hover:after {
  width: 100%;
  transition: 0.3s;
}

.c-btn.underline-fixed:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 1px;
  transition: 0.3s;
}

.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.c-btn.ellipsis {
  div {
    @extend .ellipsis;
  }

  span {
    @extend .ellipsis;
  }
}

.text-button .q-focus-helper {
  display: none;
}

.text-button:after {
  content: '';
  position: absolute;
  background-color: $accent2;
  height: 2px;
  width: 0%;
  left: 0;
  bottom: -3px;
  transition: 0.3s;
}

.text-button:hover:after {
  width: 100%;
}
</style>
