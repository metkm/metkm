export const images = [
  // 'https://pbs.twimg.com/media/GUrlgwhXsAASMRE?format=jpg&name=large',
  // 'https://i.scdn.co/image/ab67616d0000b273cda1dde174c38419df93c736',
  // 'https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca',
  // 'https://i.scdn.co/image/ab67616d0000b273e11fcf0840bb6aa727885229',
  // 'https://i.scdn.co/image/ab67616d0000b2734422fc7526ad76759b68a09e',
  // 'https://i.scdn.co/image/ab67616d0000b273e286af15269abbaad30e9389',
  // 'https://i.scdn.co/image/ab67616d0000b27312e2be753f627bde4afdb2aa',
  // 'https://i.scdn.co/image/ab67616d0000b273541a0129b72e8cbac8fa095f',
  // 'https://i.scdn.co/image/ab67616d0000b273f1bfecc0689aa2d4eaca64d6',
  // 'https://i.scdn.co/image/ab67616d0000b273144a03b07d6f561d4546a3f8',
  // 'https://i.scdn.co/image/ab67616d0000b2737be2416414e6ed67de980b41',
  // 'https://i.scdn.co/image/ab67616d0000b2736dfbd2654e5c961d1126ad9c',
  // 'https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9',
  // 'https://i.scdn.co/image/ab67616d0000b27333c1b4c4aa4f6d7fbb1a8bc1',
  '/images/capybara.png',
  '/images/mutual-finder.png',
  '/images/snake.png',
  '/images/spodate.png',
  '/images/spoti-wrapped.png',
]

export const imagesWithIds = images.map((image) => {
  const id = crypto.randomUUID()

  return {
    id,
    image,
  }
})
