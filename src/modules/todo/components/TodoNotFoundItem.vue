<template>
  <div class="card">
    <div class="card-item" v-if="filterSelected === 'active'">
      <IconList class="icon" />
      <span class="title"> no hay tareas activas</span>
      <span class="subtitle">todas las tareas estan completadas </span>
    </div>
    <div class="card-item" v-else-if="filterSelected === 'completed'">
      <IconList class="icon" />
      <span class="title"> no hay tareas completadas</span>
      <span class="subtitle">completa al menos una tarea </span>
    </div>
    <div class="card-item" v-else>
      <IconList class="icon" />
      <span class="title"> no hay tareas</span>
      <span class="subtitle">crea una nueva tarea </span>
    </div>
  </div>
</template>

<script setup>
  import IconList from './icon/IconList.vue'
  defineProps(['filterSelected'])
</script>

<style scoped>
  .card {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 20rem;
    width: 100%;
    height: 100%;
  }
  .card-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-item .title {
    font-size: 1rem;
    color: var(--secondary100);
  }
  .card-item .subtitle {
    font-size: 0.9rem;
    color: var(--secondary200);
    letter-spacing: 0.8px;
  }
  .icon {
    width: 5rem;
    height: 5rem;
    color: var(--secondary200);
    margin-bottom: 0.2rem;
  }
</style>
