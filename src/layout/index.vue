<template>
  <div :class="classObj" class="app-wrapper">
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
import { mapState } from 'vuex'
export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
      }
    }
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
.sidebar-container{
  width: 201px;
  background-color: #304156;
}
</style>