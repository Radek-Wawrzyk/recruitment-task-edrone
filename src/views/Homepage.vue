<template>
  <main class="main">
    <transition-group tag="ul" class="recipes" name="move-fade">
      <Recipe v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
    </transition-group>
    <h3 v-if="recipes.length === 0" class="no-results">Sorry we couldn't find your searched recipe...</h3>
    <router-view />
  </main>
</template>

<script>
import Recipe from '../components/Recipe/Recipe.vue';

export default {
  name: 'App',
  components: {
    Recipe
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    }
  }
};
</script>
