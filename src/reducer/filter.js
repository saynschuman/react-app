import {SAVE_DAYS} from '../constants'

const defaultState = {
    from: null,
    to: null,
    enteredTo: null
};

export default function filters (state = defaultState, action) {
    const {type, payload} = action
     switch(type) {
         case SAVE_DAYS: return {...state, ...payload.days}
         case 'RESET': return defaultState
         default: return state

     }


}