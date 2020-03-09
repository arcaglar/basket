import Vue from "vue";

export default {
  namespaced: true,
  actions: {
    getProducts() {
      return Vue.prototype.$http.get(`/listing`);
    }
  }
};
