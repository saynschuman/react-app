import { SAVE_DAYS, SELECT_TO_STATE } from '../constants'

const defaultState = {
  selected: [],
  from: null,
  to: null,
}

export default function filters(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case SAVE_DAYS:
      return { ...state, ...payload.days }
    case 'RESET':
      return defaultState
    case SELECT_TO_STATE:
      return { ...state, selected: payload.selected }
    default:
      return state
  }
}
