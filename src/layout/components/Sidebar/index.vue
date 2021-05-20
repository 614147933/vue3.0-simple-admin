<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse-transition="false"
        :collapse="isCollapse"
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :default-active="activeMenu"
      >
        <sub-menu v-for="route in menuList" :key="route.path" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import subMenu from "./SubMenu.vue";
import Logo from './Logo'
import { mapGetters } from "vuex";
export default {
  components: {
    subMenu,
    Logo
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
      menuList: [
        {
          key: "1-1",
          title: "首页",
          path: "/homepage",
        },
        // {
        //   key: '2',
        //   title: 'Navigation 2',
        //   children: [
        //     {
        //       key: '2.1',
        //       title: 'Navigation 3',
        //       children: [
        //         { key: '2.1.1', title: 'Option 2.1.1', path: '/Navigation2.1.1'}
        //         ],
        //       path: '/Navigation2.1'
        //     },
        //     {
        //       key: '2.2',
        //       title: 'Navigation 3',
        //       path: '/Navigation2.2'
        //     },
        //   ],
        // },
        // {
        //   key: "3",
        //   title: "错误页",
        //   path: "/404",
        // },
        {
          key: "3",
          title: "错误页",
          path: "/404",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      console.log("获取的路径", meta, path);
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal;
    },
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
    // subMenu点击了
    subMenuClick(item) {
      console.log("点击菜单了", item);
    },
  },
};
</script>
<style>

</style>
