<template>
  <div>
    <div class="min-h-screen w-full flex flex-col p-10 pb-12 text-center">
      <p class="text-6xl md:text-7xl font-bold">School</p>
      <img src="~/assets/svgs/underline_long3.svg" class="mx-auto" />
      <p class="text-2xl my-10">I am currently a Junior at <a href="https://www.bayschoolsf.org/" target="_blank" class="font-bold underline-offset-4 decoration-yellow-400 decoration-2 underline">The Bay School of San Francisco</a>. I am interested in math, history, and urban planning!</p>
    
      <p class="text-5xl mt-20">Some of my School Projects</p>
      <img src="~/assets/svgs/underline_long2.svg" class="mx-auto" />
      <div class="flex flex-wrap container mx-auto mt-12">
        <ProjectCard :project="projects['Community Ecology']" />
        <ProjectCard :project="projects['RNA Splicing']" />
        <ProjectCard :project="projects['Census Sampling']" />
      </div>
    </div>

    <BackButton />
    <Highlights icon="spiral" />
  </div>
</template>

<script setup lang="ts">
import projects_json from "~/assets/data/projects.json";

const projects : { [key: string]: Project } = projects_json;
</script>