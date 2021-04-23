<template>
  <div>
    这是TagView
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  watch: {
    $route() {
      console.log('触发路由');
      this.addTages();
    },
  },
  mouted() {
    this.addTages();
  },
  methods: {
    addTages() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route);
      }
      return false;
    },
  },
};
</script>