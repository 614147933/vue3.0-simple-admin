
<template>
  <div class="sub-menu-item">
    <template v-if="!item.children">
      <router-link :to="item.path ? item.path : ''">
        <el-menu-item :index="item.path">
          <i class="el-icon-menu my-icon"></i>
          <template #title>
            {{ item.title }}
          </template>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.path">
      <template #title>
        <i class="el-icon-menu my-icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <sub-menu
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
.logo {
  height: 42px;
}
.sub-menu-item {
  width: 201px;
}
.my-icon{
  text-align: inherit !important;
  margin-right: 10px  !important;
}
</style>
