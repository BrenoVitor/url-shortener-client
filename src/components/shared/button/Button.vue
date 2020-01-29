<template>
  <button
    :class="className"
    :type="type"
    :name="name"
    @click="confirmAction()"
    :id="id"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
  title: {
    type: String,
    required: true
  }, className: {
    type: String,
    required: true
  }, id: {
    type: String,
    required: true
  }, name: {
    type: String,
    required: true 
  }, type:String, confirmActionEnabled:Boolean
  },
  methods: {
    confirmAction() {

      if(!this.confirmActionEnabled){
          this.$emit("click");
          return;
      }

      if (confirm("Confirma operacao?")) {
          this.$emit("click");
      }
    }
  }
};
</script>

<style scoped></style>
