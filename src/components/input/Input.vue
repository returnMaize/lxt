<template>
  <input type="text"
    :class="finalClass">
</template>

<script>
export default {
  name: "lxt-input",
  props: {
    type: Object,
    default() {
      return this.defaultOption;
    }
  },
  data() {
    return {
      defaultOption: {},
      baseClass: ["lxt-input"],
      optionOfClass: []
    };
  },
  computed: {
    finalOption() {
      return Object.assign({}, this.defaultOption, this.option);
    },
    finalClass() {
      return this.baseClass.concat(this.optionOfClass);
    }
  }
};
</script>