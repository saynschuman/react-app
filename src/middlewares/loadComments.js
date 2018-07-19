import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
  const { commentsAPI, type, ...rest } = action
  if (!commentsAPI) return next(action)

  next({
    ...rest, type: type + START
  })

  setTimeout(() => {
    fetch(commentsAPI)
      .then(res => res.json())
      .then(response => next({ ...rest, type: type + SUCCESS, response }))

    return next(action)
  }, 1000)
}
