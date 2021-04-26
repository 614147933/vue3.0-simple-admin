import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 引入 less
import '{assets}/styles/index.less';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
