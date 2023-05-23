<template>
  <div>
    <img src="~/assets/svgs/donuts.svg" class="fixed top-20 left-20 w-0 lg:w-40 2xl:w-64 opacity-50" />
    <img src="~/assets/svgs/donuts.svg" class="fixed bottom-20 left-20 w-0 lg:w-40 rotate-90 2xl:w-64 opacity-50" />
    <img src="~/assets/svgs/donuts.svg" class="fixed bottom-20 right-20 w-0 lg:w-40 rotate-180 2xl:w-64 opacity-50" />
    <img src="~/assets/svgs/donuts.svg" class="fixed top-20 right-20 w-0 lg:w-40 rotate-45 2xl:w-64 opacity-50" />
    <div class="h-screen w-full flex flex-col justify-center items-center text-center">
      <p class="text-5xl md:text-9xl font-black" @click="first_name='Chucas'; last_name='Lang'">{{ first_name }} <span class="text-blue-500 dark:text-blue-400">{{ last_name }}</span></p>
      <div class="flex flex-row text-2xl md:text-6xl font-semibold md:mt-6 justify-center">
        <NuxtLink class="flex flex-col flex-shrink transition ease-in-out hover:scale-105" to="/school"> 
          <p>Student&nbsp;&nbsp;</p>
          <img src="~/assets/svgs/underline_short.svg" class="w-24 -mt-1 md:mt-0 md:w-max" />
        </NuxtLink>
        <NuxtLink class="flex flex-col items-center flex-shrink transition ease-in-out hover:scale-105" to="/programming">
          <p>Programmer&nbsp;&nbsp;</p>
          <img src="~/assets/svgs/loop.svg" class="-mt-8 -ml-3 md:-mt-20 md:-ml-6 w-40 md:w-max" />
        </NuxtLink>
        <NuxtLink class="flex flex-col flex-shrink" to="/running"> 
          <p class="transition ease-in-out hover:scale-105">Runner</p>
          <img src="~/assets/svgs/arrow.svg" class="h-8 w-8 md:h-20 md:w-20 ml-3 md:ml-5" />
        </NuxtLink>
      </div>
      <p class="text-xl md:text-2xl text-blue-400 font-semibold place-self-center ml-20 -mt-5 md:ml-[376px] md:-mt-6">click one of us</p>
      <div class="absolute bottom-16 lg:bottom-20 2xl:bottom-40" @click="scroll()">
        <img src="~/assets/svgs/scroll_arrow.svg" alt="arrow" class="w-24 h-24 md:w-32 md:h-32 2xl:w-48 2xl:h-48 transition ease-in-out hover:scale-105" />
        <p class="text-2xl mt-4 text-blue-400 font-semibold">or scroll!</p>
      </div>
    </div>

    <div class="min-h-screen w-full p-10">
      <p class="text-3xl md:text-7xl font-bold text-center">Explore my Projects!</p>
      <img src="~/assets/svgs/underline_long.svg" class="mx-auto" />
      <div class="flex flex-wrap container mx-auto mt-12">
        <div 
          v-for="project in Object.keys(projects)"
          :key="project"
          class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrin"
        >
          <div class="rounded-sm ring-4 overflow-hidden p-6 ring-black dark:ring-slate-50 z-50">
            <p class="text-3xl md:text-4xl text-center font-bold caption">{{ projects[project].title }}</p>
            <img src="~/assets/svgs/mini_line.svg">
            <p class="text-xl md:text-2xl text-center mt-4">{{ projects[project].description }}</p>
            <a :href="projects[project].link" target="_blank" class="flex flex-row mt-8 items-center text-xl md:text-2xl transition ease-in-out hover:scale-105">
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

    <div class="p-6 w-full">
      <p class="text-3xl text-center">Let's Connect!</p>
      <div class="text-center mt-1">
        <a href="https://github.com/lukajaa" target="_blank">
          <Icon name="mdi:github" class="w-8 h-8" />
        </a>
        <a href="https://twitter.com/ignlukaja" target="_blank">
          <Icon name="mdi:twitter" class="w-8 h-8 text-blue-400" />
        </a>
        <a href="https://www.instagram.com/chucas.lang/" target="_blank">
          <Icon name="mdi:instagram" class="w-8 h-8 text-purple-500" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-chang-42b028193/" target="_blank">
          <Icon name="mdi:linkedin" class="w-8 h-8 text-blue-600" />
        </a>
        <a href="https://www.youtube.com/@lukaja1828" target="_blank">
          <Icon name="mdi:youtube" class="w-8 h-8 text-red-500" />
        </a>
        <a href="https://www.strava.com/athletes/96376228" target="_blank">
          <Icon name="mdi:strava" class="w-8 h-8 text-orange-500" />
        </a>
        <a href="mailto:me@lucaskchang.com" target="_blank">
          <Icon name="mdi:email" class="w-8 h-8" />
        </a>
        <Icon name="mdi:discord" class="w-8 h-8 cursor-pointer text-blue-700" @click="discord()" />
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from "~/assets/data/projects.json";

const first_name = ref("Lucas K");
const last_name = ref("Chang");

function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

function discord() {
  navigator.clipboard.writeText("lukaja#4104");
}
</script>
