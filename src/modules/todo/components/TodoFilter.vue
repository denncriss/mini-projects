<template>
  <div class="box-filter-btn">
    <a
      v-for="filter in filters"
      class="btn-filter"
      :style="notTasks && { opacity: '0.5', cursor: 'default' }"
      :class="{ 'btn-active': filterSelected === filter && !notTasks }"
      :key="filter.id"
      @click="changeFilter(filter)"
    >
      <span>{{ translateFilterName(filter) }}</span>
    </a>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  const props = defineProps(['filterSelected', 'tasks', 'notTasks'])
  const emit = defineEmits(['changeFilterSelected'])

  const filters = ['all', 'active', 'completed']

  const translateFilterName = computed(() => (filtertext) => {
    if (filtertext === 'all') return 'todos'
    if (filtertext === 'active') return 'activos'
    if (filtertext === 'completed') return 'completados'
    return ''
  })

  const changeFilter = (filter) => {
    if (!props.notTasks) {
      emit('changeFilterSelected', filter)
    }
  }
</script>

<style scoped>
  .box-filter-btn {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    background-color: var(--secondary300);
  }
  .btn-filter {
    border-radius: 0.1rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.95rem;
    cursor: pointer;
  }
  .btn-active {
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
  }
</style>
