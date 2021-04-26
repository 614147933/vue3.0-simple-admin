
<template>
  <div class="tac">
    <template v-if="!item.children">
      <router-link :to="item.path ? item.path : ''">
        <el-menu-item :index="item.key">
        {{ item.title }}
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
    >
      <template #title>
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
  name: 'SubMenu',
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  methods: {
    
  }
}
</script>

<style>
.logo {
  height: 42px;
}
.tac {
  width: 201px;
}
</style>
