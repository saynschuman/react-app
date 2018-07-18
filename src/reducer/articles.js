import { ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
// import { normalizedData } from '../data/dataGenerator'
import {arrToMap, mapToArr} from '../helpers/index'
import {Map, Record} from 'immutable'

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  comments: []
})

// const articleList = normalizedData.entities.articles
// const articleList = new Map({})

const defaultState = new Map({})

export default function(articleState = defaultState, action) {
  const { type, payload, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      // const articlesArray  = mapToArr(articleState)
      // const filtered = articlesArray.filter(article => article.id !== payload.id)
      // var newObj = arrToMap(filtered)
      return articleState.delete(payload.id)

    case ADD_COMMENT:
      // return articleState.updateIn([payload.articleId, 'comments'], comments => comments.concat(payload.id))

      const article = articleState[payload.comment.articleId]

      return {

        ...articleState,
        [payload.comment.articleId]: {
          ...article,
          comments: (article.comments || []).concat(payload.id),
        },
      }
    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleRecord)
    default:
      return articleState
  }
}
