<template>
  <div class="app">
    <Navigation />
    <Menu />
    <Overflow />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue';
import Menu from './components/Menu/Menu.vue';
import Overflow from './components/Overflow/Overflow.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Menu,
    Overflow,
  },
  created() {
    this.$store.dispatch('downloadRecipes');
  }
};
</script>
