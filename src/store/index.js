import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalIsOpen: false,
    modalNavItems: {},
  },
  mutations: {
    SET_MODAL_STATUS(state) {
      state.modalIsOpen = !state.modalIsOpen;
    },
    SET_MODAL_NAV_ITEMS(state, navItems) {
      state.modalNavItems = navItems;
    },
  },
  actions: {
    toggleModal({ commit }, { modalStatus, modalItems }) {
      commit("SET_MODAL_STATUS", modalStatus);
      commit("SET_MODAL_NAV_ITEMS", modalItems);
    },
  },
  modules: {},
});
