import { DELETE_ARTICLE } from '../constants'
import { articlesGenerator } from '../data/dataGenerator'

const articleList = articlesGenerator()
const normalizedArticles = Object.keys(articleList).map(objectId => articleList[objectId])

export default function(articleState = normalizedArticles, action) {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter(article => article.id !== payload.id)
    default:
      return articleState
  }
}
