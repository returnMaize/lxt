<template>
  <div :class="mainClassArr"
    v-if="isShowAlert">
    <slot name="icon">
      <i :class="iconClassArr"></i>
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
  },

  computed: {
    mainClassArr() {
      const arr = [];
      const { type } = this;
      return arr.concat(`lxt-alert__${type}`);
    },
    iconClassArr() {
      const arr = ["iconfont"];
      const { icon } = this;
      arr.push(icon);
      return arr.concat(icon);
    }
  }
};
</script>