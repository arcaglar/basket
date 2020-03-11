import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import global from "@/store/global";
import order from "@/store/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    global,
    order
  },
  plugins: [
    createPersistedState({
      paths: ["order"]
    })
  ],
  strict: process.env.NODE_ENV !== "production"
});

export default store;
