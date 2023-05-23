<template :class="$colorMode.value">
  <div class="transition duration-300 bg-white dark:bg-slate-900 text-black dark:text-slate-50">
    <div class="absolute top-0 right-0 m-4 text-yellow-500 dark:text-yellow-300">
      <ColorScheme placeholder="..." tag="span">
        <Icon v-if="$colorMode.value === 'light'" name="material-symbols:light-mode" @click="$colorMode.preference = 'dark'" class="cursor-pointer h-8 w-8 md:h-12 md:w-12" />
        <Icon v-else-if="$colorMode.value === 'dark'" name="material-symbols:dark-mode" @click="$colorMode.preference = 'light'" class="cursor-pointer h-8 w-8 md:h-12 md:w-12" />
      </ColorScheme>
    </div>
    <slot />
  </div>
</template>