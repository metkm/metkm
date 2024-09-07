// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
})
