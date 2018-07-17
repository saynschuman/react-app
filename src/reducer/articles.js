import { ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
// import { normalizedData } from '../data/dataGenerator'
import arrToMap from '../helpers/arrToMap'
// import {Map} from 'immutable'

// const articleList = normalizedData.entities.articles
// const articleList = new Map({})

export default function(articleState = {}, action) {
  const { type, payload, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articlesArray = Object.keys(articleState).map(objectId => articleState[objectId])
      const filtered = articlesArray.filter(article => article.id !== payload.id)
      var newObj = arrToMap(filtered)
      return newObj

    case ADD_COMMENT:
      const article = articleState[payload.comment.articleId]

      return {
        ...articleState,
        [payload.comment.articleId]: {
          ...article,
          comments: (article.comments || []).concat(payload.id),
        },
      }
    case LOAD_ALL_ARTICLES:
      return arrToMap(response)
    default:
      return articleState
  }
}
