import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Setup for bootstrapVue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://localhost:3000',
    });
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
