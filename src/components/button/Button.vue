<template>
  <div :class="`lxt-button__${ type }__${ color }__${ size }`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lxt-button",

  props: {
    type: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "normal"
    }
  }
};
</script>