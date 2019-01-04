<template>
  <div class="overflow" :class="{'active': menuStatus}"></div>
</template>

<script>

export default {
  name: 'overflow',
  computed: {
    menuStatus() {
      return this.$store.state.menuStatus;
    }
  }
};

</script>

<style src="./Overflow.scss" scoped lang="scss" />