import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Layout } from "./bootstrap-vue/es/components";

Vue.use(Layout);

Vue.config.productionTip = false;

var app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/*
new Vue({
  el: '#app',
  render: h => h(App)
})*/
/*
new Vue({
  render: h => h(App)
}).$mount("#app");*/
