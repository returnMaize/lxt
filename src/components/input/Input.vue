<template>
  <input type="text"
    :class="finalClass"
    :placeholder="finalOption.placeholder">
</template>

<script>
import mixinGenBaseByOptionSizeMethod from "../../mixins/genBaseByOptionSize";
/*
option 
  size: small | default | large
  color: 
*/
export default {
  name: "lxt-input",
  mixins: [mixinGenBaseByOptionSizeMethod],
  props: {
    type: Object,
    default() {
      return this.defaultOption;
    }
  },
  data() {
    return {
      defaultOption: {
        placeholder: "Placeholder"
      },
      baseClass: [
        "lxt-input",
        "outline-none",
        "p-10",
        "border-default-1",
        "text-14",
        "border-radius-5"
      ],
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
  },
  created() {
    this.optionOfClass = this.genClassByOption();
  },
  methods: {
    genClassByOption() {
      return [""];
    }
  }
};
</script>

<style scoped>
</style>