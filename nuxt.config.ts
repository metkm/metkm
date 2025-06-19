// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@tresjs/nuxt', '@nuxt/ui'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        style: 'background-color: var(--ui-color-neutral-950); color: var(--ui-color-neutral-700);',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'in-out' },
  },
  css: ['~/assets/main.css'],
  colorMode: {
    preference: 'dark',
  },
  routeRules: {
    '/': { prerender: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
