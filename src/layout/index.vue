<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container" />
    <!-- 左侧内容 -->
    <div class="main-container">
      <!-- 头部部分 -->
      <div>
        <navbar />
        <tags-view />
      </div>
      <!-- 内容部分 -->
      <app-main />
    </div>
  </div>
</template>
<script>
import { Sidebar, Navbar, TagsView, AppMain} from './components';
export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain
  },
  data() {
    return {

    };
  },
  methods: {

  },

};
</script>
<style scoped>
.app-wrapper{
  display: flex;
  height: 100%;
  width: 100%;
}
.main-container {
  width: 100%;
  height: 100%;
}
</style>