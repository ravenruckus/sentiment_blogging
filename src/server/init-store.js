// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

// import helloReducer from '../shared/reducer/hello'
import postsReducer from '../shared/reducer/posts'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined


  if (plainPartialState && plainPartialState.posts) {
      // flow-disable-next-line
    preloadedState.posts = postsReducer(undefined, {})
        .merge(Immutable.fromJS(plainPartialState.posts))
  }

  return createStore(combineReducers({ posts: postsReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
