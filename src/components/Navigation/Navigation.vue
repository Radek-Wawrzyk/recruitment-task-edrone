<template>
  <nav class="navigation">
    <div class="navigation-col">
      <figure class="navigation-logo">
        <img src="https://d3vhsxl1pwzf0p.cloudfront.net/images_2_6/v2/logo.svg" alt="Endrone" />
      </figure>
    </div>
    <div class="navigation-col">
      <el-input
        placeholder="Type something"
        v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="navigation-col">
      <el-dropdown trigger="click">
        <el-badge :value="1" class="item">
          <el-button type="default dropdown-btn">
            <svg aria-hidden="true" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
          </el-button>
        </el-badge>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Favorite recipe 1</el-dropdown-item>
          <el-dropdown-item>Favorite recipe 2</el-dropdown-item>
          <el-dropdown-item>Favorite recipe 3</el-dropdown-item>
          <el-dropdown-item>Favorite recipe 4</el-dropdown-item>
          <el-dropdown-item>Favorite recipe 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
  data: () => ({
    search: '',
    menuToggle: false
  })
};

</script>

<style src="./Navigation.scss" scoped lang="scss" />