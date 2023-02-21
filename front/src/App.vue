<template>
  <form-component @create="createObject" />
  <CreatedObjects :objects="objects.leads" v-if="objects.leads.length > 0 && selected === 'leads'" name="Сделки"/>
  <CreatedObjects :objects="objects.contacts" v-if="objects.contacts.length > 0 && selected === 'contacts'" name="Контакты" />
  <CreatedObjects :objects="objects.companies" v-if="objects.companies.length > 0 && selected === 'companies'" name="Компании" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormComponent from './components/form-component/FormComponent.vue';
import CreatedObjects from './components/created-objects/created-objects.vue';
import { fetchAuth } from './api/auth';

export default defineComponent({
  name: 'App',
  components: {FormComponent, CreatedObjects},
  data () {
    return {
      isAuth: false,
      isLoading: false,
      isError: false,
      objects: {
        leads: [],
        contacts: [],
        companies: [],
      },
      selected: 'none',
    }
  },

  methods: {
    createObject(objects: [], name: 'leads' | 'contacts' | 'companies') {
      this.objects[name].push(...objects);
      this.selected = name;
    },
    selectName(name: 'leads' | 'contacts' | 'companies' | 'none') {
      this.selected = name;
    }
  },

  mounted() {
    fetchAuth()
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('baseDomain', data.base_domain);
        this.isAuth = true;
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
