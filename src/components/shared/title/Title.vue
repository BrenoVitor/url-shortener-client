<template>
  <h1 id="title">{{ title }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: ["title"]
};
</script>

<style scoped>
#title {
  color: #17a2b8;
  font-size: 3.7em;
  font-weight: bold;
}
</style>
