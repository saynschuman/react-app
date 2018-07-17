import {
  DECREMENT,
  DELETE_ARTICLE,
  INCREMENT,
  SAVE_DAYS,
  SELECT_TO_STATE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES
} from '../constants'

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

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: { comment }
  }
}

export function loadAllArticles(comment) {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}