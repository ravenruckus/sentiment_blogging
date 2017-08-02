// @flow

// export const homePage = () => ({
//   title: { message: 'Server-side preloaded message',
//          messageAync: 'Server-side preloaded message for async page in      controller' },
// })
// It seems that when I assign a value to part of the state
// in this file that I can't reassign it to be something different in a different function.?

export const homePage = () => ({
})

export const getTitlePage = (posts: Object) => ({
  title: { message: posts[0].title },
})
