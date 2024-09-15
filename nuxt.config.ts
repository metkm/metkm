// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@tresjs/nuxt',
    '@vueuse/nuxt',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
})
