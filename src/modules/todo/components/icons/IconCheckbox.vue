<template>
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.33203" width="18" height="18" rx="3" fill="#F2F3F8" />
    <rect
      x="6.5"
      y="6.33203"
      width="8"
      height="8"
      rx="2"
      :fill="active ? '#1f2632' : 'transparent'"
    />
    <rect x="1.5" y="1.33203" width="18" height="18" rx="3" stroke="#1f2632" stroke-width="2" />
  </svg>
</template>

<script setup>
  defineProps({
    active: {
      default: true,
      type: Boolean
    }
  })
</script>
