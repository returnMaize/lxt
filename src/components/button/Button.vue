<template>
  <button ref="button"
    class="lxt-button"
    :class="finalClass"
    @mouseenter="buttonMouseenterHandler"
    @mouseleave="buttonMouseleaveHandler">
    <slot></slot>
  </button>
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
      baseClass: ["cursor-pointer", "no-select", "outline-none"],
      optionOfClass: []
    };
  },
  computed: {
    finalOption() {
      return this.parentIsButtonGroup
        ? this.$parent.finalOption
        : Object.assign({}, this.defaultOption, this.option);
    },
    finalClass() {
      return this.baseClass.concat(this.optionOfClass);
    },
    parentIsButtonGroup() {
      return this.$parent.$vnode.componentOptions.tag === "lxt-button-group";
    }
  },
  created() {
    this.optionOfClass = this.genClassByOption();
  },
  watch: {
    finalOption() {
      this.optionOfClass = this.genClassByOption();
    }
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
      return classOfOption;
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
          this.optionOfClass.push(`box-shadow-0-5-10-${bg}`);
          break;

        case "border":
          {
            this.optionOfClass = this.optionOfClass.filter(
              name => name !== "bg-white" && name !== `text-${bg}`
            );
            this.optionOfClass.push("text-white", `bg-${bg}`);
          }
          break;
      }
    },
    buttonMouseleaveHandler() {
      const { type, bg } = this.finalOption;
      switch (type) {
        case "fill":
          this.optionOfClass.pop();
          break;

        case "border":
          {
            this.optionOfClass = this.optionOfClass.filter(
              name => name !== `bg-${bg}` && name !== `text-white`
            );
            this.optionOfClass.push(`text-${bg}`, "bg-white");
          }
          break;
      }
    }
  }
};
</script>