import ColorThief, { type RGBColor } from 'colorthief'

let thief: ColorThief | undefined = undefined
const getThief = () => {
  if (thief) return thief

  thief = new ColorThief()
  return thief
}

export const getColor = async (element: HTMLImageElement) => {
  const t = getThief()
  if (!t) return

  return new Promise<RGBColor | undefined>((resolve) => {
    if (element.complete) {
      resolve(t.getColor(element) || undefined)
    }
    else {
      element.addEventListener('load', () => {
        resolve(t.getColor(element) || undefined)
      })
    }
  })
}
