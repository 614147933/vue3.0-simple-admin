<template>
  <a-menu-item v-if="!item.children" :key="item.key" @click="subMenuClick">
    <!-- <PieChartOutlined />
    <span>{{ item.title }}</span> -->
    <router-link :to="item.path ? item.path : ''">
      <PieChartOutlined />
      <span>{{ item.title }}</span>
    </router-link>
  </a-menu-item>
  <a-sub-menu v-else>
    <template #title>
      <span>
        <MailOutlined /><span>{{ item.title }}</span>
      </span>
    </template>
    <sub-menu v-for="child in item.children"  :key="child.key" :item="child" />
  </a-sub-menu>
</template>
<script>
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
export default {
  name: 'sub-menu',
  components: {
    PieChartOutlined,
    MailOutlined,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    item: {
      type: Object,
      required: true
    },
  },
  methods: {
    // subMenu点击了
    subMenuClick(item) {
      console.log('点击菜单了', item );
    },
  },
};
</script>