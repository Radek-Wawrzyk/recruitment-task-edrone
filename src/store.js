import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { $API } from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuStatus: false,
    recipes: []
  },
  mutations: {
    toggleMenu: state => {
      state.menuStatus =! state.menuStatus;
    },
    setRecipes: (state, recipes) => {
      state.recipes = [... recipes.data.meals];
    }
  },
  actions: {
    downloadRecipes: async ({commit}) => {
      try {
        const recipes = await Axios.get(`${$API}/latest.php`);
        
        commit('setRecipes', recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
})
