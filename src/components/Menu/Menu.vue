<template>
  <aside class="menu">
    <div class="menu-filter">
      <h2 class="menu-filter-name">Category</h2>
      <ul class="menu-filter-list">
        <li class="menu-filter-list-item">
          <el-checkbox v-model="categories.vegeterian" label="Vegeterian" border></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="categories.food" label="Food" border></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="categories.desert" label="Desert" border></el-checkbox>
        </li>
      </ul>
    </div>
    <div class="menu-filter">
      <h2 class="menu-filter-name">Area</h2>
      <ul class="menu-filter-list">
        <li class="menu-filter-list-item">
          <el-checkbox v-model="area.stockholm" label="Stockholm" border size="medium"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="area.cracow" label="Cracow" border size="medium"></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="area.poland" label="Poland" border size="medium"></el-checkbox>
        </li>
      </ul>
    </div>
    <div class="menu-filter">
      <h2 class="menu-filter-name">Tags</h2>
      <ul class="menu-filter-list">
        <li class="menu-filter-list-item">
          <el-checkbox v-model="tags.vegeterian" label="Vegetarian" border></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="tags.food" label="Food" border></el-checkbox>
        </li>
        <li class="menu-filter-list-item">
          <el-checkbox v-model="tags.poland" label="Poland" border></el-checkbox>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>

export default {
  name: 'Menu',
  data: () => ({
    categories: {
      food: false,
      vegeterian: false,
      desert: false,
    },
    area: {
      stockholm: false,
      cracow: false,
      poland: false,
    },
    tags: {
      vegeterian: false,
      food: false,
      poland: false,
    }
  })
};

</script>

<style src="./Menu.scss" scoped lang="scss" />