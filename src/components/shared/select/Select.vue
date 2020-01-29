<template>
<select class="form-control" v-model="currentOption" @input="$emit('input', $event.target.value)" @change="onSelectedEvent(currentOption)">
<option value="" v-if="defaultLabelText != null && defaultLabelText.length > 0" :disabled="disableLabelText == 1">{{ defaultLabelText }}</option>
<option v-for="item in optionItems" :value="item.id" :key="item.id" :selected="defaultSelectedValue == item.id">{{ item.label }}</option>
</select>
</template>

<script>
export default {
  name: "Select",
  props: ["id", "name", "valeu", "optionItems", "disableLabelText", "defaultLabelText", "onSelectedEvent", "defaultSelectedValue"],
  data(){
		return{
			currentOption: ""
		}
	},
  watch: {
		value: function(newValue){
			this.currentOption = newValue;
		}
	},
  mounted(){
		this.currentOption = this.defaultSelectedValue;
	}
};
</script>

<style scoped></style>
