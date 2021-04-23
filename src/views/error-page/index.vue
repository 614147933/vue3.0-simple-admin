<template>
  <div>
    这是错误页{{ pageRouter }}
    <button @click="clickTo">点击</button>
  </div>
</template>
<script>
export default {
  name: 'error-page',
  data() {
    return {
      
    };
  },
  computed: {
    pageRouter () {
      return this.$route.params;
    }
  },
  methods: {
    clickTo(){
      const userId = '123';
      this.$router.push({path: '/homepage', query: { id: userId }});
    }
  },
};
</script>