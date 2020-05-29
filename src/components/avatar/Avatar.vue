<template>
  <div :class="[`lxt-avatar__${ size }__${ color }__${ textColor }`]">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  name: "lxt-avatar",

  props: {
    src: {
      type: String
    },
    text: {
      type: [String, Number],
      default: "H"
    },
    color: {
      type: String,
      default: "primary"
    },
    textColor: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "normal"
    }
  }
};
</script>