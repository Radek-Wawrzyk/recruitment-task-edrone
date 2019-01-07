import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './registerServiceWorker';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.scss';

//Api address
Vue.prototype.$API = 'https://www.themealdb.com/api/json/v1/1/';
export const $API = Vue.prototype.$API;

//Used Libraries
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
