<template>
  <form class="form" @submit.prevent @submit="formSubmit">
    <select-component v-model="selected" changeValue="selected" />
    <button-component
      :isDisabled="selected === 'none'"
      type="submit"
    >
      <span>Создать</span>
    </button-component>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectComponent from '../select-component/SelectComponent.vue';
import ButtonComponent from '../button-component/button-component.vue';
import { createObject } from '@/api/create-object';

export default defineComponent({
  name: 'FormComponent',
  components: { SelectComponent, ButtonComponent },
  data() {
    return {
      selected: 'none',
      objects: [],
      isDisabled: false
    }
  },
  methods: {
    setSelected(value: string) {
      this.selected = value;
    },

    formSubmit() {
      const accessToken = localStorage?.getItem('accessToken');
      const baseDomain = localStorage?.getItem('baseDomain');

      if (accessToken && baseDomain) {
        createObject(accessToken, baseDomain, this.selected)
        .then(res => res.json())
        .then(data => {
          this.$emit('create', data._embedded[this.selected], this.selected);
        })
        .catch(err => console.log(err));

      }
    }
  }
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