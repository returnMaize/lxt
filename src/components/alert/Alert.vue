<template>
  <div :class="mainClassArr">
    <slot name="icon">
      <i :class="iconClassArr"></i>
    </slot>

    <span class="lxt-alert__content">
      <slot name="default"></slot>
    </span>
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
    }
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