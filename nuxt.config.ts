// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        'nuxt-icon',
    ],
    css: [
        '@/assets/styles/main.scss',
    ],
    colorMode: {
        classSuffix: ''
    },
})
