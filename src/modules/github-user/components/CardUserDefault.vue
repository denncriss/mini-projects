<template>
  <div class="user-default">
    <IconUser class="user-default__icon" />
    <p v-if="hasError" class="user-default__text">No se encontró ningún usuario.</p>
    <p v-else class="user-default__text">Busca un usuario de GitHub</p>
  </div>
</template>

<script setup>
  import IconUser from './icons/IconUser.vue';
  defineProps(['hasError']);
</script>

<style scoped>
  .user-default {
    max-width: 30rem;
    width: 100%;
    padding: 1.2rem;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    min-height: 38rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .user-default__icon {
    width: 5rem;
    color: var(--secondary200);
  }
  .user-default__text {
    margin-top: 0.5rem;
    color: var(--secondary200);
  }
</style>
