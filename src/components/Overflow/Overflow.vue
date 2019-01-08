<template>
  <div class="overflow" :class="{'active': menuStatus}" @click="closeMenu"></div>
</template>

<script>

export default {
  name: 'overflow',
  computed: {
    menuStatus() {
      return this.$store.state.menuStatus;
    }
  },
  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu');
    }
  }
};

</script>

<style src="./Overflow.scss" scoped lang="scss" />