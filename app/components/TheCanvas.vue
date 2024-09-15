<template>
  <div class="absolute flex flex-col inset-0 pointer-events-none -z-50">
    <div class="flex items-center w-full overflow-hidden flex-1">
      <p class="text-on-primary text-3xl lg:text-8xl font-bold font-serif mx-auto scale-[1.8] tracking-widest">
        PROJECTS
      </p>
    </div>

    <div class="h-3/4 bg-on-primary">
      <TresCanvas class="!h-full flex-1">
        <TresOrthographicCamera
          :position="[0, 0, 1]"
        />

        <TheNoise />
      </TresCanvas>
    </div>

    <div class="flex-1" />

    <svg class="absolute -z-50">
      <filter id="grainy">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
        />
      </filter>
    </svg>
  </div>
</template>

<style>
#__nuxt::after {
  content: '';
  inset: 0;
  position: absolute;
  background: #000000;
  opacity: 25%;
  filter: url(#grainy);
  z-index: 50;
  pointer-events: none;
}
</style>
