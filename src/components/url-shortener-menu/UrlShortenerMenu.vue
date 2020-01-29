<template>
  <Menu menuTitle="Url Shortener" :menuItems="routes"></Menu>
</template>

<script>
import Menu from "../shared/menu/Menu.vue";
import { routes } from "../../routes.js";

export default {
  name: "UrlShortenerMenu",
  components: { Menu: Menu },
  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped></style>
