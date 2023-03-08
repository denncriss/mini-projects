<template>
  <div class="form">
    <input
      class="form__search"
      type="text"
      placeholder="escribe el usuario"
      v-model.trim="userName"
      @keypress.enter="searchUserName" />
    <button @click="searchUserName" class="form__btn">
      <IconSearch class="form__btn-icon" />
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import IconSearch from './icons/IconSearch.vue';
  const emit = defineEmits(['search']);
  const userName = ref('');

  const searchUserName = () => {
    if (!userName.value) return;
    emit('search', userName.value);
    userName.value = '';
  };
</script>

<style scoped>
  .form {
    width: 100%;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    display: flex;
  }
  .form__search {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.3rem;
    border: none;
    background-color: transparent;
    color: var(--secondary100);
    font-family: var(--font);
    font-size: 1rem;
  }
  .form__search::placeholder {
    color: var(--secondary200);
  }
  .form__search:focus {
    outline: none;
  }
  .form__btn {
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
  .form__btn:hover {
    box-shadow: 0px 0px 10px 2px var(--primary);
  }
  .form__btn-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
