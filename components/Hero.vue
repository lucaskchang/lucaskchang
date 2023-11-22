<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center text-center"
  >
    <p
      class="text-5xl font-black md:text-9xl"
      @click="
        firstName = 'Chucas';
        lastName = 'Lang';
      "
    >
      {{ firstName }}
      <span class="text-blue-500 dark:text-blue-400">{{ lastName }}</span>
    </p>
    <div
      class="flex flex-row justify-center text-2xl font-semibold md:mt-6 md:text-6xl"
    >
      <NuxtLink
        class="flex flex-shrink flex-col transition ease-in-out hover:scale-105"
        to="/school"
      >
        <p>Student&nbsp;&nbsp;</p>
        <img
          src="~/assets/svgs/underline_short.svg"
          class="-mt-1 w-24 md:mt-0 md:w-max"
        />
      </NuxtLink>
      <NuxtLink
        class="flex flex-shrink flex-col items-center transition ease-in-out hover:scale-105"
        to="/programming"
      >
        <p>Programmer&nbsp;&nbsp;</p>
        <img
          src="~/assets/svgs/loop.svg"
          class="-ml-3 -mt-8 w-40 md:-ml-6 md:-mt-20 md:w-max"
        />
      </NuxtLink>
      <NuxtLink class="flex flex-shrink flex-col" to="/running">
        <p class="transition ease-in-out hover:scale-105">Runner</p>
        <img
          src="~/assets/svgs/arrow.svg"
          class="ml-3 h-8 w-8 md:ml-5 md:h-20 md:w-20"
        />
      </NuxtLink>
    </div>
    <p
      class="-mt-5 ml-20 place-self-center text-xl font-semibold text-blue-400 md:-mt-6 md:ml-[376px] md:text-2xl"
    >
      click one of us
    </p>
    <div
      class="absolute bottom-16 lg:bottom-20 2xl:bottom-40"
      @click="scroll()"
    >
      <img
        src="~/assets/svgs/scroll_arrow.svg"
        alt="arrow"
        class="h-24 w-24 transition ease-in-out hover:scale-105 md:h-32 md:w-32 2xl:h-48 2xl:w-48"
      />
      <p class="mt-4 text-2xl font-semibold text-blue-400">or scroll!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('Lucas K');
const lastName = ref('Chang');

function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}
</script>
