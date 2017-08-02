import {
  titleRequest,
  titleSuccess,
  titleFailure,
} from '../action/posts'

import postsReducer from './posts'

let postsState

beforeEach(() => {
  postsState = postsReducer(undefined, {})
})

test('handle default', () => {
  expect(postsState.get('title')).toBe('Initial reducer title')
})

test('handle TITLE_REQUEST', () => {
  postsState = postsReducer(postsState,
  titleRequest())
  expect(postsState.get('title')).toBe('Loading...')
})

test('handle TITLE_SUCCESS', () => {
  postsState = postsReducer(postsState,
  titleSuccess('Test Get Title'))
  expect(postsState.get('title')).toBe('Test Get Title')
})

test('handle TITLE_FAILURE', () => {
  postsState = postsReducer(postsState,
  titleFailure())
  expect(postsState.get('title')).toBe('No message received please check your connection')
})
