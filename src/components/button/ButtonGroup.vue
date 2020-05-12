<template>
  <div class="lxt-button-group d-inline-block pos-relative">
    <slot></slot>
    <div style="z-index: -1;"
      :class="finalClass"></div>
  </div>
</template>

<script>
/*
option
  color: primary | success | danger | warning | dark
  type: fill
  size: default | small | large
*/
export default {
  name: "lxt-button-group",
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
      baseClass: ["pos-absolute", "l-0", "t-0", "b-0", "r-0"],
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
  mounted() {
    this.optionOfClass = this.genClassByOption();
  },
  watch: {
    option() {
      this.optionOfClass = this.genClassByOption();
    }
  },
  methods: {
    genClassByOption() {
      const { type, color, size } = this.finalOption;
      let buttonGroupClass;
      switch (type) {
        case "fill":
          buttonGroupClass = [
            `bg-${color}`,
            `border-radius-${5 * this.genBaseBySize(size)}`
          ];
          break;

        case "border":
          break;
      }
      return buttonGroupClass;
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
    }
  }
};
</script>