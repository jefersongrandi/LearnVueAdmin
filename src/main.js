import Vue from "vue";
import Element from "element-ui";
import lang from "element-ui/lib/locale/lang/pt-br";
import locale from "element-ui/lib/locale";
import BootstrapVue from "bootstrap-vue";

//import "element-ui/lib/theme-chalk/index.css";
import "./css/element-variables.scss";
import "./css/style.scss";

import App from "./App.vue";
import router from "./router";

//window.$ = require("jquery");
//window.JQuery = require("jquery");

//import "./css/style.css";

// configure language
locale.use(lang);
Vue.use(BootstrapVue);
Vue.use(Element);

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

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
