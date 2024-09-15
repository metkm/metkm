import type { StyleValue } from 'vue'

export interface Card {
  id: string
  title: string
  smallDescription?: string
  description?: string
  image: string
  url: string
  href?: string
  extraStyle?: StyleValue
}
