<template>
  <div class="nav-item nav-link">
    <router-link :to="to ? to : '/'">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["to", "title"]
};
</script>

<style scoped>
  a {
    color: #fff;
  }
  .router-link-active {
    text-decoration: underline overline;
  }
</style>
