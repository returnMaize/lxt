<template>
  <ul :class="`lxt-breadcrumb`"
    :style="{ color: color }">
    <li v-for="(item, index) of items"
      :key="index">
      <router-link tag="span"
        :to="item.path"
        :style="{ color: genColor(item), }">
        {{ item.title }}
      </router-link>
      <span v-if="index !== items.length - 1"
        style="padding: 0 10px">/</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "lxt-breadcrumb",

  props: {
    items: {
      type: Array
    },
    color: {
      type: String
    },
    activeColor: {
      type: String
    }
  },

  methods: {
    genColor(item) {
      const {
        $route: { path },
        color,
        activeColor
      } = this;
      return item.path === path ? activeColor : color;
    }
  }
};
</script>