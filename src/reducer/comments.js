import { ADD_COMMENT, LOAD_COMMENTS } from '../constants'
import { OrderedMap, Record } from 'immutable'
import { arrToMap } from '../helpers'

const CommentsRecord = Record({
  id: undefined,
  user: undefined,
  text: undefined,
})

const ReducerState = new Record({
  fullComments: new OrderedMap({})
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
      case LOAD_COMMENTS:
        return commentsState.setIn(['fullComments', id.id], response)
    default:
      return commentsState
  }
}
