<template>
	<label>{{ title }}</label>
</template>

<script>
export default {
  name: "Label",
  props: [ "title" ]
};
</script>

<style scoped>
label {
  font-size: 3em !important;
  color: #17a2b8 !important;
}
</style>
