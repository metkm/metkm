<script setup lang="ts">
useSeoMeta({
  title: 'Metin Korkmaz',
  description: 'Metin\'s portfolio',
  ogTitle: 'Metin Korkmaz',
  ogImage: '/preview.webp',
  ogDescription: 'Metin\'s portfolio',
  ogUrl: 'https://metkm.win/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Metin Korkmaz',
  twitterDescription: 'Metin\'s portfolio',
  twitterImage: '/preview.webp',
})
</script>

<template>
  <main class="slide-enter-content flex flex-col gap-16 min-h-screen p-8 bg-(--ui-bg)">
    <div class="fixed inset-0 !pointer-events-none">
      <TresCanvas class="h-full w-full !pointer-events-none">
        <TresOrthographicCamera
          :position="[0, 0, 1]"
        />

        <TheNoise />
      </TresCanvas>
    </div>

    <div class="flex items-center group transition-all gap-2 mx-auto max-w-xl">
      <h1 class="font-bold text-4xl">
        Metin
      </h1>
      <p class="group-hover:scale-100 scale-0 transition-all">
        metkm
      </p>
      <h1 class="font-bold text-4xl -ml-14 group-hover:ml-0 transition-all">
        Korkmaz
      </h1>
    </div>

    <article class="max-w-xl mx-auto slide-enter">
      <NuxtLink to="/about">About page</NuxtLink>

      <p class="mb-6">
        Hello! I'm someone who's passionate about working with a variety of technologies. I enjoy
        exploring how others build things and diving deep into how everything works under the hood,
        including systems like the Windows API.
      </p>
      <p class="my-6">
        I also have a strong interest in high-performance, compiled languages like Rust, and I love
        making micro-optimizations that push performance to make apps a little bit faster!
      </p>

      <div class="flex flex-col gap-4 my-6">
        <div>
          <p class="mb-2">
            Technologies I mainly use and still do
          </p>

          <div class="flex flex-wrap gap-2">
            <UButton
              icon="i-material-icon-theme:vue"
              to="https://vuejs.org/"
              target="_blank"
            >
              Vue
            </UButton>
            <UButton
              icon="i-material-icon-theme:react"
              to="https://react.dev/"
              target="_blank"
            >
              React
            </UButton>
            <UButton
              icon="i-material-icon-theme:typescript"
              to="https://www.typescriptlang.org/"
              target="_blank"
            >
              Typescript
            </UButton>
            <UButton
              icon="i-material-icon-theme:tailwindcss"
              to="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwindcss
            </UButton>
            <UButton
              icon="i-material-icon-theme:nodejs"
              to="https://nodejs.org/en"
              target="_blank"
            >
              NodeJs
            </UButton>
            <UButton
              icon="i-material-icon-theme:next"
              to="https://nextjs.org/"
              target="_blank"
            >
              NextJs
            </UButton>
            <UButton
              icon="i-material-icon-theme:nuxt"
              to="https://nuxt.com/"
              target="_blank"
            >
              NuxtJs
            </UButton>
          </div>
        </div>

        <div>
          <p class="mb-2">
            Technologies I've used before and comfortable
          </p>

          <div class="flex flex-wrap gap-2">
            <UButton
              icon="i-material-icon-theme:tauri"
              to="https://v2.tauri.app/"
              target="_blank"
            >
              Tauri
            </UButton>
            <UButton
              icon="i-devicon-electron"
              to="https://www.electronjs.org/"
              target="_blank"
            >
              Electron
            </UButton>
            <UButton
              icon="i-material-icon-theme:rust"
              to="https://www.rust-lang.org/"
              target="_blank"
            >
              Rust
            </UButton>
            <UButton
              icon="i-devicon-postgresql"
              to="https://www.postgresql.org/"
              target="_blank"
            >
              Postgres
            </UButton>
            <UButton
              icon="i-devicon-mongodb"
              to="https://www.mongodb.com/"
              target="_blank"
            >
              MongoDb
            </UButton>
          </div>
        </div>
      </div>

      <div>
        <p class="mb-2">
          Links to contact me
        </p>

        <div class="flex gap-2">
          <UButton
            icon="i-mdi-github"
            href="https://github.com/metkm"
            target="_blank"
          >
            Github
          </UButton>

          <UButton
            icon="i-mdi-linkedin"
            href="https://www.linkedin.com/in/metkm/"
            target="_blank"
          >
            Linkedin
          </UButton>
        </div>
      </div>
    </article>

    <section class="slide-enter">
      <p class="max-w-xl mx-auto mb-2">
        Some projects I've worked on
      </p>

      <ClientOnly>
        <TheProjects />
      </ClientOnly>
    </section>
  </main>
</template>

<!-- <style>
.page-enter-active,
.page-leave-active {
  transition: all 0.750s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  inset: 0;
}

.page-leave-to {
  transform: translateY(-50px);
  filter: brightness(0.50);
}

.page-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.page-enter-active > * > * {
  animation: fade 1s both 1;
  --enter-stage: 0;
  animation-delay: calc(150ms * var(--enter-stage));
}
</style> -->
