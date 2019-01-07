<template>
  <div class="app">
    <Navigation />
    <Menu />
    <main class="main">
      <ul class="recipes">
        <Recipe v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
      </ul>
    </main>
    <Overflow />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue';
import Menu from './components/Menu/Menu.vue';
import Overflow from './components/Overflow/Overflow.vue';
import Recipe from './components/Recipe/Recipe.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Menu,
    Overflow,
    Recipe
  },
  created() {
    this.$store.dispatch('downloadRecipes');
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    }
  }
};
</script>
