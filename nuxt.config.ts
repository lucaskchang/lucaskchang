// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Lucas K Chang',
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-gtag',
  ],
  css: ['@/assets/styles/main.scss'],
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
  colorMode: {
    classSuffix: '',
  },
  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],
});
