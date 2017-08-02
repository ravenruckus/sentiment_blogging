// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import GetTitlePage from './component/page/get-title'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  GET_TITLE_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={GET_TITLE_PAGE_ROUTE} render={() => <GetTitlePage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
