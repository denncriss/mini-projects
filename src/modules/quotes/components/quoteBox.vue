<template>
  <article class="card">
    <cite class="card__cite">{{ quote?.from }}</cite>
    <blockquote class="card__quote">{{ quote?.quote }}</blockquote>
    <div class="divider">
      <IconPause class="divider__icon" />
    </div>
    <div class="btn-action">
      <button class="card__btn" @click="$emit('changeQuote')">
        <IconBolt class="card__btn-icon" />
      </button>
    </div>
  </article>
</template>

<script setup>
  import IconBolt from './icon/IconBolt.vue';
  import IconPause from './icon/IconPause.vue';
  defineProps(['quote', 'color']);
  defineEmits(['changeQuote']);
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 2.5rem 1rem 0;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .card__cite {
    font-size: 0.75rem;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    font-weight: 600;
    color: v-bind(color);
    margin-bottom: 1.5rem;
  }

  .card__quote {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
    color: var(--secondary100);
    text-align: center;
  }

  .card__quote::before {
    content: '“';
  }

  .card__quote::after {
    content: '”';
  }

  .divider {
    position: relative;
    width: 100%;
    height: 1px;
    margin: 0.5rem 0;
    border-radius: 1rem;
    border: 1px solid var(--secondary300-50);
    transform: translateY(1rem);
    max-width: 350px;
  }
  .divider__icon {
    width: 1.7rem;
    position: absolute;
    top: -0.85rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--secondary400);
  }

  .btn-action {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(2rem);
  }

  .card__btn {
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
  .card__btn-icon {
    width: 30px;
    color: var(--secondary500);
  }

  .card__btn:hover {
    box-shadow: 0px 0px 13px 2px v-bind(color);
  }
</style>
