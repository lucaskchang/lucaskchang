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
        'nuxt-gtag',
    ],
    css: [
        '@/assets/styles/main.scss',
    ],
    colorMode: {
        classSuffix: ''
    },
    gtag: {
        id: 'G-QNLZ5NY7HH'
    }
})
