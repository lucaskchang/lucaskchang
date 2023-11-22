<template :class="$colorMode.value">
  <div
    class="bg-white text-black transition duration-300 dark:bg-slate-900 dark:text-slate-50"
  >
    <ThemeSwitch />
    <slot />
  </div>
</template>
