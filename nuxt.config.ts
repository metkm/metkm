// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@tresjs/nuxt',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
})