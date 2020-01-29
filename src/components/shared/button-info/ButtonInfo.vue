<template>
  <Button
    :id="id"
    :name="name"
    :type="type"
    :title="title"
    :confirmActionEnabled="confirmActionEnabled"
    @click="transferAction()"
    className="btn-info btn-shortener form-control"
  ></Button>
</template>

<script>
import Button from "../button/Button.vue";
export default {
  name: "ButtonInfo",
  props: ["title", "id", "name", "type", "confirmActionEnabled"],
  components: { Button: Button },
  methods: {
	transferAction(){
		this.$emit("click");
	}
  }
};
</script>

<style scoped>
.btn-shortener {
  font-size: 2em !important;
  color: #fff !important;
  text-transform: uppercase;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 10px 0px 20px 0px;
  transition: 0.5s;
}
.btn-shortener:hover {
  background-color: #3571a7;
  border: #3571a7;
  box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.75);
}
</style>
