const drinksList = [{
  name: 'Cape Code',
  directions: 'directions',
  mixer: 'cranberry',
  garnish: 'lime',
  alcoholId: 2
}, {
  name: 'Cubre Libre',
  directions: 'directions',
  mixer: 'coke',
  garnish: 'lime',
  alcoholId: 1
}]

const singleDrink = {
  name: 'Gin and Tonic',
  directions: 'directions',
  mixer: 'Tonic',
  garnish: 'lime',
  alcoholId: 3
}
const singleDeleteDrink = {
  name: 'Gin and Tea',
  directions: 'directions',
  mixer: 'Tea',
  garnish: 'lime',
  alcoholId: 4
}

const alcoholList = [{
  name: 'Vodka',
  abv: 40
}, {
  name: 'Gin',
  abv: 40
}]
const singleAlcohol = {
  name: 'Gin',
  abv: 40
}
const oneDrink = {
  id: 1,
  name: 'X-Men',
  slug: 'x-men',
  createdAt: '2020-04-27T15:00:33.000Z',
  updatedAt: '2020-04-27T15:00:33.000Z',
  deletedAt: null,
  heroes: [{
    id: 5,
    name: 'Ice Man',
    realname: 'Bobby Drake',
    firstappearance: 'X-Men # 1',
    slug: 'ice-man',
    teamId: 3,
    createdAt: '2020-04-27T15:00:33.000Z',
    updatedAt: '2020-04-27T15:00:33.000Z',
    deletedAt: null,
  }, {
    id: 8,
    name: 'Wolverine',
    realname: 'James Howlett',
    firstappearance: 'The Incredible Hulk #180',
    slug: 'wolverine',
    teamId: 3,
    createdAt: '2020-04-27T15:00:33.000Z',
    updatedAt: '2020-04-27T15:00:33.000Z',
    deletedAt: null,
  }],
}

module.exports = {
  drinksList, singleDrink, singleDeleteDrink, alcoholList, singleAlcohol
}
