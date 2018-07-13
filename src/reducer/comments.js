import { commentsGenerator } from '../data/dataGenerator'

export default function(commentsState = commentsGenerator(), action) {
  const { type } = action

  switch (type) {
    default:
      return commentsState
  }
}
