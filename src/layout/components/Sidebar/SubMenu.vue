<template>
  <div class="sub-menu-item" v-if="!item.hidden">
    <!-- <template v-if="!item.children">
      <router-link :to="item.path ? item.path : ''">
        <el-menu-item :index="item.path">
          <i class="el-icon-menu my-icon"></i>
          <template #title>
            {{ item.meta }}
          </template>
        </el-menu-item>
      </router-link>
    </template> -->
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <router-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="onlyOneChild.path">
          <i class="el-icon-menu my-icon"></i>
          <template #title>
            {{ onlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.path">
      <template #title>
        <i class="el-icon-menu my-icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <sub-menu
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        class="nest-menu"
        :base-path="child.path"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
export default {
  name: "SubMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      console.log('返回的地址',routePath);
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  },
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
