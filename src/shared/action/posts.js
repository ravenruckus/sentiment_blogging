// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { getTitleRoute } from '../../shared/routes'

export const TITLE_REQUEST = 'TITLE_REQUEST'
export const TITLE_SUCCESS = 'TITLE_SUCCESS'
export const TITLE_FAILURE = 'TITLE_FAILURE'

export const titleRequest = createAction(TITLE_REQUEST)
export const titleSuccess = createAction(TITLE_SUCCESS)
export const titleFailure = createAction(TITLE_FAILURE)

export const titleAsync = () => (dispatch: Function) => {
  dispatch(titleRequest())
  return fetch(getTitleRoute(), { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.Title) throw Error('No message received')
      dispatch(titleSuccess(data.Title))
    })
    .catch(() => {
      dispatch(titleFailure())
    })
}
