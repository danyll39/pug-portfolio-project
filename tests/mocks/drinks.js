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

module.exports = {
  drinksList, singleDrink, singleDeleteDrink, alcoholList, singleAlcohol
}
