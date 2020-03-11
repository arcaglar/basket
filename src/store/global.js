export default {
  namespaced: true,
  state: {
    isNotificationVisibility: false,
    notificationMessage: ""
  },
  actions: {
    setNotificationVisibility({ commit }, [status, message]) {
      commit("SET_NOTIFICATION_STATUS", status);
      commit("SET_NOTIFICATION_MESSAGE", message);
    }
  },
  mutations: {
    SET_NOTIFICATION_STATUS(state, payload) {
      state.isNotificationVisibility = payload;
    },
    SET_NOTIFICATION_MESSAGE(state, payload) {
      state.notificationMessage = payload;
    }
  }
};
