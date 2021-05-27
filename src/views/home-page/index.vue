<template>
  <div>
    这是首页{{ message.length }}
    <br>
  </div>
</template>
<script>
export default {
  name: 'Homepage',
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
  created() {
    
  },
  methods: {
    getDate(item) {
      console.log('获取时间', item);
    },
  },
};
</script>