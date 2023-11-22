<template>
  <div>
    <div class="flex min-h-screen w-full flex-col p-10 pb-12 text-center">
      <p class="text-6xl font-bold md:text-7xl">School</p>
      <img src="~/assets/svgs/underline_long3.svg" class="mx-auto" />
      <p class="my-10 text-2xl">
        I am currently a Senior at
        <a
          href="https://www.bayschoolsf.org/"
          target="_blank"
          class="font-bold underline decoration-yellow-400 decoration-2 underline-offset-4"
          >The Bay School of San Francisco</a
        >. I am interested in math, history, and urban planning!
      </p>

      <p class="mt-20 text-5xl">Some of my School Projects</p>
      <img src="~/assets/svgs/underline_long2.svg" class="mx-auto" />
      <div class="container mx-auto mt-12 flex flex-wrap">
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
import projectsJSON from '~/assets/data/projects.json';

const projects: { [key: string]: Project } = projectsJSON;
</script>
