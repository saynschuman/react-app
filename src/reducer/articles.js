import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedData } from '../data/dataGenerator'
// import {Map} from 'immutable'

const articleList = normalizedData.entities.articles
// const articleList = new Map({})

export default function(articleState = articleList, action) {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articlesArray = Object.keys(articleState).map(objectId => articleState[objectId])
      const filtered = articlesArray.filter(article => article.id !== payload.id)
      var newObj = filtered.reduce(function(acc, cur) {
        acc[cur.id] = cur
        return acc
      }, {})
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
    default:
      return articleState
  }
}
