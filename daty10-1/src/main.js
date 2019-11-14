/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 16:12:51
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 18:55:13
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
