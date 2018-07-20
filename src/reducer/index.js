import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import articles from './articles'
import filter from './filter'
import counter from './counter'
import comments from './comments'

export default combineReducers({
  articles,
  filter,
  counter,
  comments,
  router: routerReducer,
})
