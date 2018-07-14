import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedData } from '../data/dataGenerator'

const articleList = normalizedData.entities.articles

export default function(articleState = articleList, action) {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter(article => article.id !== payload.id)
    case ADD_COMMENT:
      const temp = { ...articleState }
      temp[payload.comment.articleId].comments = temp[payload.comment.articleId].comments.concat(
        payload.id,
      )
      return temp
    default:
      return articleState
  }
}
