<template>
  <div>
    <img
      :src="'/svgs/' + icon + '.svg'"
      class="fixed left-20 top-20 w-0 opacity-50 lg:w-40 2xl:w-64"
    />
    <img
      :src="'/svgs/' + icon + '.svg'"
      class="fixed bottom-20 left-20 w-0 rotate-90 opacity-50 lg:w-40 2xl:w-64"
    />
    <img
      :src="'/svgs/' + icon + '.svg'"
      class="fixed bottom-20 right-20 w-0 rotate-180 opacity-50 lg:w-40 2xl:w-64"
    />
    <img
      :src="'/svgs/' + icon + '.svg'"
      class="fixed right-20 top-20 w-0 rotate-45 opacity-50 lg:w-40 2xl:w-64"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>
