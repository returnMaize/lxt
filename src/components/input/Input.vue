<template>
  <input type="text"
    :class="finalClass">
</template>

<script>
/*
option 
  size: small | default | large
  color: 
*/
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
      baseClass: ["lxt-input", "outline-none"],
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