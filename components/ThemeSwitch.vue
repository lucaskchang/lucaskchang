<template>
  <div class="absolute right-0 top-0 m-4 text-yellow-500 dark:text-yellow-300">
    <ColorScheme
      placeholder="..."
      tag="span"
    >
      <Icon
        v-if="$colorMode.value === 'light'"
        name="material-symbols:light-mode"
        class="size-8 cursor-pointer md:size-12"
        @click="$colorMode.preference = 'dark'"
      />
      <Icon
        v-else-if="$colorMode.value === 'dark'"
        name="material-symbols:dark-mode"
        class="size-8 cursor-pointer md:size-12"
        @click="$colorMode.preference = 'light'"
      />
    </ColorScheme>
  </div>
</template>
