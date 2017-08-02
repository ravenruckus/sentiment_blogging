// @flow

import {
  // homePage,
  getTitlePage,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  GET_TITLE_PAGE_ROUTE,
  getTitleRoute,
  getPostsRoute,
} from '../shared/routes'

import renderApp from './render-app'

const knex = require('./db')
require('dotenv').config()

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url))
  })

  app.get(GET_TITLE_PAGE_ROUTE, (req, res) => {
    knex('posts')
    .then((rows) => {
      res.send(renderApp(req.url, getTitlePage(rows)))
    })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })
  })

  app.get(getTitleRoute(), (req, res) => {
    knex('posts')
    .then((rows) => {
      res.json({ Title: `Title: ${rows[0].title}` })
    })
  })

  app.get(getPostsRoute(), (req, res) => {
    knex('posts')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
