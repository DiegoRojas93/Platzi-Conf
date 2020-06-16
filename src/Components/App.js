import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BadgeNew from '../Pages/BadgeNew'
import Badges from '../Pages/Badges'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/badges/New" component={BadgeNew}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App