<template>
<div class="min-h-screen w-full p-10">
  <p class="text-3xl md:text-7xl font-bold text-center">Explore my Projects!</p>
  <img src="~/assets/svgs/underline_long.svg" class="mx-auto" />
  <div class="flex flex-wrap container mx-auto mt-12">
    <ProjectCard v-for="project in Object.values(projects).splice(0, 6)" :key="project.title" :project="project" />
  </div>
</div>
</template>

<script setup lang="ts">
import projects_json from "~/assets/data/projects.json";

const projects : { [key: string]: Project } = projects_json;
</script>