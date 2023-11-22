<template>
  <div class="w-full p-6">
    <p class="text-center text-3xl">Let's Connect!</p>
    <div class="mt-1 text-center">
      <a href="https://github.com/lukajaa" target="_blank">
        <Icon name="mdi:github" class="h-8 w-8" />
      </a>
      <a href="https://twitter.com/ignlukaja" target="_blank">
        <Icon name="mdi:twitter" class="h-8 w-8 text-blue-400" />
      </a>
      <a href="https://www.instagram.com/chucas.lang/" target="_blank">
        <Icon name="mdi:instagram" class="h-8 w-8 text-purple-500" />
      </a>
      <a
        href="https://www.linkedin.com/in/lucas-chang-42b028193/"
        target="_blank"
      >
        <Icon name="mdi:linkedin" class="h-8 w-8 text-blue-600" />
      </a>
      <a href="https://www.youtube.com/@lukaja1828" target="_blank">
        <Icon name="mdi:youtube" class="h-8 w-8 text-red-500" />
      </a>
      <a href="https://www.strava.com/athletes/96376228" target="_blank">
        <Icon name="mdi:strava" class="h-8 w-8 text-orange-500" />
      </a>
      <a href="mailto:me@lucaskchang.com" target="_blank">
        <Icon name="mdi:email" class="h-8 w-8" />
      </a>
      <Icon
        name="mdi:discord"
        class="h-8 w-8 cursor-pointer text-blue-700"
        @click="copyDiscordID()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
function copyDiscordID() {
  navigator.clipboard.writeText('lukaja#4104');
}
</script>
