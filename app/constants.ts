import type { Card } from './types/card'

export const images: Omit<Card, 'id'>[] = [
  {
    title: 'Capybara',
    description: 'Made with Threejs',
    image: '/images/capybara.png',
    url: 'https://github.com/metkm/capybara',
  },
  {
    title: 'Mutual Finder',
    description: 'Made with Rust using Tauri',
    image: '/images/mutual-finder.png',
    url: 'https://github.com/metkm/osu-mutual-finder',
  },
  {
    title: 'Snake',
    description: 'Made with Threejs',
    image: '/images/snake.png',
    url: 'https://github.com/metkm/snake',
  },
  {
    title: 'Spodate',
    description: 'Made with Nuxt',
    image: '/images/spodate.png',
    url: 'https://github.com/metkm/spodate',
  },
  {
    title: 'Spoti Wrapped',
    description: 'Made with Nuxt using web workers',
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
