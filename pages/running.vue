<template>
  <div>
    <div class="flex min-h-screen w-full flex-col p-10 text-center">
      <p class="text-7xl font-bold">
        Running
      </p>
      <img
        src="~/assets/svgs/underline_long.svg"
        class="mx-auto"
      >
      <p class="my-10 text-2xl">
        I currently run cross country and track at Tufts University. Previously, I ran for The Bay School of San Francisco.
      </p>
      <p class="text-5xl">
        Lifetime PRs
      </p>
      <div class="relative mx-auto shrink">
        <p class="text-3xl">
          400m: 58<br>
          800m: 2:06<br>
          1600m: 4:33<br>
          3200m: 9:43<br>
          5k: 15:53<br>
          5k (XC): 16:12<br>
          8k: 26:43 <br>
        </p>
        <div class="absolute left-36 top-8">
          <img
            src="~/assets/svgs/arrow2.svg"
            class="size-12"
          >
          <p class="-mt-5 ml-8 text-2xl text-blue-400">
            ouch!
          </p>
        </div>
        <div class="absolute top-28 -ml-10 -mt-2">
          <img
            src="~/assets/svgs/arrow3.svg"
            class="size-12"
          >
          <p class="-ml-40 -mt-10 text-2xl text-blue-400">
            my favorite
          </p>
        </div>
      </div>

      <p class="mt-20 text-5xl">
        Related Projects
      </p>
      <div class="container mx-auto mt-12 flex flex-wrap">
        <ProjectCard :project="projects['Bay School XC/TF']" />
        <ProjectCard :project="projects['The Best Rod (XC Presentation)']" />
      </div>
    </div>

    <BackButton />
    <Highlights icon="sprinkles" />
  </div>
</template>

<script setup lang="ts">
import projectsJSON from '~/assets/data/projects.json';

const projects: { [key: string]: Project } = projectsJSON;
</script>
