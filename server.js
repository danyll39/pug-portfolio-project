import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { getAllDrinks, saveNewDrink, deleteDrink, getDrinkByName } from './controllers/drinks'
// eslint-disable-next-line max-len
import { getAllDrinksByAlcohol, getDrinksByAlcoholName, saveNewAlcohol, deleteAlcohol } from './controllers/alcohol'
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => response.render('index'))
app.use(express.static('public'))

app.get('/api/drinks', getAllDrinks)
app.get('/api/drinks/:identifier', getDrinkByName)
app.post('/api/drinks', bodyParser.json(), saveNewDrink)
app.delete('/api/drinks/:name', bodyParser.json(), deleteDrink)

app.get('/api/alcohol', getAllDrinksByAlcohol)
app.get('/api/alcohol/:identifier', getDrinksByAlcoholName)
app.post('/api/alcohol', bodyParser.json(), saveNewAlcohol)
app.delete('/api/alcohol/:name', bodyParser.json(), deleteAlcohol)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))
app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
