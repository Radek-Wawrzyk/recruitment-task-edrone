import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.scss';

//Used Libraries
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
