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
  min-height: calc(100% - 85px);
  width: 100%;
  background-color: #f0f2f5;
}
</style>