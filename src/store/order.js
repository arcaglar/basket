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
    async completeOrder(_, data) {
      return await Vue.prototype.$http.post(`/order`, data);
    },
    addBasket({ commit }, item) {
      commit("SET_BASKET", item);
    },
    changeAmount({ commit }, data) {
      commit("SET_ITEM_AMOUNT", data);
    },
    deleteProduct({ commit }, id) {
      commit("REMOVE_PRODUCT", id);
    },
    clearBasket({ commit }) {
      commit("CLEAR_BASKET");
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
          state.basket[i].price = payload.price;
        }
      }
    },
    REMOVE_PRODUCT(state, payload) {
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket[i].id === payload) {
          state.basket.splice(i, 1);
        }
      }
    },
    CLEAR_BASKET(state) {
      state.basket = [];
    }
  }
};
