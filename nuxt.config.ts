// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Lucas K Chang',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
    ],
    css: [
        '@/assets/styles/main.scss',
    ],
    colorMode: {
        classSuffix: ''
    },
})
