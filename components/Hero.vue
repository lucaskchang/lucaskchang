<template>
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
</template>

<script setup lang="ts">
const first_name = ref("Lucas K");
const last_name = ref("Chang");

function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}
</script>