import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { getAllDrinks, saveNewDrink, deleteDrink, getDrinkByName } from './controllers/drinks'
// eslint-disable-next-line max-len
import { getAllDrinksByAlcohol, getDrinksByAlcoholName, getAlcoholById, saveNewAlcohol, deleteAlcohol } from './controllers/alcohols'

const app = express()

app.set('view engine','pug')
app.use(express.static('public'))


app.get('/api', (request, response) => response.status(200).render('index'))

app.get('/', (request, response) => response.redirect('/api/simple'))
// app.use(express.static('public'))

app.get('/api/drinks', getAllDrinks)
app.get('/api/drinks/:id', getDrinkByName)
app.post('/api/drinks', bodyParser.json(), saveNewDrink)
app.delete('/api/drinks/:name', bodyParser.json(), deleteDrink)

app.get('/api/alcohols', getAllDrinksByAlcohol)
app.get('/api/alcohols/name/:name', getDrinksByAlcoholName)
app.get('/api/alcohols/:id', getAlcoholById)
app.post('/api/alcohols', bodyParser.json(), saveNewAlcohol)
app.delete('api/alcohols/:name', bodyParser.json(), deleteAlcohol)



app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))
app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
