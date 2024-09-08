<template>
  <div>
    <div class="flex min-h-screen w-full flex-col p-10 pb-12 text-center">
      <p class="text-6xl font-bold md:text-7xl">
        Programming
      </p>
      <img
        src="~/assets/svgs/underline_long2.svg"
        class="mx-auto"
      >
      <p class="mt-12 text-4xl">
        I've made a lot of things
      </p>
      <NuxtImg
        format="webp"
        src="/images/cody.png"
        class="mx-auto mt-2 w-full rounded-xl md:w-1/4 2xl:w-1/6"
      />
      <p class="text-lg">
        My programming folder I've been using since I was 11
      </p>

      <p class="mt-12 text-4xl">
        Some of it has been useful...
      </p>
      <NuxtImg
        format="webp"
        src="/images/15.png"
        class="mx-auto mt-2 w-full rounded-xl shadow-lg md:w-1/2 2xl:w-1/3 dark:shadow-none"
        data-aos="fade-right"
      />
      <p class="text-lg">
        A math project on the 15 puzzle demonstrating how group theory can be used to solve it
      </p>

      <p class="mt-12 text-4xl">
        ...but most of it hasn't been
      </p>
      <NuxtImg
        format="webp"
        src="/images/hermitcraft.png"
        class="mx-auto mt-2 w-full rounded-xl md:w-1/2 2xl:w-1/3"
        data-aos="fade-left"
      />
      <p class="text-lg">
        An always-running python script to check for new
        <a
          href="https://hermitcraft.com/"
          target="_blank"
          class="font-bold underline decoration-yellow-400 decoration-2"
        >hermitcraft</a>
        uploads that alerts you with an air horn sound effect
      </p>

      <p class="mt-12 text-4xl">
        Here are some highlights:
      </p>
      <p class="mt-4 text-2xl">
        Bay Clock
      </p>
      <NuxtImg
        format="webp"
        src="/images/bayclock.png"
        class="dark:shadow-nonee mx-auto mt-2 w-full rounded-xl shadow-lg md:w-1/2 2xl:w-1/3"
        data-aos="fade-right"
      />
      <p class="text-lg">
        A website that displays the current and upcoming schedule for the Bay
        School of San Francisco along with useful links and lunch menu
      </p>
      <p class="mt-4 text-2xl">
        Crop Check and Machine Check
      </p>
      <NuxtImg
        format="webp"
        src="/images/mods.png"
        class="mx-auto mt-2 w-full rounded-xl md:w-1/2 2xl:w-1/3"
        data-aos="fade-left"
      />
      <p class="text-lg">
        A pair of utility mods that bring quality-of-life improvements to
        Stardew Valley players
      </p>
      <p class="mt-4 text-2xl">
        High Speed Rail Scorer
      </p>
      <NuxtImg
        format="webp"
        src="/images/trains.png"
        class="mx-auto mt-2 w-full rounded-xl md:w-1/2 2xl:w-1/3"
        data-aos="fade-right"
      />
      <p class="text-lg">
        A website to create and score hypothetical high speed rail networks in
        the United States
      </p>
      <p class="mt-4 text-2xl">
        Word Frequency Projects
      </p>
      <NuxtImg
        format="webp"
        src="/images/ed.png"
        class="mx-auto mt-2 w-full rounded-xl md:w-1/2 2xl:w-1/3"
        data-aos="fade-left"
      />
      <p class="text-lg">
        I like to find the most frequent words in whatever datasets I can get.
        This has included my school's lunch menu, zoom chats, and...Ed Sheeran
        lyrics?
      </p>

      <p class="mt-12 text-4xl">
        Here's to making more things!
      </p>
      <img
        src="~/assets/svgs/underline_long.svg"
        class="mx-auto"
      >
    </div>

    <BackButton />
    <Highlights icon="sprinkles2" />
  </div>
</template>
