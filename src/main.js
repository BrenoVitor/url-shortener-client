import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/pt_BR.json';
import FlashMessage from "@smartweb/vue-flash-message";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(FlashMessage);


const router = new VueRouter({ routes, mode: 'history' });

Vue.config.productionTip = false;

Vue.http.options.root = 'http://192.168.0.17:8080';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], 
    message: messages[rule]
  });
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
