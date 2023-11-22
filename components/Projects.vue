<template>
  <div class="min-h-screen w-full p-10">
    <p class="text-center text-3xl font-bold md:text-7xl">
      Explore my Projects!
    </p>
    <img src="~/assets/svgs/underline_long.svg" class="mx-auto" />
    <div class="container mx-auto mt-12 flex flex-wrap">
      <ProjectCard
        v-for="project in Object.values(projects).splice(0, 6)"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import projectsJSON from '~/assets/data/projects.json';

const projects: { [key: string]: Project } = projectsJSON;
</script>
