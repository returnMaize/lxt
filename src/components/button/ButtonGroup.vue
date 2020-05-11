<template>
  <div class="lxt-button-group d-inline-block pos-relative">
    <slot></slot>
    <div style="z-index: -1;"
      :class="finalClass"></div>
  </div>
</template>

<script>
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
        bg: "primary",
        size: "default"
      },
      baseClass: ["pos-absolute", "l-0", "t-0", "b-0", "r-0"],
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
  mounted() {
    this.optionGenClass = this.genClassByOption();
  },
  watch: {
    option() {
      this.optionGenClass = this.genClassByOption();
    }
  },
  methods: {
    genClassByOption() {
      const { type, bg, size } = this.finalOption;
      let buttonGroupClass;
      switch (type) {
        case "fill":
          buttonGroupClass = [
            `bg-${bg}`,
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