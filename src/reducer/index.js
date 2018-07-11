import {combineReducers} from 'redux'
import articles from './articles'
import filter from './filter'
import counter from './counter'

export default combineReducers({
    articles,
    filter,
    counter
})
