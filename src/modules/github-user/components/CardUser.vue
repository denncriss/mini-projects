<template>
  <div v-if="user" class="user">
    <div class="user__img-box">
      <img class="user__img" :src="user.avatar_url" :alt="user.name" />
      <span class="user__img-username">@{{ user.login }}</span>
    </div>
    <div class="user__description">
      <h2 class="user__description-name">{{ user.name }}</h2>
      <p class="user__description-text">
        {{ user.bio ?? '---no tiene descripción---' }}
      </p>
    </div>
    <div class="user__info">
      <div class="user__info-item">
        <p>repos</p>
        <span>{{ user.public_repos }}</span>
      </div>
      <div class="user__info-item">
        <p>seguidores</p>
        <span>{{ user.followers }}</span>
      </div>
      <div class="user__info-item">
        <p>siguiendo</p>
        <span>{{ user.following }}</span>
      </div>
    </div>

    <div class="user__social">
      <div class="user__social-item">
        <IconLocation />
        <span>{{
          user.location && user.location !== 'undefined' ? user.location : 'no definido'
        }}</span>
      </div>
      <div class="user__social-item">
        <IconLink />
        <a
          v-if="user.blog"
          :href="user.blog"
          rel="noopener noreferrer"
          target="_blank"
          class="user__link-blog">
          {{ user.blog }}
        </a>
        <p v-else>url no definido</p>
      </div>
    </div>
    <a :href="user.html_url" target="_blank" rel="noopener noreferrer" class="btn-link btn-primary"
      >ver github</a
    >
  </div>
</template>

<script setup>
  import IconLink from './icons/IconLink.vue';
  import IconLocation from './icons/IconLocation.vue';
  defineProps(['user']);
</script>

<style scoped>
  .user {
    width: 100%;
    padding: 1.2rem;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
  .user__img-box {
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    height: 20rem;
    position: relative;
  }
  .user__img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  .user__img-username {
    font-size: 0.9rem;
    display: block;
    position: absolute;
    padding: 0.2rem 1.2rem 0.2rem 0.6rem;
    border-radius: 0.3rem;
    bottom: 1rem;
    right: -0.5rem;
    background-color: hsla(218, 23%, 16%, 0.539);
    border: 1px solid var(--secondary500);
    color: var(--secondary200);
    /* background: var(--secondary400); */
  }

  .user__description {
    text-align: center;
    font-weight: 400;
    color: var(--secondary100);
    padding: 1rem;
  }
  .user__description-name {
    color: var(--secondary100);
    text-transform: capitalize;
    padding-bottom: 0.5rem;
  }
  .user__description-text {
    color: var(--secondary200);
  }
  .user__info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--secondary500);
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.4rem;
  }
  .user__info-item {
    display: flex;
    color: var(--secondary200);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .user__info-item:not(:first-child):before {
    content: '';
    border-radius: 1rem;
    display: block;
    width: 2px;
    height: 100%;
    background-color: var(--secondary400);
    position: absolute;
    left: calc(0rem - 0.3rem);
  }
  .user__info-item p {
    font-size: 0.9rem;
  }
  .user__info-item span {
    font-size: 1.25rem;
    margin-top: 0.2rem;
    font-weight: 800;
    color: var(--secondary100);
  }

  .user__social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.8rem 0;
  }
  .user__social-item {
    display: flex;
    align-items: center;
  }
  .user__social-item:not(:first-child) {
    padding-top: 0.3rem;
  }
  .user__social-item svg {
    width: 1.2rem;
    margin-right: 0.5rem;
  }

  /* enlaces */
  .user__link-blog {
    text-decoration: none;
    color: var(--primary);
  }

  .btn-link {
    width: 100%;
    display: block;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }
  .btn-link:hover {
    box-shadow: 0px 0px 10px 2px var(--primary);
  }
  .btn-primary {
    color: var(--secondary500);
    background-color: var(--primary);
  }
</style>
