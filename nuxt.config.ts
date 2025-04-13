// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/motion/nuxt', '@nuxtjs/google-fonts'],
    experimental: {
        reactivityTransform: true,
    },
    colorMode: {
        classSuffix: '', // <html class="dark">
    },
    googleFonts: {
        families: {
            'Space+Grotesk': [400, 600, 700],
            'Fira+Code': true,
        },
        display: 'swap',
        preconnect: true,
        preload: true,
    },
});
