import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  titleAsync,
  titleRequest,
  titleSuccess,
  titleFailure,
} from './posts'

import { getTitleRoute } from '../../shared/routes'

const mockStore = configureMockStore([thunkMiddleware])

afterEach(() => {
  fetchMock.restore()
})

test('titleAsync success', () => {
  fetchMock.get(getTitleRoute(), { Title: 'Title: My Favorite Color is Purple' })
  const store = mockStore()
  return store.dispatch(titleAsync())
    .then(() => {
      expect(store.getActions()).toEqual([
        titleRequest(),
        titleSuccess('Title: My Favorite Color is Purple'),
      ])
    })
})

test('titleAsync 404', () => {
  fetchMock.get(getTitleRoute(), 404)
  const store = mockStore()
  return store.dispatch(titleAsync())
    .then(() => {
      expect(store.getActions()).toEqual([
        titleRequest(),
        titleFailure(),
      ])
    })
})

test('titleAsync data error', () => {
  fetchMock.get(getTitleRoute(), {})
  const store = mockStore()
  return store.dispatch(titleAsync())
    .then(() => {
      expect(store.getActions()).toEqual([
        titleRequest(),
        titleFailure(),
      ])
    })
})
