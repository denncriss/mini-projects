<template>
  <div class="card">
    <input
      class="search"
      type="text"
      placeholder="escribe el usuario"
      v-model="userName"
      @keypress.enter="searchUserName"
    />
    <button @click="searchUserName" class="btn-icon">
      <IconSearch />
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import IconSearch from './icons/IconSearch.vue'
  const emit = defineEmits(['search'])
  const userName = ref('')

  const searchUserName = () => {
    emit('search', userName.value)
    userName.value = ''
  }
</script>

<style scoped>
  .card {
    width: 30rem;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    display: flex;
  }
  .search {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.3rem;
    border: none;
    background-color: transparent;
    color: white;
    font-family: var(--font);
    font-size: 1rem;
  }
  .search::placeholder {
    color: var(--secondary200);
  }
  .search:focus {
    outline: none;
  }
  .btn-icon {
    background-color: var(--primary);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    width: 5rem;
    height: ;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;
  }
  .btn-icon:hover {
    box-shadow: 0px 0px 10px 2px var(--primary);
  }
  .btn-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
