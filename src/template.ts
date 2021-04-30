import * as fs from 'fs'

export type Template = {
  income: {
    category_id: number
    amount: number
    place?: string
    comment?: string
  }[]
  payment: {
    category_id: number
    genre_id: number
    amount: number
    place?: string
    comment?: string
  }[]
}

export function loadTemplate(path: string): Template {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}
