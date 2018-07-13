import { ADD_COMMENT } from '../constants'

const defaultComments = ['bn5zkxyfvtea8avo51d4en', '82prygb7o7tepce1ry9v7u']

export default function(userComments = defaultComments, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT:
      return (userComments).concat(payload.id)
    default:
      return userComments
  }
}
