import axios from "axios";
import Vue from "vue";

const http = createInstance(process.env.VUE_APP_API_BASE);

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export default {
  install() {
    Vue.prototype.$http = http;
  }
};
