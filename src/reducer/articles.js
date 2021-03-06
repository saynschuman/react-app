import {
  ADD_COMMENT,
  DELETE_ARTICLE,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  LOAD_ARTICLE,
} from '../constants'
import { arrToMap } from '../helpers/index'
import { OrderedMap, Record } from 'immutable'

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  date: undefined,
  comments: undefined,
  loading: false,
})

const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({}),
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

    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
    case LOAD_ARTICLE + START:
      return articleState.setIn(['entities', payload.id, 'loading'], true)
    case LOAD_ARTICLE + SUCCESS:
      return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response))
    default:
      return articleState
  }
}
