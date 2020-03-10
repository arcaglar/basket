import Vue from "vue";

export default {
  namespaced: true,
  state: {
    basket: []
  },
  actions: {
    getProducts() {
      return Vue.prototype.$http.get(`/listing`);
    },
    addBasket({ commit }, item) {
      commit("SET_BASKET", item);
    }
  },
  mutations: {
    SET_BASKET(state, payload) {
      payload.amount = 1;
      state.basket.push(payload);
    }
  }
};
