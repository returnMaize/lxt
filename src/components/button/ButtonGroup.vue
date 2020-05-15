<template>
  <div class="lxt-button-group d-inline-block pos-relative">
    <slot></slot>
    <div style="z-index: -1;"
      :class="finalClass"></div>
  </div>
</template>

<script>
import optionAndClassHandler from "../../mixins/optionAndClassHandler";
import genBaseBySizeMethod from "../../mixins/genBaseBySizeMethod";
import optionReactiveHandler from "../../mixins/optionReactiveHandler";
/*
option
  color: primary | success | danger | warning | dark
  type: fill
  size: default | small | large
*/
export default {
  name: "lxt-button-group",
  mixins: [optionAndClassHandler, genBaseBySizeMethod, optionReactiveHandler],
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
    }
  }
};
</script>