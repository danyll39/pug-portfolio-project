import { fetchAlcohols } from '../actions/alcohols'

export const filterAlcohols = (list, term) => list.filter(alcohol => (
  alcohol.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveAlcohols= async () => {
  const alcohols= await fetchAlcohols()

  return alcohols
}