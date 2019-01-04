<template>
  <div class="app">
    <Navigation />
    <Menu />
    <main class="main">
      <el-row :gutter="30">
        <el-col :md="8" :lg="6" v-for="(item, index) in items" :key="index" >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image">
            <div style="padding: 14px;">
              <h3>{{item.name}}</h3>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </main>
    <Overflow />
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
    Overflow 
  },
  data: () => ({
    items: [
      {
        id: 0,
        name: 'Burger 0',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      },
      {
        id: 1,
        name: 'Burger 1',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      },
      {
        id: 2,
        name: 'Burger 2',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      },
      {
        id: 3,
        name: 'Burger 3',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      },
      {
        id: 4,
        name: 'Burger 4',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      },
      {
        id: 5,
        name: 'Burger 5',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      },
      {
        id: 6,
        name: 'Burger 6',
        img: 'https://element.eleme.io/static/hamburger.50e4091.png'
      }
    ]
  })
};
</script>
