import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import Layout from './Layout'
import BadgeNew from '../Pages/BadgeNew'
import BadgeEdit from '../Pages/BadgeEdit'
import Badges from '../Pages/Badges'
import NotFound from '../Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/badges" component={Badges}/>
          <Route exact path="/badges/New" component={BadgeNew}/>
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
          <Route path="/404" component={NotFound}/>
          <Redirect from="*" to="/404"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App