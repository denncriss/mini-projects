<template>
  <div class="card-container">
    <CardSearchUser @search="searchUser" />
    <CardUser v-if="user" :user="user" />
    <CardUserDefault v-else :hasError="hasError" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import CardUser from './components/CardUser.vue';
  import CardSearchUser from './components/CardSearchUser.vue';
  import CardUserDefault from './components/CardUserDefault.vue';
  const user = ref(null);
  const hasError = ref(false);
  const searchUser = async (userName) => {
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (res.ok) user.value = data;
      else throw true;
    } catch (e) {
      user.value = null;
      hasError.value = true;
    }
  };
</script>

<style scoped>
  .card-container {
    width: 100%;
    max-width: 30rem;
  }
</style>
