import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bus from "@/assets/utils/bus.js";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

Vue.use(element);
console.dir(Vue);
Vue.prototype.bus = bus;
let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

console.log(vue);
