import {normalizedComments as defaultComments} from '../normalizedArticles'
import {} from "../constants";

function ArrayToObj(array) {
  return array.reduce((acc, item) => {
    return {
      ...acc, [item.comment_id] : item
    }
  }, {})
}


export default function (commentsState = ArrayToObj(defaultComments), action) {

  const {type, payload} = action

  switch (type) {
  }

  return commentsState
}


