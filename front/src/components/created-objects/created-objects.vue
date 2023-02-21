<template>
  <h2>{{ name }}</h2>
  <ul class="list">
    <li
      class="item"
      v-for="object in objects"
      :key="object?.id"
    >
      <p class="text id"><strong>id:</strong> {{ object.id }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

interface IObject {
  account_id: number;
  closest_task_at: Date | null;
  created_at: Date;
  created_by: Date | 0;
  custom_fields_values: null
  group_id: number;
  id: number;
  is_deleted: boolean;
  name: string;
  responsible_user_id: number;
  updated_at: Date;
  updated_by:Date;
}

export default defineComponent({
  props: {
    objects: {
      type: Array(Object) as PropType<IObject[]>,
    },
    name: String,
  }
});
</script>

<style scoped>
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .item {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
  }

  .text {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.2;
  }
</style>