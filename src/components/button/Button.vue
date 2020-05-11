<template>
  <div class="lxt-button">
    <button ref="button"
      :class="finalClass"
      @mouseenter="buttonMouseenterHandler"
      @mouseleave="buttonMouseleaveHandler">
      <slot></slot>
    </button>
  </div>
</template>

<script>
/**
option
  bg: primary | success | danger | warning | dark 
  type: fill | border | gradient 
  size: small | default | large
*/
export default {
  name: "lxt-button",
  props: {
    option: {
      type: Object,
      default() {
        return this.defaultOption;
      }
    }
  },
  data() {
    return {
      defaultOption: {
        type: "fill",
        bg: "primary",
        size: "default"
      },
      baseClass: ["cursor-pointer", "no-select"],
      optionGenClass: []
    };
  },
  computed: {
    finalOption() {
      return Object.assign({}, this.defaultOption, this.option);
    },
    finalClass() {
      return this.baseClass.concat(this.optionGenClass);
    }
  },
  created() {
    this.genClassByOption();
  },
  methods: {
    genClassByOption() {
      const { type, bg, size } = this.finalOption;
      let classOfOption,
        baseSize = this.genBaseBySize(size),
        baseClass = [
          `px-${Math.round(28 * baseSize)}`,
          `py-${10 * baseSize}`,
          `border-radius-${Math.round(5 * baseSize)}`,
          `border-${bg}-1`
        ];
      switch (type) {
        case "fill":
          classOfOption = [`text-white`, `bg-${bg}`, ...baseClass];
          break;
        case "border":
          classOfOption = [`text-${bg}`, `bg-white`, ...baseClass];
          break;
        case "gardient":
          break;
      }
      this.optionGenClass = classOfOption;
    },
    genBaseBySize(size) {
      let base;
      switch (size) {
        case "default":
          base = 1;
          break;
        case "small":
          base = 0.8;
          break;
        case "large":
          base = 1.2;
          break;
      }
      return base;
    },
    buttonMouseenterHandler() {
      const { type, bg } = this.finalOption;
      switch (type) {
        case "fill":
          this.optionGenClass.push(`box-shadow-0-5-10-${bg}`);
          break;

        case "border":
          {
            this.optionGenClass = this.optionGenClass.filter(
              name => name !== "bg-white" && name !== `text-${bg}`
            );
            this.optionGenClass.push("text-white", `bg-${bg}`);
          }
          break;
      }
    },
    buttonMouseleaveHandler() {
      const { type, bg } = this.finalOption;
      switch (type) {
        case "fill":
          this.optionGenClass.pop();
          break;

        case "border":
          {
            this.optionGenClass = this.optionGenClass.filter(
              name => name !== `bg-${bg}` && name !== `text-white`
            );
            this.optionGenClass.push(`text-${bg}`, "bg-white");
          }
          break;
      }
    }
  }
};
</script>

<style scoped>
button {
  outline: none;
}
</style>