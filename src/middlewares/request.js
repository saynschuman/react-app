import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
  const { callAPI, type, ...rest } = action
  if (!callAPI) return next(action)

  next({
    ...rest, type: type + START // сразу ушло в редюсер
  })

  setTimeout(() => { // ушло в редюсер спустя секунду
    fetch(callAPI)
      .then(res => res.json())
      .then(response => next({ ...rest, type: type + SUCCESS, response }))
      .catch(error => next({ ...rest, type: type + FAIL, error }))
  }, 1000)

}
