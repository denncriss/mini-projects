<template>
  <div class="card-container-items">
    <slot></slot>
  </div>
</template>

<style scoped>
  .card-container-items {
    min-height: 20rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    height: 100%;
  }
  .card-container-items::-webkit-scrollbar {
    width: 0.5rem;
  }
  .card-container-items::-webkit-scrollbar-track {
    background-color: var(--secondary500-50);
  }
  .card-container-items::-webkit-scrollbar-thumb {
    background-color: var(--secondary300);
  }
  .card-container-items::-webkit-scrollbar-thumb:hover {
    background-color: var(--secondary300);
  }
</style>
