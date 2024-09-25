import { FastAverageColor } from 'fast-average-color'

let avgColor: FastAverageColor | undefined = undefined

const getThief = () => {
  if (avgColor) return avgColor

  avgColor = new FastAverageColor()
  return avgColor
}

export const getColor = async (element: HTMLImageElement) => {
  const res = getThief()
  if (!res) return

  return new Promise<ReturnType<FastAverageColor['getColor']>>((resolve) => {
    if (element.complete) {
      resolve(res!.getColor(element))
    }
    else {
      element.addEventListener('load', () => {
        resolve(res!.getColor(element))
      })
    }
  })
}
