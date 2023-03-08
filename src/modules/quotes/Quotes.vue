<template>
  <main>
    <QuoteBox :quote="quote" :color="color" @changeQuote="generateNewQuote" />
  </main>
</template>

<script setup>
  import { ref } from 'vue'
  import quotesData from '@/data/quotes.json'
  import QuoteBox from '@/components/quotes/quoteBox.vue'
  import { getRandomColor, getRandomNumber } from '@/helpers'

  const quotes = quotesData
  const quote = ref({})
  const color = ref('')

  const generateNewQuote = () => {
    const randomIndex = getRandomNumber(quotes.length)
    quote.value = quotes[randomIndex]
    color.value = getRandomColor()
  }
  generateNewQuote()
</script>
