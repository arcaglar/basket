import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import order from "@/store/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    order
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== "production"
});

export default store;
