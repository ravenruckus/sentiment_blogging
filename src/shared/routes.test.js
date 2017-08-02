import { getTitleRoute } from './routes'

// test('helloEndpointRoute', () => {
//   expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
//   expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
// })

test('getTitleRoute', () => {
  expect(getTitleRoute()).toBe('/ajax/title')
})
