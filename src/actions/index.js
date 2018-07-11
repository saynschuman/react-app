import { DECREMENT, DELETE_ARTICLE, INCREMENT, SAVE_DAYS, SELECT_TO_STATE } from '../constants'

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id },
  }
}

export function saveDaysRange(days) {
  return {
    type: SAVE_DAYS,
    payload: { days },
  }
}

export function resetDaysRange() {
  return {
    type: 'RESET',
  }
}

export function selectToState(selected) {
  return {
    type: SELECT_TO_STATE,
    payload: { selected },
  }
}

export function increment() {
  return {
    type: INCREMENT,
  }
}

export function decrement() {
  return {
    type: DECREMENT,
  }
}
