<template>
  <button class="btn" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { TButtonType } from './button.types';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    type: {
      type: String as PropType<TButtonType>,
      required: false,
      default: 'button',
    },
    isDisabled: {
      type: Boolean,
      required: true,
    }
  }
});
</script>

<style scoped>
  .btn {
    margin: 0;
    padding: 5px 10px;
    background-color: royalblue;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    cursor: pointer;
    opacity: 1;
    transition: opacity .5s ease;
    border-radius: 3px;
  }

  .btn:disabled {
    background-color: white;
    color: black;
    border: 1px solid gray;
    cursor: default;
  }

  .btn:hover {
    opacity: .7;
  }
</style>