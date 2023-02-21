<template>
  <div class="preloader" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'preloader-component',
});
</script>

<style scoped>
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  .preloader {
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    border-radius: 50%;
    clip-path: polygon(0 0, 50% 0, 50% 50%, 50% 100%, 0 100%);
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-delay: 0ms;
    animation-timing-function: linear;
  }
</style>