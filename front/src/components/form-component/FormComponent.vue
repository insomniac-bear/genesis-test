<template>
  <form class="form">
    <select-component />
    <button-component
      title="Создать"
      isDisabled
      type="submit"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectComponent from '../select-component/SelectComponent.vue';
import ButtonComponent from '../button-component/button-component.vue';

export default defineComponent({
  name: 'FormComponent',
  components: { SelectComponent, ButtonComponent }
});
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    max-width: 600px;
    min-width: 300px;
    width: 90%;
  }
</style>