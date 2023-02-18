<template>
  <select class="select">
    <option
      v-for="option in options"
      v-bind:key="option.id"
      :value="option.value"
    >
        {{ option.title }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { options } from './const';

export default defineComponent({
  name: 'SelectComponent',
  data() {
    return {
      options,
    }
  }
});
</script>

<style scoped>
  .select {
    padding: 5px 10px;
    width: 100%;
    box-shadow: 0 2px 2px 0px gray;
    outline: none;
    cursor: pointer;
  }
</style>