// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  TITLE_REQUEST,
  TITLE_SUCCESS,
  TITLE_FAILURE,
} from '../action/posts'

const initialState = Immutable.fromJS({
  title: 'Initial reducer title',
})

const postsReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case TITLE_REQUEST:
      return state.set('title', 'Loading...')
    case TITLE_SUCCESS:
      return state.set('title', action.payload)
    case TITLE_FAILURE:
      return state.set('title', 'No message received please check your connection')
    default:
      return state
  }
}

export default postsReducer
