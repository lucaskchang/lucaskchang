<template>
  <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div class="rounded-sm ring-4 overflow-hidden p-6 ring-black dark:ring-slate-50 z-50">
      <p class="text-3xl md:text-4xl text-center font-bold caption">{{ project.title }}</p>
      <img src="~/assets/svgs/mini_line.svg">
      <p class="text-xl md:text-2xl text-center mt-4">{{ project.description }}</p>
      <a :href="project.link" target="_blank" class="flex flex-row mt-8 items-center text-xl md:text-2xl transition ease-in-out hover:scale-105">
        <div class="flex flex-col">
          Check it out!
        </div>
        <div class="flex flex-col">
          <img src="~/assets/svgs/link_arrow.svg" class="ml-2 h-8 w-8" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: Project
}>()
</script>