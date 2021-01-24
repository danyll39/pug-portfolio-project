import React, { useEffect, useState } from 'react'
import { retrieveAlcohols } from '../utils/drinks'
import GoBack from '../components/GoBack'
import Drink from '../components/Drink'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import AlcoholDetails from '../components/AlcoholDetails'
import Title from '../components/Title'





export default ({ location }) => {
  console.log("CLIENT SIDE LOCATION DRINKS COMP - "+ location)
  const [alcoholId, setAlcoholId] = useState(0)
  const [alcohol, setAlcohol] = useState({})
  const [drinkList, setDrinkList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { id, details, drinks } = await retrieveAlcohols(location)
      console.log("CLIENT SIDE LOCATION DRINKS COMP - "+ details)
      setAlcoholId(id)
      setAlcohol(details)
      setDrinkList(drinks)


    }
    

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        alcoholId
          ? (
            <>
              <AlcoholDetails name={alcohol.name} abv={alcohol.abv} />
              {drinkList.map(drink => (
                <Drink
                  key={drink.id}
                  id={drink.id}
                  name={drink.name}
                  directions={drink.directions}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, I don't know that alcohol" />)
      }
    </Page>
  )
}