import ColorThief from 'colorthief'

let thief: ColorThief | undefined = undefined
const getThief = () => {
  if (thief) return thief

  thief = new ColorThief()
}

export const getColor = (element: HTMLImageElement) => {
  return getThief()?.getColor(element) || undefined
}
