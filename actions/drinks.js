/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchDrinksForAlcohol = async (id) => {
  // console.log(`${API_BASE_URL}/alcohols/${id}`)
  try {
    const { data } = await axios.get(`${API_BASE_URL}/alcohols/${id}`) // eslint-disable-line no-undef
    // console.log("CLIENT SIDE getDrinksByAlcoholName  - " + data)
    return data
  } catch (error) {
    return {}
  }
}