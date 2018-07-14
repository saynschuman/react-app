import { ADD_COMMENT } from '../constants'

export default store => next => action => {

  switch (action.type) {
    case ADD_COMMENT:
      const randomId =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      next(Object.assign({}, {...action}, { payload: { ...action.payload, id: randomId } }))
      break
    default:
      next(action)
  }

  // console.log(action)
}
