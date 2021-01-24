import { fetchDrinksForAlcohol } from '../actions/drinks'

export const getAlcoholIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/').pop()
  : 0
)

export const retrieveAlcohols = async (location) => {
  const alcoholId = getAlcoholIdFromUrl(location)

  if (!Number(alcoholId)) return { id: 0, details: {}, drinks: [] }

  const { id, name, abv, drinks } = await fetchDrinksForAlcohol(alcoholId)

  if (!id || !name || !abv || !drinks) return { id: 0, details: {}, drinks: [] }

  return { id, drinks, details: { id, name, abv } }
}