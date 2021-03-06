import {
  DECREMENT,
  DELETE_ARTICLE,
  INCREMENT,
  SAVE_DAYS,
  SELECT_TO_STATE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
  LOAD_COMMENTS,
} from '../constants'

import {replace} from 'react-router-redux'

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
    payload: { comment },
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article',
  }
}

export function loadArticle(id) {
  return dispatch => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id },
    })

    setTimeout(() => {
      fetch(`/api/article/${id}`)
        .then(res => {
          if(res.status >= 404) {
            dispatch(replace('/error'))
          }
          return res.json()
        })
        .then(response =>
          dispatch({
            type: LOAD_ARTICLE + SUCCESS,
            payload: { id, response },
          }),
        )
        .catch(error =>
          dispatch({
            type: LOAD_ARTICLE + FAIL,
            payload: { id, error },
          }),

        )
    }, 500)
  }
}

export function loadComments(id) {
  return {
    type: LOAD_COMMENTS,
    commentsAPI: `/api/comment?article=${id}`,
    id: {id}
  }
}
