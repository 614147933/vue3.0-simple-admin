<template>
  <div>
    <pagination :param="{name: '张三', age: '18'}" v-slot="data">
      {{ data.user }}
    </pagination> 
  </div>
</template>

<script>
// import Pagination from '{components}/Pagination/index.vue';
export default {
  name: 'login',
  components: {
    // Pagination
  },
  data() {
    return {
      title: 'Vue Element Admin'
    };
  },
  methods: {
    request() {
      console.log('这是一个请求方法');
    }
  },
  mounted() {
    // let a = 0;
    const name = '小明';
    console.log('小明啊', name);
    this.request();
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        console.log(i);
      }
    }
  }
};
</script>
