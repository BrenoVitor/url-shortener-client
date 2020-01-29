<template>
  <nav id="menu" class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">{{ menuTitle }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <MenuItem
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :title="item.title"
        ></MenuItem>
      </div>
    </div>
  </nav>
</template>

<script>
import MenuItem from "../menu-item/MenuItem.vue";
export default {
  name: "Menu",
  props: ["menuItems", "menuTitle"],
  components: { MenuItem: MenuItem }
};
</script>

<style scoped>
	#menu {
		background: #17a2b8;
		border-color: #17a2b8;
	}
	a {
		color: #fff;
	}
</style>
