<template>
  <div class="app">
    <Navigation />
    <Menu />
    <Overflow />
    <router-view />
    <Preloader :loading="loading" />
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue';
import Menu from './components/Menu/Menu.vue';
import Overflow from './components/Overflow/Overflow.vue';
import Preloader from './components/Preloader/Preloader.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Menu,
    Overflow,
    Preloader
  },
  data: () => ({
    loading: true
  }),
  created() {
    this.$store.dispatch('downloadRecipes');
    this.$store.commit('setFavourites');
  },
  mounted() {
    
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }
};
</script>
