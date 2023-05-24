<template>
  <div>
    <img :src="'/svgs/' + icon + '.svg'" class="fixed top-20 left-20 w-0 lg:w-40 2xl:w-64 opacity-50" />
    <img :src="'/svgs/' + icon + '.svg'" class="fixed bottom-20 left-20 w-0 lg:w-40 rotate-90 2xl:w-64 opacity-50" />
    <img :src="'/svgs/' + icon + '.svg'" class="fixed bottom-20 right-20 w-0 lg:w-40 rotate-180 2xl:w-64 opacity-50" />
    <img :src="'/svgs/' + icon + '.svg'" class="fixed top-20 right-20 w-0 lg:w-40 rotate-45 2xl:w-64 opacity-50" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>