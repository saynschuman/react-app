import {createStore} from 'redux'
// import combineReducers from '../reducer/index.js'
import {articles} from '../articles'

const store = createStore(artRender)

function artRender() {
    return {articles: articles}
}

window.store = store

export default store