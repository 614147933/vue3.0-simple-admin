<template>
  <div>
    <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <sub-menu v-for="route in menuList"  :key="route.key" :item="route" />
    </a-menu>
  </div>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // PieChartOutlined,
  // MailOutlined,
  // DesktopOutlined,
  // InboxOutlined,
  // AppstoreOutlined,
} from '@ant-design/icons-vue';
import subMenu from './SubMenu.vue';
export default {
  components: {
    subMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // PieChartOutlined,
    // MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
  },
  data () {
    return {
      collapsed: false,
      selectedKeys: [ '1' ],
      openKeys: [ 'sub1' ],
      preOpenKeys: [ 'sub1' ],
      menuList: [
        {
          key: '1-1',
          title: '首页',
          path: '/Homepage'
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
            },
            {
              key: '2.2',
              title: 'Navigation 3',
            },
          ],
        },
        {
          key: '3',
          title: '错误页',
          path: '/404'
        },
      ],
      activeMenu: [],
    };
  },
  computed: {

  },
  watch: {
    openKeys (val, oldVal) {
      this.preOpenKeys = oldVal;
    },
    activeMenu() {
      console.log('监听之了');
    },
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
    // subMenu点击了
    subMenuClick(item) {
      console.log('点击菜单了', item );
    },
  },
};
</script>
