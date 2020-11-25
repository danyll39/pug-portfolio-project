const express = require('express')
const data = require('./data')
const app = express()
console.log(data)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/data', (request, response) => {
  return response.render('index', { data })
})

app.get('/data/:id', (request, response) => {
  const All = data.seasons[request.params.id - 1]

  return response.render('characters', { seasonAll })
})

app.all('*', (request, response) => {
  return response.sendStatus
})

app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
