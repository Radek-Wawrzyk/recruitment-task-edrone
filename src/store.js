import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuStatus: false
  },
  mutations: {
    toggleMenu: state => {
      state.menuStatus =! state.menuStatus;
    }
  },
  actions: {

  }
})
