<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'appmain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      // console.log('执行了', this.$route.path);
      return this.$route.path;
    }
  }
};
</script>
<style scoped>
.app-main {
  border: 2px solid red;
  min-height: calc(100% - 45px);
  width: 100%;
}
</style>