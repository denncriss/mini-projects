<template>
  <article class="card">
    <cite class="cite">{{ quote?.from }}</cite>
    <blockquote class="quote">{{ quote?.quote }}</blockquote>
    <div class="divider"></div>
    <div class="btn-action">
      <button class="btn" @click="$emit('changeQuote')">
        <IconButton />
      </button>
    </div>
  </article>
</template>

<script setup>
  import IconButton from './icon/IconButton.vue'
  defineProps(['quote', 'color'])
  defineEmits(['changeQuote']);
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 375px;
    padding: 2.5rem 1rem 0;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .card .cite {
    font-size: 0.75rem;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    font-weight: 600;
    color: v-bind(color);
    margin-bottom: 1.5rem;
  }

  .card .quote {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--secondary100);
    margin: 0;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .card .quote::before {
    content: '“';
  }

  .card .quote::after {
    content: '”';
  }

  .card .divider {
    width: 295px;
    height: 16px;
    background-image: url('images/pattern-divider-mobile.svg');
  }

  .btn-action {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(2rem);
  }

  .btn {
    width: 65px;
    height: 65px;
    background-color: v-bind(color);
    border: none;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
  }
  .btn svg {
    width: 30px;
    color: var(--secondary500);
  }

  .btn:hover {
    box-shadow: 0px 0px 13px 2px v-bind(color);
  }

  @media (min-width: 768px) {
    .card {
      max-width: 500px;
    }
    .card .quote {
      font-weight: 800;
    }
    .card .divider {
      width: 444px;
      height: 16px;
      background-image: url('images/pattern-divider-desktop.svg');
    }
  }
</style>
