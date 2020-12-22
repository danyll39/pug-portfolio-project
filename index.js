const express = require('express')
const bodyParser = require('body-parser')
const { getAllDrinks, saveNewDrink, deleteDrink, getDrinkByName } = require('./controllers/drinks')
// eslint-disable-next-line max-len
const { getAllDrinksByAlcohol, getDrinksByAlcoholName, saveNewAlcohol, deleteAlcohol } = require('./controllers/alcohol')
const drinks = require('./models')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { drinks })
})

// app.get('/drinks', getAllDrinks )

app.get('/drinks', getAllDrinks)
app.get('/drinks/:identifier', getDrinkByName)
app.post('/drinks', bodyParser.json(), saveNewDrink)
app.delete('/drinks/:name', bodyParser.json(), deleteDrink)


app.get('/alcohol', getAllDrinksByAlcohol)
app.get('/alcohol/:identifier', getDrinksByAlcoholName)
app.post('/alcohol', bodyParser.json(), saveNewAlcohol)
app.delete('/alcohol/:name', bodyParser.json(), deleteAlcohol)




// app.get('/drinks/random', (request, response) => {
//   getRandomDrink(request, response)
// })
// app.get('/drinks/:identifier', getDrinksByAlcohol)
// app.get('/:drinks', (request, response) => {
//   const alcohol = data.alcohol === request.params.id

//   return response.render('', { alcohol })
// })



app.all('*', (request, response) => {
  return response.sendStatus
})

app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
