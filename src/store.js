import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { $API } from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuStatus: false,
    recipes: [],
    searchQuery: '',
    filterOn: false,
    cart: [],
    checkedCategories: [],
    checkedAreas: [],
    checkedTags: []
  },
  getters: {
    favouritesLenght: state => {
      if (state.cart) {
        return state.cart.length;
      }
    },
    openedRecipe: state => id => {
      return state.recipes.filter(recipe => recipe.idMeal === id);
    },
    recipes: state => {
      let result = state.searchQuery == '' ? state.recipes : state.recipes.filter(recipe => recipe.strMeal.toLowerCase().includes(state.searchQuery));

      if (state.filterOn) {

        if (state.checkedCategories.length >= 1) {
          result = result.filter(recipe => state.checkedCategories.includes(recipe.strCategory));
        } 
        if (state.checkedAreas.length >= 1) {
          result = result.filter(recipe => state.checkedAreas.includes(recipe.strArea));
        }
        if (state.checkedTags.length >= 1) {
          result = result.filter(recipe => state.checkedTags.includes(recipe.strTags));
        }
      }
      
      return result;
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
    },
    searchRecipe: (state, query) => {
      state.searchQuery = query;
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
