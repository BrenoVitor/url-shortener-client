<template>
<input
              class="form-control"
              :type="type"
              :name="name"
              :id="id"
              v-on:input="$emit('input', $event.target.value)"
            />
</template>

<script>
export default {
  name: "Input",
  props: ["title", "id", "name", "type"]
};
</script>

<style scoped></style>
