<template>
  <div :class="[`lxt-avatar__${ size }__${ color }`]"
    :style="{ 
      color: textColor, 
      backgroundImage: `url(${src})`, 
      backgroundSize: 'cover'
     }">
    <slot v-if="!src">{{ finalText }}</slot>
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
  },

  computed: {
    finalText() {
      return this.src ? "" : this.text;
    }
  }
};
</script>

<style scoped>
div {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU");
  background-size: cover;
}
</style>