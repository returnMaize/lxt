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
import mixinGenBaseByOptionSizeMethod from "../../mixins/genBaseByOptionSize";
/**
option
  color: primary | success | danger | warning | dark 
  type: fill | border | gradient 
  size: small | default | large
*/
export default {
  name: "lxt-button",
  mixins: [mixinGenBaseByOptionSizeMethod],
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
        color: "primary",
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
      const { type, color, size } = this.finalOption;
      let classOfOption,
        baseSize = this.genBaseByOptionSize(size),
        baseClass = [
          `px-${Math.round(28 * baseSize)}`,
          `py-${10 * baseSize}`,
          `border-radius-${Math.round(5 * baseSize)}`,
          `border-${color}-1`
        ];
      switch (type) {
        case "fill":
          classOfOption = [`text-white`, `bg-${color}`, ...baseClass];
          break;
        case "border":
          classOfOption = [`text-${color}`, `bg-white`, ...baseClass];
          break;
        case "gardient":
          break;
      }
      return classOfOption;
    },
    buttonMouseenterHandler() {
      const { type, color } = this.finalOption;
      switch (type) {
        case "fill":
          this.optionOfClass.push(`box-shadow-0-5-10-${color}`);
          break;

        case "border":
          {
            this.optionOfClass = this.optionOfClass.filter(
              name => name !== "bg-white" && name !== `text-${color}`
            );
            this.optionOfClass.push("text-white", `bg-${color}`);
          }
          break;
      }
    },
    buttonMouseleaveHandler() {
      const { type, color } = this.finalOption;
      switch (type) {
        case "fill":
          this.optionOfClass.pop();
          break;

        case "border":
          {
            this.optionOfClass = this.optionOfClass.filter(
              name => name !== `bg-${color}` && name !== `text-white`
            );
            this.optionOfClass.push(`text-${color}`, "bg-white");
          }
          break;
      }
    }
  }
};
</script>