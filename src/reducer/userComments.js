import { ADD_COMMENT } from '../constants'

const defaultComments = {
  bn5zkxyfvtea8avo51d4en: { id: 'bn5zkxyfvtea8avo51d4en' },
}

export default function(userComments = defaultComments, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT: {
      const temp = { ...userComments }
      temp[payload.id] = { id: payload.id, user: 'Vitaliy', text: payload.text }
      return temp
    }

    default:
      return userComments
  }
}
