import { ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
// import { normalizedData } from '../data/dataGenerator'
import {arrToMap} from '../helpers/index'
import {OrderedMap, Record} from 'immutable'

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  comments: []
})

const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default function(articleState = defaultState, action) {
  const { type, payload, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      // const articlesArray  = mapToArr(articleState)
      // const filtered = articlesArray.filter(article => article.id !== payload.id)
      // var newObj = arrToMap(filtered)
      return articleState.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
       // return articleState.updateIn('entities', [payload.articleId, 'comments'], comments => comments.concat(payload.id))

      const article = articleState[payload.comment.articleId]

      return {

        ...articleState,
        [payload.comment.articleId]: {
          ...article,
          comments: (article.comments || []).concat(payload.id),
        },
      }
    case LOAD_ALL_ARTICLES:
      return articleState.set('entities', arrToMap(response, ArticleRecord))
    default:
      return articleState
  }
}
