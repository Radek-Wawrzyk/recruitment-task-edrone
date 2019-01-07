import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { $API } from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuStatus: false,
    recipes: [],
    cart: []
  },
  getters: {
    favouritesLenght: state => {
      if (state.cart) {
        return state.cart.length;
      }
    },
    openedRecipe: state => id => {
      return state.recipes.filter(recipe => recipe.idMeal === id);
    }
  },
  mutations: {
    toggleMenu: state => {
      state.menuStatus =! state.menuStatus;
    },
    setRecipes: (state, recipes) => {
      state.recipes = [... recipes.data.meals];
    },
    addToFavorites: (state, recipe) => {
      state.cart.push(recipe);
    },
    deleteFromFavourite: (state, recipeID) => {
      state.cart.forEach((recipe, index) => {
        if (recipe.idMeal === recipeID) {
          state.cart.splice(index, 1);
        }
      })
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
