<template>
  <img
    class="img-fluid"
    alt="Vue logo"
    id="logo"
    src="../../../assets/img/liax-logo.jpeg"
  />
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
#logo {
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  margin-bottom: 20px;
}
#logo:hover {
  box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.75);
}
</style>
