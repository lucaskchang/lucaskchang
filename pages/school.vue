<template>
  <div>
    <div class="flex min-h-screen w-full flex-col p-10 pb-12 text-center">
      <p class="text-6xl font-bold md:text-7xl">
        School
      </p>
      <img
        src="~/assets/svgs/underline_long3.svg"
        class="mx-auto"
      >
      <p class="mx-auto my-10 text-2xl md:w-3/4">
        I am a Freshman at
        <a
          href="https://www.tufts.edu/"
          target="_blank"
          class="font-bold underline decoration-blue-300 decoration-2 underline-offset-4"
        >Tufts University</a> studying Civil Engineering with an Urban Studies Minor. Previously I attended <a
          href="https://www.bayschoolsf.org/"
          target="_blank"
          class="font-bold underline decoration-blue-700 decoration-2 underline-offset-4"
        >The Bay School of San Francisco</a> and <a
          href="https://www.cais.org/"
          target="_blank"
          class="font-bold underline decoration-red-500 decoration-2 underline-offset-4"
        >Chinese American International School</a>
      </p>

      <p class="mt-20 text-5xl">
        Some of my High School Projects
      </p>
      <img
        src="~/assets/svgs/underline_long2.svg"
        class="mx-auto"
      >
      <div class="container mx-auto mt-12 flex flex-wrap">
        <ProjectCard :project="projects['Senior Signature Project']" />
        <ProjectCard :project="projects['Community Ecology']" />
        <ProjectCard :project="projects['15 Puzzle']" />
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
