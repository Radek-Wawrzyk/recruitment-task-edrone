<template>
  <main class="main">
    <ul class="recipes">
      <Recipe v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
    </ul>
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
      return this.$store.state.recipes;
    }
  }
};
</script>
