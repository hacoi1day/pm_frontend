import Vue from 'vue';
import router from './routers';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueProgressBar from 'vue-progressbar';
import Notifications from 'vue-notification';

import './configs/fontawesome';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Notifications)

Vue.use(VueProgressBar, {
  color: '#4285f4',
  failedColor: 'red',
  height: '5px'
});

import App from './App.vue';
import './App.scss';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
