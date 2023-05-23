<template>
  <div>
    <div class="min-h-screen w-full flex flex-col p-10 pb-12 text-center">
      <p class="text-6xl md:text-7xl font-bold">School</p>
      <img src="~/assets/svgs/underline_long3.svg" class="mx-auto" />
      <p class="text-2xl my-10">I am currently a Junior at <a href="https://www.bayschoolsf.org/" target="_blank" class="font-bold underline-offset-4 decoration-yellow-400 decoration-2 underline">The Bay School of San Francisco</a>. I am interested in math, history, and urban planning!</p>
    
      <p class="text-5xl mt-20">Some of my School Projects</p>
      <img src="~/assets/svgs/underline_long2.svg" class="mx-auto" />
      <div class="flex flex-wrap container mx-auto mt-12">
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="rounded-sm ring-4 overflow-hidden p-6 ring-black dark:ring-slate-50 z-50">
            <p class="text-3xl md:text-4xl text-center font-bold caption">{{ projects['ecology'].title }}</p>
            <img src="~/assets/svgs/mini_line.svg" class="mx-auto" />
            <p class="text-xl md:text-2xl text-center mt-4">{{ projects['ecology'].description }}</p>
            <a :href="projects['ecology'].link" target="_blank" class="flex flex-row mt-8 items-center text-xl md:text-2xl transition ease-in-out hover:scale-105">
              <div class="flex flex-col">
                Check it out!
              </div>
              <div class="flex flex-col">
                <img src="~/assets/svgs/link_arrow.svg" class="ml-2 h-8 w-8" />
              </div>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="rounded-sm ring-4 overflow-hidden p-6 ring-black dark:ring-slate-50 z-50">
            <p class="text-3xl md:text-4xl text-center font-bold caption">{{ projects['rna'].title }}</p>
            <img src="~/assets/svgs/mini_line.svg" class="mx-auto" />
            <p class="text-xl md:text-2xl text-center mt-4">{{ projects['rna'].description }}</p>
            <a :href="projects['rna'].link" target="_blank" class="flex flex-row mt-8 items-center text-xl md:text-2xl transition ease-in-out hover:scale-105">
              <div class="flex flex-col">
                Check it out!
              </div>
              <div class="flex flex-col">
                <img src="~/assets/svgs/link_arrow.svg" class="ml-2 h-8 w-8" />
              </div>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="rounded-sm ring-4 overflow-hidden p-6 ring-black dark:ring-slate-50 z-50">
            <p class="text-3xl md:text-4xl text-center font-bold caption">Census Sampling</p>
            <img src="~/assets/svgs/mini_line.svg" class="mx-auto" />
            <p class="text-xl md:text-2xl text-center mt-4">An explanation of how and why sampling can be used in the census</p>
            <a href="https://lukajaa.github.io/census-sample/#/" target="_blank" class="flex flex-row mt-8 items-center text-xl md:text-2xl transition ease-in-out hover:scale-105">
              <div class="flex flex-col">
                Check it out!
              </div>
              <div class="flex flex-col">
                <img src="~/assets/svgs/link_arrow.svg" class="ml-2 h-8 w-8" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <BackButton />
    <img src="~/assets/svgs/spiral.svg" class="fixed top-20 left-20 w-0 lg:w-40 2xl:w-64 opacity-50" />
    <img src="~/assets/svgs/spiral.svg" class="fixed bottom-20 left-20 w-0 lg:w-40 rotate-90 2xl:w-64 opacity-50" />
    <img src="~/assets/svgs/spiral.svg" class="fixed bottom-20 right-20 w-0 lg:w-40 rotate-180 2xl:w-64 opacity-50" />
    <img src="~/assets/svgs/spiral.svg" class="fixed top-20 right-20 w-0 lg:w-40 rotate-45 2xl:w-64 opacity-50" />
  </div>
</template>

<script setup>
import projects from "~/assets/data/projects.json";
</script>