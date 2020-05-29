<template>
  <div :class="[`lxt-alert__${type}`]"
    v-if="isShowAlert">
    <slot name="icon">
      <i :class="['iconfont', icon]"></i>
    </slot>

    <span class="lxt-alert__content">
      <slot name="default"></slot>
    </span>

    <i v-if="close"
      class="iconfont lxt-shanchu1 lxt-alert__close"
      @click="isShowAlert = false"></i>
  </div>
</template>

<script>
export default {
  name: "lxt-alert",

  props: {
    type: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String
    },
    close: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isShowAlert: true
    };
  }
};
</script>