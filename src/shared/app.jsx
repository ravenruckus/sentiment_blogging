// @flow

import React from 'react'
import Helmet from 'react-helmet'
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
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <h1>{APP_NAME}</h1>
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={GET_TITLE_PAGE_ROUTE} render={() => <GetTitlePage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
