import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Alcohol from '../components/Alcohol'
import Title from '../components/Title'
import { filterAlcohols, retrieveAlcohols } from '../utils/alcohols'



export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [alcoholList, setAlcoholList] = useState([])
  const [filteredAlcoholList, setFilteredAlcoholList] = useState([])
  useEffect(() => {
    async function pullData() {
      const alcohol = await retrieveAlcohols()

      setAlcoholList(alcohol)
      setFilteredAlcoholList(alcohol)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterAlcohols(alcoholList, searchTerm)

    setFilteredAlcoholList(filtered)
  }, [searchTerm])

  return (
    <Page >
      
      <Title />

      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredAlcoholList.map(alcohol => (<Alcohol key={alcohol.id} id={alcohol.id} name={alcohol.name} abv={alcohol.abv} />))
      }

    </Page>

  )
}
