<template>
  <div class="app-main">
    <router-view :key="key" v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <component :is="Component"/>
      </keep-alive>
    </transition>
    </router-view>
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