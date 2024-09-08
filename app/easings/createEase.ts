import { easeOutElastic } from './easeOutElastic'

export const createEase = (fn: (x: number) => void, points = 50) => {
  const result = [...new Array(points)]
    .map((d, i) => {
      const x = i * (1 / points)
      return fn(x)
    })
    .join(',')

  return `linear(${result})`
}

document.body.style.setProperty('--easeOutBounce', createEase(easeOutElastic))
