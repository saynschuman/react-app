import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedData } from '../data/dataGenerator'

const articleList = normalizedData.entities.articles

export default function(articleState = articleList, action) {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter(article => article.id !== payload.id)
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
