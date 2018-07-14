import { normalizedData } from '../data/dataGenerator'
import { ADD_COMMENT } from '../constants'

export default function(commentsState = normalizedData.entities.comments, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT: {
      const temp = { ...commentsState }
      temp[payload.id] = { id: payload.id, user: 'Vitaliy', text: payload.comment.text }
      return temp
    }
    default:
      return commentsState
  }
}

