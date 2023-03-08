<template>
  <div class="tasks-container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
  .tasks-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    overflow: hidden;
    height: 100vh;
    padding: 0rem !important;
  }
</style>
