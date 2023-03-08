<template>
  <div class="card-container">
    <CardSearchUser @search="searchUser" />
    <CardUser :user="user" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import CardUser from './CardUser.vue'
  import CardSearchUser from './CardSearchUser.vue'
  const user = ref(null)
  const searchUser = async (userName) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    user.value = data
  }
</script>

<style scoped></style>
