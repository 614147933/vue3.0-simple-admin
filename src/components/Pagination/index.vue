<template>
  <div>
    <slot :user="data"> </slot>
    <a-pagination
      v-model="current"
      :page-size-options="pageSizeOptions"
      :total="total"
      show-size-changer
      :page-size="pageSize"
      @showSizeChange="onShowSizeChange"
    >
      <template #buildOptionText="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-else>全部</span>
      </template>
    </a-pagination>
  </div>
  
</template>
<script>
export default {
  props: {
    param: {
      type: [ String, Number, Object ],
      default: '',
    },
  },
  data() {
    return {
      pageSizeOptions: [ '10', '20', '30', '40', '50' ],
      current: 1,
      pageSize: 10,
      total: 50,
      data: [ 1, 2, 3 ]
    };
  },
  created() {
    console.log('执行了', this.param);
  },
  mounted() {
    
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(pageSize);
      this.pageSize = pageSize;
    },
  },
};
</script>
