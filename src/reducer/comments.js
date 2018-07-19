import { ADD_COMMENT, LOAD_COMMENTS } from '../constants'
import { OrderedMap, Record } from 'immutable'
// import { arrToMap } from '../helpers'
import { SUCCESS, START } from '../constants'

// const CommentsRecord = Record({
//   id: undefined,
//   user: undefined,
//   text: undefined,
// })

const ReducerState = new Record({
  fullComments: new OrderedMap({}),
  loading: false,
  loaded: false,
})

const defaultState = new ReducerState()

export default function(commentsState = defaultState, action) {
  const { type, payload, response, id } = action
  switch (type) {
    case ADD_COMMENT: {
      const temp = { ...commentsState }
      temp[payload.id] = { id: payload.id, user: 'Vitaliy', text: payload.comment.text }
      return temp
    }
    case LOAD_COMMENTS + START:
      return commentsState.set('loading', true)
    case LOAD_COMMENTS + SUCCESS:
      return commentsState
        .setIn(['fullComments', id.id], response)
        .set('loading', false)
        .set('loaded', true)
    default:
      return commentsState
  }
}
