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
    },
    changeAmount({ commit }, data) {
      commit("SET_ITEM_AMOUNT", data);
    }
  },
  mutations: {
    SET_BASKET(state, payload) {
      payload.amount = 1;
      state.basket.push(payload);
    },
    SET_ITEM_AMOUNT(state, payload) {
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket[i].id === payload.id) {
          state.basket[i].amount = payload.value;
        }
      }
    }
  }
};
