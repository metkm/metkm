import type { Card } from './types/card'

export const defaultBackground = [89.25, 30.6, 181.05]

export const images: Omit<Card, 'id'>[] = [
  {
    title: 'Capybara',
    smallDescription: 'Made with Threejs',
    description: 'First project that I\'ve made with threejs',
    image: '/images/capybara.png',
    url: 'https://github.com/metkm/capybara',
  },
  {
    title: 'Mutual Finder',
    smallDescription: 'Made with Rust using Tauri',
    description: 'Windows application that uses electron equivalent (Tauri). Uses Vue and Rust',
    image: '/images/mutual-finder.png',
    url: 'https://github.com/metkm/osu-mutual-finder',
  },
  {
    title: 'Snake',
    smallDescription: 'Made with Threejs',
    description: 'Second projects that I\'ve made using threejs. Uses Spotify API to play songs and dynamically changes colors.',
    image: '/images/snake.png',
    url: 'https://github.com/metkm/snake',
  },
  {
    title: 'Spodate',
    smallDescription: 'Made with Nuxt',
    image: '/images/spodate.png',
    url: 'https://github.com/metkm/spodate',
  },
  {
    title: 'Spoti Wrapped',
    smallDescription: 'Made with Nuxt using web workers',
    description: 'My attempt to use web workers and process some data. Uses Nuxt in SPA mode.',
    image: '/images/spoti-wrapped.png',
    url: 'https://github.com/metkm/spoti-wrapped',
  },
]

export const imagesWithIds: Array<Card> = images.map((image) => {
  const id = crypto.randomUUID()

  return {
    id,
    ...image,
  }
})
