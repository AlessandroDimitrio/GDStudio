import Vue from 'vue'
import App from './App.vue'
import './global.css'
import VueRouter from 'vue-router'

import Editor from "./Editor";
import Landing from "./Landing";
Vue.use(VueRouter);


Vue.config.productionTip = false

const routes = [{ path: "/", component: Landing }, { path: "/studio", component: Editor }];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
