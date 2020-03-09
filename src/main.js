import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "@/plugins/axios";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(http);

new Vue({
  router,
  store,
  http,
  render: h => h(App)
}).$mount("#app");
