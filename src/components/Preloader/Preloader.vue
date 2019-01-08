<template>
  <transition name="fade">
    <div v-if="loading" class="el-loading-mask is-fullscreen" style="z-index: 2001;">
      <div class="el-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Preloader',
  props: [
    'loading'
  ]
}

</script>