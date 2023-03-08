<template>
  <section class="container">
    <!-- <Card /> -->
    <Quotes />
  </section>
</template>

<script setup>
  // import Card from '@/modules/card/Card.vue';
  import Quotes from '@/modules/quotes/Quotes.vue';
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 1rem;
    height: 100%;
    color: var(--secondary100);
    max-width: 1250px;
    margin: 0 auto;
  }
</style>
