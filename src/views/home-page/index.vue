<template>
  <div>
    这是首页{{ message.length }}
    <br>
    <calendar @click-event="getDate" :start-date="new Date(2020,3)" />
    <!-- {{ pageRouter }} -->
  </div>
</template>
<script>
import calendar from '@/./components/calendar/index.vue'
export default {
  name: 'homepage',
  components: {
    calendar
  },
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
  methods: {
    getDate(item) {
      console.log('获取时间', item);
    },
  },
};
</script>