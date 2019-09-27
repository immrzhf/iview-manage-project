import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import { request } from "./plugins/axios";
import { apiList } from "./api";

Vue.prototype.Request = request;
Vue.prototype.ApiList = apiList;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
