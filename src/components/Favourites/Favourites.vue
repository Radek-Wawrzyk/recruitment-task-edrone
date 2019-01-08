<template>
  <el-dropdown trigger="click" click="dropdown">
    <el-badge v-if="favouritesLenght > 0" :value="favouritesLenght" class="item">
      <el-button type="default dropdown-btn">
        <svg aria-hidden="true" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
      </el-button>
    </el-badge>
    <el-badge v-else class="item">
      <el-button type="default dropdown-btn">
        <svg aria-hidden="true" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
      </el-button>
    </el-badge>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="favouritesLenght > 0" class="dropdown-item">Your favourites recipes</el-dropdown-item>
      <el-dropdown-item v-else class="dropdown-item">You don't have any favourites recipes</el-dropdown-item>
      <el-dropdown-item class="dropdown-item" v-for="favourite in favourites" :key="favourite.idMeal">
        <img :src="favourite.strMealThumb" :alt="favourite.strMeal" />
        <router-link class="dropdown-item-name" :to="'recipe/' + favourite.idMeal" :aria-label="favourite.strMeal" :title="favourite.strMeal">
          {{favourite.strMeal}}
        </router-link>  
        <button class="dropdown-item-btn" @click="deteleFromFavourites(favourite)">
          <span class="el-icon-circle-close-outline"></span>
        </button>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Favourites',
  computed: {
    favourites() {
      return this.$store.state.cart;
    },
    favouritesLenght() {
      return this.$store.getters.favouritesLenght;
    }
  },
  methods: {
    deteleFromFavourites(favourite) {
      this.$store.commit('deleteFromFavourite', favourite.idMeal);
    }
  }
};
</script>

<style src="./Favourites.scss" scoped lang="scss" />