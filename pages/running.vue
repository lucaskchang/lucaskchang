<template>
  <div>
    <div class="min-h-screen w-full flex flex-col p-10 text-center">
      <p class="text-7xl font-bold">Running</p>
      <img src="~/assets/svgs/underline_long.svg" class="mx-auto" />
      <p class="text-2xl my-10">I've been running for fun since 3rd grade and I currently run <a href="https://www.athletic.net/athlete/18801645/cross-country/high-school" target="_blank" class="font-bold underline-offset-4 decoration-red-400 decoration-2 underline">cross country</a> and <a href="https://www.athletic.net/athlete/18801645/track-and-field/high-school" target="_blank" class="font-bold underline-offset-4 decoration-yellow-400 decoration-2 underline">track</a> at the Bay School of San Francisco</p>
      <p class="text-5xl">Lifetime PRs</p>
      <div class="relative flex-shrink mx-auto">
        <p class="text-3xl">
          400m: 58<br />
          800m: 2:06<br />
          1600m: 4:33<br />
          3200m: 9:54<br />
          5k: 16:51<br />
          5k (XC): 17:00<br />
          10k: 35:07 <br />
          Half Marathon: 1:35:14<br />
        </p>
        <div class="absolute top-7 left-48">
          <img src="~/assets/svgs/arrow2.svg" class="h-12 w-12" />
          <p class="text-2xl text-blue-400 -mt-5 ml-8">ouch!</p>
        </div>
        <div class="absolute top-28 -mt-2">
          <img src="~/assets/svgs/arrow3.svg" class="h-12 w-12" />
          <p class="text-2xl text-blue-400 -mt-10 -ml-40">my favorite</p>
        </div>
      </div>

      <p class="text-5xl mt-20">Related Projects</p>
      <div class="flex flex-wrap container mx-auto mt-12">
        <ProjectCard :project="projects['Bay School XC/TF']" />
      </div>
    </div>

    <BackButton />
    <Highlights icon="sprinkles" />
  </div>
</template>

<script setup lang="ts">
import projects_json from "~/assets/data/projects.json";

const projects : { [key: string]: Project } = projects_json;
</script>