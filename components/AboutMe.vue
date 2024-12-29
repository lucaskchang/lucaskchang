<template>
  <div class="p-10">
    <p class="text-center text-3xl font-bold md:text-7xl">
      About Me
    </p>
    <img
      src="~/assets/svgs/underline_long.svg"
      class="mx-auto"
    >
    <div class="container mx-auto mt-12">
      <p class="text-2xl md:text-3xl text-center">
        Hey, I'm Lucas! I am a student from San Francisco currently at Tufts University studying Civil Engineering with a special interest in Transportation Engineering. I am also an avid programmer and runner. I love making websites to display and organize data and information and I am currently on the Tufts University Cross Country and Track teams. Feel free to take a look at my projects and reach out if you have any questions!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import projectsJSON from '~/assets/data/projects.json';

const projects: { [key: string]: Project } = projectsJSON;
</script>
