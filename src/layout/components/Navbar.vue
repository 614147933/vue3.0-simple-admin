<template>
  <div class="navbar" @click="toggleSideBar">这是Navbar</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>
<style scoped>
.navbar {
  height: 50px;
}
</style>