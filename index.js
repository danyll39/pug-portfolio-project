const express = require('express')
const data = require('./data')
const app = express()

console.log(data)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { data })
})

// app.get('/:drinks', (request, response) => {
//   const alcohol = data.alcohol === request.params.id

//   return response.render('characters', { alcohol })
// })



app.all('*', (request, response) => {
  return response.sendStatus
})

app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
