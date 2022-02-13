import '@babel/polyfill';
import 'mutationobserver-shim';
import VueYoutube from 'vue-youtube';
import Notifications from 'vue-notification';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/bootstrap-vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueYoutube);
Vue.use(Notifications);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
