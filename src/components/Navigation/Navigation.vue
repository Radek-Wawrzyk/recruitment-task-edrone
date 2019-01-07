<template>
  <nav class="navigation">
    <div class="navigation-col">
      <h1 class="navigation-logo">endrone</h1>
      <button class="navigation-button" :class="{'active': menuStatus}" @click="toggleMenu" :aria-expanded="menuStatus ? 'true' : 'false'">
        <span class="navigation-button-bar"></span>
        <span class="navigation-button-bar"></span>
        <span class="navigation-button-bar"></span>
      </button> 
    </div>
    <div class="navigation-col">
      <el-input class="navigation-search"
        placeholder="Search"
        @change="searchRecipe"
        v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="navigation-col">
      <Favourites />
    </div>
  </nav>
</template>

<script>
import Favourites from '../Favourites/Favourites.vue';

export default {
  name: 'Navigation',
  components: {
    Favourites 
  },
  data: () => ({
    search: '',
    menuToggle: false
  }),
  methods: {
    toggleMenu() {
      if ( window.innerWidth <= 1024) {
        this.$store.commit('toggleMenu');
      }
    },
    searchRecipe() {
      this.$store.commit('searchRecipe', this.search);
    }
  },
  computed: {
    menuStatus() {
      return this.$store.state.menuStatus;
    }
  }
};

</script>

<style src="./Navigation.scss" scoped lang="scss" />