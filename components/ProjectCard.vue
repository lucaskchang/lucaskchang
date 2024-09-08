<template>
  <div class="flex w-full shrink grow flex-col p-6 md:w-1/3">
    <div
      class="z-50 overflow-hidden rounded-sm p-6 ring-4 ring-black dark:ring-slate-50"
    >
      <p class="caption text-center text-3xl font-bold md:text-4xl">
        {{ project.title }}
      </p>
      <img src="~/assets/svgs/mini_line.svg">
      <p class="mt-4 text-center text-xl md:text-2xl">
        {{ project.description }}
      </p>
      <a
        :href="project.link"
        target="_blank"
        class="mt-8 flex flex-row items-center text-xl transition ease-in-out hover:scale-105 md:text-2xl"
      >
        <div class="flex flex-col">Check it out!</div>
        <div class="flex flex-col">
          <img
            src="~/assets/svgs/link_arrow.svg"
            class="ml-2 size-8"
          >
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: Project
}>();
</script>
