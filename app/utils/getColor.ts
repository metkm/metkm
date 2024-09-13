import ColorThief from 'colorthief'

const colorThief = new ColorThief()

export const getColor = (element: HTMLImageElement) => {
  return colorThief.getColor(element)
}
