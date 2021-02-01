import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import DrinksPage from './pages/Drinks'
import AlcoholsPage from './pages/Alcohols'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/drinks" component={DrinksPage} />
      <Route exact path="/" component={AlcoholsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
