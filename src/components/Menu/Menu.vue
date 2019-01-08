<template>
  <aside class="menu" :class="{'active': menuStatus}">
    <div class="menu-filter">
      <h2 class="menu-filter-name">Category</h2>
      <ul class="menu-filter-list">
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedCategories" label="Vegetarian" border @change="filter"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedCategories" label="Beef" border @change="filter"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedCategories" label="Desert" border @change="filter"></el-checkbox>
        </li>
      </ul>
    </div>
    <div class="menu-filter">
      <h2 class="menu-filter-name">Area</h2>
      <ul class="menu-filter-list">
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedAreas" label="Chinese" border size="medium" @change="filter"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedAreas" label="American" border size="medium" @change="filter"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedAreas" label="Poland" border size="medium" @change="filter"></el-checkbox>
        </li>
      </ul>
    </div>
    <div class="menu-filter">
      <h2 class="menu-filter-name">Tags</h2>
      <ul class="menu-filter-list">
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedTags" label="Vegetarian" border @change="filter"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedTags" label="BBQ" border @change="filter"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="checkedTags" label="Breakfast" border @change="filter"></el-checkbox>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import mapState from 'vuex';

export default {
  name: 'Menu',
  data: () => ({
    checkedCategories: [],
    checkedAreas: [],
    checkedTags: []
  }),
  methods: {
    filter() {
      
      if (
        this.checkedCategories.length > 0 || 
        this.checkedAreas.length > 0 ||
        this.checkedTags.length > 0
        ) {
        this.$store.state.filterOn = true;
        this.$store.state.checkedCategories = this.checkedCategories;
        this.$store.state.checkedAreas = this.checkedAreas;
        this.$store.state.checkedTags = this.checkedTags;
      } else {
        this.$store.state.filterOn = false;
      }
    } 
  },
  computed: {
    menuStatus() {
      return this.$store.state.menuStatus;
    }
  }
};

</script>

<style src="./Menu.scss" scoped lang="scss" />