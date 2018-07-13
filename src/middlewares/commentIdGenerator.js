// export const commentGenerator = function commentGenerator(store) {
//   return function(next) {
//     return function(action) {
//       console.log('comment generated')
//       return next(action)
//     }
//   }
// }

import { ADD_COMMENT } from '../constants'

export default store => next => action => {
  const randomId =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)

  switch (action.type) {
    case ADD_COMMENT:
      next(Object.assign(action, { payload: { id: randomId } }))
      break
    default:
      next(action)
  }

  console.log(action)
}
