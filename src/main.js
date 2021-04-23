import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import './permission'; // permission control

// 引入antd UI框架
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 引入 less
import '{assets}/styles/index.less';

import pagination from '{components}/Pagination/index.vue';
const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app');

app.component('pagination', pagination); // 分页


