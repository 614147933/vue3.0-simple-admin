<template>
  <div>
    这是首页{{ message.length }}
    <br>
    <!-- {{ pageRouter }} -->
  </div>
</template>
<script>
export default {
  name: 'homepage',
  data() {
    return {
      message: this.$store.state.tagsView.visitedViews
    };
  },
  computed: {
    pageRouter () {
      return this.$route;
    }
  },
};
</script>